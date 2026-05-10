/**
 * Controls the podcast modal.
 */
export const createModal = {
  // Opens the modal with podcast details
  open(podcast) {
    const modal = document.getElementById("modalOverlay");

    const modalContent = document.getElementById("modalContent");

    modalContent.innerHTML = `
      <img src="${podcast.image}" alt="${podcast.title}">
      
      <h2>${podcast.title}</h2>

      <p>${podcast.description}</p>

      <p>${podcast.seasons} seasons</p>
    `;

    modal.showModal();
  },

  // Closes the modal
  close() {
    const modal = document.getElementById("modalOverlay");

    modal.close();
  },
};
