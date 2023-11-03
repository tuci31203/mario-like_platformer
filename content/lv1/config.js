export const lv1Config = {
    gravity: 1400,
    playerSpeed: 400,
    jumpForce: 650,
    lives: 3,
    playerStartPosX: 1500,
    playerStartPosY: 100,


    spiderPos: [
        () => vec2(2000, 300),
        () => vec2(2020, 0),
        () => vec2(3200, 200),
        () => vec2(3500, 300),
    ],
    spiderAmp: [300, 150, 150, 300],
    spiderDu: [2, 1, 1, 2],
    spiderType: 1,


    fishPos: [
        () => vec2(2595, 600),
        () => vec2(2655, 600),
        () => vec2(4100, 600),
        () => vec2(4220, 800),
        () => vec2(5200, 800),
        () => vec2(5300, 800),
    ],
    fishAmp: [300, 500, 400, 500, 900, 800],
    fishType: "fish",
}