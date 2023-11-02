export class Player {
    heightD = 0
    isMoving = false
    isRespawning = false
    constructor(posX, posY, speed, jumpForce, lives, currLevel, isInTerminal) {
        this.isInTerminal = isInTerminal
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
            // this.gameObj.jump(this.jumpForce)
            if (this.gameObj.isGrounded() && !this.isRespawning) {
                this.gameObj.jump(this.jumpForce)
                play("jumpSound")
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
            this.gameObj.pos = vec2(this.initialX, this.initialY)
            this.isRespawning = true
            setTimeout(() => this.isRespawning = false, 500)
        }
    }

    update() {
        onUpdate(() => {
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
}