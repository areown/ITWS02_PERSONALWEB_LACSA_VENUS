// Function to toggle the visibility of the navigation menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('visible');
}
function searchMovies() {
            let query = document.getElementById('searchInput').value.toLowerCase();
            let movieItems = document.querySelectorAll('.movie-item');
            let categoryHeadings = document.querySelectorAll('.category-heading');
            let noResults = true; // Flag to track if any movie matches the search

            // Hide all movie items initially
            movieItems.forEach(item => {
                item.style.display = 'none';
            });

            // Loop through each movie item and check if it matches the query
            movieItems.forEach(item => {
                let movieTitle = item.querySelector('h4').textContent.toLowerCase();

                if (movieTitle.includes(query)) {
                    item.style.display = 'block'; // Show matching movie item
                    noResults = false; // At least one result found
                }
            });

            // Loop through all categories and hide the category heading if no movies match
            categoryHeadings.forEach(heading => {
                let category = heading.nextElementSibling; // Get the div with movie items under the heading
                let categoryHasResults = false; // Flag to track if the category has matching results

                // Check if any movie items in this category match
                category.querySelectorAll('.movie-item').forEach(item => {
                    if (item.style.display === 'block') {
                        categoryHasResults = true;
                    }
                });

                // Hide the category heading if no movie in the category matches the search
                if (!categoryHasResults) {
                    heading.style.display = 'none';
                } else {
                    heading.style.display = 'block'; // Ensure heading is visible if there are matching results
                }
            });

            // Show or hide the "No results" message based on the results
            let noResultsMessage = document.getElementById('noResultsMessage');
            if (noResults) {
                noResultsMessage.style.display = 'block'; // Show no results
            } else {
                noResultsMessage.style.display = 'none'; // Hide no results message
            }
        }

// Function to show/hide the full description for a movie
function myFunction(num) {
    var dots = document.getElementById("dots" + num);
    var moreText = document.getElementById("more" + num);
    var btnText = document.getElementById("myBtn" + num);

    // Toggle between "Read more" and "Read less" when the user clicks the button
    if (dots.style.display === "none") {
        dots.style.display = "inline";  // Show the dots (collapsed state)
        btnText.innerHTML = "Read more";  // Change the button text
        moreText.style.display = "none";  // Hide the extra text
    } else {
        dots.style.display = "none";  // Hide the dots (expanded state)
        btnText.innerHTML = "Read less";  // Change the button text
        moreText.style.display = "inline";  // Show the extra text
    }
}
