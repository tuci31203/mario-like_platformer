import { uiManager } from "../utilities/UIManager.js"
import { Level } from "../utilities/Level.js"
import { lv3Layout, lv3Map } from "../content/lv3/lv3Layout.js"
import { lv3Config } from "../content/lv3/config.js"
import { Player } from "../entities/Player.js"
import { Camera } from "../utilities/Camera.js"
import { Birds } from "../entities/Birds.js"


export const level3 = (playLive) => {
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
    setGravity(lv3Config.gravity)
    const lv3 = new Level()
    lv3.drawBg("sky0-bg")
    lv3.drawBg("sky1-bg")
    lv3.drawBg("sky2-bg")
    lv3.drawMap(lv3Layout, lv3Map)
    const livesToPlay = playLive ? playLive : lv3Config.lives
    const player = new Player(lv3Config.playerStartPosX, lv3Config.playerStartPosY, lv3Config.playerSpeed, lv3Config.jumpForce, livesToPlay, 3, false)
    player.enablePassthrough()
    player.enableCoinCollect()
    player.enableCollectLives()
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
}