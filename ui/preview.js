
export const preview = () => {
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