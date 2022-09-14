import eel
import tkinter
from tkinter import filedialog


# TODO this needs comments
# opens up tkinter dialog box to locate excel file path, captures the absolute path,
# and calls a JS function to set the absolute Excel file path in the UI
@eel.expose
def get_excel_file_path():
    root = tkinter.Tk()
    # TODO add icon for dialog box
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    # allows only Excel files to be selected
    path_to_excel_file = filedialog.askopenfilename(title="Select your CRIPT Excel file",
                                                    filetypes=(
                                                        ("Excel file", "*.xlsx"),
                                                    )
                                                    )
    eel.setExcelFilePath(path_to_excel_file)


# sends it a json of user inputs to give to Excel Uploader code to connect to CRIPT and upload
@eel.expose
def submit_start_screen_form(user_input):
    print(user_input)

    # calling routes.js to switch to loading screen
    eel.goToLoadingScreen()


# calls js code and keeps updating it with the latest percentage completed
# divide the progress by number of progress bars and Math.floor and send that to js to update
#   dividing progress by total progress bars to give an overall view of progress
#   Math.floor progress because if its 1/5 (0.2) we want to just show 0% progress
def loading_percentage():
    number_of_progress_bars = 5
    pass


#  if everything works out correctly then it navigates to the loading screen
#  might need to turn the upload button on start screen to a spinner
#  to indicate that its running if connections takes too long

@eel.expose
def read_excel_file(excel_file):
    pass


eel.init("web")

eel.start(
    'templates/loading_screen.html',
    jinja_templates='templates',
    size=(800, 850),
)
