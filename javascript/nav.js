$(document).ready(function () {
    var logonav = $('.logonav'); // Assuming logonav has the class 'logonav'
    var lastScrollTop = 0;

    // Function to handle opacity change
    function setOpacity(opacity) {
        logonav.css({
            'opacity': opacity,
            'transition': 'opacity 0.5s ease' // Adjust the transition duration as needed
        });
    }

    // Set initial opacity
    setOpacity(0.2);

    // Scroll event listener
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();

        // Check the scroll direction
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            setOpacity(Math.max(0.1, 1 - scrollTop / 200));
        } else {
            // Scrolling up
            setOpacity(1);
        }

        // Update the last scroll position
        lastScrollTop = scrollTop;
    });

    // Hover event listener
    logonav.hover(
        // Handler for mouseenter
        function () {
            // Set opacity to 1 on hover
            setOpacity(1);
        },
        // Handler for mouseleave
        function () {
            // Reset opacity to its original state after hover
            setOpacity(0.2);
        }
    );

    // Click/touch event listener
    logonav.on('click touchstart', function () {
        // Increase opacity to 1
        setOpacity(1);
    });
});
