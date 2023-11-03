export class Obstacle {
    constructor(positions, amplitudes, type) {
        this.type = type
        this.amplitudes = amplitudes
        this.obstacles = []
        const aniMap = {
            "fish": "swim",
            "flame": "burn"
        }
        for (const position of positions) {
            this.obstacles.push(
                add([
                    sprite(type, { anim: aniMap[type] }),
                    area({ shape: new Rect(vec2(0), 12, 12) }),
                    anchor("center"),
                    pos(position),
                    scale(4),
                    rotate(type === "fish" ? 90 : 0),
                    state("launch", ["launch", "dive"]),
                    offscreen(),
                    type,
                ])
            )
        }
    }


    setMovementPattern() {
        for (const [index, obstacle] of this.obstacles.entries()) {
            const launch = obstacle.onStateEnter("launch", async () => {
                if (this.type === "flame") { obstacle.flipY = false }
                if (this.type === "fish") { obstacle.flipX = false }
                await tween(
                    obstacle.pos.y,
                    obstacle.pos.y - this.amplitudes[index],
                    2,
                    (posY) => (obstacle.pos.y = posY),
                    easings.easeOutSine
                )

                obstacle.enterState("dive")
            })

            const dive = obstacle.onStateEnter("dive", async () => {
                if (this.type === "flame") { obstacle.flipY = true }
                if (this.type === "fish") { obstacle.flipX = true }
                await tween(
                    obstacle.pos.y,
                    obstacle.pos.y + this.amplitudes[index],
                    2,
                    (posY) => (obstacle.pos.y = posY),
                    easings.easeOutSine
                )

                obstacle.enterState("launch")
            })

            onSceneLeave(() => {
                launch.cancel()
                dive.cancel()
            })
        }
    }
}