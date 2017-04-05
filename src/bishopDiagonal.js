'use strict'

module.exports = bishopDiagonal

function bishopDiagonal(bishop1, bishop2) {
  if (bishopsAreDiagonal (bishop1, bishop2)) {
    return moveBishops(bishop1, bishop2)
  }
  
  return [bishop1, bishop2].sort()
}

function bishopsAreDiagonal (bishop1, bishop2) {
  const deltaY = bishop1[1] - bishop2[1]
  const deltaX = bishop1.charCodeAt(0) - bishop2.charCodeAt(0)
  
  return Math.abs(deltaY) === Math.abs(deltaX)
}

function moveBishops (bishop1, bishop2) {
  const bishop1Thing = { position: bishop1 }
  const bishop2Thing = { position: bishop2 }
  
  if (bishop1.charCodeAt(0) < bishop2.charCodeAt(0)) {
    bishop1Thing.horizontal = 'left'
    bishop2Thing.horizontal = 'right'
  } else {
    bishop1Thing.horizontal = 'right'
    bishop2Thing.horizontal = 'left'
  }
  
  if (bishop1[1] < bishop2[1]) {
    bishop1Thing.vertical = 'down'
    bishop2Thing.vertical = 'up'
  } else {
    bishop1Thing.vertical = 'up'
    bishop2Thing.vertical = 'down'
  }
  
  const newBishop1 = move(bishop1Thing)
  const newBishop2 = move(bishop2Thing)
  
  return [newBishop1, newBishop2].sort()
}

function move(bishop) {
  while (bishopCanMove(bishop)) {
    if (bishop.horizontal === 'left' && bishop.vertical === 'up') {
      bishop.position = `${String.fromCharCode(bishop.position.charCodeAt(0) - 1)}${parseInt(bishop.position[1]) + 1}`
    }
    if (bishop.horizontal === 'right' && bishop.vertical === 'up') {
      bishop.position = `${String.fromCharCode(bishop.position.charCodeAt(0) + 1)}${parseInt(bishop.position[1]) + 1}`
    }
    if (bishop.horizontal === 'left' && bishop.vertical === 'down') {
      bishop.position = `${String.fromCharCode(bishop.position.charCodeAt(0) - 1)}${parseInt(bishop.position[1]) - 1}`
    }
    if (bishop.horizontal === 'right' && bishop.vertical === 'down') {
      bishop.position = `${String.fromCharCode(bishop.position.charCodeAt(0) + 1)}${parseInt(bishop.position[1]) - 1}`
    }
  }
  
  return bishop.position
}

function bishopCanMove (bishop) {  
  if (bishop.horizontal === 'left' && bishop.vertical === 'up') {
    return bishop.position[0] !== 'a' && bishop.position[1] !== '8'
  }
  if (bishop.horizontal === 'right' && bishop.vertical === 'up') {
    return bishop.position[0] !== 'h' && bishop.position[1] !== '8'
  } 
  if (bishop.horizontal === 'left' && bishop.vertical === 'down') {
    return bishop.position[0] !== 'a' && bishop.position[1] !== '1'
  }
  if (bishop.horizontal === 'right' && bishop.vertical === 'down') {
    return bishop.position[0] !== 'h' && bishop.position[1] !== '1'
  }
}
