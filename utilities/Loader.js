//assets managing
export const load = {
    fonts: () => {
        loadFont("round", "./assets/Round9x13.ttf")
    },
    assets: () => {
        loadSprite("forest-bg", "./assets/Forest_Background_0.png")
        loadSprite("logo", "./assets/Logo.png")
        loadSprite("up", "./assets/Arrow_Up_Key_Dark.png")
        loadSprite("down", "./assets/Arrow_Down_Key_Dark - Copy.png")
        loadSprite("left", "./assets/Arrow_Left_Key_Dark - Copy.png")
        loadSprite("right", "./assets/Arrow_Right_Key_Dark - Copy.png")
        loadSprite("space", "./assets/Space_Key_Dark - Copy.png")
        loadSprite("coin", "./assets/Coin.png")
        loadSprite("bridge", "./assets/Bridge.png")
        loadSprite("player", "./assets/Player.png", {
            sliceX: 4,
            sliceY: 6,
            anims: {
                idle: {
                    from: 0,
                    to: 3,
                    loop: true
                },
                run: {
                    from: 4,
                    to: 7,
                    loop: true
                },
                "jump-up": 8,
                "jump-down": 9
            }
        })
        loadSprite("water", "./assets/Water.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave: {
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true,
                },
                "water-reversed": {
                    from: 7,
                    to: 0,
                    speed: 16,
                    loop: true,
                }
            }
        })

        loadSprite("grass-tileset", "./assets/Grass_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8
            }
        })
        loadSprite("grassOneway-tileset", "./assets/Grass_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8
            }
        })
        loadSprite("grassRock-tileset", "./assets/Grass_Rock_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8
            }
        })
        loadSprite("grassRockOneway-tileset", "./assets/Grass_Rock_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8
            }
        })
    },
    sounds: () => {
        loadSound("confirm", "./sound/confirm-ui.wav")
        loadSound("jumpSound", "./sound/jump.wav")
        loadSound("hit", "./sound/Cartoon (19).mp3")
    }
}