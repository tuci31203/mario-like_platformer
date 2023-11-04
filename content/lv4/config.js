export const lv4Config = {
    gravity: 1400,
    playerSpeed: 400,
    jumpForce: 650,
    lives: 3,
    playerStartPosX: 1500,
    playerStartPosY: 100,

    flamePos: [
        () => vec2(2780, 600),
        () => vec2(2800, 600),
        () => vec2(2905, 600),
        () => vec2(3005, 600),
        () => vec2(3105, 600),

        () => vec2(3605, 600),
        () => vec2(3630, 550),

        () => vec2(4770, 550),
        () => vec2(4870, 550),

        () => vec2(6010, 550),
        () => vec2(6135, 550),

        () => vec2(7750, 550),
    ],
    flameAmp: [300, 500, 400, 300, 500, 900, 800, 500, 500, 900, 800, 500],
    flameType: "flame",
    spiderPos: [
        () => vec2(2200, 100),
        () => vec2(1900, 0),
        () => vec2(3500, 200),
        () => vec2(3700, 300),
        () => vec2(4500, 300),
        () => vec2(5200, 310),
        () => vec2(5300, 310),
        () => vec2(5700, 310),
        () => vec2(6600, 310),
        () => vec2(6800, 310),
    ],
    spiderAmp: [300, 150, 150, 300, 300, 150, 150, 300, 300, 150],
    spiderDu: [2, 1, 1, 2, 2, 1, 2, 2, 1, 1],
    spiderType: 3,


    axesPositions: [
        () => vec2(2100, -50),
        () => vec2(7000, 100),
        () => vec2(7300, 100),
        () => vec2(7600, 100),
    ],
    axesSwingDu: [1, 2, 3, 2],

    sawPositions: [() => vec2(8000, 350)],
    sawAmp: [300],
}