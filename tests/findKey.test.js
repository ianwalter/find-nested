const findKey = require('../')

const fixture = {
  one: 1,
  two: {
    a: [
      {
        i: '1',
        ii: [
          { '1': 'one' },
          { '1': 'two' }
        ]
      }
    ],
    b: 0
  }
}

test('findKey can get top-level values', () => {
  expect(findKey(fixture, 'one')).toBe(fixture.one)
  expect(findKey(fixture, 'two')).toBe(fixture.two)
})

test('findKey can get values in a nested object', () => {
  expect(findKey(fixture, 'a')).toBe(fixture.two.a)
  expect(findKey(fixture, 'b')).toBe(fixture.two.b)
})

test('findKey can get values in a nested array', () => {
  expect(findKey(fixture, 'i')).toBe(fixture.two.a[0].i)
  expect(findKey(fixture, 'ii')).toBe(fixture.two.a[0].ii)
})

test('findKey returns first value when there are duplicate keys', () => {
  expect(findKey(fixture, '1')).toBe(fixture.two.a[0].ii[0]['1'])
})
