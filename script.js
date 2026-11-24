
// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// Booking Form

const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("travelDate").value;
    const travelers = Number(document.getElementById("travelers").value);

    if (!name || !email || !destination || !date || travelers < 1) {
        bookingMessage.textContent = "Please complete all fields.";
        return;
    }

    const booking = {
        name,
        email,
        destination,
        date,
        travelers
    };

    const bookings = JSON.parse(
        localStorage.getItem("travelBookings") || "[]"
    );

    bookings.push(booking);

    localStorage.setItem(
        "travelBookings",
        JSON.stringify(bookings)
    );

    bookingMessage.textContent =
        "Your booking request has been saved successfully!";

    bookingForm.reset();
    
});


// ===================================
// TRAVELGO - DESTINATION DATA
// ===================================

const destinations = [ 
{
    id: 1,
    name: "Bagan",
    country: "Myanmar",
    price: 80,
    category: "Culture",
    image: "assets/images/bagan.jpg",
    description: "Explore ancient temples and beautiful historical sites."
},
{
    id: 2,
    name: "Mandalay",
    country: "Myanmar",
    price: 60,
    category: "Culture",
    image: "assets/images/mandalay.jpg",
    description: "Discover Myanmar's cultural and historical city."
},
{
    id: 3,
    name: "Yangon",
    country: "Myanmar",
    price: 70,
    category: "City",
    image: "assets/images/yangon.jpg",
    description: "Explore the vibrant city and Shwedagon Pagoda."
},
{
    id: 4,
    name: "Taunggyi",
    country: "Myanmar",
    price: 65,
    category: "Culture",
    image: "assets/images/taungyi.jpg",
    description: "Enjoy beautiful mountain scenery in Shan State."
},
{
    id: 5,
    name: "Inlay Lake",
    country: "Myanmar",
    price: 90,
    category: "Culture",
    image: "assets/images/inlay.jpg",
    description: "Experience floating gardens and lake culture."
},
{
    id: 6,
    name: "Pyin Oo Lwin",
    country: "Myanmar",
    price: 55,
    category: "Culture",
    image: "assets/images/pyinoolwin.jpg",
    description: "Visit beautiful gardens and cool mountain scenery."
},
{
    id: 7,
    name: "Kyaukse",
    country: "Myanmar",
    price: 40,
    category: "Culture",
    image: "assets/images/kyaukse.jpg",
    description: "Discover traditional culture and local attractions."
},
{
    id: 8,
    name: "Kalaw",
    country: "Myanmar",
    price: 75,
    category: "Culture",
    image: "assets/images/kalaw.jpg",
    description: "Explore peaceful hills and scenic trekking routes."
},
    {
        id: 9,
        name: "Meiktila",
        country: "Myanmar",
        price: 40,
        category: "City",
        image: "assets/images/meiktila.jpg",
        description: "Visit Meiktila Lake and discover the local community."
    },
    {
        id: 10,
        name: "Sagaing",
        country: "Myanmar",
        price: 40,
        category: "Culture",
        image: "assets/images/sagaing.jpg",
        description: "Visit peaceful monasteries and beautiful hilltop pagodas."
    },
    {
        id: 11,
        name: "Pakokku",
        country: "Myanmar",
        price: 57,
        category: "City",
        image: "assets/images/pakokku.jpg",
        description: "Experience traditional markets and local life."
    },
    {
        id: 12,
        name: "Naypyidaw",
        country: "Myanmar",
        price: 60,
        category: "City",
        image: "assets/images/naypyidaw.jpg",
        description: "Explore the capital city and its famous landmarks."
    },
    {
        id: 13,
        name: "Lashio",
        country: "Myanmar",
        price: 70,
        category: "Nature",
        image: "assets/images/lashio.jpg",
        description: "Discover the mountain landscapes of northern Shan State."
    },
    {
        id: 14,
        name: "Tachileik",
        country: "Myanmar",
        price: 70,
        category: "City",
        image: "assets/images/tachileik.jpg",
        description: "Discover the border town and its local markets."
    },
    {
        id: 15,
        name: "Bago",
        country: "Myanmar",
        price: 55,
        category: "Culture",
        image: "assets/images/bago.jpg",
        description: "Discover ancient pagodas and historic Buddhist sites."
    },
    {
        id: 16,
        name: "Taungoo",
        country: "Myanmar",
        price: 45,
        category: "City",
        image: "assets/images/taungoo.jpg",
        description: "Explore the historic town and its cultural heritage."
    },
    {
        id: 17,
        name: "Pyay",
        country: "Myanmar",
        price: 45,
        category: "Culture",
        image: "assets/images/pyay.jpg",
        description: "Visit Shwesandaw Pagoda and the ancient Sri Ksetra area."
    },
    {
        id: 18,
        name: "Mawlamyine",
        country: "Myanmar",
        price: 67,
        category: "City",
        image: "assets/images/mawlamyine.jpg",
        description: "Enjoy beautiful river views and colonial architecture."
    },
    {
        id: 19,
        name: "Hpa-An",
        country: "Myanmar",
        price: 76,
        category: "Nature",
        image: "assets/images/hpa_an.jpg",
        description: "Discover limestone mountains, caves, and beautiful lakes."
    },
    {
        id: 20,
        name: "Kyaikto",
        country: "Myanmar",
        price: 70,
        category: "Culture",
        image: "assets/images/kyaikto.jpg",
        description: "Visit the famous Golden Rock at Kyaiktiyo Pagoda."
    },
    {
        id: 21,
        name: "Pathein",
        country: "Myanmar",
        price: 75,
        category: "City",
        image: "assets/images/pathein.jpg",
        description: "Explore the riverside town famous for traditional umbrellas."
    },
    {
        id: 22,
        name: "Chaung Tha",
        country: "Myanmar",
        price: 80,
        category: "Beach",
        image: "assets/images/chaung_tha.jpg",
        description: "Relax on a popular sandy beach along the Bay of Bengal."
    },
    {
        id: 23,
        name: "Ngwe Saung",
        country: "Myanmar",
        price: 85,
        category: "Beach",
        image: "assets/images/ngwe_saung.jpg",
        description: "Enjoy peaceful beaches and beautiful seaside sunsets."
    },
    {
        id: 24,
        name: "Ngapali",
        country: "Myanmar",
        price: 79,
        category: "Beach",
        image: "assets/images/ngapali.jpg",
        description: "Relax on one of Myanmar's best-known tropical beaches."
    },
    {
        id: 25,
        name: "Dawei",
        country: "Myanmar",
        price: 75,
        category: "Beach",
        image: "assets/images/dawei.jpg",
        description: "Explore beautiful beaches and southern coastal landscapes."
    },
    {
        id: 26,
        name: "Myeik",
        country: "Myanmar",
        price: 85,
        category: "Beach",
        image: "assets/images/myeik.jpg",
        description: "Discover the Myeik Archipelago and its tropical islands."
    },
    {
        id: 27,
        name: "Kawthaung",
        country: "Myanmar",
        price: 86,
        category: "Beach",
        image: "assets/images/kawthaung.jpg",
        description: "Explore the southernmost town and nearby island destinations."
    },
    {
        id: 28,
        name: "Myitkyina",
        country: "Myanmar",
        price: 95,
        category: "Nature",
        image: "assets/images/myitkyina.jpg",
        description: "Discover the Ayeyarwady River and northern Myanmar scenery."
    },
    {
        id: 29,
        name: "Putao",
        country: "Myanmar",
        price: 90,
        category: "Nature",
        image: "assets/images/putao.jpg",
        description: "Enjoy mountain landscapes and views of the Himalayas."
    },
    {
        id: 30,
        name: "Hakha",
        country: "Myanmar",
        price: 88,
        category: "Nature",
        image: "assets/images/hakha.jpg",
        description: "Explore the mountain scenery and culture of Chin State."
    },
];


