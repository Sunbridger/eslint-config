## eslint-config-frontend

### 安装

```bash
$ npm install Sunbridger-eslint-config
```

### 配置

在项目的package.json 添加内容

```javascript
"eslintConfig": {
    "root": true,
    "env": {
        "node": true
    },
    "extends": ["Sunbridger-eslint-config"],
    "rules": {},
    "parserOptions": {
        "parser": "babel-eslint"
    }
},
```
