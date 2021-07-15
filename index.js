const grays = document.querySelectorAll(".grays");
const screen1 = document.querySelector(".key1");
grays.forEach (button => {
    button.addEventListener("click", () => {
        screen1.value += button.innerHTML;
    })
})

// in case of pushing "AC" button
const screen2 = document.querySelector(".key5");
document.querySelector(".key9").onclick = function () {
    screen1.value = ""; 
    screen2.value = "0";
}

// in case of pushing "←" button
document.querySelector(".key11").onclick = function () {
    // const thing = screen1.value;
    // console.log(typeof thing);
    screen1.value = screen1.value.slice(0,-1)
}

const oranges = document.querySelectorAll(".oranges, .key10");
oranges.forEach (button => {
    button.addEventListener("click", () => {
        screen1.value += button.classList[3]
        // console.log(button.classList);

        const enter = document.querySelector(".enter");
        enter.addEventListener("click", () => {
            // FIRST SOLUTION but it has math operation priority problems... ******
            // screen2.value = eval(screen1.value);
            
            //SECOND SOLUTION*********        
            const thing = screen1.value;
            function solution(input) { return new Function('return ' + input)() }
            
            for (i of ["+", "-", "*", "/", "."]) {
                if (screen1.value.endsWith(i)) screen2.value = "ERROR!";
            }
            
            screen2.value = solution (thing);
            if (screen2.value === "NaN" || screen2.value === "Infinity") screen2.value = "ERROR!";


            //THIRD SOLUTION ********
           /*  const operation = screen1.value.split(button.classList[3]);
            // console.log(operation);
            // console.log(button.classList[3]);
        
            switch (button.classList[3]) {
                case "+" :
                    screen1.value.includes(".") ? screen2.value = (Number(operation[0]) + Number(operation[1])).toFixed(2) :
                    screen2.value = (Number(operation[0]) + Number(operation[1]));
                    break;
                case "-" :
                    screen1.value.includes(".") ? screen2.value = (Number(operation[0]) - Number(operation[1])).toFixed(2) :
                    screen2.value = (Number(operation[0]) - Number(operation[1]));
                    break;
                case "*" :
                    screen1.value.includes(".") ? screen2.value = (Number(operation[0]) * Number(operation[1])).toFixed(2) :
                    screen2.value = (Number(operation[0]) * Number(operation[1]));
                    break;
                case "/" :
                    screen2.value = (Number(operation[0]) / Number(operation[1])).toFixed(2);
                    break;
                case "%" :
                    screen2.value = (Number(operation[0]) * Number(operation[1]) / 100).toFixed(2);
                    break;
            } 
            if (screen2.value === "NaN" || screen2.value === "Infinity") screen2.value = "ERROR!";
            for (i of ["+", "-", "*", "/", "."]) {
                if (screen1.value.endsWith(i)) screen2.value = "ERROR!";
            }
            */
        })
    })
})
