import { GOView } from "../ui/GO.js"
import { continueLastView } from "../ui/continueLast.js"
import { controlView } from "../ui/control.js"
import { endView } from "../ui/end.js"
import { mainMenuView } from "../ui/mainMenu.js"
import { preview } from "../ui/preview.js"

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
        onKeyDown("m", () => {
            go("preview")
        })
        onKeyDown("r", () => {
            go(player.currLevel)
        })
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


    displayMainMenu(lastLV) {
        mainMenuView()
        this.displayBlinkingMessage(
            "Press [ Enter ] to Start Game",
            vec2(center().x, center().y + 100)
        )
        onKeyPress("enter", () => {
            play("confirm", { speed: 1.5 })
            if (!lastLV) {
                go("preview")
            } else {
                go("continueLast")
            }
        })
    }

    displayContinueLastPlay() {
        continueLastView()
        this.displayBlinkingMessage(
            "Press [ Enter ] to skip",
            vec2(center().x, center().y + 250),
        )
    }


    displayPreview() {
        preview()
        this.displayBlinkingMessage(
            "Press [ Enter ] to Start Game",
            vec2(center().x, center().y + 250)
        )
    }


    displayControlMenu() {
        controlView()
        this.displayBlinkingMessage(
            "Press [ Enter ] to Start Game",
            vec2(center().x, center().y + 300)
        )
    }

    displayGOScreen(currLv) {
        GOView()
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
        endView()
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