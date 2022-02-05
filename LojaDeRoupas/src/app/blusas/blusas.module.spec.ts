import { BlusasModule } from './blusas.module';

describe('BlusasModule', () => {
  let blusasModule: BlusasModule;

  beforeEach(() => {
    blusasModule = new BlusasModule();
  });

  it('should create an instance', () => {
    expect(blusasModule).toBeTruthy();
  });
});
