namespace SpriteKind {
    export const humb = SpriteKind.create()
}

function set_game() {
    
    c.setPosition(randint(0, 160), randint(0, 120))
    if (score == 0) {
        controller.moveSprite(a, 100, 100)
        a.setStayInScreen(true)
    }
    
    for (let index = 0; index < score; index++) {
        if (randint(0, 3) == 0) {
            enemy = sprites.create(assets.image`
                poison
            `, SpriteKind.Enemy)
            enemy.setPosition(randint(0, 160), randint(0, 120))
        }
        
    }
}

controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    a.setImage(assets.image`
        play-p2
    `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    a.setImage(assets.image`
        play-p1
    `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap(sprite2: Sprite, otherSprite2: Sprite) {
    
    on_end(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    a.setImage(assets.image`
        play-p3
    `)
})
function initial_state() {
    
    scene.setBackgroundImage(assets.image`
        forest
    `)
    a = sprites.create(assets.image`
        play-front
    `, SpriteKind.Player)
    c = sprites.create(assets.image`
        burger
    `, SpriteKind.Food)
    poisons = game.askForNumber("how many initial poisons?", 2)
    for (let index2 = 0; index2 < poisons; index2++) {
        enemy = sprites.create(assets.image`
            poison
        `, SpriteKind.Enemy)
        enemy.setPosition(randint(0, 160), randint(0, 120))
    }
}

controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    a.setImage(assets.image`
        play-front
    `)
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
        a.sayText("Score: " + ("" + ("" + score)), 2000, true)
        set_game()
    }
    
}

let poisons = 0
let enemy : Sprite = null
let a : Sprite = null
let score = 0
let c : Sprite = null
choose_game_type()
initial_state()
set_game()
