const { PAGE_URL } = process.env;

const countSelector = '#cookie-count';
const secondSelector = '#cookies-per-second';
const clickSelector = '#cookies-per-click';

describe('Cookie Clicker', () => {
  beforeAll(async () => {
    await page.goto(PAGE_URL, { waitUntil: 'networkidle2' });
  });

  it('Should be titled "Cookie Clicker"', async () => {
    await expect(page.title()).resolves.toMatch('Cookie Clicker');
  });

  it('Should increment count on every click', async () => {
    for (let index = 0; index < 25; index += 1) {
      await page.click('[name="cookie-increment"]');
    }

    await page.waitForSelector(countSelector);
    const element = await page.$(countSelector);
    const textValue = await page.evaluate((searchElement) => searchElement.textContent, element);

    expect(textValue).toEqual('25');
  });

  it('Should increment text for cookies per click', async () => {
    await page.click('[name="click-increment-25"]');

    await page.waitForSelector(clickSelector);
    const element = await page.$(clickSelector);
    const textValue = await page.evaluate((searchElement) => searchElement.textContent, element);

    expect(textValue).toEqual('16');
  });

  it('Should add more cookies if cookies per click is higher', async () => {
    for (let index = 0; index < 32; index += 1) {
      await page.click('[name="cookie-increment"]');
    }

    await page.waitForSelector(countSelector);
    const element = await page.$(countSelector);
    const textValue = await page.evaluate((searchElement) => searchElement.textContent, element);

    expect(textValue).toEqual('512');
  });

  it('Should increment text for cookies per second', async () => {
    await page.click('[name="second-increment-500"]');

    await page.waitForSelector(secondSelector);
    const element = await page.$(secondSelector);
    const textValue = await page.evaluate((searchElement) => searchElement.textContent, element);

    expect(textValue).toEqual('5');
  });

  it('Should increment count for cookies per second', async () => {
    // Timeout for 3 seconds to get cookies
    await new Promise((r) => setTimeout(r, 3000));
    
    await page.waitForSelector(countSelector);
    const element = await page.$(countSelector);
    const textValue = await page.evaluate((searchElement) => searchElement.textContent, element);

    expect(textValue).toEqual('27');
  });

  it('Should reset count, cookies per second and cookies per click', async () => {
    await page.click('[name="restart"]');

    await page.waitForSelector(countSelector);
    const element = await page.$(countSelector);
    const textValue = await page.evaluate((searchElement) => searchElement.textContent, element);

    expect(textValue).toEqual('0');

    await page.waitForSelector(secondSelector);
    const secondElement = await page.$(secondSelector);
    const secondtextValue = await page.evaluate((searchElement) => searchElement.textContent, secondElement);

    expect(secondtextValue).toEqual('0');

    await page.waitForSelector(clickSelector);
    const clickElement = await page.$(clickSelector);
    const clicktextValue = await page.evaluate((searchElement) => searchElement.textContent, clickElement);

    expect(clicktextValue).toEqual('1');
  });

});
