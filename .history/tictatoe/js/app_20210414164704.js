

let cols = document.querySelectorAll(".col")
let curr_player = 1;

cols.forEach((col) => {
    col.onclick = (e) => {
        e.target.innerHTML = "X"
    }

});


