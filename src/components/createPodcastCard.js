/**
 * Creates a podcast card element.
 * @param {Object} podcast - The podcast data.
 * @returns {HTMLElement} The created podcast card element.
 */
export function createPodcastCard(podcast) {
  const card = document.createElement("article");
  card.className = "podcast-card";

  card.innerHTML = `
    <img src="${podcast.image}" alt="${podcast.title}">
    <h2>${podcast.title}</h2>
    <p>${podcast.seasons} seasons</p>
    `;

  return card;
}
