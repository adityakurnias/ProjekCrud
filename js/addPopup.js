function addPopup() {
    const formUpload = document.getElementById('formUpload');
    if (formUpload.classList.contains('hidden')) {
      formUpload.classList.remove('hidden');
    } else {
      formUpload.classList.add('hidden');
    }
  }