// ===================================
// DISPLAY DESTINATION CARDS
// ===================================

const destinationContainer =
    document.getElementById("destinationContainer");

const noResults =
    document.getElementById("noResults");

function displayDestinations(data) {

    destinationContainer.innerHTML = "";

    if (data.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    data.forEach(destination => {

        const card = document.createElement("div");

        card.className = "destination-card";

        card.innerHTML = `
            <img
                src="${destination.image}"
                alt="${destination.name}"
                loading="lazy"
            >

            <div class="card-content">

                <span class="category">
                    ${destination.category}
                </span>

                <h3>
                    ${destination.name}, ${destination.country}
                </h3>

                <p>${destination.description}</p>

                <div class="card-bottom">

                    <span>
                        From $${destination.price}
                    </span>

                    <button
                        class="view-btn"
                        data-id="${destination.id}"
                    >
                        View Details
                    </button>

                </div>

            </div>
        `;

        destinationContainer.appendChild(card);

    });

}

// Show All Destinations

displayDestinations(destinations);

// ===================================
// DESTINATION SEARCH
// ===================================

const searchInput =
    document.getElementById("searchInput");

searchInput.addEventListener("input", function() {

    const keyword = this.value.toLowerCase().trim();

    const results = destinations.filter(destination => {

        return (
            destination.name.toLowerCase().includes(keyword) ||
            destination.country.toLowerCase().includes(keyword)
        );

    });

    displayDestinations(results);

});

// ===================================
// CATEGORY FILTER
// ===================================

const categoryFilter =
    document.getElementById("categoryFilter");

categoryFilter.addEventListener("change", function() {

    const selectedCategory = this.value;

    filterDestinations();

});

function filterDestinations() {

    const keyword =
        searchInput.value.toLowerCase().trim();

    const category = categoryFilter.value;

    let results = destinations.filter(destination => {

        const matchesSearch =
            destination.name.toLowerCase().includes(keyword) ||
            destination.country.toLowerCase().includes(keyword);

        const matchesCategory =
            category === "All" ||
            destination.category === category;

        return matchesSearch && matchesCategory;

    });

    sortAndDisplay(results);
}

// ===================================
// PRICE SORTING
// ===================================

const priceSort = document.getElementById("priceSort");

priceSort.addEventListener("change", function() {

    filterDestinations();

});

function sortAndDisplay(results) {

    const sortValue = priceSort.value;

    if (sortValue === "low") {

        results.sort((a, b) => a.price - b.price);

    } else if (sortValue === "high") {

        results.sort((a, b) => b.price - a.price);

    }

    displayDestinations(results);

}

// Update Search to use all filters

searchInput.addEventListener("input", filterDestinations);
const booking = {
    name: document.getElementById("customerName").value,
    email: document.getElementById("customerEmail").value,
    destination: document.getElementById("destination").value,
    date: document.getElementById("travelDate").value,
    travelers: document.getElementById("travelers").value
};

