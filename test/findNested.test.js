import test from 'ava'
import { findNested } from '..'
import user from './fixtures/user.json'
import pets from './fixtures/pets.json'

test('can get top-level values', t => {
  t.is(findNested(user, 'name'), user.name)
  t.is(findNested(user, 'meals'), user.meals)
})

test('can get values in a nested object', t => {
  t.is(findNested(user, 'job'), user.brother.job)
  t.is(findNested(user, 'favorite'), user.sister.colors.favorite)
})

test('can get values in a nested array', t => {
  t.is(findNested(user, 'league'), user.brother.sports[0].league)
  t.is(findNested(user, 'category'), user.sister.outfit[0].category)
})

test('can get values passing a given filter', t => {
  const isLunch = m => m.type === 'Lunch'
  const meal = findNested(user, undefined, isLunch)
  t.is(meal, user.brother.meals[1])
  const meals = findNested(user, 'meals', m => m.some(isLunch))
  t.is(meals, user.brother.meals)
})

test('can get values from array source', t => {
  t.is(findNested(pets), pets[0])
  t.is(findNested(pets, undefined, o => o.name === 'Helen'), pets[2])
})
