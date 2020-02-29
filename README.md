# Static Website Infra Stack

A CDK Stack to construct static website infra.

## Requirements

- Node.js
- Yarn
- AWS account

## Usage

### Setup
```bash
$ git clone https://github.com/HeRoMo/cdk-static-website.git
$ cd cdk-static-website
$ yarn
```

Configure *config/default.ts* for your website.

### Deploy

```bash
$ yarn build
$ cdk deploy
```

## LICENSE

[MIT](LICENSE)
