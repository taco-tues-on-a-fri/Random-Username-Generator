const shuffledAdjectives = shuffleArray(adjectives)
const shuffledNouns = shuffleArray(nouns)

const clip = new ClipboardJS('.text-copy')
clip.on('success', (event) => {
  console.info('Copied to clipboard: ', event.text)
})

clip.on('error', (event) => {
  console.error('Something went wrong with the clipboard!')
  console.error('Action:', event.action)
  console.error('Trigger:', event.trigger)
})

const generateRandomPair = () => {
  const generatedWordPair = []
  generatedWordPair.push(adjectives[randomIndex(adjectives)])
  generatedWordPair.push(nouns[randomIndex(nouns)])
  return generatedWordPair.join(' ')
}

const clearListItems = () => {
  const allListItems = document.querySelectorAll('#generatedCardsArea li')

  for (const element of allListItems) {
    element.parentNode.removeChild(element)
  }
}

const generatedCardsArea = document.getElementById('generatedCardsArea')

const createListItem = () => {
  const listItem = document.createElement('li')
  listItem.className = 'col-span-1 rounded-md h-12 group'
  listItem.role = 'list'

  const generatedWordPair = generateRandomPair()

  const wordButton = document.createElement('button')
  wordButton.id = generatedWordPair.replace(' ', '-')
  const dataTarget = '#' + wordButton.id

  wordButton.className = 'flex h-12 w-full text-copy'

  wordButton.value = generatedWordPair
  wordButton.setAttribute('data-clipboard-action', 'copy')
  wordButton.setAttribute('data-clipboard-text', generatedWordPair)

  const colorDiv = document.createElement('div')
  colorDiv.className = `${getRandomColor()} h-12 w-16 rounded-l-md`
  wordButton.appendChild(colorDiv)

  const textDiv = document.createElement('div')
  textDiv.className =
    'flex-1 flex items-center pl-4 py-2 justify-start text-md truncate bg-white rounded-r-md h-12 w-full'
  wordButton.appendChild(textDiv)

  const textElement = document.createElement('p')
  textElement.className = 'text-gray-900 font-medium group-hover:text-indigo-500'
  const generatedText = document.createTextNode(generatedWordPair)
  textElement.appendChild(generatedText)
  textDiv.appendChild(textElement)

  listItem.appendChild(wordButton)
  
  generatedCardsArea.insertBefore(listItem, generatedCardsArea.childNodes[0])
  
  tippy(dataTarget, {
    content: 'Copied to clipboard',
    trigger: 'click',
    delay: [0],
    duration: [0, 200],
  })
}
