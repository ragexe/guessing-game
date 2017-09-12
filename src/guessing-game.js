class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.solutionCandidate = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.solutionCandidate = Math.ceil((this.max-this.min)/2+this.min);
    }

    lower() {
        this.setRange(this.min, this.solutionCandidate);
    }

    greater() {
        this.setRange(this.solutionCandidate, this.max);
    }
}

module.exports = GuessingGame;
