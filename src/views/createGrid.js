import { createPodcastCard } from "../components/createPodcastCard.js";

/**
 * Creates a grid for displaying podcasts.
 * @returns {Object} An object with a render method to display podcasts in the grid.
 */
export function createGrid() {
  const gridElement = document.getElementById("podcastGrid");

  function render(podcasts) {
    gridElement.innerHTML = "";
    podcasts.forEach((podcast) => {
      const card = createPodcastCard(podcast);
      gridElement.appendChild(card);
    });
  }

  return {
    render,
  };
}
