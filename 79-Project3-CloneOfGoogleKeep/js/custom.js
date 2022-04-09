// Getting the section where note get appended
const row = document.querySelector(".row");

// Our Add Note Button
const addNote = document.getElementById("add-note");

// Save in localStorage
const saveData = () => {
  // Getting all textareas handle in the page
  const textareaData = document.querySelectorAll("textarea");
  const allNotes = [];

  // Getting data out of textareas and storing them in empty array.
  textareaData.forEach((element) => {
    return allNotes.push(element.value);
  });

  // Now storing data in localstorage
  localStorage.setItem('note', JSON.stringify(allNotes));
 }

// Arrow function to add new note in page
const addNewNote = (text = '') => {

  const note = document.createElement("div");
  note.classList.add("col", "s12", "m3");

  const htmlData = `
  <div class="card">
    <div class="card-content">
      <div class="content ${text?"":"hidden"}">${text}</div>
      <textarea class="materialize-textarea ${text?"hidden":""}">Add Content Here</textarea>
      <a class="btn-floating halfway-fab waves-effect waves-light yellow left" id="create"><i class="material-icons">create</i></a>
      <a class="btn-floating halfway-fab waves-effect waves-light red" id="delete"><i class="material-icons">delete</i></a>
    </div>
  </div>`;

  // Adding new note into page
  note.insertAdjacentHTML('afterbegin', htmlData);
  row.appendChild(note);

  // Delete the note
  const del = note.querySelector("#delete");
  del.addEventListener("click", () => {
    note.remove();
    saveData();
  });

  // Toggle the edit Note
  const edit = note.querySelector("#create");
  const content = note.querySelector(".content");
  const textarea = note.querySelector(".materialize-textarea");

  textarea.value = text;
  content.innerHTML = text;

  // Switching b/w textarea and showarea
  edit.addEventListener("click", () => {
    content.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  // Saving content in textarea
  textarea.addEventListener("change", (event)=> {
    const upText = event.target.value;
    content.innerHTML = upText;

    saveData();
  });
}


// Getting datan from localstorage
const getNote = JSON.parse(localStorage.getItem('note'));
if (getNote) {
  getNote.forEach((element) => {
    addNewNote(element);
  });
}

// Click on button to do
addNote.addEventListener("click", () => addNewNote());