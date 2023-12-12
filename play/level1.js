import { uiManager } from "../utilities/UIManager.js"
import { Level } from "../utilities/Level.js"
import { lv1Layout, lv1Map } from "../content/lv1/lv1Layout.js"
import { lv1Config } from "../content/lv1/config.js"
import { Player } from "../entities/Player.js"
import { Camera } from "../utilities/Camera.js"
import { Spider } from "../entities/Spider.js"
import { Obstacle } from "../entities/Obstacle.js"

export const level1 = () => {
    localStorage.setItem("lv", "1")
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
    onKeyDown("r", () => {
        go(currLv)
    })
}