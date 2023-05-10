# AWS S3 File Explorer

![alt text](https://github.com/ilievZlatko/file-explorer-s3/blob/main/screenshots/Screenshot%202023-05-10%20at%2014.00.12.png?raw=true)

This project goal is to allow users to manage an AWS S3 bucket in a form of well known file explorer UI.
It uses the `@aws-sdk/client-s3` npm package, which works directly with the AWS API.

## Instructions to use the app

1. Initial screen:

When the app is first loaded on [http://localhost:3000](http://localhost:3000), use is prompted to enter AWS S3 credentials.

![alt text](https://github.com/ilievZlatko/file-explorer-s3/blob/main/screenshots/Screenshot%202023-05-10%20at%2014.00.34.png?raw=true)

The app then checks if the credentials provided are valid and if check passes successfully user is landed on the explorer page.
On the explorer page on the left side there is a file tree that displays all the available files and directories under the root drive (s3 bucket).

![alt text](https://github.com/ilievZlatko/file-explorer-s3/blob/main/screenshots/Screenshot%202023-05-10%20at%2014.00.12.png?raw=true)

2. File tree:

- On the file tree the user can open/close a folder by `left-clicking` on the folder icon.
This will expand/collapse all the files and folders under the current open folder.

- On `double-click` over the folder text the folder is selected and user can see the content of the folder in the file explorer on the right side.
- On `right-click` with the mouse over the folder and text in the file tree, the context menu is shown.
The context menu contains 3 options and user can choose an action

![alt text](https://github.com/ilievZlatko/file-explorer-s3/blob/main/screenshots/Screenshot%202023-05-10%20at%2014.02.26.png?raw=true)

After selecting an action the user will be prompted to enter file name or folder name and text.

![alt text](https://github.com/ilievZlatko/file-explorer-s3/blob/main/screenshots/Screenshot%202023-05-10%20at%2014.02.52.png?raw=true)

If the delete action is selected, the file or folder will be deleted, together with all sub-folders and sub-files under it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
