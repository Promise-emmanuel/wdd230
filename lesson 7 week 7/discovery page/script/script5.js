// for the hamburger menu
function toggleMenu() {
    console.log('It worked')
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;


// for the current date in the header
// select the elements to manipulate (output to)
const datefield = document.getElementById("date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;



// for the last modification in the footer
document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


const options = {year: 'numeric'};
document.getElementById('year').textContent = new Date().toLocaleDateString('en-us', options)


const invite = document.getElementById("banner_hide");

const option2 = {weekday: 'long'};
const weekEndDay = new Intl.DateTimeFormat("en-us", option2).format(now);



if(weekEndDay == "Monday" || weekEndDay == "Saturday"){
    invite.add("banner_hide");
}else{
    invite.remove("banner_hide");
};