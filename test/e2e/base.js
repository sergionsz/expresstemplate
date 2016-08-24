const port = process.env.PORT || 3000;
const siteUrl = `localhost:${port}`;

module.exports = {
  // Test if site accessible
  'Access site'(browser) {
    browser
      .url(siteUrl)
      .waitForElementVisible('body', 1000)
      .assert.title('New express project');
  },
  // Test if site has content
  'Has content'(browser) {
    browser
      .assert.elementPresent('main header')
      .assert.containsText('main header h1', 'New express project')
      .end();
  },
};
