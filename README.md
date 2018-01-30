# My personal homepage

## Setup
### Requirements

Node `"^8.2"` (use nvm [here](https://github.com/creationix/nvm))

Yarn `"^1.3"` (install [here](https://yarnpkg.com))

### Structure folder

```
fabioassuncao.github.io
├── CNAME
├── LICENSE
├── README.md
├── build.sh
├── deploy.sh
├── dist
├── gulpfile.js
├── humans.txt
├── package.json
├── robots.txt
└── src
    ├── assets
    │   ├── css
    │   └── img
    └── index.html
```

### Install dependencies
```bash
yarn
```

### Run
```bash
yarn start
```

### Build
```bash
./build.sh
```

### Deploy to Github Pages (https://github.com/fabioassuncao/fabioassuncao.github.io)
```bash
./deploy.sh
```
