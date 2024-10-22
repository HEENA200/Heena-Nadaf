 // Function to filter sneakers
 function filterSneakers() {
    // Get the input value and convert it to lowercase
    let input = document.getElementById('search-input').value.toLowerCase();
    
    // Get all sneaker articles
    let sneakers = document.querySelectorAll('.sneaker');

    // Loop through all sneaker articles and filter based on input
    sneakers.forEach(function(sneaker) {
        let name = sneaker.querySelector('.sneaker__name').innerText.toLowerCase();
        
        // If the name includes the input text, display the sneaker, otherwise hide it
        if (name.includes(input)) {
            sneaker.style.display = 'block';
        } else {
            sneaker.style.display = 'none';
        }
    });
 }