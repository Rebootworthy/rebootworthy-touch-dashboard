const params = new URLSearchParams(window.location.search);
const pageName = params.get("page");

const tile = dashboardConfig.tiles.find(item => item.id === pageName);

if (tile) {
  document.title = `${tile.title} | ${dashboardConfig.branding.name}`;

  document.getElementById("pageTitle").textContent = tile.title.toUpperCase();
  document.getElementById("pageSubtitle").textContent = tile.subtitle;
  document.getElementById("pageHeadline").textContent = tile.headline;
  document.getElementById("pageDescription").textContent = tile.description;
} else {
  document.getElementById("pageTitle").textContent = "PAGE NOT FOUND";
  document.getElementById("pageSubtitle").textContent = dashboardConfig.branding.name;
  document.getElementById("pageHeadline").textContent = "Unknown Page";
  document.getElementById("pageDescription").textContent =
    "Return to the dashboard and choose a valid tile.";
}
