// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                element.css('min-height', '0');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    // Expand/collapse truncated publication abstracts and showcase descriptions.
    $(document).on('click', '.abstract-toggle', function (e) {
        e.preventDefault();
        var $p = $(this).closest('.pub-abstract');
        var willExpand = $p.find('.abstract-full').hasClass('d-none');
        $p.find('.abstract-full').toggleClass('d-none', !willExpand);
        $p.find('.abstract-short').toggleClass('d-none', willExpand);
        $(this).text(willExpand ? 'Read less' : 'Read more');
        // Expanding changes card height — re-flow the masonry grid (showcase page).
        $grid.masonry('layout');
    });

    // Click a publication card to open its expanded modal (but let links behave normally).
    $(document).on('click', '.pub-card', function (e) {
        if ($(e.target).closest('a, button').length) return;
        var target = $(this).data('pub-modal');
        if (target) $(target).modal('show');
    });

    // Copy the BibTeX entry from a publication modal.
    $(document).on('click', '.bibtex-copy', function () {
        var $btn = $(this);
        var text = $btn.closest('.bibtex-block').find('.bibtex-text').text();
        navigator.clipboard.writeText(text).then(function () {
            $btn.text('Copied!');
            setTimeout(function () { $btn.text('Copy'); }, 1500);
        });
    });

    // Pause offscreen showcase videos so only visible cards consume decode/CPU.
    var autoplayVideos = Array.prototype.slice.call(document.querySelectorAll('video[data-autoplay-on-visible="true"]'));
    if (autoplayVideos.length) {
        var setPlayback = function (video, shouldPlay) {
            if (shouldPlay) {
                var playPromise = video.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(function () {
                        // Ignore autoplay rejections; the next visibility change can retry.
                    });
                }
            } else {
                video.pause();
            }
        };

        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    setPlayback(entry.target, entry.isIntersecting);
                });
            }, {
                root: null,
                threshold: 0.25
            });

            autoplayVideos.forEach(function (video) {
                video.pause();
                observer.observe(video);
            });
        } else {
            // Fallback: keep the current autoplay behavior in older browsers.
            autoplayVideos.forEach(function (video) {
                setPlayback(video, true);
            });
        }
    }
})
