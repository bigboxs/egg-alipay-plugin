# egg-alipay-plugin

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-alipay-plugin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-alipay-plugin
[travis-image]: https://img.shields.io/travis/eggjs/egg-alipay-plugin.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-alipay-plugin
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-alipay-plugin.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-alipay-plugin?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-alipay-plugin.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-alipay-plugin
[snyk-image]: https://snyk.io/test/npm/egg-alipay-plugin/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-alipay-plugin
[download-image]: https://img.shields.io/npm/dm/egg-alipay-plugin.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-alipay-plugin

<!--
Description here.
-->

## Install

```bash
$ npm i egg-alipay-plugin --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.alipayPlugin = {
  enable: true,
  package: 'egg-alipay-plugin',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.alipayPlugin = {
  appId: '2016123456789012', // 应用id
  privateKey: fs.readFileSync('./private-key.pem', 'ascii'), // 私钥
  alipayPublicKey: fs.readFileSync('./public-key.pem', 'ascii'), // 公钥（支付宝公钥，需要对结果验签时候必填）
  encryptKey: '', // AES密钥（非必填）
  gateway:'', // 支付宝网关地址 ，沙箱环境下使用时需要修改
  useCert: false, // 是否使用证书模式
  alipayRootCertPath: path.join(__dirname, '../fixtures/alipayRootCert.crt'), // 证书模式下才有效
  appCertPath: path.join(__dirname, '../fixtures/appCertPublicKey.crt'),// 证书模式下才有效
  alipayPublicCertPath: path.join(__dirname, '../fixtures/alipayCertPublicKey_RSA2.crt'),// 证书模式下才有效
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
