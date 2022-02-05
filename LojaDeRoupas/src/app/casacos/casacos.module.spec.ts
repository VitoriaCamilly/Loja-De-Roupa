import { CasacosModule } from './casacos.module';

describe('CasacosModule', () => {
  let casacosModule: CasacosModule;

  beforeEach(() => {
    casacosModule = new CasacosModule();
  });

  it('should create an instance', () => {
    expect(casacosModule).toBeTruthy();
  });
});
