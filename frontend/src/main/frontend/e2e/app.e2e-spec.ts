import { GotravelPage } from './app.po';

describe('starter App', function() {
  let page: GotravelPage;

  beforeEach(() => {
    page = new GotravelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
