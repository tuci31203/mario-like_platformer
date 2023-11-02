import kaboom from "./libs/kaboom.mjs"

kaboom({
    width: 1200,
    height: 720,
    letterbox: true,
})

const scenes = {
    menu: () => {

    },
    controls: () => {

    },
    1: () => { },
    2: () => { },
    3: () => { },
    gameover: () => { },
    end: () => { },
}


for (const k in scenes) {
    scene(k, scenes[k])
}

go("menu")