import { PgprincipalModule } from './pgprincipal.module';

describe('PgprincipalModule', () => {
  let pgprincipalModule: PgprincipalModule;

  beforeEach(() => {
    pgprincipalModule = new PgprincipalModule();
  });

  it('should create an instance', () => {
    expect(pgprincipalModule).toBeTruthy();
  });
});
