@namespace
class SpriteKind:
    humb = SpriteKind.create()
def set_game():
    tiles.place_on_tile(my_food,
        tiles.get_tile_location(randint(1, 24), randint(1, 24)))
    if score == poisons:
        controller.move_sprite(me, 100, 100)
        me.set_stay_in_screen(True)
    for index in range(score * 3):
        get_new_enemy()

def on_up_pressed():
    me.set_image(assets.image("""
        play-p2
    """))
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_b_pressed():
    atackB()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    if me.vx != 0 or me.vy != 0:
        if me.vx != 0 and me.vy != 0:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                    dart
                """),
                me,
                me.vx + get_same_sign(30, me.vx),
                me.vy + get_same_sign(30, me.vy))
        elif me.vx != 0:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                    dart
                """),
                me,
                me.vx + get_same_sign(30, me.vx),
                me.vy)
        else:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                    dart
                """),
                me,
                me.vx,
                me.vy + get_same_sign(30, me.vy))
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def get_new_enemy():
    global enemy, statEnemy, times
    enemy = sprites.create(assets.image("""
        poison
    """), SpriteKind.enemy)
    statEnemy = statusbars.create(20, 2, StatusBarKind.enemy_health)
    statEnemy.attach_to_sprite(enemy)
    tiles.place_on_tile(enemy,
        tiles.get_tile_location(randint(1, 24), randint(1, 24)))
    if me.overlaps_with(enemy):
        enemy.destroy()
        if times < 10:
            times = times + 1
            get_new_enemy()
        else:
            times = 0
    else:
        times = 0

def on_left_pressed():
    me.set_image(assets.image("""
        play-p1
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_overlap(sprite2, otherSprite2):
    on_end(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

def on_on_zero(status):
    sprites.destroy(status.sprite_attached_to(), effects.fire, 100)
statusbars.on_zero(StatusBarKind.enemy_health, on_on_zero)

def on_right_pressed():
    me.set_image(assets.image("""
        play-p3
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def initial_state():
    global poisons, score
    tiles.set_current_tilemap(tilemap("""
        level
    """))
    scene.set_background_image(assets.image("""
        lib2
    """))
    scene.camera_follow_sprite(me)
    poisons = game.ask_for_number("how many initial poisons?", 2)
    for index2 in range(poisons):
        get_new_enemy()
    score = poisons
def atackB():
    global projectileB
    projectileB = sprites.create_projectile_from_sprite(assets.image("""
        dart
    """), me, 10, 10)
    projectileB = sprites.create_projectile_from_sprite(assets.image("""
        dart
    """), me, -10, -10)
    projectileB = sprites.create_projectile_from_sprite(assets.image("""
        dart
    """), me, -10, 10)
    projectileB = sprites.create_projectile_from_sprite(assets.image("""
        dart
    """), me, 10, -10)

def on_down_pressed():
    me.set_image(assets.image("""
        play-front
    """))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def get_same_sign(num: number, num_to_cpy_sign: number):
    if num == 0 or num_to_cpy_sign == 0:
        return num
    if num_to_cpy_sign >= 0:
        if num >= 0:
            return num
        else:
            return num * -1
    elif num >= 0:
        return num * -1
    else:
        return num

def on_on_overlap2(sprite, otherSprite):
    on_end(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

def on_end(lost: bool):
    global score
    if lost == True:
        game.splash("end you'r score is " + ("" + str(score)))
        game.reset()
    else:
        score += 1
        me.say_text("Score: " + ("" + str(score)), 2000, True)
        effects.confetti.start_screen_effect(200)
        music.play(music.string_playable("C5 E E C5 E E D C ", 150),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.string_playable("B A A G A A B A ", 225),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.string_playable("C5 B C5 B C5 B C5 B ", 300),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.string_playable("G F E F G F E F ", 300),
            music.PlaybackMode.UNTIL_DONE)
        set_game()

def on_on_overlap3(sprite3, otherSprite3):
    global enemyStats
    enemyStats = statusbars.get_status_bar_attached_to(StatusBarKind.enemy_health, otherSprite3)
    if enemyStats != None:
        enemyStats.value += -50
    else:
        sprite3.say_text("nope")
    sprites.destroy(sprite3)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap3)

enemyStats: StatusBarSprite = None
projectileB: Sprite = None
times = 0
statEnemy: StatusBarSprite = None
enemy: Sprite = None
poisons = 0
score = 0
me: Sprite = None
my_food: Sprite = None
music.set_volume(255)
my_food = sprites.create(assets.image("""
    burger
"""), SpriteKind.food)
me = sprites.create(assets.image("""
    play-front
"""), SpriteKind.player)
initial_state()
set_game()

def on_forever():
    music.play(music.string_playable("B A D E F A A F ", 120),
        music.PlaybackMode.UNTIL_DONE)
forever(on_forever)
