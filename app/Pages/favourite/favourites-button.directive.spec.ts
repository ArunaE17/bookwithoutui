import { FavouriteButtonDirective } from './favourites-button.directive';

describe('FavouriteButtonDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new FavouriteButtonDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
