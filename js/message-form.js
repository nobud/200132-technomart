(function() {
  var messageAddToCart = document.querySelector('.message-info-add-card');
  var closeMessageCart = messageAddToCart.querySelector('.btn-close');
  var backToCatalog = messageAddToCart.querySelector('.btn-back-catalog');
  var toOrder = messageAddToCart.querySelector('.btn-to-order');

  var ESC_CODE = 27;

  var productList = document.querySelector('.product-list');
  var popularProductList = document.querySelector('.popular-product-list');

  var setListeners = function() {
    closeMessageCart.addEventListener('click', onCloseMessage);
    backToCatalog.addEventListener('click', onCloseMessage);
    toOrder.addEventListener('click', onClickToOrder);
    document.addEventListener('keydown', onKeyDownMessage);
  }

  var onClickBuy = function(evt) {
    if (evt.target.name === 'buy') {
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
})();
