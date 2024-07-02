// NOTE - Lab 2

// Exercise 1 :
// Modify the addCard function from the previous slide
// so that you can pass content for the card dynamically.

// Exercise 2 :
// Call addCard repeatedly so that your cards are
// automatically generated based on data from an array.
// This way you will create as many cards as you need to
// display all the data in the array.

// Exercise 3 - the artist’s portfolio:
// Populate the page dynamically, by generating an artist
// profile card which includes cards representing the
// items in an artist's portfolio. 

// Extension: make an array
// of artists, all with multiple portfolio items.

//NOTE - Previous Functions for card

// function addCard() {
//     let indexref = 0;
    
//     const templateOne =
//     document.getElementById("card-template-one").content.cloneNode(true);
    
//     dataList.forEach((data) => { 
//         templateOne.querySelector('.card-title').innerText = 
//         `Hi my name is ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`;
//         templateOne.querySelector('.card-text').innerText = 
//         `I'm ${data.age} years old`;
//         // console.log(`${data.name} is ${data.age} years old`); 
//     });

//     // console.log(`${data.name} is ${data.age} years old`); 

//     document.querySelector('#card-list').appendChild(templateOne);
// }

// const addArtCard = document.getElementById('add-card');
// const addCard = document.getElementById('add-art-card');
// let indexref = 0;

// addCard.onclick = function() {
//     const templateOne = document.getElementById("card-template-one").content.cloneNode(true);
    
//     const add = function() { 
//         if (indexref == dataList.length) {
//             alert(`Error: invaild data, index exceeded the array length: ${indexref}'`);
//             indexref = 0;
//             return indexref;
//         }
//         templateOne.querySelector('.card-title').innerText = 
//          `Hi my name is ${dataList[indexref].name.charAt(0).toUpperCase() + dataList[indexref].name.slice(1)}`;
//         // console.log(`${dataList[indexref].name} is ${dataList[indexref].age} years old`);
//         templateOne.querySelector('.card-text').innerText = 
//             `I'm ${dataList[indexref].age} years old`;
//         indexref++;
//         document.querySelector('#card-list').appendChild(templateOne);
//     }

//     add();
//     // document.querySelector('#card-list').appendChild(templateOne);
// }    

// addArtCard.onclick = function() {
//     const templateOne = document.getElementById("card-template-one").content.cloneNode(true);
    
//     const add = function() { 
//         if (indexref == dataList.length) {
//             alert(`Error: invaild data, index exceeded the array length: ${indexref}'`);
//             indexref = 0;
//             return indexref;
//         }
//         templateOne.querySelector('.card-title').innerText = 
//          `Hi my name is ${dataList[indexref].name.charAt(0).toUpperCase() + dataList[indexref].name.slice(1)}`;
//         // console.log(`${dataList[indexref].name} is ${dataList[indexref].age} years old`);
//         templateOne.querySelector('.card-text').innerText = 
//             `I'm ${dataList[indexref].age} years old`;
//         indexref++;
//         document.querySelector('#card-list').appendChild(templateOne);
//     }

//     add();
//     // document.querySelector('#card-list').appendChild(templateOne);
// }    