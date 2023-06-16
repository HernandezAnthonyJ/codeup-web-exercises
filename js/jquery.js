$(document).ready(function() {
    // Change background color of h1
    $('h1').click(function() {
        $(this).css('background-color', 'yellow');
    });

    // Set font size of paragraphs to 18px
    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    });

    // Change li text color to red on hover
    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );
});
