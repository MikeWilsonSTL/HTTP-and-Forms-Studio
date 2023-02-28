function setSearchEngine() {
  let actions = {
    google: 'https://www.google.com/search',
    bing: 'https://www.bing.com/search',
    duckDuckGo: 'https://duckduckgo.com/',
    ask: 'https://www.ask.com/web',
  };

  let chosenEngineInput = document.querySelector('input[name=engine]:checked');
  document.getElementById('searchForm').action =
    actions[chosenEngineInput.value];
}

window.addEventListener('load', function () {
  document.getElementById('banner').onclick = function () {
    document.location.href = './index.html';
  };

  searchForm.addEventListener('submit', function (event) {
    if (mainInput.value.trim() === '') {
      alert('Search query required!');
      event.preventDefault();
    } else {
      setSearchEngine();
    }
  });

  fetch('https://api.quotable.io/random').then(function (response) {
    response.json().then(function (json) {
      const quote = document.getElementById('quote');
      quote.innerHTML = `${json.content} - ${json.author}`;
    });
  });
});
