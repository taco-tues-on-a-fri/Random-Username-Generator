const adjectives =  words.adjectives;
const nouns      =  words.nouns;

const clip = new ClipboardJS('.list-group-item');

clip.on("success", function() {
    alert("Copied to clipboard");
});
// clip.on("error", function() {
//   document.body.insertAdjacentHTML('beforebegin', '<div>that didn\'t work.</div>');
// });
let elem= document.querySelector("alert_container")
let div = document.createElement('div');
div.innerHTML = "Copied to clipboard";
let message = "Copied to clipboard";
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


const create_anchor_list_item_w_last_pair = () => {
  const last_pair = document.getElementById("random_name_textarea").innerHTML;
  const anchor = document.createElement("A");
  anchor.id = last_pair.replace(" ", "-");
  var anchor_id = document.createTextNode(anchor.id);
  anchor.className = 'list-group-item list-group-item-action';
  anchor.role= "button"
  const text = document.createTextNode(last_pair);
  anchor.appendChild(text);
  document.getElementById("word_list_group").appendChild(anchor);
};

// function copy_text_to_clipboard(last_pair) {
//   /* Get the text field */
//   var copy_text = last_pair

//   /* Select the text field */
//   copy_text.select();
//   copy_text.setSelectionRange(0, 99999); /*For mobile devices*/

//   /* Copy the text inside the text field */
//   document.execCommand("copy");

//   /* Alert the copied text */
//   alert("Copied the text: " + copy_text.value);
// }
