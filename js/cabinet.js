$(document).ready(function () {
	$('.modal-page__register, .modal-form__register').on('click', function() {
		$('.modal-page-form').removeClass('form-active');
		$('.form--register_1').addClass('form-active');
		return false;
	})

	$('.modal-form__pasword').on('click', function() {
		$('.modal-page-form').removeClass('form-active');
		$('.form--password-1').addClass('form-active');
		return false;
	})
})
