# RN_Expense_Tracker_App by Tiago Gomes

This is a simple Expense Tracker App built with React Native. You can add, edit
and delete expenses, and also see a summary of your expenses. PS: Date input
doesn't have mask input

## Technologies Used

- [React Native](https://reactnative.dev/) for building the app
- [Expo](https://expo.io/) for using the camera and storing the expenses in the
  device's storage
- [React Navigation](https://reactnavigation.org/) for navigating between
  screens
- [React Context API](https://reactjs.org/docs/context.html) for managing the
  state of the app
- [React Native Dotenv](https://github.com/goatandsheep/react-native-dotenv) for
  using environment variables
- [Axios](https://github.com/axios/axios) for making HTTP requests to the
  Firebase Realtime Database API

## How to Execute

1. Clone the repository
2. Install the dependencies with `npm install` or `yarn install`
3. Create a `.env` file in the root directory and add your Firebase Realtime
   Database API key:
   ```
   API_URL=your_firebase_realtime_database_api_url
   ```
4. Run the app with `npx expo start`
5. Open the app on your device or simulator

## Screenshots

![Recent Expenses Screen](./printscreens/Recent%20Expenses.png)
![All Expenses Screen](./printscreens/All%20Expenses.png)
![Add Expense Screen](./printscreens/Add%20Expense.png)
![Error Adding Expense](./printscreens/Error%20Adding%20Expense.png)
![Edit Expense Screen](./printscreens/Edit%20Expense.png)
