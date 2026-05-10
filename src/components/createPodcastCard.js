import { GenreService } from "../utils/genreService.js";
import { DateUtils } from "../utils/dateUtils.js";
import { createElement } from "../utils/createElement.js";
import { createModal } from "./createModal.js";
import { genres } from "../data.js";

/**
 * Creates a podcast card element.
 * @param {Object} podcast - The podcast data.
 * @returns {HTMLElement} The created podcast card element.
 */
export function createPodcastCard(podcast) {
  const card = document.createElement("article");
  card.className = "podcast-card";

  const genreNames = GenreService.getNames(podcast.genres);
  const updatedDate = DateUtils.format(podcast.updated);

  // Image element for the podcast
  const image = document.createElement("img");
  image.className = "podcast-card-image";
  image.src = podcast.image;
  image.alt = podcast.title;

  // Content container for podcast details
  const content = createElement("div", "podcast-card-content");

  // Meta data container for title, genres, seasons, and updated date
  const meta = createElement("div", "podcast-card-meta");

  const title = createElement("h2", "podcast-card-title", podcast.title);
  const seasons = createElement(
    "p",
    "podcast-card-seasons",
    `${podcast.seasons} seasons`,
  );

  meta.appendChild(seasons);

  const genreList = createElement("div", "genre-list");

  genreNames.forEach((genre) => {
    const genreTag = createElement("span", "genre-tag", genre);
    genreList.appendChild(genreTag);
  });

  const updatedDateElement = createElement(
    "p",
    "podcast-card-updated",
    updatedDate,
  );

  // Append elements to the content container
  content.append(title, meta, genreList, updatedDateElement);
  card.append(image, content);

  // Click event to open modal
  card.addEventListener("click", () => {
    createModal.open(podcast);
  });

  return card;
}
