/*eslint-env jquery*/

// Jquery & Velocity JS included in GULP
$( document ).ready( function() {

    toggleMobileNav();
    ShowHideNav();
    formCheck();

} );

// Close modal if ESC is pressed
$( document ).keyup( function( e ) {
    e.keyCode === 27 ? removeModal() : null;
} );

$( window ).resize( function() {
    $( ".header" ).removeClass( "hide-nav" ); // Ensure nav will be shown on resize
    $( ".header__links" ).removeAttr( "style" ); // If mobile nav was collapsed, make sure it's show on DESK
    $( ".header__overlay" ).remove();
} );

// Toggle Mobile Navigation
function toggleMobileNav() {
    $( ".header__toggle" ).click( function() {

        if ( $( ".header__links" ).hasClass( "js--open" ) ) {
            hideMobileNav();
        }
        else {
            openMobileNav();
        }
    } );

    $( ".header__overlay" ).click( function() {
        hideMobileNav();
    } );
}

function openMobileNav() {
    $( ".header__links" ).velocity( "slideDown", {
        duration: 300,
        easing: "ease-out",
        display: "block",
        visibility: "visible",
        begin: function() {
            $( ".header__toggle" ).addClass( "--open" );
            $( "body" ).append( "<div class='header__overlay'></div>" );
        },
        progress: function () {
            $( ".header__overlay" ).addClass( "--open" );
        },
        complete: function() {
            $( this ).addClass( "js--open" );
        }
    } );
}

