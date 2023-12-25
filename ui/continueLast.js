export const continueLastView = () => {
    add([
        sprite("forest-bg"),
        scale(4),
        color(50, 50, 168)
    ])

    add([
        text("Go to your last-played level ? Press [C]", {
            font: "round",
            size: 45
        }),
        anchor("center"),
        pos(center())
    ])
    onKeyPress("enter", () => {
        play("confirm", { speed: 1.5 })
        go("preview")
    })
}