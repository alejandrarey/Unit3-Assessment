console.log("hello world");

const catImg = document.querySelector('img')

catImg.addEventListener('mouseover', () => {
	alert('Hey, You are awesome!!');
  });

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted");
}


form.addEventListener('submit', handleSubmit);

form.addEventListener('mouseover', handleSubmit);


let form = document.querySelector('form#contact');

