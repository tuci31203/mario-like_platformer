class UIManager {

    displayLivesCount(player) {
        this.livesCountUI = add([
            text("", {
                font: "round", size: 50
            }),
            fixed(),
            pos(70, 10)
        ])
        this.livesCountUI.add([
            sprite("lives-icon"),
            pos(-60, -5),
            scale(3),
            fixed()
        ])
    }

    displayCoinCount(player) {
        this.coinCountUI = add([
            text("", {
                font: "round", size: 50
            }), {
                fullCoinCount: get("coin", { recursive: true }).length
            },
            fixed(),
            pos(70, 70)
        ])


        this.coinCountUI.add([
            sprite("coin-icon"),
            pos(-60, 0),
            scale(3),
            fixed(),
        ])
    }

    displayBlinkingMessage(content, position) {
        const message = add([
            text(content, {
                size: 24,
                font: "round"
            }),
            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"]),

        ])

        message.onStateEnter("flash-up", async () => {
            await tween(
                message.opacity,
                0,
                0.5,
                (nextOpacity) => message.opacity = nextOpacity,
                easings.linear
            )
            message.enterState("flash-down")
        }
        )
        message.onStateEnter("flash-down", async () => {
            await tween(
                message.opacity,
                1,
                0.5,
                (nextOpacity) => message.opacity = nextOpacity,
                easings.linear
            )
            message.enterState("flash-up")
        })
    }


    displayMainMenu() {
        add([
            sprite("forest-bg"),
            scale(4)
        ])
        add([
            sprite("logo"),
            area(),
            anchor("center"),
            pos(center().x, center().y - 100),
            scale(8),
        ])

        this.displayBlinkingMessage(
            "Press [ Enter ] to Start Game",
            vec2(center().x, center().y + 100)
        )

        onKeyPress("enter", () => {
            play("confirm", { speed: 1.5 })
            go("controls")
        })
    }


    displayControlMenu() {
        add([
            sprite("forest-bg"),
            scale(4)
        ])

        add([
            text("Controls", { font: "round", size: 60 }),
            area(),
            anchor("center"),
            pos(center().x, center().y - 200)
        ])
        const controlWindowElements = add([
            pos(center().x + 80, center().y)
        ])

        controlWindowElements.add([
            sprite("up"),
            pos(0, -80)
        ])
        controlWindowElements.add([
            sprite("down")
        ])
        controlWindowElements.add([
            sprite("left"),
            pos(-80, 0)
        ])
        controlWindowElements.add([
            sprite("right"),
            pos(80, 0)
        ])
        controlWindowElements.add([
            sprite("space"),
            pos(-300, 0)
        ])
        controlWindowElements.add([
            text("Jump", { font: "round", size: 36 }),
            pos(-295, 100)
        ])
        controlWindowElements.add([
            text("Move", { font: "round", size: 36 }),
            pos(5, 100)
        ])

        this.displayBlinkingMessage(
            "Press [ Enter ] to Start Game",
            vec2(center().x, center().y + 300)
        )
        onKeyPress("enter", () => {
            play("confirm", { speed: 1.5 })
            go(1)
        })
    }

    displayGOScreen(currLv) {
        add([rect(1280, 720), color(0, 0, 0)])
        add([
            text("Game Over!", { font: "round", size: 50 }),
            area(),
            anchor("center"),
            pos(center())
        ])
        this.displayBlinkingMessage(
            "Press [ Enter ] to Restart Game",
            vec2(center().x, center().y + 300)
        )
        onKeyPress("enter", () => {
            play("confirm", { speed: 1.5 })
            go(currLv)
        })
    }

    displayEndScreen() {
        add([rect(1280, 720), color(Color.fromHex('#e39b44'))])
        const message = add([
            pos(center().x, center().y)
        ])
        message.add([
            text("You Won!", { font: "round", size: 50 }),
            area(),
            pos(0, -40),
            anchor("center")
        ])
        message.add([
            text("Thank you for playing", { font: "round", size: 50 }),
            area(),
            pos(0, 10),
            anchor("center")

        ])
        this.displayBlinkingMessage(
            "Press [ Enter ] to Play Again",
            vec2(center().x, center().y + 300)
        )
        onKeyPress("enter", () => {
            play("confirm", { speed: 1.5 })
            go("menu")
        })
    }

    addDarkBg() {
        add([rect(270, 130), color(Color.fromHex('#000000')), fixed()])
    }
}

export const uiManager = new UIManager()