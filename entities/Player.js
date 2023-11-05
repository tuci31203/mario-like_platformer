export class Player {
    isSuper = false
    isSpecial = false
    coins = 0
    jumpableTime = 0.1
    heightD = 0
    isMoving = false
    isRespawning = false
    constructor(posX, posY, speed, jumpForce, lives, currLevel, isFinalLv) {
        this.isFinalLv = isFinalLv
        this.currLevel = currLevel
        this.initialX = posX
        this.initialY = posY
        this.makePlayer()
        this.setPlayerControl()
        this.speed = speed
        this.jumpForce = jumpForce
        this.lives = lives
        this.previousHeight = this.gameObj.pos.y
        this.update()
    }

    makePlayer() {
        this.gameObj = add([
            sprite("player", { anim: "idle" }),
            area({ shape: new Rect(vec2(0, 3), 8, 8) }),
            anchor("center"),
            pos(this.initialX, this.initialY),
            scale(4),
            body(),
            "player"
        ])
    }

    enableSuper() {
        this.gameObj.onCollide("superP", (isSuper) => {
            destroy(isSuper)
            const sfx = play("super")
            this.isSuper = true
            setTimeout(() => {
                this.isSuper = false
                sfx.paused = true
            }, 4000)
        })
    }

    enableSpecial() {
        this.gameObj.onCollide("upPower", (upPower) => {
            destroy(upPower)
            this.isSpecial = true
            setTimeout(() => { this.isSpecial = false }, 2000)
        })
    }

    enableVunerability() {
        const hitAndRespawn = (context) => {
            if (!this.isSuper) {
                play("hit")
                context.respawnPlayer()
            }
        }
        this.gameObj.onCollide("spiders", () => hitAndRespawn(this))
        this.gameObj.onCollide("fish", () => hitAndRespawn(this))
        this.gameObj.onCollide("flame", () => hitAndRespawn(this))
        this.gameObj.onCollide("axes", () => hitAndRespawn(this))
        this.gameObj.onCollide("saws", () => hitAndRespawn(this))
        this.gameObj.onCollide("birds", () => hitAndRespawn(this))
    }

    enablePassthrough() {
        this.gameObj.onBeforePhysicsResolve((collision) => {
            if (collision.target.is("passthrough") && this.gameObj.isJumping()) {
                collision.preventResolution()
            }
            if (collision.target.is("passthrough") && isKeyDown("down")) {
                collision.preventResolution()
            }
        })
    }

    enableCoinCollect() {
        this.gameObj.onCollide("coin", (coin) => {
            this.coins++
            destroy(coin)
            play("coin")
        })
    }

    setPlayerControl() {
        onKeyDown("left", () => {
            if (this.gameObj.curAnim() !== "run") this.gameObj.play("run")
            this.gameObj.flipX = true
            if (!this.isRespawning) this.gameObj.move(-this.speed, 0)
            this.isMoving = true
        })
        onKeyDown("right", () => {
            if (this.gameObj.curAnim() !== "run") this.gameObj.play("run")
            this.gameObj.flipX = false
            if (!this.isRespawning) this.gameObj.move(this.speed, 0)
            this.isMoving = true
        })
        onKeyDown("space", () => {
            if (!this.gameObj.isGrounded() && this.hasJumpedOnce) return
            if (time() - this.timeSinceLastGrounded > this.jumpableTime) return
            this.gameObj.jump(this.jumpForce)
            play("jumpSound")
            this.hasJumpedOnce = true
        })
        onKeyDown("up", () => {
            if (this.isSpecial) {
                if (!this.gameObj.isGrounded() && this.hasJumpedOnce) return
                if (time() - this.timeSinceLastGrounded > this.jumpableTime) return
                this.gameObj.jump(this.jumpForce + 800)
                play("jumpSound")
                this.hasJumpedOnce = true
            }
        })
        onKeyRelease(() => {
            if (isKeyReleased("right") || isKeyReleased("left")) {
                this.gameObj.play("idle")
                this.isMoving = false
            }
        })
    }

    respawnPlayer() {
        if (this.lives > 0) {
            this.lives--
            this.gameObj.pos = vec2(this.initialX, this.initialY)
            this.isRespawning = true
            setTimeout(() => this.isRespawning = false, 500)
            return
        }

        go("gameover")
    }

    update() {
        onUpdate(() => {
            console.log(this.gameObj.pos)
            if (this.gameObj.isGrounded()) {
                this.hasJumpedOnce = false
                this.timeSinceLastGrounded = time()
            }

            this.heightD = this.previousHeight - this.gameObj.pos.y
            this.previousHeight = this.gameObj.pos.y
            if (!this.isMoving && this.gameObj.curAnim() !== "idle") {
                this.gameObj.play("idle")
            }

            if (!this.gameObj.isGrounded() && this.heightD > 0 && this.gameObj.curAnim() !== "jump-up") {
                this.gameObj.play("jump-up")
            }
            if (!this.gameObj.isGrounded() && this.heightD < 0 && this.gameObj.curAnim() !== "jump-down") {
                this.gameObj.play("jump-down")
            }
            if (this.gameObj.pos.y > 1000) {
                play("hit")
                this.respawnPlayer()
            }
        })
    }

    updateLivesCount(livesCountUI) {
        onUpdate(() => {
            livesCountUI.text = this.lives
        })
    }

    updateCoinCount(coinCountUI) {
        onUpdate(() => {
            coinCountUI.text = `${this.coins} / ${coinCountUI.fullCoinCount}`
            if (this.coins === coinCountUI.fullCoinCount) {
                go(this.isFinalLv ? "end" : this.currLevel + 1)
            }
        })
    }
}