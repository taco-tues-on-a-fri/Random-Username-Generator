const adjectives =  words.adjectives;
const nouns      =  words.nouns;

const clip = new ClipboardJS('.list-group-item');
clip.on("success", () => {
  alert("Copied to clipboard")
});
clip.on("error", () => {
  alert("Something went wrong with clipboard!")
});

const random_index = (array) =>  { return Math.floor(Math.random() * array.length) };

const create_button_list_item_w_last_pair = () => {
  const last_pair = document.getElementById("random_name_textarea").innerHTML;
  const button = document.createElement("BUTTON");
  button.id = last_pair.replace(" ", "-");
  const data_target = "#"+button.id;
  button.setAttribute("value", last_pair);
  button.setAttribute("data-clipboard-action", "copy");
  button.setAttribute("data-clipboard-target", data_target);
  button.className = 'list-group-item list-group-item-action';
  const text = document.createTextNode(last_pair);
  button.appendChild(text);
  document.getElementById("word_list_group").appendChild(button);
};

const random_name_generator = () => {
  let random_pair = [];
  random_pair.push(adjectives[random_index(adjectives)]);
  random_pair.push(nouns[random_index(nouns)]);
  document.getElementById("random_name_textarea").innerHTML = random_pair.join(" ");
};

const add_to_list_then_generate_new_pair = () => {
  create_button_list_item_w_last_pair();
  random_name_generator();
};