const directoryUrl = "https://kelvin-aj.github.io/wdd230/chamber/json/data.json";
const container = document.querySelector(".direct_container");




async function getandshowDirectory() {
    const response = await fetch(directoryUrl);
    const jsonObject = await response.json();
    const directory = jsonObject.directory;
    console.log(directory);



    container.innerHTML = "";
    directory.forEach((company) => {
        container.insertAdjacentHTML("beforeend", 
        `
                    <div class="company">
                        <img class="company-img" src="${company.logoURL}" loading="lazy" alt="logo of ${company.name}">
                        <div class="company-information">
                            <h2 class="mono-text">${company.name} <img src="images/star_FILL0_wght400_GRAD0_opsz24.svg" alt="${company.membership} tag" class="${company.membership}"></h2>
                            <ul>
                            <li><strong>Email: </strong>${company.email}</li>
                            <li><strong>Website:</strong>${company.websiteURL}</li>
                            <li><strong>Address: </strong>${company.address}</li>
                            <li><strong>Phone: <strong>${company.phoneNumber}</li>
                            </ul>
                            <p class="transparent">${company.description}</p>
                        </div>
                    </div>`)
    });
};
getandshowDirectory();




// fetch(directoryUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    
//     const directory = jsonObject['data'];
//     directory.forEach(displayCompany);
// });


// function displayCompany(company) {
//     // Create elements to add to the document
//     let card = document.createElement('section');
//     let h2 = document.createElement('h2');
//     let portrait = document.createElement('img');
//     let uniformList = document.createElement('p');
//     let birthDate = document.createElement('p');
  
//     // Change the textContent property of the h2 element to contain the prophet's full name
//     let fullName= `${company.name}`;
//     h2.textContent = fullName;

//     // add textcontent property of the ul elements to contain needed list
//     uniformList.textContent =   
//     `<li>${company.email}</li>
//     <li>${company.websiteURL}</li>
//     <li>${company.address}</li>
//                                  <li>${company.phoneNumber}</li>`
                                 
    


//     // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
//     portrait.setAttribute('src', company.logoURL);
//     portrait.setAttribute('alt', `logo of ${fullName}`);
//     portrait.setAttribute('loading', 'lazy');
  
//     // Add/append the section(card) with the h2 element
//     card.appendChild(h2);
//     card.appendChild(portrait);
//     card.appendChild(uniformList);
//     card.appendChild(birthPlace);

  
//     // Add/append the existing HTML div with the cards class with the section(card)
//     container.appendChild(card);
// }


