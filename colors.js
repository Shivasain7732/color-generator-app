generate = () => {
    const randomNumber =Math.floor(Math.random()*16777215);
    const color = "#" + randomNumber.toString(16);
    // console.log(randomNumber , color);
    document.body.style.backgroundColor = color;
    const colorName = document.getElementById("color");
    colorName.innerText = color;
    navigator.clipboard.writeText(color);//to copy the hax code automaticaly
}
generate();
// document.getElementsByClassName("btn").addEventListener("click", generate)