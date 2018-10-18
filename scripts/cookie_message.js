$(document).ready(function() {
	var showPopUp = sessionStorage.getItem('showPopUp');
	if (showPopUp == null) {
		sessionStorage.setItem('showPopUp', 1);

		$('#cookie_message').show();
	}
	$('#cookie_messageClose').click(function() {
		$('#cookie_message').hide();
		// TODO change the ID, when icon is added to the message
	});
});
