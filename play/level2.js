import { Player } from "../entities/Player.js"
import { Camera } from "../utilities/Camera.js"
import { uiManager } from "../utilities/UIManager.js"
import { Level } from "../utilities/Level.js"
import { lv2Layout, lv2Map } from "../content/lv2/lv2Layout.js"
import { lv2Config } from "../content/lv2/config.js"
import { Spider } from "../entities/Spider.js"
import { Obstacle } from "../entities/Obstacle.js"
import { Axes } from "../entities/Axes.js"
import { Saws } from "../entities/Saws.js"

export const level2 = () => {
    localStorage.setItem("lv", "2")
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
    onKeyDown("r", () => {
        go(currLv)
    })
}