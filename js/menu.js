fetch("Menu.json")
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("menuContainer");

    data.forEach(section => {

      const card = document.createElement("div");
      card.className = "menu-card";

      let itemsHTML = "";

      section.items.forEach(item => {

        itemsHTML += `
          <a href="details.html?id=${item.id}" class="food-link">
            <div class="item">
              <span>${item.name}</span>
              <span>$${item.price}</span>
            </div>
          </a>
        `;
      });

      card.innerHTML = `
        <h3>${section.category}</h3>
        ${itemsHTML}
      `;

      container.appendChild(card);

    });

  });