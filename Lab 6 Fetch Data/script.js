let newsFeed = [
    { id: 1, title: 'Election Results',
    content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success',
    content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning',
    content: "Residents should prepare..." }
];

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

let inxOne = arrIndexingRange(newsFeed); 
let inxTwo = arrIndexingRange(newsFeed);

//NOTE - Card functions
function addNewsArticle() {
    const templateOne =
        document.getElementById("news-template").content.cloneNode(true);

    templateOne.querySelector('.news-title').innerHTML = newsFeed[inxOne()].title;
    templateOne.querySelector('.news-content').innerHTML = newsFeed[inxTwo()].content;

    document.querySelector('#news-display').appendChild(templateOne);
    
    console.log('Successfully Added Content!');
}

function newsArticleRemoveAll() { 
    document.getElementById("news-display").innerText = '';
    console.log('All Content Removed!');
}

const timer = setInterval(addNewsArticle, 5000);

function initFeed() {
    timer;
}

function stopReloading() {
    clearInterval(timer);
}