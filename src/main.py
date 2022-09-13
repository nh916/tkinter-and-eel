import eel
import tkinter
from tkinter import filedialog


@eel.expose
def get_excel_file_path():
    root = tkinter.Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    folder = filedialog.askdirectory()
    # return folder


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
