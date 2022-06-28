let headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = "green";

let bgTask = document.getElementsByClassName("emergency-tasks");
bgTask[0].style.backgroundColor = "LightCoral";

let bgTaskRight = document.getElementsByClassName("no-emergency-tasks");
bgTaskRight[0].style.backgroundColor = "Gold";

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "DarkSlateGray";

function colorTask(colorOne, colorTwo, verif, task) {
  for (let i in task) {
    if (i < verif / 2) {
      tasks[i].style.backgroundColor = colorOne;
    } else {
      tasks[i].style.backgroundColor = colorTwo;
    }
  }
}

let tasks = document.querySelectorAll("body h3");
colorTask("purple", "black", tasks.length, tasks);
