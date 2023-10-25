function proxyUrl() {
    var targetUrl = document.getElementById('targetUrl').value;
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
