class Team {
    constructor(playerSize) {
        this.players = [];
        for (let i = 0; i < playerSize; i++) {
            this.players.push(new Player())
        }
    }
}

class Player {
    constructor() {
        this.yellowCards = [];
        this.redCards = [];
    }

    applyCard(card) {
        if (card.isRed) {
            this.redCards.push(card);
        } else {
            this.yellowCards.push(card);
        }
    };

    isDeleted() {
        return this.yellowCards.length > 1 || this.redCards.length > 0;
    }
}

class Card {
    constructor(value) {
        this.isRed = value.slice(-1) === 'R';
        this.team = value[0];
        this.playerNumber = parseInt(value.slice(1, -1));
    }
}

class Game {
    constructor() {
        this.teamA = new Team(11);
        this.teamB = new Team(11);
    }

    putCardOnPlayer(card) {
        let team = card.team === "A" ? this.teamA : this.teamB;
        team.players[card.playerNumber - 1].applyCard(card);
    }

    menStillStanding(arrayOfCards) {
        arrayOfCards.map(i => new Card(i)).forEach(i => this.putCardOnPlayer(i));
        return [
            this.teamA.players.filter(i => !i.isDeleted()).length,
            this.teamB.players.filter(i => !i.isDeleted()).length
        ];
    }
}

console.log(new Game().menStillStanding(['A4Y', 'A4Y', 'B4R', 'B10R', 'B5R', 'B6R', 'B7R', 'B8R']));
