// Check if user has accepted disclaimer
if (!getCookie('disclaimerAccepted')) {
	// If not, redirect to disclaimer page
	window.location.href = 'disclaimer.html';
}

// Function to get a cookie
function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
