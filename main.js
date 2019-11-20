const adjectives =  words.adjectives;
const nouns      =  words.nouns;

const random_index = (array) =>  { return Math.floor(Math.random() * array.length) };

function copy_text_to_clipboard(anchor_id) {
  /* Get the text field */
  const copy_text = document.getElementById(anchor_id);

  /* Select the text field */
  copy_text.select(null===anchor_id ? ' ' : anchor_id);
  copy_text.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copy_text.value);
}

const create_anchor_list_item_w_last_pair = () => {
  const last_pair = document.getElementById("random_name_textarea").innerHTML;
  const anchor = document.createElement("A");
  anchor.id = last_pair.replace(" ", "-");
  const anchor_id = document.createTextNode(anchor.id);
  console.log(anchor_id)
  anchor.className = 'list-group-item list-group-item-action';
  anchor.onclick(copy_text_to_clipboard(anchor_id))
  const text = document.createTextNode(last_pair);
  anchor.appendChild(text);
  document.getElementById("word_list_group").appendChild(anchor);
};

const random_name_generator = () => {
  let random_pair = [];
  random_pair.push(adjectives[random_index(adjectives)]);
  random_pair.push(nouns[random_index(nouns)]);
  document.getElementById("random_name_textarea").innerHTML = random_pair.join(" ");
};

const add_to_list_then_generate_new_pair = () => {
  create_anchor_list_item_w_last_pair()
  random_name_generator()
};

