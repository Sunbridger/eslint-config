// http://eslint.org/docs/user-guide/configuring

module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    parserOptions: {
        parser: "babel-eslint",
        sourceType: 'module'
    },
    extends: 'airbnb-base',

    // add your custom rules here
    'rules': {

        //在对象中使用getter/setter
        "accessor-pairs": 2,

        //是否允许非空数组里面有多余的空格
        "array-bracket-spacing": 0,

        //块语句中使用var
        "block-scoped-var": 0,

        //强制驼峰法命名
        "camelcase": 1,

        //对象字面量项尾不能有逗号
        "comma-dangle": [
            2,
            "never"
        ],

        //循环复杂度
        "complexity": 0,

        //是否允许计算后的键名什么的
        "computed-property-spacing": 0,

        //return 后面是否允许省略
        "consistent-return": 0,

        ///非派生类不能调用super，派生类必须调用super
        "constructor-super": 2,

        //switch语句最后必须有default
        "default-case": 0,

        //对象访问符的位置，换行的时候在行首还是行尾
        "dot-location": 0,

        //避免不必要的方括号
        "dot-notation": 0,

        //函数表达式必须有名字
        "func-names": 0,

        //函数风格，规定只能使用函数声明/函数表达式
        "func-style": 0,

        "global-require": 0,

        // allow async-await
        //生成器函数*的前后空格
        // "generator-star-spacing": 0,
        // 生成器函数 * 的前后空格
        'generator-star-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],

        //for in循环要用if语句过滤
        "guard-for-in": 2,

        //nodejs 处理错误
        "handle-callback-err": [
            2,
            "^(err|error)$"
        ],

        //变量名长度
        "id-length": 0,

        //缩进风格
        "indent": [
            2,
            4,
            {
                "SwitchCase": 1
            }
        ],

        //对象字面量中冒号的前后空格
        "key-spacing": [
            2,
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],

        //字符串最大长度
        "max-len": [2, 160],

        //函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
        "new-cap": [
            2,
            {
                "newIsCap": true,
                "capIsNew": false
            }
        ],

        //new时必须加小括号
        "new-parens": 2,

        //禁止使用alert confirm prompt
        "no-alert": 1,

        //禁止在条件表达式中使用赋值语句
        "no-cond-assign": 2,

        //禁止使用console
        "no-console": 1,

        //禁止在条件中使用常量表达式 if(true) if(1)
        "no-constant-condition": 1,

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

        //如果if语句里面有return,后面不能跟else语句
        "no-else-return": 0,

        //禁止不必要的bool转换
        "no-extra-boolean-cast": 2,

        //禁止非必要的括号
        "no-extra-parens": 0,

        //禁止在块语句中使用声明（变量或函数）
        "no-inner-declarations": [
            2,
            "functions"
        ],

        //label名不能与var声明的变量名相同
        "no-label-var": 2,

        //禁止标签声明
        "no-labels": 2,

        //声明时不能混用声明类型
        "no-mixed-requires": 0,

        //禁止使用嵌套的三目运算
        "no-nested-ternary": 2,

        //禁止使用new require
        "no-new-require": 2,

        "no-param-reassign": 0,

        //禁止使用__proto__属性
        "no-proto": 0,

        "no-restricted-syntax": 0,

        //禁止使用javascript:void(0)
        "no-script-url": 0,

        //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        "no-shadow": 2,

        //在调用super()之前不能使用this或super
        "no-this-before-super": 2,

        //变量初始化时不能直接给它赋值为undefined
        "no-undef-init": 2,

        //标识符不能以_开头或结尾
        "no-underscore-dangle": 0,

        //避免多行表达式
        "no-unexpected-multiline": 2,

        //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
        "no-unneeded-ternary": 2,

        //禁止无用的表达式
        "no-unused-expressions": 0,

        //不能有声明后未被使用的变量或参数
        "no-unused-vars": [
            1,
            {
                "vars": "all",
                "args": "after-used"
            }
        ],

        //禁用var，用let和const代替
        "no-var": 0,     // node will use `var` keywords

        //不能有警告备注
        "no-warning-comments": 0,

        //大括号内是否允许不必要的空格
        "object-curly-spacing": 0,

        //强制对象字面量缩写语法
        "object-shorthand": 0,

        //换行时运算符在行尾还是行首
        "operator-linebreak": [
            2,
            "after",
            {
                "overrides": {
                    "?": "after",
                    ":": "after"
                }
            }
        ],

        //块语句内行首行尾是否要空行
        "padded-blocks": 0,

        "prefer-arrow-callback": 0,

        //首选const
        "prefer-const": 0,

        // 首选解构
        "prefer-destructuring": 0,

        //对象字面量中的属性名是否强制双引号
        "quote-props": 0,

        //引号类型 `` "" ''
        "quotes": [
            2,
            "single",
            "avoid-escape"
        ],

        //parseInt必须指定第二个参数
        "radix": 0,

        //语句强制分号结尾
        "semi": [
            2,
            "always"
        ],

        //函数定义时括号前面要不要有空格
        "space-before-function-paren": [
            0
        ],

        //一元运算符的前/后要不要加空格
        "space-unary-ops": [
            2,
            {
                "words": true,
                "nonwords": false
            }
        ],

        //注释风格要不要有空格什么的
        "spaced-comment": [
            0,
            "always",
            {
                "markers": [
                    "eslint-disable"
                ]
            }
        ],

        //使用严格模式
        "strict": 0,

        //var必须放在作用域顶部
        "vars-on-top": 0,

        //立即执行函数表达式的小括号风格
        "wrap-iife": [
            2,
            "any"
        ],

        //禁止尤达条件
        "yoda": [
            0,
            "never"
        ],

        // don't require .vue extension when importing
        'import/extensions': ['off', 'always', {
            'js': 'never',
            'vue': 'never'
        }],

        // allow optionalDependencies
        'import/no-extraneous-dependencies': 'off',

        "import/no-unresolved": 0
    }
}
