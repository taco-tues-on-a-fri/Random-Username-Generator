// Fischer-Yates Shuffle while loop
const shuffleArray = array => {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  // While elements remain to shuffle
  while (currentIndex !== 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * (currentIndex + 1))
    currentIndex -= 1

    // And swap it with the current element
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const randomIndex = array => {
  return Math.floor(Math.random() * array.length)
}
