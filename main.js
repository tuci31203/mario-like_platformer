import kaboom from "./libs/kaboom.mjs"
import { load } from "./utilities/Loader.js"
import { uiManager } from "./utilities/UIManager.js"
import { Level } from "./utilities/Level.js"
import { lv1Layout, lv1Map } from "./content/lv1/lv1Layout.js"
import { lv2Layout, lv2Map } from "./content/lv2/lv2Layout.js"
import { lv3Layout, lv3Map } from "./content/lv3/lv3Layout.js"
import { Player } from "./entities/Player.js"
import { Camera } from "./utilities/Camera.js"
import { lv1Config } from "./content/lv1/config.js"
import { lv2Config } from "./content/lv2/config.js"
import { lv3Config } from "./content/lv3/config.js"
import { Spider } from "./entities/Spider.js"
import { Obstacle } from "./entities/Obstacle.js"
import { Axes } from "./entities/Axes.js"
import { Saws } from "./entities/Saws.js"
import { Birds } from "./entities/Birds.js"

kaboom({
    width: 1280,
    height: 720,
    letterbox: true,
})

load.fonts()
load.sounds()
load.assets()
let currLv = 0

const scenes = {
    menu: () => {
        uiManager.displayMainMenu()
    },
    controls: () => {
        uiManager.displayControlMenu()
    },
    1: () => {
        const waterBGM = play("water-bg", {
            volume: 0.02,
            loop: true
        })
        onSceneLeave(() => {
            waterBGM.paused = true
        })
        const bgm = play("bgm", {
            volume: 0.05,
            loop: true
        })
        onSceneLeave(() => {
            bgm.paused = true
        })
        currLv = 1
        setGravity(lv1Config.gravity)
        const lv1 = new Level()
        lv1.drawBg("forest-bg")
        lv1.drawMap(lv1Layout, lv1Map)
        const player = new Player(lv1Config.playerStartPosX, lv1Config.playerStartPosY, lv1Config.playerSpeed, lv1Config.jumpForce, lv1Config.lives, 1, false)
        player.enablePassthrough()
        player.enableCoinCollect()
        player.enableVunerability()
        player.update()

        const spiders = new Spider(
            lv1Config.spiderPos.map(spPos => spPos()),
            lv1Config.spiderAmp,
            lv1Config.spiderDu,
            lv1Config.spiderType,
        )
        spiders.setMovementPattern()
        spiders.enablePassthrough()


        const fish = new Obstacle(
            lv1Config.fishPos.map(fsPos => fsPos()),
            lv1Config.fishAmp,
            "fish"
        )
        fish.setMovementPattern()



        uiManager.addDarkBg()
        uiManager.displayCoinCount(player)
        player.updateCoinCount(uiManager.coinCountUI)
        uiManager.displayLivesCount(player)
        player.updateLivesCount(uiManager.livesCountUI)

        const camera = new Camera()
        camera.attach(player.gameObj, 0, 200)
        lv1.drawWave("water", "wave")

    },
    2: () => {
        const lavaBGM = play("lava-bg", {
            volume: 0.2,
            loop: true
        })
        onSceneLeave(() => {
            lavaBGM.paused = true
        })
        const bgm = play("bgm", {
            volume: 0.05,
            loop: true
        })
        onSceneLeave(() => {
            bgm.paused = true
        })
        currLv = 2
        setGravity(lv2Config.gravity)
        const lv2 = new Level()
        lv2.drawBg("castle-bg")
        lv2.drawMap(lv2Layout, lv2Map)
        const player = new Player(lv2Config.playerStartPosX, lv2Config.playerStartPosY, lv2Config.playerSpeed, lv2Config.jumpForce, lv2Config.lives, 2, false)
        player.enablePassthrough()
        player.enableCoinCollect()
        player.enableVunerability()
        player.update()

        const spiders = new Spider(
            lv2Config.spiderPos.map(spPos => spPos()),
            lv2Config.spiderAmp,
            lv2Config.spiderDu,
            lv2Config.spiderType,
        )
        spiders.setMovementPattern()
        spiders.enablePassthrough()


        const flame = new Obstacle(
            lv2Config.flamePos.map(fsPos => fsPos()),
            lv2Config.flameAmp,
            "flame"
        )
        flame.setMovementPattern()


        const axes = new Axes(
            lv2Config.axesPositions.map(axPos => axPos()),
            lv2Config.axesSwingDu,
        )
        axes.setMovementPattern()

        const saws = new Saws(
            lv2Config.sawPositions.map(sPos => sPos()),
            lv2Config.sawAmp,
        )
        saws.setMovementPattern()

        uiManager.addDarkBg()
        uiManager.displayCoinCount(player)
        player.updateCoinCount(uiManager.coinCountUI)
        uiManager.displayLivesCount(player)
        player.updateLivesCount(uiManager.livesCountUI)

        const camera = new Camera()
        camera.attach(player.gameObj, 0, 200)
        lv2.drawWave("lava", "wave")
    },
    3: () => {
        const windBGM = play("wind-bg", {
            volume: 0.02,
            loop: true
        })
        onSceneLeave(() => {
            windBGM.paused = true
        })
        const bgm = play("bgm", {
            volume: 0.05,
            loop: true
        })
        onSceneLeave(() => {
            bgm.paused = true
        })
        currLv = 3
        setGravity(lv2Config.gravity)
        const lv3 = new Level()
        lv3.drawBg("sky0-bg")
        lv3.drawBg("sky1-bg")
        lv3.drawBg("sky2-bg")
        lv3.drawMap(lv3Layout, lv3Map)
        const player = new Player(lv3Config.playerStartPosX, lv3Config.playerStartPosY, lv3Config.playerSpeed, lv3Config.jumpForce, lv3Config.lives, 3, true)
        player.enablePassthrough()
        player.enableCoinCollect()
        player.enableVunerability()
        player.update()

        const birds = new Birds(
            lv3Config.birdPositions.map(bPos => bPos()),
            lv3Config.birdAmp,
        )

        birds.setMovementPattern()

        uiManager.addDarkBg()
        uiManager.displayCoinCount(player)
        player.updateCoinCount(uiManager.coinCountUI)
        uiManager.displayLivesCount(player)
        player.updateLivesCount(uiManager.livesCountUI)

        const camera = new Camera()
        camera.attach(player.gameObj, 0, 200)
        lv3.drawWave("cloud", "wave")
    },
    "gameover": () => {
        const gover = play("gover", {
            volume: 1,
            loop: false
        })
        onSceneLeave(() => {
            gover.paused = true
        })
        uiManager.displayGOScreen(currLv)
    },
    "end": () => {
        const congrat = play("congrat", {
            volume: 1,
            loop: false
        })
        onSceneLeave(() => {
            congrat.paused = true
        })
        uiManager.displayEndScreen()
    },
}


for (const k in scenes) {
    scene(k, scenes[k])
}

go("menu")