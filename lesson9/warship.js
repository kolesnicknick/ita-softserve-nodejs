class Board {
    constructor(arrBoard, numberOfShips){
        this.numberOfShips = numberOfShips;
        this.pointBoard = this.toPointBoard(arrBoard);
        this.ships = [];
        this.initShips();
    }

    placeAttack(attack){
        this.pointBoard[attack[0]][attack[1]].damage();
    }

    toPointBoard(arrBoard){
       arrBoard.map((subArr, x) => subArr.map((intPoint, y) => new Point(x, y, intPoint)));
    }

    initShips(){
        for (let i; i < this.numberOfShips; i++){
            let shipPoints = this.pointBoard.filter(point => point.value === i);
            this.ships.push(new Ship(shipPoints));
        }
    }
}

class Point {
    constructor(x, y, value){
        this.x = x;
        this.y = y;
        this.value = value;
        this.isDamaged = false;
    }

    damage(){
        this.isDamaged = true;
    }
}

class Ship {
    constructor(points){
        this.points = points;
    }

    isSunk(){return this.points.filter(i => !i.isDamaged()).length === 0 }
    isDamaged(){return this.points.filter(i => i.isDamaged()).length > 0 }
}


const arrBoard = [
    [0, 0, 0, 2, 2, 0],
    [0, 3, 0, 0, 0, 0],
    [0, 3, 0, 1, 0, 0],
    [0, 3, 0, 1, 0, 0]
];
const attacks = [[2, 1], [1, 3], [4, 2]];

const board = new Board(arrBoard);

attacks.forEach(attack => board.placeAttack(attack));

board.ships.forEach(i => console.log(`${i.isDamaged} ${i.isSunk}`));