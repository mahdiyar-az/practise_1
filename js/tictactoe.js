let user_1_win = 0;
let user_2_win = 0;
let X_O = false;

function change_tic(num){
    if (X_O){
        document.getElementById(`js_change_table_${num}`).innerHTML = `<button id="js_change_table_${num}" class="text_home">O</button>`;
        X_O = false
    } else{
        document.getElementById(`js_change_table_${num}`).innerHTML = `<button id="js_change_table_${num}" class="text_home">X</button>`;
        X_O = true;    
    }
    
}