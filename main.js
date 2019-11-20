const adjectives =  words.adjectives;
const nouns      =  words.nouns;

let historical_pairs = [];

const random_index = (array) =>  { return Math.floor(Math.random() * array.length) };

const random_name_generator = () => {
  let random_pair = [];

  random_pair.push(adjectives[random_index(adjectives)]);
  random_pair.push(nouns[random_index(nouns)]);

  document.getElementById("random_name_textarea").innerHTML = random_pair.join(" ");
  historical_pairs.push(random_pair.join(" "));

  create_list_items = historical_pairs.reduce((historical_pair, item) => {  //create historical list of generated words
    historical_pair += `<li>${item}</li>`;
    return historical_pair; 
  }, '');

  historical_pairs_element = document.getElementById('historical_pair'); // get element from DOM to display the list, ul / ol element
  
  historical_pairs_element.innerHTML = create_list_items;
}