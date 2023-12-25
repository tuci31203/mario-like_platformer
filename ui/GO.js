export const GOView = () => {
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

    onKeyPress("m", () => {
        play("confirm", { speed: 1.5 })
        go("preview")
    })
}