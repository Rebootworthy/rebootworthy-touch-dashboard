function updateClock() {
  const now = new Date();

  document.getElementById("time").textContent =
    now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

  document.getElementById("date").textContent =
    now.toLocaleDateString([], {
      weekday: "long",
      month: "short",
      day: "numeric"
    });
}

function loadDashboard() {
  document.getElementById("brandName").textContent =
    dashboardConfig.branding.name;

  document.getElementById("brandSubtitle").textContent =
    dashboardConfig.branding.subtitle;

  document.getElementById("heroHeadline").textContent =
    dashboardConfig.branding.headline;

  document.getElementById("heroDescription").textContent =
    dashboardConfig.branding.description;

  const tilesContainer = document.getElementById("tiles");
  tilesContainer.innerHTML = "";

  dashboardConfig.tiles.forEach(tile => {
    const button = document.createElement("button");
    button.className = "tile";

    button.innerHTML = `
      <span class="icon">${tile.icon}</span>
      <span class="title">${tile.title}</span>
      <span class="subtitle">${tile.subtitle}</span>
    `;

    button.addEventListener("click", () => {
      if (tile.url) {
        window.location.href = tile.url;
      } else {
        window.location.href =
          `pages/page.html?page=${encodeURIComponent(tile.id)}`;
      }
    });

    tilesContainer.appendChild(button);
  });
}

updateClock();
setInterval(updateClock, 1000);
loadDashboard();

document.getElementById("fullscreenBtn").addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen();
  }
});
