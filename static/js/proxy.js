function proxyUrl() {
    var targetUrl = document.getElementById('targetUrl').value;

    // Check if the URL has a valid TLD, if not, search on Google
    if (!hasValidTld(targetUrl)) {
        searchOnGoogle(targetUrl);
        return;
    }

    // If URL has valid TLD, add https:// if missing
    if (!/^https?:\/\//i.test(targetUrl)) {
        targetUrl = 'https://' + targetUrl;
    }

    var proxyContent = document.getElementById('proxyContent');

    fetch(`/proxy?url=${encodeURIComponent(targetUrl)}`)
        .then(response => response.text())
        .then(data => {
            proxyContent.innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
            proxyContent.innerHTML = 'Error occurred while fetching the content.';
        });
}

function hasValidTld(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return true;
    } else {
        return false;
    }
}

function searchOnGoogle(query) {
    var googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.open(googleSearchUrl, '_blank');
}
