const pageContent = {
  homelab: {
    title: "HOMELAB",
    subtitle: "Servers & Services",
    headline: "Homelab Dashboard",
    description: "This page will contain server, service, and infrastructure information."
  },

  workout: {
    title: "WORKOUT",
    subtitle: "Training Dashboard",
    headline: "Workout Dashboard",
    description: "This page will contain training, workout, and progress information."
  },

  network: {
    title: "NETWORK",
    subtitle: "Network Status",
    headline: "Network Dashboard",
    description: "This page will contain network devices, status, and connectivity information."
  },

  monitoring: {
    title: "MONITORING",
    subtitle: "System Health",
    headline: "Monitoring Dashboard",
    description: "This page will contain service health, uptime, and system monitoring information."
  },

  media: {
    title: "MEDIA",
    subtitle: "Music & Entertainment",
    headline: "Media Dashboard",
    description: "This page will contain music, media, and entertainment controls."
  },

  controls: {
    title: "CONTROLS",
    subtitle: "Quick Actions",
    headline: "Controls Dashboard",
    description: "This page will contain buttons and quick actions for connected services and devices."
  }
};

const params = new URLSearchParams(window.location.search);
const pageName = params.get("page");

const page = pageContent[pageName];

if (page) {
  document.title = `${page.title} | Rebootworthy`;

  document.getElementById("pageTitle").textContent = page.title;
  document.getElementById("pageSubtitle").textContent = page.subtitle;
  document.getElementById("pageHeadline").textContent = page.headline;
  document.getElementById("pageDescription").textContent = page.description;
} else {
  document.getElementById("pageTitle").textContent = "PAGE NOT FOUND";
  document.getElementById("pageSubtitle").textContent = "Rebootworthy Touch Dashboard";
  document.getElementById("pageHeadline").textContent = "Unknown Page";
  document.getElementById("pageDescription").textContent =
    "Return to the dashboard and choose a valid section.";
}
