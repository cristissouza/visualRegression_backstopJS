// onReady example (puppeteer engine)
module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // clicar no elemento
  page.click("a.js-fh5co-nav-toggle.fh5co-nav-toggle");

  // espera em ms
  await page.waitFor(5000);
};
