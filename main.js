const adjectives =  words.adjectives;
const nouns      =  words.nouns;

let historical_pairs = [];

const random_index = (array) =>  { return Math.floor(Math.random() * array.length) };

const random_name_generator = () => {
  let random_pair = [];

  random_pair.push(adjectives[random_index(adjectives)]);
  random_pair.push(nouns[random_index(nouns)]);

  document.getElementById("output").innerHTML = random_pair.join(" ");
  historical_pairs.push(random_pair.join(" "));

  list_items = historical_pairs.reduce((result, item) => {  //create historical list of generated words
    result += `<li>${item}</li>`;
    return result; 
  }, '');

  result_element = document.getElementById('result'); // get element from DOM to display the list, ul / ol element
  
  result_element.innerHTML = list_items;
}