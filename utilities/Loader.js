//assets managing
export const load = {
    fonts: () => {
        loadFont("round", "./assets/Round9x13.ttf")
    },
    assets: () => {
        loadSprite("forest-bg", "./assets/Forest_Background_0.png")
        loadSprite("castle-bg", "./assets/Castle_Background_0.png")
        loadSprite("final-bg", "./assets/Final_Background_0.png")
        loadSprite("sky0-bg", "./assets/Sky_Background_0.png")
        loadSprite("sky1-bg", "./assets/Sky_Background_1.png")
        loadSprite("sky2-bg", "./assets/Sky_Background_2.png")
        loadSprite("logo", "./assets/Logo.png")
        loadSprite("up", "./assets/Arrow_Up_Key_Dark.png")
        loadSprite("upPower", "./assets/Arrow_Up.png")
        loadSprite("down", "./assets/Arrow_Down_Key_Dark - Copy.png")
        loadSprite("left", "./assets/Arrow_Left_Key_Dark - Copy.png")
        loadSprite("right", "./assets/Arrow_Right_Key_Dark - Copy.png")
        loadSprite("space", "./assets/Space_Key_Dark - Copy.png")
        loadSprite("coin", "./assets/Coin.png")
        loadSprite("bridge", "./assets/Bridge.png")
        loadSprite("coin-icon", "./assets/Coins_Ui.png")
        loadSprite("lives-icon", "./assets/Livess_Ui.png")
        loadSprite("axe", "./assets/Axe_Trap.png")
        loadSprite("saw", "./assets/Circular_Saw.png")
        loadSprite("bird", "./assets/Bird_1.png", {
            sliceX: 3,
            sliceY: 1,
            anims: {
                fly: {
                    from: 0,
                    to: 2,
                    speed: 9,
                    loop: true,
                }
            }
        })
        loadSprite("fish", "./assets/Fish_1.png", {
            sliceX: 2,
            sliceY: 1,
            anims: {
                swim: { from: 0, to: 1, loop: true }
            }
        })
        loadSprite("flame", "./assets/Flame_1.png", {
            sliceX: 2,
            sliceY: 1,
            anims: {
                burn: { from: 0, to: 1, loop: true }
            }
        })
        loadSprite("spider-1", "./assets/Spider_1.png", {
            sliceX: 3,
            sliceY: 1,
            anims: {
                crawl: { from: 0, to: 2, loop: true },
                idle: 0,
            }
        })
        loadSprite("spider-2", "./assets/Spider_2.png", {
            sliceX: 3,
            sliceY: 1,
            anims: {
                crawl: { from: 0, to: 2, loop: true },
                idle: 0,
            }
        })
        loadSprite("spider-3", "./assets/Spider_3.png", {
            sliceX: 3,
            sliceY: 1,
            anims: {
                crawl: { from: 0, to: 2, loop: true },
                idle: 0,
            }
        })
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
                "wave-reversed": {
                    from: 7,
                    to: 0,
                    speed: 16,
                    loop: true,
                }
            }
        })
        loadSprite("lava", "./assets/Lava.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave: {
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true,
                },
                "wave-reversed": {
                    from: 7,
                    to: 0,
                    speed: 16,
                    loop: true,
                }
            }
        })
        loadSprite("cloud", "./assets/Clouds.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave: {
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true,
                },
                "wave-reversed": {
                    from: 7,
                    to: 0,
                    speed: 16,
                    loop: true,
                }
            }
        })
        loadSprite("cotton", "./assets/Cottoncandy.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave: {
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true,
                },
                "wave-reversed": {
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
        loadSprite("rock-tileset", "./assets/Grass_Rock_Tileset.png", {
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
        loadSprite("rockOneway-tileset", "./assets/Grass_Rock_Oneway.png", {
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
        loadSprite("brick-tileset", "./assets/Brick_Tileset.png", {
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
        loadSprite("brickOneway-tileset", "./assets/Brick_Oneway.png", {
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
        loadSprite("final-tileset", "./assets/final_Tileset.png", {
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
        loadSprite("finalOneway-tileset", "./assets/final_Oneway.png", {
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
        loadSound("coin", "./sound/coin.wav")
        loadSound("spider-attack", "./sound/Cartoon (28).mp3")
        loadSound("axeSound", "./sound/swinging-axe.mp3")
        loadSound("saw", "./sound/swinging-axe.mp3")
        loadSound("dive", "./sound/dive.wav")
        loadSound("water-bg", "./sound/water-ambience.mp3")
        loadSound("lava-bg", "./sound/lava.wav")
        loadSound("wind-bg", "./sound/strong-wind.wav")
        loadSound("bgm", "./sound/your-game-comedy-173310.mp3")
        loadSound("congrat", "./sound/tada-fanfare-a-6313.mp3")
        loadSound("gover", "./sound/075176_duck-quack-40345.mp3")
    }
}