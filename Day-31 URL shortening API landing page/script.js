function shortenUrl() {
    var originalUrl = document.getElementById("original-url").value;
    // Send a request to your URL shortening API
    // In this example, we'll just display the original URL as the shortened one
    var shortenedUrl = originalUrl;
    displayShortenedUrl(shortenedUrl);
  }

  function displayShortenedUrl(shortenedUrl) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Shortened URL: <a class='short-url' href='" + shortenedUrl + "' target='_blank'>" + shortenedUrl + "</a>";
  }