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

    // Search dropdown
    var $searchInput = $('.js-searchInput'),
        $searchDropdown = $('.js-searchDropdown'),
        $searchBlock = $('.js-searchBlock'),
        $headerLinks = $('.js-headerLinks');


    $('.js-searchInput, .js-searchDropdown').on('focus click', function(event) {
        event.stopPropagation();
        if (!$searchBlock.hasClass('site-header__search_expanded')) {
            $searchBlock.velocity({
                width: '42.4%'
            }, 'fast', function() {
                $searchDropdown.addClass('expanded').slideDown('fast');
            }).addClass('site-header__search_expanded');

            $headerLinks.hide();
        }

    });

    $('html').on('click', function(event) {
        $searchDropdown.addClass('expanded').slideUp('fast', function() {
            $searchBlock.velocity({
                width: '23.2%'
            }, 'fast', function() {
                $headerLinks.show();
            }).removeClass('site-header__search_expanded');
        });
    });

});