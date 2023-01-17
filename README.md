# Learning TypeScript
---

*** commands using a powershell terminal ***

Install Node.js
    Install latest stable release
    If already installed, check version
        Node version should be > 18 at the time of this file creation
        Run command:            node --version
  
  
Create folder structure for project
    Example: ~/Angular/TypeScriptDemo
  
  
Create a package file in project folder (package.json)
    This will create a package.json file, can use defaults for now
    Run command:                npm init
  
  
Install TypeScript locally:     npm i typescript --save-dev
    Check version locally:      npm ls typescript or npx tsc -v
Install TypeScript globally:    npm install -g typescript
    Check version globally:     tsc -v
  
  
Create a TypeScript config file (tsconfig.json)
    This will create a tsconfig.json file, can use defaults for now
    Can change target as needed in the tsconfig.json file
    Run command:                npx tsc --init
  
  
Create a TypeScript file, Ex. testtypescript.ts
    Add basic JavaScript code as a test script, Ex. let fakeString = 'Fake String';
  
  
Compile code which will generate a testtypescript.js file
    Run command:                npx tsc
  
  
Run testtypescript.js file:
    Run command:                node testtypescript
