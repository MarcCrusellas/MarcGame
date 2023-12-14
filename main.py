@namespace
class SpriteKind:
    humb = SpriteKind.create()
def set_game():
    my_food.set_position(randint(0, 160), randint(0, 120))
    if score == 0:
        controller.move_sprite(me, 100, 100)
        me.set_stay_in_screen(True)
    for index in range(score):
        if randint(0, 3) == 0:
            get_new_enemy()


def on_up_pressed():
    me.set_image(assets.image("""
        play-p2
    """))
    setPlayerXY()
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def get_new_enemy():
    global enemy2, times
    enemy2 = sprites.create(assets.image("""
        poison
    """), SpriteKind.enemy)
    enemy2.set_position(randint(0, 160), randint(0, 120))
    if me.overlaps_with(enemy2):
        enemy2.destroy()
        if times > 10:
            times = times + 1
            get_new_enemy()

def on_left_pressed():
    me.set_image(assets.image("""
        play-p1
    """))
    setPlayerXY()
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_overlap(sprite2, otherSprite2):
    on_end(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

def on_right_pressed():
    me.set_image(assets.image("""
        play-p3
    """))
    setPlayerXY()
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def initial_state():
    global me, my_food, poisons
    scene.set_background_image(assets.image("""
        forest
    """))
    me = sprites.create(assets.image("""
        play-front
    """), SpriteKind.player)
    my_food = sprites.create(assets.image("""
        burger
    """), SpriteKind.food)
    poisons = game.ask_for_number("how many initial poisons?", 2)
    for index2 in range(poisons):
        get_new_enemy()
def setPlayerXY():
    print(":)")

def on_down_pressed():
    me.set_image(assets.image("""
        play-front
    """))
    setPlayerXY()
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def choose_game_type():
    print("uff")

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
        set_game()
poisons = 0
times = 0
enemy2: Sprite = None
me: Sprite = None
score = 0
my_food: Sprite = None
enemy = None
choose_game_type()
initial_state()
set_game()