
alert("welcome the TIC TAC TOE Game !");

let curr_player = 1;

cols.array.forEach((col) => {
    col.onclick = (e) => {
        e.target.innerHTML = "X"
    }

});


