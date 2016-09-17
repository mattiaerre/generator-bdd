# generator-bdd

A Yeoman generator that makes it easy to start writing unit tests within your Node.js application.
It will add mocha, chai, sinon and istanbul to your application.
It will also add 2 .js files. One containing the system under test and the other a failing test against the former.

## How to

Install Yeoman and generator-bdd using the following npm command:

```
$ npm install -g yo generator-bdd
```

cd to your application's directory that contains already a package.json, then:

```
$ yo generator-bdd
```

The generator will add/update the following items to your application:

```
application
├── node_modules
│   ├── chai
│   ├── istanbul
│   ├── mocha
│   └── sinon
├── package.json
├── test
│   └── greeter.spec.js
└── greeter.js
```

In particular it will add 2 npm scripts to your existing package.json

```json
{
  "scripts": {
    "coverage": "istanbul cover _mocha test --  --recursive",
    "test": "mocha --recursive"
  }
}
```

At the very end of its execution, the generator will also run `npm run coverage` that will produce a coverage report