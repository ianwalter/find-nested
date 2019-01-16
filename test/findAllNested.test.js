import test from 'ava'
import { findAllNested } from '..'
import user from './fixtures/user.json'

test('can get top-level and nested values', t => {
  const results = findAllNested(user, 'name')
  t.deepEqual(results, [user.name, user.brother.name, user.sister.name])
})

test('findAllNested can return values in arrays', t => {
  const results = findAllNested(user, undefined, o => o.type === 'Breakfast')
  t.deepEqual(results, [user.meals[1], user.sister.meals[2]])
})
