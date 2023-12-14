namespace SpriteKind {
    export const humb = SpriteKind.create()
}

function set_game() {
    my_food.setPosition(randint(0, 160), randint(0, 120))
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

controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    me.setImage(assets.image`
        play-p2
    `)
    setPlayerXY()
})
function get_new_enemy() {
    
    enemy2 = sprites.create(assets.image`
        poison
    `, SpriteKind.Enemy)
    enemy2.setPosition(randint(0, 160), randint(0, 120))
    if (me.overlapsWith(enemy2)) {
        enemy2.destroy()
        if (times > 10) {
            times = times + 1
            get_new_enemy()
        }
        
    }
    
}

controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    me.setImage(assets.image`
        play-p1
    `)
    setPlayerXY()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap(sprite2: Sprite, otherSprite2: Sprite) {
    on_end(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    me.setImage(assets.image`
        play-p3
    `)
    setPlayerXY()
})
function initial_state() {
    
    scene.setBackgroundImage(assets.image`
        forest
    `)
    me = sprites.create(assets.image`
        play-front
    `, SpriteKind.Player)
    my_food = sprites.create(assets.image`
        burger
    `, SpriteKind.Food)
    poisons = game.askForNumber("how many initial poisons?", 2)
    for (let index2 = 0; index2 < poisons; index2++) {
        get_new_enemy()
    }
}

function setPlayerXY() {
    console.log(":)")
}

controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    me.setImage(assets.image`
        play-front
    `)
    setPlayerXY()
})
function choose_game_type() {
    console.log("uff")
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    on_end(false)
})
function on_end(lost: boolean) {
    
    if (lost == true) {
        game.splash("end you'r score is " + ("" + ("" + score)))
        game.reset()
    } else {
        score += 1
        me.sayText("Score: " + ("" + ("" + score)), 2000, true)
        set_game()
    }
    
}

let poisons = 0
let times = 0
let enemy2 : Sprite = null
let me : Sprite = null
let score = 0
let my_food : Sprite = null
let enemy = null
choose_game_type()
initial_state()
set_game()
