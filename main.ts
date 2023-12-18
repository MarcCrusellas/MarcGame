namespace SpriteKind {
    export const humb = SpriteKind.create()
}
function set_game () {
    tiles.placeOnTile(my_food, tiles.getTileLocation(randint(1, 24), randint(1, 24)))
    if (score == poisons) {
        controller.moveSprite(me, 100, 100)
        me.setStayInScreen(true)
    }
    for (let index = 0; index < score * 3; index++) {
        get_new_enemy()
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    me.setImage(assets.image`play-p2`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    atackB()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let projectile: Sprite;
if (me.vx != 0 || me.vy != 0) {
        if (me.vx != 0 && me.vy != 0) {
            projectile = sprites.createProjectileFromSprite(assets.image`dart`, me, me.vx + get_same_sign(30, me.vx), me.vy + get_same_sign(30, me.vy))
        } else if (me.vx != 0) {
            projectile = sprites.createProjectileFromSprite(assets.image`dart`, me, me.vx + get_same_sign(30, me.vx), me.vy)
        } else {
            projectile = sprites.createProjectileFromSprite(assets.image`dart`, me, me.vx, me.vy + get_same_sign(30, me.vy))
        }
    }
})
function get_new_enemy () {
    enemy = sprites.create(assets.image`poison`, SpriteKind.Enemy)
    statEnemy = statusbars.create(20, 2, StatusBarKind.EnemyHealth)
    statEnemy.attachToSprite(enemy)
    tiles.placeOnTile(enemy, tiles.getTileLocation(randint(1, 24), randint(1, 24)))
    if (me.overlapsWith(enemy)) {
        enemy.destroy()
        if (times < 10) {
            times = times + 1
            get_new_enemy()
        } else {
            times = 0
        }
    } else {
        times = 0
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    me.setImage(assets.image`play-p1`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    on_end(true)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(status.spriteAttachedTo(), effects.fire, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    me.setImage(assets.image`play-p3`)
})
function initial_state () {
    tiles.setCurrentTilemap(tilemap`level`)
    scene.setBackgroundImage(assets.image`lib2`)
    scene.cameraFollowSprite(me)
    poisons = game.askForNumber("How many initial poisons?", 2)
    for (let index = 0; index < poisons; index++) {
        get_new_enemy()
    }
    score = poisons
}
function atackB () {
    projectileB = sprites.createProjectileFromSprite(assets.image`dart`, me, 10, 10)
    projectileB = sprites.createProjectileFromSprite(assets.image`dart`, me, -10, -10)
    projectileB = sprites.createProjectileFromSprite(assets.image`dart`, me, -10, 10)
    projectileB = sprites.createProjectileFromSprite(assets.image`dart`, me, 10, -10)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    me.setImage(assets.image`play-front`)
})
function get_same_sign (num: number, num_to_cpy_sign: number) {
    if (num == 0 || num_to_cpy_sign == 0) {
        return num
    }
    if (num_to_cpy_sign >= 0) {
        if (num >= 0) {
            return num
        } else {
            return num * -1
        }
    } else if (num >= 0) {
        return num * -1
    } else {
        return num
    }
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
        effects.confetti.startScreenEffect(200)
        set_game()
        music.play(music.stringPlayable("C5 E E C5 E E D C ", 150), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("B A A G A A B A ", 225), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 300), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G F E F G F E F ", 300), music.PlaybackMode.UntilDone)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite3, otherSprite3) {
    enemyStats = statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite3)
    if (enemyStats != null) {
        enemyStats.value += -50
    } else {
        sprite3.sayText("nope")
    }
    sprites.destroy(sprite3)
})
let enemyStats: StatusBarSprite = null
let projectileB: Sprite = null
let times = 0
let statEnemy: StatusBarSprite = null
let enemy: Sprite = null
let poisons = 0
let score = 0
let my_food: Sprite = null
let me: Sprite = null
music.setVolume(255)
me = sprites.create(assets.image`play-front`, SpriteKind.Player)
my_food = sprites.create(assets.image`burger`, SpriteKind.Food)
initial_state()
set_game()
forever(function () {
    music.play(music.stringPlayable("B A D E F A A F ", 120), music.PlaybackMode.UntilDone)
})
