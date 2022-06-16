const visitsDisplay = document.querySelector(".visits");
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

// get the stored value in localStorage
let lastVisit = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number in days you last visited.
if (lastVisit !== 0) {
	newVisit = Math.round((Date.now() - lastVisit) /day );

	visitsDisplay.textContent = newVisit;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}


// store the new date of visits value in milliseconds such that when it is called above
newDate = Date.now()
localStorage.setItem("visits-ls", newDate);


