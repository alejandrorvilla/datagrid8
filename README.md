# Overview
This project is a front-end application built with React and Lerna. Please note that the application uses **_@mui/x-data-grid-premium_** version **_8.5.1_** and fail. Use **_@mui/x-data-grid-premium_** and **_@mui/x-data-grid-generator_** version **_7.29.2_** to work.

# Installation Steps

## Initial Setup
1. Install dependencies in the root directory:
   
   ```npm install```
   
## Running the Application
2. Start the application:
  
  ```npm start```
  
3. Open your browser and navigate to:
  
  ```http://localhost:8082/```

# Known Issues
When you first open the application in the browser, you may see a blank screen with console errors. This is due to compatibility issues with @mui/x-data-grid-premium version 8.5.1.

# Rebuilding the Application
If you need to rebuild the application:

1. Make the modifications. In **_./src/app/package.json_** With **_@mui/x-data-grid-premium_** and **_@mui/x-data-grid-generator_** version **_7.29.2_** works.

2. Install dependencies in the app directory:
   
   ```cd ./src/app/```
   
   ```npm install```

3. Return to the root directory and execute the build script from the root directory:

   ```cd ../..```

   ```sh build```
   
5. Clear your browser cache before reloading the application.

# Configuration
You can modify the port where the application runs by editing the **_./index.js_** file. Look for the port configuration and change it to your desired port number.
