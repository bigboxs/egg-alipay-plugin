'use strict';
const AlipaySDK = require('alipay-sdk').default;

module.exports = app => {
  app.beforeStart(async () => {
    const { alipayPlugin } = app.config || {};

    if (alipayPlugin && alipayPlugin.appId && alipayPlugin.privateKey) {
      let options = {
        appId: alipayPlugin.appId,
        privateKey: alipayPlugin.privateKey,
        alipayPublicKey: alipayPlugin.alipayPublicKey || '',
        encryptKey: alipayPlugin.encryptKey || '',
        gateway: alipayPlugin.gateway || 'https://openapi.alipay.com/gateway.do',
      };

      if (alipayPlugin.useCert) {
        if (alipayPlugin.alipayRootCertPath && alipayPlugin.appCertPath && alipayPlugin.alipayPublicCertPath) {
          options = Object.assign({}, options, {
            alipayRootCertPath: alipayPlugin.alipayRootCertPath,
            appCertPath: alipayPlugin.appCertPath,
            alipayPublicCertPath: alipayPlugin.alipayPublicCertPath,
          });
        } else {
          console.log('aliPaySdk init fail, params error');
          return;
        }
      }

      try {
        app.alipaySdk = new AlipaySDK(options);
      } catch (error) {
        console.log(`aliPaySdk init fail. params is ${JSON.stringify(alipayPlugin)}`);
      }
    } else {
      console.log('aliPaySdk init fail, params error');
    }
  });
};
