describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('should have login button', async () => {
    const btn = element(by.id('login-btn'));
    await expect(btn).toBeVisible();
  });

  it('should show home screen with login user after tap login button', async () => {
    await element(by.id('login-btn')).tap();
    await expect(element(by.id('login-user-text'))).toBeVisible();
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
