//NOTE - Data list sheet
const dataList = [
    {name: 'bob', age: 23},
    {name: 'alice', age: 39},
]

const artistList = [
    {
    name: "Van Gogh",
    artist_type: "Dutch Post-Impressionist Painter",
    portfolio:[
        {title: "portrait", url:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"},
        {title: "sky", url:"https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg" },
        ]
    },
    {
    name: "Claude Monet",
    artist_type: "French Impressionist Artist",
    portfolio:[
        {title: "portrait", url:"https://uploads6.wikiart.org/images/claude-monet/self-portrait-with-a-beret-1886.jpg!Large.jpg"},
        {title: "women with a parasol", url:"https://media.nga.gov/iiif/99758d9d-c10b-4d02-a198-7e49afb1f3a6/full/!588,600/0/default.jpg" },
        ]
    },
    {
    name: "Edgar Degas",
    artist_type: "French Impressionist Artist",
    portfolio:[
        {title: "portrait", url:"https://uploads1.wikiart.org/images/edgar-degas/self-portrait-1855.jpg!Large.jpg"},
        {title: "the three dancers", url:"https://learning.qagoma.qld.gov.au/wp-content/uploads/2017/12/Edgar-DEGAS-Trois-danseuses-a-la-classe-de-danse-1888-90.jpg"},
        ]
    }, 
    {
    name: "Johannes Vermeer",
    artist_type: "Dutch Baroque Period Painter",
    portfolio:[
        {title: "portrait", url:"https://www.johannesvermeer.org/assets/img/vermeer.jpg"},
        {title: "girl with a pearl earring", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg" },
        ]
    },
]

//NOTE - Useful Functions
function arrIndexingRange(datasheet) {
    let indexref = -1;
    return function() {
        if (indexref == datasheet.length - 1) {
            // console.log('array length exceeded! Resetting to a new value of 0')
            indexref = 0;
        }
        else {
            indexref++;   
        }
        // console.log(inx);
        return indexref;
    }
}

let inxOne = arrIndexingRange(dataList); 
let inxTwo = arrIndexingRange(dataList);
let inxThree = arrIndexingRange(artistList);
let inxFour = arrIndexingRange(artistList);
let inxFive = arrIndexingRange(artistList);
let inxSix = arrIndexingRange(artistList);
let inxSeven = arrIndexingRange(artistList);
let inxEight = arrIndexingRange(artistList);

//NOTE - Card functions
function addCard() {
    const templateOne =
    document.getElementById("card-template-one").content.cloneNode(true);
    
    templateOne.querySelector('.card-title').innerText = dataList[inxOne()].name;
    templateOne.querySelector('.card-text').innerText = dataList[inxTwo()].age;

    document.querySelector('#card-list').appendChild(templateOne);
    console.log('Successfully Added Content!');

    // for (let index = 0; index < dataList.length; index++) {
    //     const templateOne =
    //     document.getElementById("card-template-one").content.cloneNode(true);
        
    //     templateOne.querySelector('.card-title').innerText = dataList[index].name;
    //     templateOne.querySelector('.card-text').innerText = dataList[index].age;
    
    //     document.querySelector('#card-list').appendChild(templateOne);
    //     console.log('Successfully Added Content!');
    // }
}

function addArtistCard() {
    const templateTwo =
        document.getElementById("card-template-two").content.cloneNode(true);
    
    templateTwo.querySelector('.card-title').innerText = artistList[inxThree()].name;
    templateTwo.querySelector('.card-text').innerText = artistList[inxFour()].artist_type;

    templateTwo.querySelector('.card-img-one').src = 
        artistList[inxFive()].portfolio[0].url;
    templateTwo.querySelector('.card-img-two').src = 
        artistList[inxSix()].portfolio[1].url;

    templateTwo.querySelector('.card-img-one').alt = 
        artistList[inxSeven()].portfolio[0].title;
    templateTwo.querySelector('.card-img-two').alt = 
        artistList[inxEight()].portfolio[1].title;

    document.querySelector('#card-art-list').appendChild(templateTwo);
    console.log('Successfully Added Content!');
}

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