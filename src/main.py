import eel

eel.init("web")

eel.start(
    'templates/start_screen.html',
    jinja_templates='templates',
    size=(800, 950),
)
