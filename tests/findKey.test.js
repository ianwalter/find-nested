const findNested = require('../')

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

test('findNested can get top-level values', () => {
  expect(findNested(fixture, 'one')).toBe(fixture.one)
  expect(findNested(fixture, 'two')).toBe(fixture.two)
})

test('findNested can get values in a nested object', () => {
  expect(findNested(fixture, 'a')).toBe(fixture.two.a)
  expect(findNested(fixture, 'b')).toBe(fixture.two.b)
})

test('findNested can get values in a nested array', () => {
  expect(findNested(fixture, 'i')).toBe(fixture.two.a[0].i)
  expect(findNested(fixture, 'ii')).toBe(fixture.two.a[0].ii)
})

test('findNested returns first value when there are duplicate keys', () => {
  expect(findNested(fixture, '1')).toBe(fixture.two.a[0].ii[0]['1'])
})

test('findNested returns', () => {
  const result = findNested(fixture, '1', val => val === 'two')
  expect(result).toBe(fixture.two.a[0].ii[1]['1'])
})


