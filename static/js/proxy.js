fetch('https://publicsuffix.org/list/public_suffix_list.dat')
    .then(response => response.text())
    .then(data => {
        var tlds = data.split('\n')
                      .filter(line => !line.startsWith('//') && line.trim() !== '')
                      .map(line => line.trim());

        function isValidTld(url) {
            return tlds.some(tld => url.endsWith('.' + tld));
        }

        function appendDefaultTld(url) {
            if (!isValidTld(url)) {
                return url + '.com';
            }
            return url;
        }

        function proxyUrl() {
            var targetUrl = document.getElementById('targetUrl').value;
            if (!/^https?:\/\//i.test(targetUrl)) {
                targetUrl = 'http://' + targetUrl;
            }

            targetUrl = appendDefaultTld(targetUrl);

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

        document.getElementById('urlForm').addEventListener('submit', function(event) {
            event.preventDefault();
            proxyUrl();
        });
    })
    .catch(error => {
        console.error('Error fetching TLD data:', error);
    });
