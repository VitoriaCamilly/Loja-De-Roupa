import { VestidosModule } from './vestidos.module';

describe('VestidosModule', () => {
  let vestidosModule: VestidosModule;

  beforeEach(() => {
    vestidosModule = new VestidosModule();
  });

  it('should create an instance', () => {
    expect(vestidosModule).toBeTruthy();
  });
});
