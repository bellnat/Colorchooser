let numRows = 4;
let numAll = 4;
let numCells = numRows * numRows;
let score = 0;
let DIFFSCALE = 50;
let results = " ";

let createTable = function(){

    // for loop - used when you know how many times you loop something.
    //FOR (initialize control variable; state the boolean expression; update control variable)
    let redColor = Math.floor(Math.random()*256);
    let greenColor = Math.floor(Math.random()*256);
    let blueColor = Math.floor(Math.random()*256);
    let regColor = "rgb(" + redColor +"," + greenColor + "," + blueColor + " )";
    let diffColor = "rgb(" + (redColor + 20) +"," + (greenColor + 20) + "," + (blueColor + 20) + " )";

    let randRow = Math.floor(Math.random()*numRows)+1;
    let randCols = Math.floor(Math.random()*numAll)+1;

    let table = document.createElement("TABLE");

    for(let row = 1; row <= 4; row++){
        /* row  = row < 4 is the same as  above. */

        let tableRow = document.createElement("TR");
        table.appendChild(tableRow);

        for(let col = 1; col <= 4; col++){

            let cell = document.createElement("TD");
            cell.onclick = function(){checkWin(this)};
            cell.style.backgroundColor = regColor;
            tableRow.appendChild(cell);
            if(row === randRow && col === randCols){
                cell.style.backgroundColor = diffColor;
                cell.id = "correctBox";
            }
        }

    }
    table.classList.add("aside");

    let placetoputTable = document.getElementById("content");
    placetoputTable.innerHTML = " ";
    placetoputTable.appendChild(table);

    let scoreRow = document.createElement("TR");
    let scoreRow2 = document.createElement("TR");
    let scoreRow3 = document.createElement("TR");
    let scoreCol = document.createElement("TD");
    let scoreCol2 = document.createElement("TD");
    let scoreCol3 = document.createElement("TD");
    scoreCol3.id = "Results";
    scoreCol.innerText = "Player's Score";
    scoreCol2.innerText = score;
    scoreCol3.innerText = results;
    scoreCol.classList.add("smallCell");
    scoreCol2.classList.add("smallCell");
    scoreCol3.classList.add("smallCell");
    scoreRow.appendChild(scoreCol);
    scoreRow2.appendChild(scoreCol2);
    scoreRow.appendChild(scoreCol3);

    let scoreBoard = document.createElement("TABLE");
    scoreBoard.appendChild(scoreRow);
    scoreBoard.appendChild(scoreRow2);
    scoreBoard.appendChild(scoreRow3);

    placetoputTable.appendChild(scoreBoard);

};

let checkWin = function(cell){
    if(cell.id === "correctBox"){
        results = "You found it";
        score++;
        if(score >= 10){
            score = 0;
            DIFFSCALE -= 5;
        }
        if (DIFFSCALE <= 40){
            winMenu();
        }else{
            createTable();
        }
    }else{
        results = "Wrong one";
        score--;
        if (score <= -5){
            score = 0;
            DIFFSCALE = 50;
            startMenu();
        }else{
            createTable();
        }
    }
};
let winMenu = function () {

    let title = document.createElement("H1");
    title.innerText = "Color Chooser Game";

    let directions = document.createElement("p");
    directions.innerText = "YOU WON";

    let begin = document.createElement("BUTTON");
    begin.innerText = "BEGIN";
    begin.onclick = createTable;

    let display = document.getElementById("content");
    display.innerHTML = " ";
    display.appendChild(title);
    display.appendChild(directions);
    display.appendChild(begin);

};


let startMenu = function () {

    let title = document.createElement("H1");
    title.innerText = "Color Chooser Game";

    let directions = document.createElement("p");
    directions.innerText = "Find the Color that is different. Score a point if you do. Lose a point if you don't. Score 10 pts to progress to next level. Score -5 and it ends game."

    let begin = document.createElement("BUTTON");
    begin.innerText = "BEGIN";
    begin.onclick = createTable;

    let display = document.getElementById("content");
    display.innerHTML = " ";
    display.appendChild(title);
    display.appendChild(directions);
    display.appendChild(begin);
};

