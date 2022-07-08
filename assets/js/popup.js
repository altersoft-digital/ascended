function openpopup(popup) {
    document.querySelector('.popup-overlay').classList.add('show-popup');
    document.querySelector(popup).classList.add('show-popup');
    document.querySelector('body').style.overflowY = 'hidden';
}

function closepopup(popup) {
    document.querySelector('.popup-overlay').classList.remove('show-popup');
    document.querySelector(popup).classList.remove('show-popup');
    document.querySelector('body').style.overflowY = 'auto';
}