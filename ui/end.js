export const endView = () => {
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
}