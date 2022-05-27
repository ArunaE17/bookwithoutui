import { FavButtonDirective } from './fav-button.directive';

describe('FavButtonDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new FavButtonDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});