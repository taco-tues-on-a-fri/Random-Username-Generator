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
    // historical_pair += `<ul>${item}</ul>`;
    historical_pair += `<a id="historical_pair" href="#" class="list-group-item list-group-item-action"></a>`;
    return historical_pair; 
  }, '');

  historical_pairs_element = document.getElementById('historical_pair'); // get element from DOM to display the list, ul / ol element
  
  historical_pairs_element.innerHTML = create_list_items;
}

const add_to_list_then_generate_new_pair = () => {
  const last_pair = document.getElementById("random_name_textarea").innerHTML
  // const node = document.createElement("UL");
  // const text_node = document.createTextNode(last_pair);
  // node.appendChild(text_node);
  // document.getElementById("word_list_group")

  const anchor = document.createElement('A');
  // anchor.classList.add.('list-group-item list-group-item-action');
  anchor.className = 'list-group-item list-group-item-action';
  anchor.id = last_pair
  const text = document.createTextNode(last_pair);
  anchor.appendChild(text);
  document.getElementById("word_list_group").appendChild(anchor);

  let random_pair = [];
  
  random_pair.push(adjectives[random_index(adjectives)]);
  random_pair.push(nouns[random_index(nouns)]);

  document.getElementById("random_name_textarea").innerHTML = random_pair.join(" ");
}