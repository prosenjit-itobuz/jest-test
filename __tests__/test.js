require('dotenv').config()
const { record, replay, assertVisual } = require('../jest/utils')
const devices = require('puppeteer/DeviceDescriptors')
const { toMatchImageSnapshot } = require('jest-image-snapshot')

// const faker = require('faker');

async function screenshotDOMElement(opts = {}) {
  const padding = 'padding' in opts ? opts.padding : 0;
  const path = 'path' in opts ? opts.path : null;
  const selector = opts.selector;

  if (!selector)
      throw Error('Please provide a selector.');

  const rect = await page.evaluate(selector => {
      const element = document.querySelector(selector);
      if (!element)
          return null;
      const {x, y, width, height} = element.getBoundingClientRect();
      return {left: x, top: y, width, height, id: element.id};
  }, selector);

  if (!rect)
      throw Error(`Could not find element that matches selector: ${selector}.`);

  return await page.screenshot({
      path,
      clip: {
          x: rect.left - padding,
          y: rect.top - padding,
          width: rect.width + padding * 2,
          height: rect.height + padding * 2
      }
  });
}



describe('test module', () => {
  test('simple :)', async () => {
    expect(4).toBe(4)
  })

  it("Landing Page", async () => {
    await page.goto('https://www.google.com/', {waitUntil: "networkidle0"})
    const screenshot = await screenshotDOMElement({
      path: 'element.png',
      selector: '#sbtc'
    });
    expect(screenshot).toMatchImageSnapshot()
  })
})

