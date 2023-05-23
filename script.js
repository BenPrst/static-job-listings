let main = document.querySelector("main");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (const companies of data) {
      //CREATING THE CARD
      let card = document.createElement("article");
      card.classList.add("card");
      main.appendChild(card);
      //CREATING THE COMPANIES IMG
      let img = document.createElement("img");
      img.setAttribute("src", companies.logo);
      img.classList.add("img-companies");
      card.appendChild(img);
      //DIVIDING THE CARD
      let topCard = document.createElement("section");
      let botCard = document.createElement("section");
      let hr = document.createElement("hr");
      topCard.classList.add("top-card");
      botCard.classList.add("bot-card");
      card.appendChild(topCard);
      card.appendChild(hr);
      card.appendChild(botCard);
      //**List TOP CARD
      let listTop = document.createElement("ul");
      listTop.classList.add("top-list");
      topCard.appendChild(listTop);
      //!FIRST LINE
      let line1 = document.createElement("li");
      //COMPANY NAME
      let companyName = document.createElement("span");
      companyName.innerText = `${companies.company}`;
      companyName.classList.add("company-name");
      line1.appendChild(companyName);
      //NEW!
      if (companies.new === true) {
        let newSpan = document.createElement("span");
        newSpan.innerText = "New !";
        newSpan.classList.add("new");
        line1.appendChild(newSpan);
      }
      //FEATURED
      if (companies.featured === true) {
        let featuredSpan = document.createElement("span");
        featuredSpan.innerText = "Featured";
        featuredSpan.classList.add("featured");
        card.classList.add("featured-card");
        line1.appendChild(featuredSpan);
      }
      //!SECOND LINE
      let line2 = document.createElement("li");
      line2.innerText = `${companies.position}`;
      line2.classList.add("profession");
      //!THIRD LINE
      let line3 = document.createElement("li");
      //DATE
      let date = document.createElement("span");
      date.innerText = `${companies.postedAt}`;
      date.classList.add("date");
      line3.appendChild(date);
      //Contract
      let contract = document.createElement("span");
      contract.innerText = `${companies.contract}`;
      contract.classList.add("contract");
      line3.appendChild(contract);
      //Location
      let location = document.createElement("span");
      location.innerText = `${companies.location}`;
      location.classList.add("location");
      line3.appendChild(location);
      //APPEND LINES
      listTop.appendChild(line1);
      listTop.appendChild(line2);
      listTop.appendChild(line3);
      //**List BOT CARD
      let listBot = document.createElement("ul");
      listBot.classList.add("bot-list");
      botCard.appendChild(listBot);
      //FUNTCION BOTLIST
      function botList(param) {
        listBot.classList.add("bot-card-list");

        if (Array.isArray(param)) {
          for (let item of param) {
            let itemLi = document.createElement("li");
            itemLi.innerText = item;
            itemLi.classList.add("parameters");
            listBot.appendChild(itemLi);
          }
        } else {
          let itemLi = document.createElement("li");
          itemLi.innerText = param;
          itemLi.classList.add("parameters");
          listBot.appendChild(itemLi);
        }
      }
      //LANGUAGES
      botList(companies.languages);
      //TOOLS
      botList(companies.tools);
      //ROLE
      botList(companies.role);
      //LEVEL
      botList(companies.level);
    }
  });
