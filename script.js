// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("myBtn2").style.display = "none";
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("myBtn2").style.display="block"
    }
}



// When the user clicks on the button, scroll to the top of the document
topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

pageScroll = () => {
    	window.scrollBy({
            top: 540, // could be negative value
            left: 0, 
            behavior: 'smooth'
        })
 }
