export function createGrid() {
  const gridElement = document.getElementById("podcastGrid");

  function render(podcasts) {
    gridElement.innerHTML = "";
    podcasts.forEach((podcast) => {
      const card = document.createElement("article");

      card.className = "podcast-card";
      card.innerHTML = `
      <img src="${podcast.image}" alt="${podcast.title}"/>
      <h2>${podcast.title}</h2>
      <p>${podcast.seasons}</p>`;

      gridElement.appendChild(card);
    });
  }

  return {
    render,
  };
}
