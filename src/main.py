import eel

eel.init("web")

eel.start(
    'templates/error_screen.html',
    jinja_templates='templates'
)
