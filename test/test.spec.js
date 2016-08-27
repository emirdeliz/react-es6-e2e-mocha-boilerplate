import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';
import chai from 'chai';

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const expect = chai.expect;
const By = webdriver.By;
const driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

describe('sample test', () => {
    before((done) => {
        driver.navigate().to('http://localhost:8080').then(() => done())
    });

    it('first test Hello, World', (done) => {
        driver.findElement(By.tagName('h1')).getInnerHtml().then((text) => {
            expect(text).to.equal('Hello, World')
            done();
        });
    });

    after((done) => {
        driver.quit().then(() => done());
    });
});
