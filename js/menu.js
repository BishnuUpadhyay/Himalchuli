fetch("menus.json")
  .then(res => res.json())
  .then(data => {
    console.log("Rendering menu once");

    const container = document.getElementById("menuContainer");

    container.innerHTML = ""; // 🔥 IMPORTANT FIX

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

      card.innerHTML = `<h3>${section.category}</h3>${itemsHTML}`;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Menu load error:", err));