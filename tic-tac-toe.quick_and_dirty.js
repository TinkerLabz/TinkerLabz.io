 /*
    tic tac toe (quick & dirty)
    console/terminal version
    print to screen after every move
*/
const E = "E"; // empty
const X = "X"; // x mark
const O = "O"; // y mark
let turn = false;
let matrix = [];
let cnt = 9;
function printMatrix() {
    console.log(matrix[0])
    console.log(matrix[1])
    console.log(matrix[2])
}
function end() {
    cnt = 0;
    console.log("game over");
    if (arguments.length === 1) console.log(`${arguments[0]} WON`);
    else console.log("TIE");
}
function mark(row, col){
    if (cnt > 0) {
        if (matrix[row][col] === [X,O][Number(turn)]) {
            console.log("spot marked, try again");
            return false;
        }
        matrix[row][col] = [X,O][Number(turn)]
        // check winner
        let arr = [X,O];
        arr.forEach((marker)=>{
            // check rows
            for (let i = 0; i < 3; i++) {
                if (matrix[i].every(e=>e===marker)) {end(marker)}
            }
            // check columns
            for (let i = 0; i < 3; i++) {
                if (matrix[0][i] === matrix[1][i] === matrix[2][i]) {end(marker)}
            }
            // check diagnol
        });
        let tl = matrix[0][0];
        let tr = matrix[0][2];
        let bl = matrix[2][0];
        let br = matrix[2][2];
        let ctr=matrix[1][1];
        if (ctr === X || ctr === O) {
            if (tl===ctr && ctr === br) {end(matrix[1][1])}
            if (tr===ctr && ctr === bl) {end(matrix[1][1])}
        }
        turn = !turn;
        --cnt;
    } else {end(X,O);}
    printMatrix();
}
function start() {
    matrix = [
                [E,E,E],
                [E,E,E],
                [E,E,E]
    ];
    turn = false;
    cnt = 9;
    printMatrix();
}
start();