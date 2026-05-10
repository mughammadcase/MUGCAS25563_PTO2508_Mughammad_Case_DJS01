import { seasons } from "../data.js";
import { GenreService } from "../utils/genreService.js";
import { DateUtils } from "../utils/dateUtils.js";

/**
 * Controls the podcast modal.
 */
export const createModal = {
  // Opens the modal with podcast details
  open(podcast) {
    const modalOverlay = document.getElementById("modalOverlay");
    const modalContent = document.getElementById("modalContent");

    // Finds the season data for matching podcast ID
    const seasonData = seasons.find((season) => season.id === podcast.id);

    const genreNames = GenreService.getNames(podcast.genres).join(", ");
    const updatedDate = DateUtils.format(podcast.updated);

    const seasonsHTML = seasonData.seasonDetails
      .map(
        (season) => `
      <li>
        <strong>${season.title}</strong>
        <span>${season.episodes} episodes</span>
      </li>
      `,
      )
      .join("");

    modalContent.innerHTML = `
      <img 
        src="${podcast.image}" 
        alt="${podcast.title}"
        class="modal-image"
      >

      <h2>${podcast.title}</h2>

      <p>${genreNames}</p>

      <p>${updatedDate}</p>

      <p>${podcast.description}</p>

      <h3>Seasons</h3>

      <ul class="season-list">
        ${seasonsHTML}
      </ul>
    `;

    modalOverlay.showModal();
  },

  // Closes the modal
  close() {
    const modalOverlay = document.getElementById("modalOverlay");
    modalOverlay.close();
  },
};
