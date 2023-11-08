let display = document.getElementById("display-text");
let reserve = document.getElementById("reserve-text");
let clear = document.getElementById("clear");




let starter = display;
let reserved = reserve;
starter.innerHTML = "0";
reserved.innerHTML = "0";
console.log(reserved)
clear.addEventListener('click', () => {
    starter.innerHTML = "0";
    reserved.innerHTML = "0";
} );

const add = () => {
    if(reserved.innerHTML == "0" && starter.innerHTML != "0") {
        reserved.innerHTML = starter.innerHTML
        starter.innerHTML = "0"
        operator ="add";
    }
}
const  subtract = () => {
    if(reserved.innerHTML == "0" && starter.innerHTML != "0") {
        reserved.innerHTML = starter.innerHTML
        starter.innerHTML = "0"
        operator ="subtract";
    }
}
const divide = () => {
    if(reserved.innerHTML == "0" && starter.innerHTML != "0") {
        reserved.innerHTML = starter.innerHTML
        starter.innerHTML = "0"
        operator ="divide";
    }
}

const multiply = () => {
    if(reserved.innerHTML == "0" && starter.innerHTML != "0") {
        reserved.innerHTML = starter.innerHTML
        starter.innerHTML = "0"
        operator ="multiply";
    }
    }
function operate() {
    switch(operator) {
        case "add": 
        reserved.innerHTML = Number(starter.innerHTML) + Number(reserved.innerHTML );
        starter.innerHTML = 0;
        break;
        case "subtract": 
        reserved.innerHTML = Number(starter.innerHTML) - Number(reserved.innerHTML );
        starter.innerHTML = 0;
        break;
        case "multiply": 
        reserved.innerHTML = Number(starter.innerHTML) * Number(reserved.innerHTML );
        starter.innerHTML = 0;
        break;
        case "divide": 
        reserved.innerHTML = Number(starter.innerHTML) / Number(reserved.innerHTML );
        starter.innerHTML = 0;
        break;
    }
}

console.log(starter.innerHTML.length)


function getButton(event) {
        let number = event.target.innerHTML
        console.log(number)
        if(starter.innerHTML.length > 25) {
            return;
        }
        if (starter.innerHTML === "0" && number === "0") {
            return (starter.innerHTML = "0");
        } else if (starter.innerHTML === "0" && number === ".") {
            return (starter.innerHTML = "0.");
        } else if (starter.innerHTML === "0") {
            return (starter.innerHTML = number);
        } else {
            return (starter.innerHTML += number);
        }   

       
    }