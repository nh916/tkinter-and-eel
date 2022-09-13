import eel


@eel.expose
def get_excel_file_path():
    pass


@eel.expose
def read_excel_file(excel_file):
    print("hello world")
    print(excel_file)


eel.init("web")

eel.start(
    'templates/start_screen.html',
    jinja_templates='templates',
    size=(800, 850),
)
