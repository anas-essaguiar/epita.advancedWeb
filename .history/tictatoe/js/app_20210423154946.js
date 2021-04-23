function TicTacToe() {


    // Save player scores
    this.scores = {
        X: 0,
        O: 0
    };

    this.marks = {
        X: "X",  // Player 1 mark
        O: "O",  // Player 2 mark
        count: 0 // Number of moves made by player
    };

    return this;
}


TicTacToe.prototype.mark = function (_col) {

    // Stop if column is not empty
    if (column.innerHTML) {
        return;
    }

    // Count the move
    this.marks.count++;

    // Get the mark based on the count
    var current_mark = this.marks.count % 2 === 1 ? this.marks.X : this.marks.O;

    // Fill the column with mark
    column.innerHTML = current_mark;
    column.classList.add(current_mark);

    // Check if this player (X or O) won
    if (this.didWin(current_mark)) {
        // Increment the player score
        if (this.marks.count % 2 === 1) {
            this.scores.X++;
        } else {
            this.scores.O++;
        }
        // Send current mark and scores
        this.callback(current_mark, this.scores);
    } else if (this.marks.count === this.columns.length) {
        // Send result as draw
        this.callback("draw");
    }

};