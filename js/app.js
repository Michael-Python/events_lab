document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // const textTitleInput = document.querySelector('#title');
  // textTitleInput.addEventListener('input', handleInputTitle);

  // const textAuthorInput = document.querySelector('#author');
  // textAuthorInput.addEventListener('input', handleInputAuthor);

  // const select = document.querySelector('#category');
  // select.addEventListener('change', handleSelectChange);

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

});

const handleInputTitle = function(event) {
  console.log(event);
  const resultParagraph = document.querySelector('#title');
  resultParagraph.textContent = `${this.title}`;
}

const  handleInputAuthor = function(event) {
  console.log(event);
  const resultParagraph = document.querySelector('#author');
  resultParagraph.textContent = `${this.author}`;
}

const handleSelectChange = function(event) {
  console.log(event);
  const resultParagraph = document.querySelector('#category');
  resultParagraph.textContent = `${this.category}`;
}




const handleFormSubmit = function(event){
  event.preventDefault();
  const newListItem = document.createElement('li');

  newListItem.textContent = `${this.title.value} ${this.author.value} ${this.category.value}`;
  readingList = document.querySelector('#reading-list')
  readingList.appendChild(newListItem);
 
}
