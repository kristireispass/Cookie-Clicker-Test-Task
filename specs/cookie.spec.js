const { PAGE_URL } = process.env;

const countSelector = '#cookie-count';

describe('Cookie Clicker', () => {
  beforeAll(async () => {
    await page.goto(PAGE_URL);
  });

  it('Should be titled "Cookie Clicker"', async () => {
    await expect(page.title()).resolves.toMatch('Cookie Clicker');
  });

  it('Should increment count on every click', async () => {
    const clicks = [];

    for (let index = 0; index < 10; index += 1) {
      clicks.push(page.click('[name="cookie-increment"]'));
    }
    await Promise.all(clicks);

    await page.waitForSelector(countSelector);
    const element = await page.$(countSelector);
    const textValue = await page.evaluate((searchElement) => searchElement.textContent, element);

    expect(textValue).toEqual(clicks.length.toString());
  });
});
