// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const searchBox = document.getElementById('search-box');
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    searchForm.appendChild(searchResults);

    // Sample product data - in a real application, this would come from a database
    const products = [
        { name: 'Organic Cotton T-Shirt', category: 'clothing', price: '₹ 599' },
        { name: 'Bamboo Toothbrush', category: 'beauty', price: '₹ 199' },
        { name: 'Reusable Water Bottle', category: 'food', price: '₹ 399' },
        { name: 'Solar Charger', category: 'electronics', price: '₹ 1299' },
        { name: 'Hemp Backpack', category: 'clothing', price: '₹ 899' },
        { name: 'Natural Soap', category: 'beauty', price: '₹ 149' },
        { name: 'Stainless Steel Lunch Box', category: 'food', price: '₹ 499' },
        { name: 'LED Solar Light', category: 'electronics', price: '₹ 799' }
    ];

    // Function to perform search
    function performSearch(query) {
        if (!query) {
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            return;
        }

        const results = products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );

        displayResults(results);
    }

    // Function to display search results
    function displayResults(results) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="no-results">No products found</p>';
        } else {
            results.forEach(product => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Category: ${product.category}</p>
                    <p>Price: ${product.price}</p>
                `;
                resultItem.addEventListener('click', () => {
                    // Navigate to the appropriate category page
                    window.location.href = `${product.category}.html`;
                });
                searchResults.appendChild(resultItem);
            });
        }

        searchResults.style.display = 'block';
    }

    // Event listener for search input
    searchBox.addEventListener('input', function() {
        performSearch(this.value);
    });

    // Close search results when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchForm.contains(event.target)) {
            searchResults.style.display = 'none';
        }
    });
}); 