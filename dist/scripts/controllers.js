$(document).ready(start);

function start () {
	var $btn = $('#submit-button');

	$btn.click(loading);

	function loading (e) {
		$btn.html('Loading...');
		$btn.prop('disabled', true);
		setTimeout(function () {
			$btn.html('Submit');
			$btn.prop('disabled', false);}
		, 4000);
	}
}