const { test } = require('@ianwalter/bff')
const { findAllNested } = require('..')
const user = require('./fixtures/user.json')

test('can get top-level and nested values', ({ expect }) => {
  const results = findAllNested(user, 'name')
  expect(results).toEqual([user.name, user.brother.name, user.sister.name])
})

test('findAllNested can return values in arrays', ({ expect }) => {
  const results = findAllNested(user, undefined, o => o.type === 'Breakfast')
  expect(results).toEqual([user.meals[1], user.sister.meals[2]])
})
