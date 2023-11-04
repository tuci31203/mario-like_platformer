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
            go("preview")
        })
    }


    displayPreview() {
        add([
            sprite("forest-bg"),
            scale(4),
            color(50, 50, 168)
        ])
        const levels = add([
            pos(center().x, center().y - 80)
        ])

        levels.add([
            sprite("lv1P"),
            scale(0.18),
            anchor("center"),
            pos(-450, 0)
        ])
        levels.add([
            text("1", {
                font: "round",
                size: 45
            }),
            anchor("center"),
            pos(-450, 120)
        ])
        levels.add([
            sprite("lv2P"),
            scale(0.18),
            anchor("center"),
            pos(-150, 0)
        ])
        levels.add([
            text("2", {
                font: "round",
                size: 45
            }),
            anchor("center"),
            pos(-150, 120)
        ])
        levels.add([
            sprite("lv3P"),
            scale(0.18),
            anchor("center"),
            pos(150, 0)
        ])
        levels.add([
            text("3", {
                font: "round",
                size: 45
            }),
            anchor("center"),
            pos(150, 120)
        ])
        levels.add([
            sprite("lv4P"),
            scale(0.18),
            anchor("center"),
            pos(450, 0)
        ])
        levels.add([
            text("4", {
                font: "round",
                size: 45
            }),
            anchor("center"),
            pos(450, 120)
        ])

        this.displayBlinkingMessage(
            "Press [ Enter ] to Start Game",
            vec2(center().x, center().y + 250)
        )

        onKeyPress("enter", () => {
            play("confirm", { speed: 1.5 })
            go("controls")
        })
        onKeyPress("1", () => {
            play("confirm", { speed: 1.5 })
            go("1")
        })
        onKeyPress("2", () => {
            play("confirm", { speed: 1.5 })
            go("2")
        })
        onKeyPress("3", () => {
            play("confirm", { speed: 1.5 })
            go("3")
        })
        onKeyPress("4", () => {
            play("confirm", { speed: 1.5 })
            go("4")
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
            pos(center().x, center().y - 50)
        ])
        add([text("Press [ M ] to go to menu", { font: "round", size: 30 }),
        area(),
        anchor("center"),
        pos(center().x, center().y + 50)])
        this.displayBlinkingMessage(
            "Press [ Enter ] to Restart Game",
            vec2(center().x, center().y + 300)
        )

        onKeyPress("enter", () => {
            play("confirm", { speed: 1.5 })
            go(currLv)
        })
        onKeyPress("m", () => {
            play("confirm", { speed: 1.5 })
            go("preview")
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