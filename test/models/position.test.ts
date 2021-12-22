import Position from '../../src/models/Sprite';

test('scale must be > 0', () => {
    expect(() => {
      let neg = new Position(0,0,-1)
    }).toThrow("Scale must be greater than zero.")

    expect(() => {
      let zero = new Position(0,0,0)
    }).toThrow("Scale must be greater than zero.")
});
