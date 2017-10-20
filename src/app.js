const hideAllRepostEntries = () => {
  [...document.querySelectorAll('.stream .sc-ministats-reposts')].forEach(
    el => {
      // hiding .soundList__item element
      el.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
    }
  );
};

const showAllTrackEntries = () => {
  [...document.querySelectorAll('.stream .soundList__item')].forEach(
    el => {
      el.style.display = 'block';
    }
  );
};

const toggleButton = document.createElement('button');
const toggleButtonText = {
  show: '🔁 Show Reposts',
  hide: '🔁 Hide Reposts',
};

toggleButton.innerText = toggleButtonText.show;

Object.assign(toggleButton.style, {
  position: 'absolute',
  top: '5px',
  right: '2px',
  padding: '.3em',
  zIndex: '999',
  fontFamily: 'Interstate, sans-serif',
  fontSize: '1.2em',
  backgroundColor: 'white',
  border: '1px solid #666',
  borderRadius: '3px'
});

toggleButton.addEventListener('click', (ev) => {
  if (ev.currentTarget.innerText === toggleButtonText.show) {
    showAllTrackEntries();
    ev.currentTarget.innerText = toggleButtonText.hide;
  }
  else {
    hideAllRepostEntries();
    ev.currentTarget.innerText = toggleButtonText.show;
  }
});

document.querySelector('.streamExploreTabs').style.position = 'relative';
document.querySelector('.streamExploreTabs').appendChild(toggleButton);

const observer = new MutationObserver((mutations) => {
  if (toggleButton.innerText === toggleButtonText.show) {
    hideAllRepostEntries();
  }
});
const tracksListElement = document.querySelector('.stream .lazyLoadingList__list');

observer.observe(
  tracksListElement, {
    attributes: false,
    childList: true,
    characterData: false
  }
);

hideAllRepostEntries();
