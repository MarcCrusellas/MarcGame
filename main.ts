namespace SpriteKind {
    export const humb = SpriteKind.create()
}
function set_game () {
    my_food.setPosition(randint(0, maxX), randint(0, maxY))
    if (score == 0) {
        controller.moveSprite(me, 100, 100)
        me.setStayInScreen(true)
    }
    for (let index = 0; index < score; index++) {
        if (randint(0, 3) == 0) {
            get_new_enemy()
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    me.setImage(assets.image`play-p2`)
    setPlayerXY()
})
function get_new_enemy () {
    let rand1 = 0
    enemy = sprites.create(assets.image`poison`, SpriteKind.Enemy)
    console.log("" + maxX)
    console.log("" + rand1)
    enemy.setPosition(randint(0, maxX), randint(0, maxY))
    if (me.overlapsWith(enemy)) {
        enemy.destroy()
        if (times < 10) {
            times = times + 1
            get_new_enemy()
        }
    } else {
        times = 0
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    me.setImage(assets.image`play-p1`)
    setPlayerXY()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    on_end(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    me.setImage(assets.image`play-p3`)
    setPlayerXY()
})
function initial_state () {
    scene.setBackgroundImage(assets.image`liberte`)
    tiles.setCurrentTilemap(tilemap`level1`)
    me = sprites.create(assets.image`play-front`, SpriteKind.Player)
    scene.cameraFollowSprite(me)
    my_food = sprites.create(assets.image`burger`, SpriteKind.Food)
    poisons = game.askForNumber("how many initial poisons?", 2)
    for (let index = 0; index < poisons; index++) {
        get_new_enemy()
    }
}
function setPlayerXY () {
    console.log(":)")
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    me.setImage(assets.image`play-front`)
    setPlayerXY()
})
function choose_game_type () {
    console.log("uff")
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    on_end(false)
})
function on_end (lost: boolean) {
    if (lost == true) {
        game.splash("end you'r score is " + ("" + score))
        game.reset()
    } else {
        score += 1
        me.sayText("Score: " + ("" + score), 2000, true)
        set_game()
    }
}
let poisons = 0
let times = 0
let enemy: Sprite = null
let me: Sprite = null
let score = 0
let my_food: Sprite = null
let maxY = 0
let maxX = 0
maxX = 479
maxY = 385
choose_game_type()
initial_state()
set_game()
