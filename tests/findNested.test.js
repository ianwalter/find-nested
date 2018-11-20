const { findNested } = require('../')
const user = require('./fixtures/user.json')
const pets = require('./fixtures/pets.json')

test('findNested can get top-level values', () => {
  expect(findNested(user, 'name')).toBe(user.name)
  expect(findNested(user, 'meals')).toBe(user.meals)
})

test('findNested can get values in a nested object', () => {
  expect(findNested(user, 'job')).toBe(user.brother.job)
  expect(findNested(user, 'favorite')).toBe(user.sister.colors.favorite)
})

test('findNested can get values in a nested array', () => {
  expect(findNested(user, 'league')).toBe(user.brother.sports[0].league)
  expect(findNested(user, 'category')).toBe(user.sister.outfit[0].category)
})

test('findNested can get values passing a given filter', () => {
  const isLunch = m => m.type === 'Lunch'
  const meal = findNested(user, undefined, isLunch)
  expect(meal).toBe(user.brother.meals[1])
  const meals = findNested(user, 'meals', m => m.some(isLunch))
  expect(meals).toBe(user.brother.meals)
})

test('findNested can get values from array source', () => {
  expect(findNested(pets)).toBe(pets[0])
  expect(findNested(pets, undefined, o => o.name === 'Helen')).toBe(pets[2])
})
