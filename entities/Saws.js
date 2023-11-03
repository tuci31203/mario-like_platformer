export class Saws {
    constructor(positions, amplitudes) {
        this.positions = positions
        this.amplitudes = amplitudes
        this.saws = []
        for (const p of this.positions) {
            this.saws.push(
                add([
                    sprite("saw"),
                    area(),
                    anchor("center"),
                    pos(p),
                    scale(4),
                    rotate(),
                    state("rotate-left", ["rotate-left", "rotate-right"]),
                    offscreen(),
                    "saws"
                ])
            )
        }
    }

    async rotate_move(saw, moveBy) {
        if (!saw.isOffScreen()) play("saw", { volume: 0.3, seek: 10 })

        await Promise.all([
            tween(
                saw.pos.x,
                saw.pos.x + moveBy,
                1,
                (posX) => saw.pos.x = posX,
                easings.linear
            ),
            tween(
                saw.angle,
                360,
                2,
                (currAngle) => saw.angle = currAngle,
                easings.linear
            )
        ])

    }

    setMovementPattern() {
        for (const [index, saw] of this.saws.entries()) {
            const rotateLeft = saw.onStateEnter("rotate-left", async () => {
                await this.rotate_move(saw, -this.amplitudes[index])

                saw.angle = 0
                saw.enterState("rotate-right")
            })
            const rotateRight = saw.onStateEnter("rotate-right", async () => {
                await this.rotate_move(saw, this.amplitudes[index])

                saw.angle = 0
                saw.enterState("rotate-left")
            })

            onSceneLeave(() => {
                rotateLeft.cancel()
                rotateRight.cancel()
            })
        }
    }
}