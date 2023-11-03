export const lv2Config = {
    gravity: 1400,
    playerSpeed: 400,
    jumpForce: 650,
    lives: 3,
    playerStartPosX: 1500,
    playerStartPosY: 100,
    flamePos: [
        () => vec2(2595, 600),
        () => vec2(2655, 600),
        () => vec2(2775, 600),
        () => vec2(2875, 600),
        () => vec2(2965, 600),

        () => vec2(3265, 600),
        () => vec2(3408, 550),

        () => vec2(4940, 550),
        () => vec2(5050, 550),

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
    ],
    spiderAmp: [300, 150, 150, 300, 300],
    spiderDu: [2, 1, 1, 2, 2],
    spiderType: 2,


    axesPositions: [
        () => vec2(2100, -50),
        () => vec2(7000, 10),
        () => vec2(7300, 10),
        () => vec2(7600, 10),
    ],
    axesSwingDu: [1, 2, 3, 2],

    sawPositions: [() => vec2(8000, 350), () => vec2(9000, 350)],
    sawAmp: [300, 500],
}