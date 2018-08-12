/* eslint-env jest */

const { Builder, By, Key, until } = require("selenium-webdriver");
require("selenium-webdriver/chrome");
require("selenium-webdriver/firefox");
require("chromedriver");
require("geckodriver");

// next index.test.js
// import { join } from "path";
// import {
//   nextServer,
//   nextBuild,
//   findPort,
//   renderViaHTTP
// } from "next-test-utils";

// const appDir = join(__dirname, "../");
// let app;
// let appPort;
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
// yep

const rootURL = "https://www.mozilla.org/en-US/";
const d = new Builder().forBrowser("chrome").build();
const waitUntilTime = 20000;
let driver, el, actual, expected;

async function getElementById(id) {
  const el = await driver.wait(until.elementLocated(By.id(id)), waitUntilTime);
  return await driver.wait(until.elementIsVisible(el), waitUntilTime);
}
async function getElementByXPath(xpath) {
  const el = await driver.wait(
    until.elementLocated(By.xpath(xpath)),
    waitUntilTime
  );
  return await driver.wait(until.elementIsVisible(el), waitUntilTime);
}

it("waits for the driver to start", () => {
  return d.then(_d => {
    driver = _d;
  });
});

it("initialises the context", async () => {
  await driver
    .manage()
    .window()
    .setPosition(0, 0);
  await driver
    .manage()
    .window()
    .setSize(1280, 1024);
  await driver.get(rootURL);
});

// describe("Production Usage", () => {
//   beforeAll(async () => {
//     await nextBuild(appDir);
//     app = nextServer({
//       dir: join(__dirname, "../"),
//       dev: false,
//       quiet: true
//     });

//     await app.prepare();
//     appPort = await findPort();
//     await app.start(appPort);
//   });
//   afterAll(() => app.close());

//   describe("With basic usage", () => {
//     it("should render the page", async () => {
//       const html = await renderViaHTTP(appPort, "/");
//       expect(html).toMatch(/Hello World/);
//     });
//   });
// });

/*
import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../pages/index.js";

describe("With Enzyme", () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(<App />);

    expect(app.find("p").text()).toEqual("Hello World!");
  });
});
*/
