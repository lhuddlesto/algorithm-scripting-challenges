function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  let ending = str.substring(str.length - target.length);

  if (ending === target) {
    return true;
  }

  else {
    return false;
  }

}


console.log(confirmEnding("Bastian", "n"));
