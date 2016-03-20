# expr-exit-code

Really simple npm CLI module for evaluating CLI parameters and exit a process
based on the expressions output (all truthy values = exit code 0, else is exit code 1).

## Dev

```
$ npm install
$ npm dedupe // if npm < 3
$ npm run build
```
## Usage

Replace `expr-exit-code` with `node dist/index.js` if in development.

```
$ npm install -g expr-exit-code

// 5>6 is false, exit code 1:
$ expr-exit-code -e "5>6"

// 0 is falsy, exit code 1:
$ expr-exit-code -e "1-1"

// message if expression is truthy:
$ expr-exit-code -e "1+1" -t "It is truthy"

// message if expression is falsy:
$ expr-exit-code -e "0+0" -t "It is falsy"
```
