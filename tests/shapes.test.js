const { Circle, Triangle, Square} = require('../lib/shapes');

describe('Circle', ()=>{
    test('Should return a blue circle', ()=>{
        const testCircle = new Circle('blue')
        const expectedText = `<circle cx="150" cy="100" r="80" fill="blue" />`
        expect(testCircle.render()).toEqual(expectedText)
    })
})

describe('Triangle', ()=>{
    test('Should return a blue Triangle', ()=>{
        const testShape = new Triangle('blue')
        const expectedText = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
        expect(testShape.render()).toEqual(expectedText)
    })
});

describe('Square', ()=>{
    test('Should return a blue Square', ()=>{
        const testShape = new Square('blue')
        const expectedText = `<rect x="90" y="40" width="120" height="120" fill="blue" />`
        expect(testShape.render()).toEqual(expectedText)
    })
})