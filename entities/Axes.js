export class Axes {
    constructor(positions, durations) {
        this.durations = durations
        this.positions = positions
        this.axes = []
        for (const p of positions) {
            this.axes.push(
                add([
                    sprite("axe"),
                    area({
                        shape: new Rect(vec2(0, 40), 30, 10),
                        collisionIgnore: ["spiders", "flame"]
                    }),
                    pos(p),
                    scale(4),
                    anchor(vec2(0, -0.75)),
                    state("swing-left", ["swing-left", "swing-right"]),
                    rotate(),
                    offscreen(),
                    "axes",
                ])
            )
        }
    }

    async swing(axe, nextAngle, dura) {
        if (!axe.isOffScreen()) play("axeSound", { volume: 0.5 })

        await tween(
            axe.angle,
            nextAngle,
            dura,
            (val) => axe.angle = val,
            easings.easeInOutSine
        )
    }

    setMovementPattern() {
        for (const [index, axe] of this.axes.entries()) {
            const swingLeft = axe.onStateEnter("swing-left", async () => {
                await this.swing(axe, 90, this.durations[index])
                axe.enterState("swing-right")
            })

            const swingRight = axe.onStateEnter("swing-right", async () => {
                await this.swing(axe, -90, this.durations[index])
                axe.enterState("swing-left")
            })

            onSceneLeave(() => {
                swingLeft.cancel()
                swingRight.cancel()
            })
        }
    }
}