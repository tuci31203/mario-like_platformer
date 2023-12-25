export const mainMenuView = () => {
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
}