
console.log('verbs:  ',verbs)
console.log('nouns:  ',nouns)

const shuffledAdjectives = shuffleArray(adjectives)
const shuffledNouns = shuffleArray(nouns)

const generateRandomWordPair = () => {
  const randomPair = []
  randomPair.push(shuffledAdjectives[randomIndex(shuffledAdjectives)])
  randomPair.push(shuffledNouns[randomIndex(shuffledNouns)])
  // return randomPair.join(' ')
  document.getElementById('randomNameTextArea').innerHTML = randomPair.join(' ')
}








const clip = new ClipboardJS('.list-group-item')
clip.on('success', () => {
  console.log('Copied to clipboard')
})
clip.on('error', () => {
  alert('Something went wrong with clipboard!')
})

const randomIndex = array => {
  return Math.floor(Math.random() * array.length)
}


const createButtonListItemWithLastPair = () => {
  const lastPair = document.getElementById('randomNameTextArea').innerHTML
  const button = document.createElement('BUTTON')
  button.id = lastPair.replace(' ', '-')
  const data_target = '#' + button.id
  button.setAttribute('value', lastPair)
  button.setAttribute('data-clipboard-action', 'copy')
  button.setAttribute('data-clipboard-target', data_target)
  button.className = 'list-group-item list-group-item-action'
  const text = document.createTextNode(lastPair)
  button.appendChild(text)
  document.getElementById('wordListGroup').appendChild(button)
}

const randomNameGenerator = () => {
  let randomPair = []
  randomPair.push(adjectives[randomIndex(adjectives)])
  randomPair.push(nouns[randomIndex(nouns)])
  document.getElementById('randomNameTextArea').innerHTML = randomPair.join(' ')
}

const addToListThenGenerateNewPair = () => {
  createButtonListItemWithLastPair()
  randomNameGenerator()
}
