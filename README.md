## Learning TypeScript from scratch with VSCode
  
TypeScript documentation can be found [here](https://www.typescriptlang.org/docs).  
TypeScript playground can be found [here](https://www.typescriptlang.org/play).  
  

### Commands shown using a powershell terminal
---
Install the latest stable release of [Node.js](https://nodejs.org/en/download/)  
If already installed, check the version by running command:  `node -v`  
Node version should be > 18 at the time of this file creation  
This will also install the node package manager (npm)  
Check the npm version by running command: `npm -v`  
Node package manger version should be > 9.2 at the time of this file creation  
  
  
Create folder structure for project  
Example: `/LearningThings/LearningTypeScript`  
  
  
Create a package file in project folder (package.json)  
Run command: `npm init`  
This will create a package.json file, can use defaults for now  
  
Install TypeScript globally: `npm i -g typescript`  
Check version globally: `tsc -v`  or `npx tsc -v`  
Install TypeScript to local project (from project folder): `npm i typescript --save-dev`  
Check version locally: `npm ls typescript or npx tsc -v`  
(npx is the Node Package Executor)  
  
  
Create a TypeScript config file (tsconfig.json)  
Run command: `npx tsc --init`  
This will create a tsconfig.json file  
Use defaults for now, but can change JavaScript target version and other configurations.  
  
  
Create a TypeScript file, Ex. TestTypeScript.ts  
Add some basic JavaScript code as a test script  
Example: 
```  
 let fakeString = 'Fake String';  
 console.log(fakeString);  
```  
  
  
Compile the script which will generate a TestTypeScript.js JavaScript file  
Run command: `npx tsc`  
  
  
Run TestTypeScript.js file    
Run command: `node testtypescript`  
  
  
