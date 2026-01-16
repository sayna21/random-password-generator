const buttonEl=document.querySelector(".button");
const inputEl=document.getElementById("input");
const copyIconEl=document.querySelector(".fa-copy");
const alertContainerEl=document.querySelector(".alert-container");
buttonEl.addEventListener("click", ()=>{createPassword()});
copyIconEl.addEventListener("click",()=>{copyPassword();
    if(inputEl.value){
        alertContainerEl.classList.remove("active");
    setTimeout(()=>{alertContainerEl.classList.add("active");}, 2000);
    }
});
function createPassword(){
    const chars="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+?{}[]:ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength=14;
    let password="";
    for(let  index=0; index<passwordLength;  index++){
        const randomNum=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNum, randomNum+1);
    }
    inputEl.value=password;
    alertContainerEl.innerText=password+" copied!";
}
function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}