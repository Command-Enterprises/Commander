const owner = 'Quartinal';
const repo = 'Commander-exploit';
const branch = 'exploit';

fetch(`https://api.github.com/repos/${owner}/${repo}/commits/${branch}`)
    .then(response => response.json())
    .then(data => {
        const commitStatusMessage = data.files.status; // Assuming this contains the status message

        const titleTag = document.querySelector('title.commitChange');

        // Mapping between GitHub commit status messages and emojis
        const statusEmojiMap = {
            'modified': '🟠', // Replace with the appropriate emoji
            'added': '➕', // Replace with the appropriate emoji
            'deleted': '✖', // Replace with the appropriate emoji
            'renamed': '♻',
            'copied': '📋',
            'umerged': '✖⛙',
            'typechange': '📁'
        };

        // Check if the status message is in the mapping, and set the corresponding emoji
        if (commitStatusMessage in statusEmojiMap) {
            titleTag.textContent = `${statusEmojiMap[commitStatusMessage]} Commander Proxy`;
        } else {
            // If the status message is not in the mapping, use a default emoji or handle it accordingly
            titleTag.textContent = '❓ Commander Proxy'; // You can choose any suitable default emoji
        }
    });