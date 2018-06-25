var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var array = array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var array = array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element)
  return array
}
