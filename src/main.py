import eel
import tkinter
from tkinter import filedialog


# TODO this needs comments
@eel.expose
def get_excel_file_path():
    print("hello world")
    root = tkinter.Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    # allows only Excel files to be selected
    path_to_excel_file = filedialog.askopenfilename(title="Select your CRIPT Excel file",
                                                    filetypes=(
                                                        ("Excel file", "*.xlsx"),
                                                    )
                                                    )
    eel.setExcelFilePath(path_to_excel_file)


@eel.expose
def read_excel_file(excel_file):
    pass


eel.init("web")

eel.start(
    'templates/start_screen.html',
    jinja_templates='templates',
    size=(800, 850),
)
