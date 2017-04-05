'use strict'

import test from 'ava'
import bishopDiagonal from '../src/bishopDiagonal'

test('bishops should not move if not diagonal from each other', t => {
  t.deepEqual(bishopDiagonal("a1","h8"),["a1", "h8"])
  t.deepEqual(bishopDiagonal("d8","b5"),["b5", "d8"])
})

test('bishops should move if diagonal from each other', t => {
  t.deepEqual(bishopDiagonal("d7","f5"),["c8", "h3"])
  t.deepEqual(bishopDiagonal("g3","e1"),["e1", "h4"])
  t.deepEqual(bishopDiagonal("b4","e7"),["a3", "f8"])
})
