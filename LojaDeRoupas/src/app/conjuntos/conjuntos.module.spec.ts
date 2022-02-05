import { ConjuntosModule } from './conjuntos.module';

describe('ConjuntosModule', () => {
  let conjuntosModule: ConjuntosModule;

  beforeEach(() => {
    conjuntosModule = new ConjuntosModule();
  });

  it('should create an instance', () => {
    expect(conjuntosModule).toBeTruthy();
  });
});
