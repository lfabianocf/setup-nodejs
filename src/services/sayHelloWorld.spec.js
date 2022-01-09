const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World Casa!');
    });

   it('Should say Hello Fabano', () => {
        const response = sayHelloWorld.sayHello('Fabiano');

        expect(response).toBe('Hello Fabiano!');
    })
});