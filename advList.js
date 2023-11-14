var myItems = document.querySelectorAll("#codeBox li");
var totalItems = myItems.length;

// Send it to the trash

for (let i = 0; i < totalItems; i++) {
  let imgIcon = document.createElement("img");
  imgIcon.setAttribute(
    "src",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png"
  );
  imgIcon.setAttribute("class", "listIcon");

  myItems[i].appendChild(imgIcon);
}

myList.addEventListener("click", changeProp, false);

function changeProp(e) {
  let target = getTarget(e);
  let tParent = target.parentNode;

  console.log("helloooo");
  if (target.className == "selected") {
    target.classList.remove("selected");
  } else {
    target.setAttribute("class", "selected");
  }
}

myList.addEventListener("click", deleteProp, false);

function deleteProp(e) {
  let target = getTarget(e);
  let tParent = target.parentNode;
  myList.removeChild(tParent);
  console.log(tParent);
}
