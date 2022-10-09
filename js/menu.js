(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menuMod: document.querySelector('[data-menu]'),
    bodyPage:document.querySelector('body'),
  };
  

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menuMod.classList.toggle('is-hidden');
    refs.bodyPage.classList.toggle('is-blocked');
  }
})();