import sys
import tkinter
from tkinter import filedialog

import eel

host = None
api_token = None
project_name = None
collection_name = None
excel_file_path = None
data_is_public = False


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


# set the variables from start screen here
@eel.expose
def set_auth_variables(user_input):
    global host, api_token, project_name, collection_name, excel_file_path, data_is_public

    host = user_input["host"]
    api_token = user_input["apiToken"]
    project_name = user_input["projectName"]
    collection_name = user_input["collectionName"]
    excel_file_path = user_input["excelFile"]
    data_is_public = user_input["isDataPublic"]


@eel.expose
def connect_to_cript():
    global host, api_token, project_name, collection_name, excel_file_path, data_is_public
    print(
        f"host: {host}; api_token: {api_token}; project_name: {project_name}; collection_name: {collection_name}; excel_file_path: {excel_file_path}; data_is_public: {data_is_public} ")

    # TODO needs exception handling

    #     after connection is established then navigate to loading screen
    eel.goToLoadingScreen()


#     if connection error then show the error


# this is used both for initial upload and reload
# calls excel uploader python file, navigates to loader
# then loader decides where to go depending on error or success
@eel.expose
def upload_to_cript():
    pass


# calls js code and keeps updating it with the latest percentage completed
# divide the progress by number of progress bars and Math.floor and send that to js to update
#   dividing progress by total progress bars to give an overall view of progress
#   Math.floor progress because if its 1/5 (0.2) we want to just show 0% progress
def loading_percentage():
    number_of_progress_bars = 5
    pass


# TODO cancel upload if user clicks cancel
@eel.expose
def cancel_upload():
    # TODO cancel upload
    print("hit cancel")
    sys.exit()
    # eel GUI.goToStartScreen()


#  if everything works out correctly then it navigates to the loading screen
#  might need to turn the upload button on start screen to a spinner
#  to indicate that its running if connections takes too long

@eel.expose
def read_excel_file(excel_file):
    pass


eel.init("web")

eel.start(
    'templates/start_screen.html',
    jinja_templates='templates',
    size=(800, 850),
)
