(function() {
  var link = document.querySelector('.btn-write-us');
  var popupFeedBack = document.querySelector('.form-write-us');
  var formFeedBack = popupFeedBack.firstElementChild;
  var name = popupFeedBack.querySelector('#name');
  var email = popupFeedBack.querySelector('#email');
  var text = popupFeedBack.querySelector('#text');
  var closeFeedback = popupFeedBack.querySelector('.btn-close');
  var modalOverlay = document.querySelector('.modal-overlay');

  var map = document.querySelector('.map');
  var mapInteractive = document.querySelector('.full-interactive-map');
  var closeMap = mapInteractive.querySelector('.btn-close');

  var nameStorage = localStorage.getItem('name');
  var emailStorage = localStorage.getItem('email');

  var ESC_CODE = 27;

  var validityFeedBack = function() {
    var flagValidity = true;

    if (!name.value.trim()) {
      name.focus();
      return false;
    }

    if (!email.value.trim() || !email.validity.valid) {
      email.focus();
      return false;
    }

    if (!text.value.trim()) {
      text.focus();
      return false;
    }

    return true;
  }

  var onSubmit = function(evt) {
    if (!validityFeedBack()) {
      evt.preventDefault();
      popupFeedBack.classList.remove('form-error');
      formFeedBack.offsetWidth = formFeedBack.offsetWidth;
      popupFeedBack.classList.add('form-error');
    } else {
      localStorage.setItem('name', name.value);
      localStorage.setItem('email', email.value);
    }
  };

  var deleteListenersFeedbackForm = function() {
    formFeedBack.removeEventListener('submit', onSubmit);
    closeFeedback.removeEventListener('click', onCloseFeedbackForm);
    document.removeEventListener('keydown', onKeyDownFeedBackForm);
    popupFeedBack.classList.remove('form-error');
  }

  var onKeyDownFeedBackForm = function(evt) {
    if (evt.keyCode === ESC_CODE) {
      deleteListenersFeedbackForm();
      modalOverlay.classList.remove('popup-visible');
      popupFeedBack.classList.remove('popup-visible');
    }
  }

  var onCloseFeedbackForm = function(evt) {
    evt.preventDefault();
    deleteListenersFeedbackForm();
    modalOverlay.classList.remove('popup-visible');
    popupFeedBack.classList.remove('popup-visible');
  }

  var onClickFeedbackFormShow = function(evt) {
    evt.preventDefault();
    name.required = true;
    name.focus();
    if (nameStorage) {
      name.value = nameStorage;
      email.focus();
    }
    email.required = true;
    if (emailStorage) {
      email.value = emailStorage;
      text.focus();
    }
    text.required = true;
    formFeedBack.addEventListener('submit', onSubmit);
    closeFeedback.addEventListener('click', onCloseFeedbackForm);
    document.addEventListener('keydown', onKeyDownFeedBackForm);
    popupFeedBack.classList.add('popup-visible');
    modalOverlay.classList.add('popup-visible');

  }

  link.addEventListener('click', onClickFeedbackFormShow);

  var deleteListenersMap = function() {
    closeMap.removeEventListener('click', onCloseMap);
    document.removeEventListener('keydown', onKeyDownMap);
  }

  var onCloseMap = function(evt) {
    evt.preventDefault();
    deleteListenersMap();
    mapInteractive.classList.remove('popup-visible');
  }

  var onKeyDownMap = function(evt) {
    if (evt.keyCode === ESC_CODE) {
      deleteListenersMap();
      mapInteractive.classList.remove('popup-visible');
    }
  }

  var onClickMapFormShow = function(evt) {
    evt.preventDefault();
    closeMap.addEventListener('click', onCloseMap);
    document.addEventListener('keydown', onKeyDownMap);
    mapInteractive.classList.add('popup-visible');
  }

  map.addEventListener('click', onClickMapFormShow);
})();
