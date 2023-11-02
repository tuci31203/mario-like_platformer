import kaboom from "./libs/kaboom.mjs"
import { load } from "./utilities/Loader.js"
import { uiManager } from "./utilities/UIManager.js"
import { Level } from "./utilities/Level.js"
import { lv1Layout, lv1Map } from "./content/lv1/lv1Layout.js"
import { Player } from "./entities/Player.js"
import { Camera } from "./utilities/Camera.js"
import { lv1Config } from "./content/lv1/config.js"

kaboom({
    width: 1280,
    height: 720,
    letterbox: true,
})

load.fonts()
load.sounds()
load.assets()

const scenes = {
    menu: () => {
        uiManager.displayMainMenu()
    },
    controls: () => {
        uiManager.displayControlMenu()
    },
    1: () => {
        setGravity(1400)
        const lv1 = new Level()
        lv1.drawBg("forest-bg")
        lv1.drawMap(lv1Layout, lv1Map)
        const player = new Player(lv1Config.playerStartPosX, lv1Config.playerStartPosY, lv1Config.playerSpeed, lv1Config.jumpForce, lv1Config.lives, 1, false)
        player.enablePassthrough();
        player.update()
        const camera = new Camera()
        camera.attach(player.gameObj, 0, 200)
        lv1.drawWave("water", "wave")
    },
    2: () => { },
    3: () => { },
    gameover: () => { },
    end: () => { },
}


for (const k in scenes) {
    scene(k, scenes[k])
}

go("menu")