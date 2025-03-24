let welcomeBodyContent = template.content.cloneNode(true);
let mainContent = document.querySelector("#main-content");
mainContent.innerHTML = "";
mainContent.appendChild(welcomeBodyContent);
