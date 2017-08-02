import { FvRestGithubPage } from './app.po';

describe('fv-rest-github App', () => {
  let page: FvRestGithubPage;

  beforeEach(() => {
    page = new FvRestGithubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
