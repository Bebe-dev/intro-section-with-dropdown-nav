function openSideNav(){
  document.getElementById("mySideBar").style.width = "65%";
  document.getElementById("mySideBar").style.boxShadow = "0 0 0 10000px rgba(0,0,0,0.7)";
 }
 
 
function closeSideNav(){
  document.getElementById("mySideBar").style.width = "0px";
  document.getElementById("mySideBar").style.boxShadow = "none";
 }

function featuresArrowUp(){
  document.getElementById("featuresimage").src = "images/icon-arrow-up.svg";
  
}
function companyArrowUp(){
  document.getElementById("companyimage").src = "images/icon-arrow-up.svg";
}

function featuresArrowDown(){
  document.getElementById("featuresimage").src = "images/icon-arrow-down.svg";
}

function companyArrowDown() {
  document.getElementById("companyimage").src = "images/icon-arrow-down.svg";
}

