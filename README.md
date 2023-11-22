# 📻 Global Radio Stream Viewer Task 

This project is a web application designed for global listeners who want to access and listen to various radio streams. Utilizing specific API endpoints, this app lists radio stations and provides additional information, including stream URLs for each station.

## 🌟 Features

- **📡 Radio Station Listing:** Display a list of radio stations from a predefined API.
- **🔍 Station Details:** Fetch and display additional information for each station.
- **📱 Responsive Design:** Ensures a smooth user experience across various devices.
- **🧪 Basic Unit Testing:** Includes tests for key components and functionalities.

## 📚 API Endpoints

- **List Stations:** `https://75750e17-4c6f-43f1-9a65-e4290c99700a.mock.pstmn.io/stations`
- **Station Details:** `https://75750e17-4c6f-43f1-9a65-e4290c99700a.mock.pstmn.io/station/{slug}` (e.g., `.../station/capital`)

## 🚀 Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AdrianGeorgeM/global-fe-tech-test.git
   ```
2. Navigate to the project directory:
   ```bash
   cd global-fe-tech-test
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

- **Development Mode:** 
  ```bash
  npm start
  ```
  This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- **Build for Production:** 
  ```bash
  npm run build
  ```
  Builds the app for production to the `build` folder.

## 🧪 Testing

Run the following command to execute unit tests:

```bash
npm test
```

## 🌐 Deployment

For more information on deployment, refer to the [Create React App Deployment Documentation](https://facebook.github.io/create-react-app/docs/deployment).

## 📖 Learn More

To learn more about React and Create React App, visit the [React Documentation](https://reactjs.org/) and the [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started).
