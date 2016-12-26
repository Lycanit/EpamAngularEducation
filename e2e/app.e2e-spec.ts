import { EducationPage } from './app.po';

describe('education App', function() {
  let page: EducationPage;

  beforeEach(() => {
    page = new EducationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
