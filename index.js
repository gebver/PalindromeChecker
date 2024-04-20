const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const errorInfo = document.getElementById("errorInfo");

checkBtn.addEventListener("click", ()=>{
    
    const enteredWord = textInput.value;
    result.innerHTML = "";

    if(enteredWord === "")
    {
        errorInfo.classList.remove("hidden");
        return;

    }else{
        errorInfo.classList.add("hidden");
        checkIsItaPalindrome(enteredWord);
        textInput.value = "";
    }
    
})

function checkIsItaPalindrome(text)
{
    //Zmieniam słowo na małe litery i usuwam białe znaki
    const cleanedText = text.toLowerCase().replace(/[\s\W_]+/g, '');
    let reversedWord = cleanedText.split('').reverse().join('');

        if(cleanedText === reversedWord)
        {
            result.innerHTML = text + " is a Palindrome!";
            result.style.color = "darkgreen";
        } else{
            result.innerHTML = text + " is not a Palindrome!";
            result.style.color = "darkred";
        }
}


