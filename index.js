let mwili=document.querySelector("body");
mwili.style.backgroundColor="silver"
let title=document.querySelector("h1");
title.style.color="green"
let heading3=document.querySelectorAll("h3").forEach(item =>
    item.innerHTML=item.textContent.toLocaleUpperCase())
let ongeza=document.createElement("li");
ongeza.appendChild(document.createTextNode("Blueberry"))
let blueberry=document.getElementById("fruList").appendChild(ongeza)
let ongezatwo=document.createElement("li")
ongezatwo.appendChild(document.createTextNode("Lettuce"))
let Lettuce=document.getElementById("vegList").appendChild(ongezatwo)