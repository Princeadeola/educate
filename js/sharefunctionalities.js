// start of arrow up functionality
// the code return user to top when the up arrow is clicked
var arrowImage = document.getElementById('arrow-image');

arrowImage.addEventListener('click', function() {
    
    console.log("scrolled up") // log to console for testing
    
    // this returns it to the top with a smooth behavior
    window.scrollTo(
        {
             top: 0, behavior: 'smooth' 
        }
    );
});

// End of arrow-up functionality

