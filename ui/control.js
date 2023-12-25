export const controlView = () => {
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
        pos(center().x + 80, center().y - 50)
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
    controlWindowElements.add([
        text("Replay", { font: "round", size: 36 }),
        pos(-120, 200)
    ])
    controlWindowElements.add([
        sprite("replay"),
        pos(-250, 170),
    ])
    onKeyPress("enter", () => {
        play("confirm", { speed: 1.5 })
        go(1)
    })
}