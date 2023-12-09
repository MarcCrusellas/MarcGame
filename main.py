@namespace
class SpriteKind:
    humb = SpriteKind.create()
def set_game():
    global enemy
    c.set_position(randint(0, 160), randint(0, 120))
    if score == 0:
        controller.move_sprite(a, 100, 100)
        a.set_stay_in_screen(True)
    for index in range(score):
        if randint(0, 3) == 0:
            enemy = sprites.create(assets.image("""
                poison
            """), SpriteKind.enemy)
            enemy.set_position(randint(0, 160), randint(0, 120))

def on_up_pressed():
    a.set_image(assets.image("""
        play-p2
    """))
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    a.set_image(assets.image("""
        play-p1
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_overlap(sprite2, otherSprite2):
    global score
    on_end(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

def on_right_pressed():
    a.set_image(assets.image("""
        play-p3
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def initial_state():
    global a, c, poisons, enemy
    scene.set_background_image(assets.image("""
        forest
    """))
    a = sprites.create(assets.image("""
        play-front
    """), SpriteKind.player)
    c = sprites.create(assets.image("""
        burger
    """), SpriteKind.food)
    poisons = game.ask_for_number("how many initial poisons?", 2)
    for index2 in range(poisons):
        enemy = sprites.create(assets.image("""
            poison
        """), SpriteKind.enemy)
        enemy.set_position(randint(0, 160), randint(0, 120))

def on_down_pressed():
    a.set_image(assets.image("""
        play-front
    """))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def choose_game_type():
    print("uff")

def on_on_overlap2(sprite, otherSprite):
    global score
    on_end(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

def on_end(lost: bool):
    global score
    if lost == True:
        game.splash("end you'r score is " + ("" + str(score)))
        
        game.reset()
    else:
        score += 1
        a.say_text("Score: " + ("" + str(score)), 2000, True)
        set_game()
poisons = 0
enemy: Sprite = None
a: Sprite = None
score = 0
c: Sprite = None
choose_game_type()
initial_state()
set_game()