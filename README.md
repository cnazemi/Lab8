# Lab8_Starter

## Author(s):
- Cameron Nazemi

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)<br />
1


2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.<br />
No because a message feature would be an application/feature and would testable with end-to-end testing because it "tries to replicate a user’s workflow from start to finish". Sending a message to another user would be more interactive.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters <br />
Yes I would write a unit test, since its a small scale feature without many moving parts and can be executed quickly, also changes in the app in other sections wouldn't affect this testing.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?<br />
I would expect the puppeteer tests to be run without a browser UI

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case? <br />
beforeAll(async () => {
    page.click('header > img')
    await page.waitForNavigation();
    await page.waitForTimeout(500);
  });