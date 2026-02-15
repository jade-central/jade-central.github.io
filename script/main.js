const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        for (let j = 0; j < this.children.length; j++) {
            let childHTML = this.children[j].innerHTML;
            if (childHTML == "▼") {
                this.children[j].innerHTML = "▲";
            } else if (childHTML == "▲") {
                this.children[j].innerHTML = "▼";
            }
        }
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            content.style.borderRight = "none";
            content.style.borderBottom = "none";
            content.style.overflow = "hidden";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            //content.style.maxHeight = "50%";
            content.style.borderRight = "3px solid #ff9b89";
            content.style.borderBottom = "3px solid #ff9b89";
            content.style.overflow = "auto";
        } 
  });
}

const showHide = document.getElementsByClassName("show-hide");

for (let k = 0; k < showHide.length; k++) {
    showHide[k].addEventListener("click", function () {
        let itemList = this.previousElementSibling.children;
        
        for (let m = 0; m < itemList.length; m++) {
            if (itemList[m].classList.contains('hide')) {
                itemList[m].classList.add("unhide");
                itemList[m].classList.remove("hide");
                showHide[k].innerHTML = "Show less";
            } else if (itemList[m].classList.contains('unhide')) {
                itemList[m].classList.add("hide");
                itemList[m].classList.remove("unhide");
                showHide[k].innerHTML = "Show more";
            }
        }
    });
}

