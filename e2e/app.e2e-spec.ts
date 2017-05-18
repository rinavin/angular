import { Magic1Page } from './app.po';

describe('magic1 App', function() {
  let page: Magic1Page;

  beforeEach(() => {
    page = new Magic1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
