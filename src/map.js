(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-mod-open]'),
      closeModalBtn: document.querySelector('[data-mod-close]'),
      modal: document.querySelector('[data-mod]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('hidde');
    }
  })();