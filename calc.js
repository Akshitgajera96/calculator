let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML.trim();

        if (buttonText === '=') {
            try {
                let result = math.evaluate(string);
                input.value = result;
                string = result.toString(); 
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (buttonText.toLowerCase() === 'ac') {
            string = "";
            input.value = string;
        } else if (buttonText.toLowerCase() === 'del') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});