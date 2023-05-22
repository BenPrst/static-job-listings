let main = document.querySelector("main");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (const companies of data) {
      //CREATING THE CARD
      let article = document.createElement("article");
      article.classList.add("card");
      main.appendChild(article);
      //DIVIDING THE CARD
      let section1 = document.createElement("section");
      let section2 = document.createElement("section");
      let hr = document.createElement("hr");
      section1.classList.add("top-card");
      section2.classList.add("bot-card");
      article.appendChild(section1);
      article.appendChild(hr);
      article.appendChild(section2);
      //CREATING THE COMPANIES IMG
      let img = document.createElement("img");
      img.setAttribute("src", companies.logo);
      img.classList.add("img-companies");
      article.appendChild(img);
      //List TOP CARD
      let ul1 = document.createElement("ul");
      ul1.classList.add("top-list");
      section1.appendChild(ul1);
      let li = document.createElement("li");
      let text = document.createTextNode(companies.company);
      li.appendChild(text);
      ul1.appendChild(li);
    }
  });
