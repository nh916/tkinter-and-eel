import eel

eel.init("web")

eel.start(
    'templates/success_screen.html',
    jinja_templates='templates'
)
