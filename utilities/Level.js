export class Level {
    drawMap(layout, mappings) {
        const layerSetting = {
            tileWidth: 16,
            tileHeight: 12,
            tiles: mappings
        }

        this.map = []
        for (const layerLayout of layout) {
            this.map.push(addLevel(layerLayout, layerSetting))
        }

        for (const layer of this.map) {
            layer.use(scale(4))
        }
    }

    drawBg(bgSprite) {
        add([sprite(bgSprite), fixed(), scale(4)])
    }

    drawWave(type, anim) {
        let offset = -100
        for (let i = 0; i < 21; i++) {
            add([sprite(type, { anim }), pos(offset, 600), scale(4), fixed()])
            offset += 64
        }
    }
}