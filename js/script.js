textToCopy = document.getElementById('text-to-copy');
copyToClipboard = document.getElementById('copy-to-clipboard');

copyToClipboard.onclick = function() {
	textToCopy.select();
	textToCopy.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(textToCopy.value);

	copyToClipboard.className = 'btn btn-success';
	copyToClipboard.innerHTML = 'Copied!';

	setTimeout(function() {
		copyToClipboard.className = 'btn btn-primary';
		copyToClipboard.innerHTML = 'Copy to Clipboard';
	}, 1000);
}