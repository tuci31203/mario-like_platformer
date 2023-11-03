export class Birds {
    constructor(positions, amplitudes) {
        this.positions = positions
        this.amplitudes = amplitudes
        this.birds = []
        for (const p of positions) {
            this.birds.push(
                add([
                    sprite("bird", { anim: "fly" }),
                    area({ shape: new Rect(vec2(0), 10, 10) }),
                    anchor("center"),
                    pos(p),
                    scale(4),
                    rotate(),
                    state("fly-left", [
                        "fly-left",
                        "fly-right",
                        "dive-atk-left",
                        "dive-atk-right",
                    ]),
                    offscreen(),
                    "birds",
                ])
            )
        }
    }

    async fly(bird, moveBy, dura) {
        await tween(
            bird.pos.x,
            bird.pos.x + moveBy,
            dura,
            (posX) => bird.pos.x = posX,
            easings.linear
        )
    }

    async dive(bird, target, dura) {
        if (!bird.isOffScreen()) play("dive", { volume: 0.01 })
        await tween(
            bird.pos,
            target,
            dura,
            (pos) => bird.pos = pos,
            easings.easeInSine,
        )
    }

    setMovementPattern() {
        for (const [index, bird] of this.birds.entries()) {
            const flyLeft = bird.onStateEnter("fly-left", async () => {
                bird.flipX = false
                await this.fly(bird, -this.amplitudes[index], 0.5)
                bird.enterState("dive-atk-left")
            })
            const flyRight = bird.onStateEnter("fly-right", async () => {
                bird.flipX = true
                await this.fly(bird, this.amplitudes[index], 0.5)
                bird.enterState("dive-atk-right")
            })

            const diveAtkLeft = bird.onStateEnter("dive-atk-left", async () => {
                await this.dive(
                    bird,
                    vec2(
                        bird.pos.x - this.amplitudes[index],
                        bird.pos.y + this.amplitudes[index],
                    ),
                    0.5
                )
                await this.dive(
                    bird,
                    vec2(
                        bird.pos.x - this.amplitudes[index],
                        bird.pos.y - this.amplitudes[index],
                    ),
                    0.5
                )
                bird.enterState("fly-right")
            })
            const diveAtkRight = bird.onStateEnter("dive-atk-right", async () => {
                await this.dive(
                    bird,
                    vec2(
                        bird.pos.x + this.amplitudes[index],
                        bird.pos.y + this.amplitudes[index],
                    ),
                    0.5
                )
                await this.dive(
                    bird,
                    vec2(
                        bird.pos.x + this.amplitudes[index],
                        bird.pos.y - this.amplitudes[index],
                    ),
                    0.5
                )
                bird.enterState("fly-left")
            })

            onSceneLeave(() => {
                diveAtkLeft.cancel()
                diveAtkRight.cancel()
                flyLeft.cancel()
                flyRight.cancel()
            })
        }
    }
}