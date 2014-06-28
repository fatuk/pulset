$(function() {
    var $dropdownBtn = $('.js-dropdownBtn');
    $dropdownBtn.on('click', function(event) {
        event.preventDefault();
        var $this = $(this),
            currentDropdownId = $this.find('a').attr('href');

        $dropdownBtn.removeClass('active');
        $this.addClass('active');
        $('.js-dropdown').slideUp('fast');
        $(currentDropdownId).slideDown('fast');
    });
});