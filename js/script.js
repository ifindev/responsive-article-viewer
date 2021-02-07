// Script for changing header text
let count = 0;
document.getElementById('demo').onclick = function changeContent() {
	if(count == 0) {
		document.getElementById('demo').textContent = "I'm red now! Click me again!";
	   	document.getElementById('demo').style = "Color: red";
	   	count = 1;
	} else if(count == 1){
		document.getElementById('demo').textContent = "I'm blue now! Click me again!";
	   	document.getElementById('demo').style = "Color: blue";
	   	count = 2;
	} else {
		document.getElementById('demo').textContent = "Click Me to reveal a secret!";
	   	document.getElementById('demo').style = "Color: black";
	   	count = 0;
	}

}

/* script for moving from one article to another */

// Variables for manipulating DOM
const buttonItem = document.querySelectorAll('.btn');
const contentArticles = document.querySelectorAll('.article');
var moreArticle;

var buttonId = 'btn-1'; // Default

// select article 
function selectArticle(elem) {
	// remove show from each article
	removeShow();

	// remove button color
	removeButtonColor();

	// check which button is being clicked
	// console.log(this.id);
	buttonId = this.id;

	// grab article id from the DOM using btn id
	var articleItem;
	if(buttonId === 'btn-1') {
		articleItem = document.getElementById('article-1');
	} else if (buttonId === 'btn-2') {
		articleItem = document.getElementById('article-2');
	} else {
		articleItem = document.getElementById('article-3');
	}

	console.log(articleItem);

	// add show class to the chosen article 
	articleItem.classList.add('show');

	
	// Show read more button
	const readMore = articleItem.getElementsByClassName('read-more');
	readMore.item(0).classList.remove('hide');
	/* console.log(readMore);	--> HTML collection array
	  console.log(readMore.item(0)); */

	// hide the more-article-content
	moreArticle = articleItem.getElementsByClassName('more-article-content');
	moreArticle.item(0).classList.add('hide');


	// add background color to the selected button
	const selectedButton = document.getElementById(this.id);
	// console.log(selectedButton);
	selectedButton.classList.add('btn-selected');
}

// remove background color from each button
function removeButtonColor() {
	buttonItem.forEach(item => item.classList.remove('btn-selected'));
}

// remove show class from each article
function removeShow() {
	contentArticles.forEach(item => item.classList.remove('show'));
}


// check parent Id of read more button
function displayMore(elem) {
	// Get readmore article parent id
    const parentId = elem.parentNode.id;
    console.log(parentId);

    // remove read-more button
    elem.classList.add('hide');

    // show complete article
    elem
			.parentNode
			.getElementsByClassName('more-article-content')
			.item(0)
			.classList
			.remove('hide')
 }

// listen for button click
buttonItem.forEach(item => item.addEventListener('click', selectArticle));