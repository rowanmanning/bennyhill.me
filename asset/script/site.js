'use strict';
(function ($) {

    // Document ready
    $(function () {
        initBennyHillMe();
    });

    // Initialise the Benny Hill Me site
    function initBennyHillMe () {
        var setGifForm = $('#set-gif-form');
        var gifContainer = $('#gif-container');
        var gif = $('#gif');
        var twitterShareLink = $('#twitter-share');
        var gifUrl = getGifURL();
        if (gifUrl) {
            showElement(gifContainer);
            presentGif(gif, gifUrl);
            loadAudio();
            setShareUrl(twitterShareLink, gifUrl);
        } else {
            showElement(setGifForm);
        }
    }

    // Get the current GIF URL
    function getGifURL () {
        return getQueryParams().gif;
    }

    // Get the current query parameters
    function getQueryParams () {
        var pairs = window.location.search.substring(1).split('&');
        var params = {};
        var parts = null;
        for (var i = 0; i < pairs.length; i++) {
            parts = pairs[i].split('=');
            params[parts.shift()] = decodeURIComponent(parts.join('='));
        }
        return params;
    }

    // Show/hide elements
    function showElement (elem) {
        return elem.removeClass('hidden');
    }
    function hideElement (elem) {
        return elem.addClass('hidden');
    }

    // Present a GIF
    function presentGif (gif, gifUrl) {
        gif.attr('src', gifUrl);
    }

    // Load the site audio
    function loadAudio () {
        var video = $('<iframe/>', {
            width: 100,
            height: 100,
            src: '//www.youtube.com/embed/MK6TXMsvgQg?autoplay=1&loop=1',
            frameborder: 0,
            allowfullscreen: true
        }).addClass('hidden-video');
        $(document.body).append(video);
    }

    // Set the Twitter share URL
    function setShareUrl (twitterShareLink) {
        var currentUrl = document.location.href;
        var twitterUrl = [
            'https://twitter.com/share?',
            'url=', encodeURIComponent(currentUrl),
            '&text=', encodeURIComponent('#BennyHillMe'),
        ].join('')
        twitterShareLink.attr('href', twitterUrl);
    }

} (jQuery));
