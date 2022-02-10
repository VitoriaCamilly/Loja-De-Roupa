import { PijamaModule } from './pijama.module';

describe('PijamaModule', () => {
  let pijamaModule: PijamaModule;

  beforeEach(() => {
    pijamaModule = new PijamaModule();
  });

  it('should create an instance', () => {
    expect(pijamaModule).toBeTruthy();
  });
});
