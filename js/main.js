$(function() {
    // Categories dropdown
    var $dropdownBtn = $('.js-dropdownBtn');
    $dropdownBtn.on('click', function(event) {
        event.preventDefault();
        var $this = $(this),
            currentDropdownId = $this.find('a').attr('href');

        if ($this.hasClass('active')) {
            $dropdownBtn.removeClass('active');
            $('.js-dropdown').slideUp('fast');
        } else {
            $('.js-dropdown').slideUp('fast');
            $dropdownBtn.removeClass('active');
            $this.addClass('active');
            $(currentDropdownId).slideDown('fast');
        }
    });

    // Form styler
    $('.js-radio, .js-select').styler();
});