/**
 * @author ntishkevich
 * @version 16.01.2018
 */
const NOOP = null;
const operators = {
    '+': (a, b) => b + a,
    '-': (a, b) => b - a,
    '*': (a, b) => b * a,
    '/': (a, b) => b / a,
};
const isOperator = token => operators[token] !== undefined;
const isValue = token => !isNaN(parseFloat(token)) && isFinite(token);
const RPN = notation => {
    notation = notation.trim();

    if (notation === '') {
        return null;
    }

    const tokens = notation.split(/\s+/);

    const stack = [];
    while (tokens.length) {
        console.log('Stack ', stack);
        console.log('Tokens', tokens);
        const token = tokens.shift();

        if (isValue(token)) {
            stack.push(token);

        } else if (isOperator(token)) {
            const a = stack.pop();
            const b = stack.pop();

            if (a == null || b == null) {
                return NOOP;
            }

            stack.push(operators[token](+a, +b));
        } else {
            return NOOP;
        }
    }

    if (stack.length !== 1) {
        return NOOP;
    }

    return stack.pop();
};

const WebSocket = require('ws');

const ws = new WebSocket('ws://rpn.javascript.ninja:8080');

ws.on('connection', function open() {
    ws.send('Abc');
});
ws.on('message', function incoming(data) {
    console.log(data);
    setTimeout(() => {
        ws.send(RPN(data));
    }, 2500);
});

