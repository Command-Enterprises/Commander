const owner = 'Command-Enterprises';
const repo = 'Commander';
const branch = 'main';

fetch(`https://api.github.com/repos/${owner}/${repo}/commits/${branch}`)
    .then(response => response.json())
    .then(data => {
        const fileStatuses = data.files.map(file => file.status);

        const titleTag = document.querySelector('title');

        const statusEmojiMap = {
            'modified': '🟠',
            'added': '➕',
            'deleted': '✖',
            'renamed': '♻',
            'copied': '📋',
            'unmerged': '✖⛙',
            'typechange': '📁'
        };

        // Assuming you want to display an emoji for each status in the title
        const emojis = fileStatuses.map(status => statusEmojiMap[status] || '❓');

        // Join the emojis with a separator
        titleTag.textContent = `${emojis.join(' ')} - Commander Proxy`;
    });