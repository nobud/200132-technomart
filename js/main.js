(function() {
  var ESC_CODE = 27;
  var html = document.documentElement;
  html.className = html.className.replace("no-js", "js");

  var filterBlock = document.querySelector('.filter-block');
  if (filterBlock) {
    var filterForm = filterBlock.firstElementChild;
    var btnFilter = document.createElement('button');
    btnFilter.innerHTML = "ПОКАЗАТЬ"
    btnFilter.classList.add('btn-filter');
    filterForm.appendChild(btnFilter);
  }

  var link = document.querySelector('.btn-write-us');
  if (link) {
    var popupFeedBack = document.querySelector('.form-write-us');
    var formFeedBack = popupFeedBack.firstElementChild;
    var name = popupFeedBack.querySelector('#name');
    var email = popupFeedBack.querySelector('#email');
    var text = popupFeedBack.querySelector('#text');
    var closeFeedback = popupFeedBack.querySelector('.btn-close');
    var modalOverlay = document.querySelector('.modal-overlay');
    var nameStorage;
    var emailStorage;
    if (localStorage) {
      nameStorage = localStorage.getItem('name');
      nameStorage = localStorage.getItem('email');
    }

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
    }

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
  }

  var map = document.querySelector('.map');
  if (map) {
    var mapInteractive = document.querySelector('.full-interactive-map');
    var closeMap = mapInteractive.querySelector('.btn-close');
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
  }

  var messageAddToCart = document.querySelector('.message-info-add-card');
  if (messageAddToCart) {
    var closeMessageCart = messageAddToCart.querySelector('.btn-close');
    var backToCatalog = messageAddToCart.querySelector('.btn-back-catalog');
    var toOrder = messageAddToCart.querySelector('.btn-to-order');
    var productList = document.querySelector('.product-list');
    var popularProductList = document.querySelector('.popular-product-list');

    var setListeners = function() {
      closeMessageCart.addEventListener('click', onCloseMessage);
      backToCatalog.addEventListener('click', onCloseMessage);
      toOrder.addEventListener('click', onClickToOrder);
      document.addEventListener('keydown', onKeyDownMessage);
    }

    var onClickBuy = function(evt) {
      if (evt.target.className === 'buy') {
        evt.preventDefault();
        setListeners();
        messageAddToCart.classList.add('popup-visible');
      }
    };

    if (productList) {
      productList.addEventListener('click', onClickBuy);
    }

    if (popularProductList) {
      popularProductList.addEventListener('click', onClickBuy);
    }

    var deleteListeners = function(evt) {
      closeMessageCart.removeEventListener('click', onCloseMessage);
      backToCatalog.removeEventListener('click', onCloseMessage);
      toOrder.removeEventListener('click', onClickToOrder);
      document.removeEventListener('keydown', onKeyDownMessage);
    }

    var onCloseMessage = function(evt) {
      evt.preventDefault();
      deleteListeners();
      messageAddToCart.classList.remove('popup-visible');
    }

    var onClickToOrder = function(evt) {
      deleteListeners();
      messageAddToCart.classList.remove('popup-visible');
    }

    var onKeyDownMessage = function(evt) {
      if (evt.keyCode === ESC_CODE) {
        deleteListeners();
        messageAddToCart.classList.remove('popup-visible');
      }
    }
  }
})();
