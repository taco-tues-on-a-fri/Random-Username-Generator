const adjectives =  words.adjectives;
const nouns      =  words.nouns;

const random_index = (array) =>  { return Math.floor(Math.random() * array.length) };

var buttons = document.querySelectorAll('.js-button');

var displayContent = function (button, content) {
  if (content.classList.contains('active')) {
      // Hide content
      content.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');
    } else {
      // Show content
      content.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
    }
};

[].forEach.call(buttons, function(button, index) {
  // Content var
  var content = button.nextElementSibling;
  
  // Set button attributes
  button.setAttribute('id', 'button-' + index);
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'content-' + index);
  
  // Set content attributes
  content.setAttribute('id', 'content-' + index);
  content.setAttribute('aria-hidden', 'true');    
  content.setAttribute('aria-labelledby', 'button-' + index);

  button.addEventListener('click', function () {
    displayContent(this, content);
    return false;
  }, false);
  
  button.addEventListener('keydown', function (event) {
    // Handle 'space' key
    if (event.which === 32) {
      event.preventDefault();
      displayContent(this, content);
    }
  }, false);
  
});  


function copy_text_to_clipboard(last_pair) {
  /* Get the text field */
  var copy_text = last_pair

  /* Select the text field */
  copy_text.select();
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
  var anchor_id = document.createTextNode(anchor.id);

  // console.log(anchor_id)
  
  anchor.className = 'list-group-item list-group-item-action';
  anchor.role= "button"
  // anchor.onclick(copy_text_to_clipboard(last_pair))
  
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

