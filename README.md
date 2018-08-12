# selenium-next

To run jest / selenium combo:  
```
npm run ci
```

To run cypress tests:  
```
npm run ci-cypress
```

To run the cypress electron app:  
```
npm run dev

npx cypress open
```

### Get Jest to play nice with NextJS
* https://github.com/zeit/next.js/tree/master/examples/with-jest
* https://github.com/zeit/next.js/issues/4263

```npm i --save-dev babel-core@7.0.0-bridge.0 babel-jest jest react-addons-test-utils react-test-renderer enzyme enzyme-adapter-react-16
```

```
"babel-core": "7.0.0-bridge.0",
"babel-jest": "22.4.3",
"enzyme": "3.2.0",
"enzyme-adapter-react-16": "1.1.1",
"jest": "22.0.1",
"react-addons-test-utils": "15.6.2",
"react-test-renderer": "16.2.0"
```

### Describe how to run server and tests and shutdown
https://github.com/cypress-io/cypress-documentation/issues/355

> Most CI providers will automatically kill background processes so you don’t have to worry about cleaning up your server process once Cypress finishes.

> However, if you’re running this script locally you’ll have to do a bit more work to collect the backgrounded PID and then kill it after cypress run.
https://docs.cypress.io/guides/guides/continuous-integration.html#To-record-tests-running  


https://docs.cypress.io/guides/references/best-practices.html#Web-Servers
> Best Practice: Start a web server prior to running Cypress in the Test Runner or headless mode.
