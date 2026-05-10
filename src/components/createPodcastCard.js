import { GenreService } from "../utils/genreService.js";
import { DateUtils } from "../utils/dateUtils.js";

/**
 * Creates a podcast card element.
 * @param {Object} podcast - The podcast data.
 * @returns {HTMLElement} The created podcast card element.
 */
export function createPodcastCard(podcast) {
  const card = document.createElement("article");
  card.className = "podcast-card";

  const genreNames = GenreService.getNames(podcast.genres).join(", ");
  const updatedDate = DateUtils.format(podcast.updated);

  card.innerHTML = `
    <img src="${podcast.image}" alt="${podcast.title}">

    <div class="podcast-card-content">
      <h2>${podcast.title}</h2>
      <p>${genreNames}</p>
      <p>${podcast.seasons} seasons</p>
      <p>${updatedDate}</p>
    </div>
  `;

  return card;
}
