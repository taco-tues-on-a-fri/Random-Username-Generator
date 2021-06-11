const colorArray = ['bg-yellow-500', 'bg-green-500', 'bg-purple-600', 'bg-pink-600', 'bg-blue-300']

let colorIndex = 0

const getRandomColor = () => {
  if (colorIndex === colorArray.length) {
    colorIndex = 0
  }

  const currentColorString = colorArray[colorIndex]
  colorIndex++

  return currentColorString
}
