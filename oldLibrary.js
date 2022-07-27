function oldLibrary(input){
    let favouriteBook = input[0];
    let index = 1;
    let foundBook = false;

    let nextBook = input[index];
    while(nextBook !== "No More Books"){
        if(nextBook === favouriteBook){
            foundBook = true;
            break;
        }
        index++;
        nextBook = input[index];
    }

    if(foundBook === false){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}

oldLibrary(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
oldLibrary(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
oldLibrary(["Troy",
"Stronger",
"Life Style",
"Troy"])