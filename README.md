# internship-aqa

## Features

- In folder POM - Web UI testing (Playwright, Cypress, Webdriver, Selenium Webdriver)
- In folder api-test - SuperTest (+Mocha/Chai) test (https://catfact.ninja/)
- In folder api-user - NodeJS api using MySQL DB
- In folder design-patters - Implementation  of design patterns 
- In folder test-runners - Mocha/Chai test

## Run
To run Playwright tests:
```
$ npx playwright test login.spec.ts --headed
```
To run Cypress tests:
```
$ cd pom 
$ npx cypress open
```
To run Webdriver tests:
```
$ npx playwright test login.spec.ts --headed
```
To run Selenium Webdriver tests:
```
$ npx playwright test login.spec.ts --headed
```
To run NodeJS API at first you need run MySQL DB and after run server:
```
$ node .\api-user\server.js
```
Open allure reports:  
```
$ npx allure generate
$ npx allure open allure-report
```


## Contact
Created by [Nikita Kirpichev](mailto:nalkire17@gmail.com) - feel free to contact me!
