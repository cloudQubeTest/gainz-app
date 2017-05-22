import { GainzAppPage } from './app.po';

describe('gainz-app App', () => {
  let page: GainzAppPage;

  beforeEach(() => {
    page = new GainzAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
