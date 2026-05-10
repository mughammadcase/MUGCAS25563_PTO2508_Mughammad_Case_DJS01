import { seasons } from "../data.js";
import { GenreService } from "../utils/genreService.js";
import { DateUtils } from "../utils/dateUtils.js";

/**
 * Controls the podcast modal.
 */
export const createModal = {
  /**
   * Opens the modal with podcast details.
   * @param {Object} podcast Podcast data object
   */
  open(podcast) {
    const modalOverlay = document.getElementById("modalOverlay");
    const modalContent = document.getElementById("modalContent");

    // Finds the season data for matching podcast ID
    const seasonData = seasons.find((season) => season.id === podcast.id);

    const updatedDate = DateUtils.format(podcast.updated);

    modalContent.innerHTML = `
  <h2 class="modal-title">${podcast.title}</h2>

  <div class="modal-body">
    <div class="modal-top">
      <img 
        src="${podcast.image}" 
        alt="${podcast.title}"
        class="modal-image"
      >

      <div class="modal-info">
        <div>
          <h3>Description</h3>

          <p class="modal-description">
            ${podcast.description}
          </p>
        </div>

        <div>
          <h3>Genres</h3>

          <div class="genre-list">
            ${GenreService.getNames(podcast.genres)
              .map(
                (genre) => `
                  <span class="genre-tag">${genre}</span>
                `,
              )
              .join("")}
          </div>
        </div>

        <p class="modal-meta">
          Last updated: ${updatedDate}
        </p>
      </div>
    </div>

    <div class="modal-seasons">
      <h3 class="modal-seasons-heading">Seasons</h3>

      <ul class="season-list">
        ${seasonData.seasonDetails
          .map(
            (season) => `
              <li>
                <div>
                  <strong>${season.title}</strong>
                </div>

                <span>${season.episodes} episodes</span>
              </li>
            `,
          )
          .join("")}
      </ul>
    </div>
  </div>
`;

    modalOverlay.showModal();
  },

  // Closes the modal
  close() {
    const modalOverlay = document.getElementById("modalOverlay");
    modalOverlay.close();
  },
};
