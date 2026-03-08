const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById("btn-generate")
const inputField = document.getElementById("input")
let pwLength = 8
const pw1 = document.getElementById("pw1")
const pw2 = document.getElementById("pw2")

generateBtn.addEventListener("click", function() {
    pw1.textContent = generate()
    pw2.textContent = generate()
})

pw1.addEventListener("click", function() {
    navigator.clipboard.writeText(pw1.textContent)
})

pw2.addEventListener("click", function() {
    navigator.clipboard.writeText(pw2.textContent)
})

function generate() {
    if (inputField.value){
        pwLength = inputField.value
    } else{
        pwLength = 8
    }
    let pw = ""
    for (let i = 0; i < pwLength; i++)
        pw += randChar()
    return pw
}

function randChar(){
    let i = Math.floor(Math.random() * characters.length)
    return characters[i]
}