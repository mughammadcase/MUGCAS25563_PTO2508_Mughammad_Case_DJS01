import { GenreService } from "../utils/genreService.js";
import { DateUtils } from "../utils/dateUtils.js";
import { createElement } from "../utils/createElement.js";

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

  const image = document.createElement("img");
  image.src = podcast.image;
  image.alt = podcast.title;

  const content = createElement("div", "podcast-card-content");
  const title = createElement("h2", "", podcast.title);
  const genres = createElement("p", "", genreNames);
  const seasons = createElement("p", "", `${podcast.seasons} seasons`);
  const updated = createElement("p", "", updatedDate);

  content.append(title, genres, seasons, updated);

  card.append(image, content);

  return card;
}
