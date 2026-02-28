let products = [];
let cart = [];
let currentCategory = "all";

async function loadProducts() {
    try {
        const reponse = await fetch('https://fakestoreapi.products');
        if (!reponse.ok) {
            throw new Error('Error fetching the data...')
            /*
            alert('api is not working')
            */
        };
        products = await reponse.json();
        renderFeaturedProducts();

    } catch(error) {
        console.error('Error Loading products: ', error)
    };
};

function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    const featured = products.slice(0,2);

    container.innerHTML = featured.map((product, index) => );
};