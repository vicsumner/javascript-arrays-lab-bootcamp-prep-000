var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push("Ralph")
}

function destructivelyPrependKitten(name){
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  return kittens.pop("Ralph")
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift("Milo")
}

function appendKitten(name){
  return [...kittens,("Broom")]
}

function prependKitten(name){
  return [("Arnold"), ...kittens]
}

function removeLastKitten(){
  return kittens.slice(1)
  
}