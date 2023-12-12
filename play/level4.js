import { uiManager } from "../utilities/UIManager.js"
import { Level } from "../utilities/Level.js"
import { lv4Layout, lv4Map } from "../content/lv4/lv4Layout.js"
import { Player } from "../entities/Player.js"
import { Camera } from "../utilities/Camera.js"
import { lv4Config } from "../content/lv4/config.js"
import { Spider } from "../entities/Spider.js"
import { Obstacle } from "../entities/Obstacle.js"
import { Axes } from "../entities/Axes.js"
import { Saws } from "../entities/Saws.js"
import { Birds } from "../entities/Birds.js"


export const level4 = () => {
    localStorage.setItem("lv", "4")
    const bgm = play("bgm", {
        volume: 0.05,
        loop: true
    })
    onSceneLeave(() => {
        bgm.paused = true
    })
    onKeyDown("s", () => {
        bgm.paused = true
    })
    setGravity(lv4Config.gravity)
    const lv4 = new Level()
    lv4.drawBg("final-bg")
    lv4.drawMap(lv4Layout, lv4Map)
    const player = new Player(lv4Config.playerStartPosX, lv4Config.playerStartPosY, lv4Config.playerSpeed, lv4Config.jumpForce, lv4Config.lives, 4, true)
    player.enablePassthrough()
    player.enableCoinCollect()
    player.enableVunerability()
    player.enableSuper()
    player.enableSpecial()
    player.update()

    add([
        sprite("upPower"),
        pos(8142, 460),
        scale(2),
        area(),
        offscreen(),
        "upPower",
    ])
    add([
        sprite("superP"),
        pos(4426, 305),
        scale(4),
        area(),
        offscreen(),
        "superP",
    ])


    const spiders = new Spider(
        lv4Config.spiderPos.map(spPos => spPos()),
        lv4Config.spiderAmp,
        lv4Config.spiderDu,
        lv4Config.spiderType,
    )
    spiders.setMovementPattern()
    spiders.enablePassthrough()


    const flame = new Obstacle(
        lv4Config.flamePos.map(fsPos => fsPos()),
        lv4Config.flameAmp,
        "flame"
    )
    flame.setMovementPattern()


    const axes = new Axes(
        lv4Config.axesPositions.map(axPos => axPos()),
        lv4Config.axesSwingDu,
    )
    axes.setMovementPattern()

    const saws = new Saws(
        lv4Config.sawPositions.map(sPos => sPos()),
        lv4Config.sawAmp,
    )
    saws.setMovementPattern()

    const birds = new Birds(
        lv4Config.birdPositions.map(bPos => bPos()),
        lv4Config.birdAmp,
    )

    birds.setMovementPattern()


    uiManager.addDarkBg()
    uiManager.displayCoinCount(player)
    player.updateCoinCount(uiManager.coinCountUI)
    uiManager.displayLivesCount(player)
    player.updateLivesCount(uiManager.livesCountUI)

    const camera = new Camera()
    camera.attach(player.gameObj, 0, 200)
    lv4.drawWave("cotton", "wave")
    onKeyDown("r", () => {
        go(currLv)
    })
}