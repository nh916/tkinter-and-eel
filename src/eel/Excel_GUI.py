import sys
import tkinter
from tkinter import filedialog

import eel


class ExcelUploaderApp:
    def __init__(self):
        # initialize eel
        self.eel = eel
        self.eel.init("../web")

        # user input
        self.host = None
        self.api_token = None
        self.project_name = None
        self.collection_name = None
        self.data_is_public = None
        self.excel_file_path = None

    # start app
    def start_app(self):
        self.eel.start(
            'templates/start_screen.html',
            jinja_templates='templates',
            size=(800, 850),
        )

    # opens up tkinter dialog box to locate Excel file path, captures the absolute path,
    # and calls a JS function to set the absolute Excel file path in the UI for user to see
    def get_excel_file_path(self):
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
        self.eel.setExcelFilePath(path_to_excel_file)

    # is called with dict of user inputs to give to Excel Uploader code to connect to CRIPT and upload
    def submit_start_screen_form(self, user_input):
        self.host = user_input["host"]
        self.api_token = user_input["apiToken"]
        self.project_name = user_input["projectName"]
        self.collection_name = user_input["collectionName"]
        self.data_is_public = user_input["isDataPublic"]
        self.excel_file_path = user_input["excel_file_path"]

        # calling routes.js to switch to loading screen
        self.eel.goToLoadingScreen()

    # calls js code and keeps updating it with the latest percentage completed
    # divide the progress by number of progress bars and Math.floor and send that to js to update
    #   dividing progress by total progress bars to give an overall view of progress
    #   Math.floor progress because if its 1/5 (0.2) we want to just show 0% progress
    def loading_percentage(self):
        number_of_progress_bars = 5
        pass

    # TODO cancel upload if user clicks cancel
    def cancel_upload(self):
        # TODO cancel upload
        print("hit cancel")
        sys.exit()
        # eel.goToStartScreen()

    #  if everything works out correctly then it navigates to the loading screen
    #  might need to turn the upload button on start screen to a spinner
    #  to indicate that its running if connections takes too long

    def read_excel_file(excel_file):
        pass

    def show_errors(self):
        pass

    def retry_uploading(self):
        pass


if __name__ == "__main__":
    app = ExcelUploaderApp()

    eel.expose(app.get_excel_file_path)
    eel.expose(app.submit_start_screen_form)
    eel.expose(app.cancel_upload)
    eel.expose(app.read_excel_file)

    app.start_app()
