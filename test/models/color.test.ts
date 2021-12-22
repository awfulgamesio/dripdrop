import { Color, ColorValue } from '../../src/models/Color';

let zeroColorValue = {red: 0, blue: 0, green: 0}
let baseColorValue = {red: 1, blue: 2, green: 3}
let fiveValue = {red: 5, blue: 5, green: 5}
let floatValue = {red: 1.0, blue: 2.2, green: 3.9}

describe(('add color'), () => {
    test('constructor sets initial values', () => {
        let color = new Color(baseColorValue)

        expect(color.red).toEqual(1)
        expect(color.blue).toEqual(2)
        expect(color.green).toEqual(3)
        expect(color.total).toEqual(6)
    })

    test('constructor handles floats', () => {
        let color = new Color(floatValue)

        expect(color.red).toEqual(1)
        expect(color.blue).toEqual(2)
        expect(color.green).toEqual(3)
        expect(color.total).toEqual(6)
    })
})


describe(('add color'), () => {
    test('add color only allows positive values', () => {
        let color = new Color(zeroColorValue)

        expect(() => {
            color.addColor({red: -1, blue: 0, green: 0})
        }).toThrow("Color must be greater than zero.")
        expect(() => {
            color.addColor({red: 0, blue: -1, green: 0})
        }).toThrow("Color must be greater than zero.")
        expect(() => {
            color.addColor({red: 0, blue: 0, green: -1})
        }).toThrow("Color must be greater than zero.")
    })

    test('add color updates values', () => {
        let color = new Color(zeroColorValue)
        color.addColor(baseColorValue)

        expect(color.red).toEqual(1)
        expect(color.blue).toEqual(2)
        expect(color.green).toEqual(3)
        expect(color.total).toEqual(6)
    })

    
    test('add color handles floats', () => {
        let color = new Color(zeroColorValue)
        color.addColor(floatValue)

        expect(color.red).toEqual(1)
        expect(color.blue).toEqual(2)
        expect(color.green).toEqual(3)
        expect(color.total).toEqual(6)
    })
})

describe(('remove color'), () => {
    test('remove color only allows positive values', () => {
        let color = new Color(zeroColorValue)

        expect(() => {
            color.removeColor({red: -1, blue: 0, green: 0})
        }).toThrow("Color must be greater than zero.")
        expect(() => {
            color.removeColor({red: 0, blue: -2, green: 0})
        }).toThrow("Color must be greater than zero.")
        expect(() => {
            color.removeColor({red: 0, blue: 0, green: -4})
        }).toThrow("Color must be greater than zero.")
    })

    test('add color updates values', () => {
        let color = new Color(fiveValue)
        color.removeColor(baseColorValue)
        
        expect(color.red).toEqual(4)
        expect(color.blue).toEqual(3)
        expect(color.green).toEqual(2)
        expect(color.total).toEqual(9)
    })

    test('add color handles floats', () => {
       let color = new Color(fiveValue)
        color.removeColor(floatValue)
        
        expect(color.red).toEqual(4)
        expect(color.blue).toEqual(3)
        expect(color.green).toEqual(2)
        expect(color.total).toEqual(9)
    })
})

describe('hexconvert converts colors by ratio', () => {
    test('handles 0-255', () => {
        let color = new Color({red: 128, blue: 128, green: 0})

        expect(color.hexColor).toEqual('808000')

        let color2 = new Color({red: 0, blue: 128, green: 128})

        expect(color2.hexColor).toEqual('008080')
    })

    test('handles ratios', () => {
        let color = new Color({red: 512, blue: 256, green: 0})

        expect(color.hexColor).toEqual('ff8000')

        let color2 = new Color({red: 0, blue: 256, green: 512})

        expect(color2.hexColor).toEqual('0080ff')
    })
})