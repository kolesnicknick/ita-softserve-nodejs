class Distance {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    getFormattedDistance() {
        return { points: [this.from.toString(), this.to.toString()], distance: this._caclulateDistance()};
    }

    _caclulateDistance(){
        return Math.sqrt(Math.pow(this.from.x - this.to.x, 2) + Math.pow(this.from.y - this.to.y, 2));
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString(){
        return [this.x, this.y].toString()
    }
}


class Board {
    constructor(arrayOfPoints) {
        this.arrayOfPoints = arrayOfPoints.map(arrPoint => new Point(arrPoint[0], arrPoint[1]))
        }

    distances() {
        let distances = [];
        const length = this.arrayOfPoints.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (i === j) continue;
                distances.push(new Distance(this.arrayOfPoints[i], this.arrayOfPoints[j]));
            }
        }

        console.log(distances[0].from);
        return distances;
    }
}


const arrayOfPoints = [
    [2, 2],
    [2, 8],
    [5, 5],
    [6, 3],
    [6, 7],
    [7, 4],
    [7, 8]
];

console.log(new Board(arrayOfPoints).distances()
    .map(distance => distance.getFormattedDistance())
    .sort((a, b) => a.distance - b.distance)[0]
    );
