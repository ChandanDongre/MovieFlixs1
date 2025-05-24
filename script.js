// Movie data
const moviesData = {
    trending: [
        { title: "RRR", year: 2022, genre: "Action/Drama", poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg", trailer: "f_vbAtFSEc0", description: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s." },
        { title: "The Batman", year: 2022, genre: "Action/Crime", poster: "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg", trailer: "mqqft2x_Aa4", description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement." },
        { title: "Top Gun: Maverick", year: 2022, genre: "Action/Drama", poster: "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg", trailer: "giXco2jaZ_4", description: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him." },
        { title: "Everything Everywhere All at Once", year: 2022, genre: "Sci-fi/Comedy", poster: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg", trailer: "wxN1T1uxQ2g", description: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led." },
        { title: "Kantara", year: 2022, genre: "Action/Thriller", poster: "https://upload.wikimedia.org/wikipedia/en/6/61/Kantara_poster.jpg", trailer: "4jr6pXKz0PE", description: "A human and nature conflict where a rebellious renegade explodes, leading to war between the inhabitants of the forest and a tribe that worships the demigod, which eventually leads to a face-off between Shiva and the forest spirit." }
    ],
    hindi: [
            { title: "Dangal", year: 2016, genre: "Sports/Biography", poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg", trailer: "x_7YlGv9u1g", description: "Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to become India's first world-class female wrestlers." },
            { title: "3 Idiots", year: 2009, genre: "Comedy/Drama", poster: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg", trailer: "DKzBmRRdPXo", description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'." },
            { title: "PK", year: 2014, genre: "Comedy/Drama", poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg", trailer: "WsjRWM0EhvM", description: "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate their religious beliefs, superstitions and godmen." },
            { title: "Queen", year: 2014, genre: "Comedy/Drama", poster: "https://upload.wikimedia.org/wikipedia/en/4/45/QueenMoviePoster7thMarch.jpg", trailer: "Sd76mVUBPF4", description: "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled." },
            { title: "Andhadhun", year: 2018, genre: "Thriller/Comedy", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTegCGM2Xk3PleoPYIHHAsfaTz_bTJIxTGXDsNSfaDhgR_MtjA0Vl1WOxKsEIxE0WmtlxUY", trailer: "N7Yr0oBXBp0", description: "A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically know nothing of." }
        ],
    english: [
        { title: "The Shawshank Redemption", year: 1994, genre: "Drama", poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg", trailer: "6hB3S9bIaco", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." },
        { title: "The Godfather", year: 1972, genre: "Crime/Drama", poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg", trailer: "sY1S34973zA", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." },
        { title: "The Dark Knight", year: 2008, genre: "Action/Crime", poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg", trailer: "EXeTwQWrcwY", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." },
        { title: "Pulp Fiction", year: 1994, genre: "Crime/Drama", poster: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg", trailer: "s7EdQ4FqbhY", description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption." },
        { title: "Forrest Gump", year: 1994, genre: "Drama/Romance", poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg", trailer: "bLvqoHBptjg", description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart." }
    ],
    south: [
        { title: "Baahubali: The Beginning", year: 2015, genre: "Action/Fantasy", poster: "https://i.pinimg.com/736x/fa/6c/a6/fa6ca6163c061359397022802df6210b.jpg", trailer: "sOEg_YZQsTI", description: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples." },
        { title: "Baahubali 2: The Conclusion", year: 2017, genre: "Action/Fantasy", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnMA16Y55ki6WxoLTdTmxNnKwYCZiNwi0DvCakttCRBQgZyJpJ", trailer: "G62HrubdD6o", description: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom." },
        { title: "KGF: Chapter 1", year: 2018, genre: "Action/Drama", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRBac-4dlHEaK62vvEHMMcS_PboGclwBP3Bny_k530Z_s2xoSFXFM0r_EgoPXBO5DVLT8Mr", trailer: "qXgF-iJ_ezE", description: "In the 1970s, a fierce rebel rises against brutal oppression and becomes the symbol of hope to legions of downtrodden people." },
        { title: "KGF: Chapter 2", year: 2022, genre: "Action/Drama", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5Vo2OulSEXWfroqvIjx0VvYqYjVGLaUHUsfHV7laaYxIQ7qFvkQGD_eao-dt0eIM-JJHag", trailer: "JKa05nyUmuQ", description: "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy." },
        { title: "Pushpa: The Rise", year: 2021, genre: "Action/Crime", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3I84wCRTf0lEnJBcXKdTnHGsKUUtptPZOKjar3x9F97SbbdInBh6oQ6j9eFo6c361C5iM", trailer: "Q1NKMPhp8JI", description: "A laborer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business." }
    ],
    korean: [
        { title: "Parasite", year: 2019, genre: "Comedy/Drama", poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png", trailer: "5xH0HfJHsaY", description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan." },
        { title: "Train to Busan", year: 2016, genre: "Action/Horror", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdZSHkJdke9ppJ3ecHEvwNw4YgQMqOFD9fGTYuIw7sku5jdc9MR8-AjyNJFLuonU1sEBrX", trailer: "pyWuHv2-Abk", description: "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan." },
        { title: "Oldboy", year: 2003, genre: "Action/Drama", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyGpSw47yXMjqyeXuDNF3zV6YP8LAJRaM1l5BGPR_dE24kyPVRK4sLPFutCtsQ5zKcmCwO", trailer: "2HkjrJ6IK5E", description: "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days." },
        { title: "The Handmaiden", year: 2016, genre: "Drama/Romance", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT0iG99VkMkI8v4nwVsPxCozHN1szp0QPeLADEUHqFG_LHbQNzD", trailer: "whldChqCsYk", description: "A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her." },
        { title: "The Wailing", year: 2016, genre: "Horror/Mystery", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIIwUZZmFZtKrekOE94kA_CoJjUdHqkikiVy94UuDPfZbb-d8osln5BdSM25OIlezMlQ_9", trailer: "43uAputjI4k", description: "A stranger arrives in a little village and soon after a mysterious sickness starts spreading. A policeman is drawn into the incident and is forced to solve the mystery in order to save his daughter." }
    ]
};

// Function to populate movie rows on homepage
function populateMovieRows() {
    // Trending Movies
    const trendingContainer = document.getElementById('trending-movies');
    if (trendingContainer) populateMovieRow(trendingContainer, moviesData.trending);

    // Hindi Movies
    const hindiContainer = document.getElementById('hindi-movies');
    if (hindiContainer) populateMovieRow(hindiContainer, moviesData.hindi);

    // English Movies
    const englishContainer = document.getElementById('english-movies');
    if (englishContainer) populateMovieRow(englishContainer, moviesData.english);

    // South Indian Movies
    const southContainer = document.getElementById('south-movies');
    if (southContainer) populateMovieRow(southContainer, moviesData.south);

    // Korean Movies
    const koreanContainer = document.getElementById('korean-movies');
    if (koreanContainer) populateMovieRow(koreanContainer, moviesData.korean);
}

// Function to populate all movies grid on movies page
function populateAllMoviesGrid() {
    const allMoviesGrid = document.getElementById('all-movies-grid');
    if (!allMoviesGrid) return;

    // Combine all movies from all categories
    const allMovies = [
        ...moviesData.trending,
        ...moviesData.hindi,
        ...moviesData.english,
        ...moviesData.south,
        ...moviesData.korean
    ];

    // Check for URL parameters for filtering
    const urlParams = new URLSearchParams(window.location.search);
    const genreFilter = urlParams.get('genre');
    const yearFilter = urlParams.get('year');

    // Filter movies based on URL parameters
    let filteredMovies = allMovies;
    if (genreFilter) {
        filteredMovies = filteredMovies.filter(movie => 
            movie.genre.toLowerCase().includes(genreFilter.toLowerCase())
        );
    }
    if (yearFilter) {
        filteredMovies = filteredMovies.filter(movie => movie.year == yearFilter);
    }

    // Populate the grid
    populateMovieGrid(allMoviesGrid, filteredMovies);
}

// Helper function to populate a single movie row
function populateMovieRow(container, movies) {
    container.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/200x300?text=Poster+Not+Available'">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span>${movie.genre}</span>
                </div>
            </div>
        `;

        // Add click event to open modal
        movieCard.addEventListener('click', () => {
            openMovieModal(movie);
        });

        container.appendChild(movieCard);
    });
}

// Helper function to populate movie grid
function populateMovieGrid(container, movies) {
    container.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/200x300?text=Poster+Not+Available'">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span>${movie.genre}</span>
                </div>
            </div>
        `;

        // Add click event to open modal
        movieCard.addEventListener('click', () => {
            openMovieModal(movie);
        });

        container.appendChild(movieCard);
    });
}

// Function to open movie modal
function openMovieModal(movie) {
    const modal = document.getElementById('movie-modal');
    if (!modal) return;

    const modalTitle = document.getElementById('modal-title');
    const modalYear = document.getElementById('modal-year');
    const modalGenre = document.getElementById('modal-genre');
    const modalDescription = document.getElementById('modal-description');
    const trailerContainer = document.getElementById('trailer-container');

    // Set modal content
    modalTitle.textContent = movie.title;
    modalYear.textContent = movie.year;
    modalGenre.textContent = movie.genre;
    modalDescription.textContent = movie.description;

    // Set trailer
    trailerContainer.innerHTML = `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${movie.trailer}?autoplay=1" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to close movie modal
function closeModal() {
    const modal = document.getElementById('movie-modal');
    if (!modal) return;

    const trailerContainer = document.getElementById('trailer-container');
    if (trailerContainer) trailerContainer.innerHTML = '';

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Function to scroll movie rows horizontally
function scrollMovies(rowId, scrollAmount) {
    const row = document.getElementById(rowId);
    if (row) {
        row.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Function to scroll to Hindi movies section
function scrollToHindiMovies() {
    const hindiSection = document.getElementById('hindi-section');
    if (hindiSection) {
        hindiSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Header background change on scroll
function handleHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Close modal when clicking outside of modal content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('movie-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Add event listeners for Escape key to close modal
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Handle contact form submission
function handleContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Common functionality for all pages
    handleHeaderScroll();
    
    // Page-specific functionality
    if (document.getElementById('trending-movies')) {
        // Homepage
        populateMovieRows();
        document.getElementById('explore-button')?.addEventListener('click', scrollToHindiMovies);
    } else if (document.getElementById('all-movies-grid')) {
        // Movies page
        populateAllMoviesGrid();
        
        // Add event listeners for filter changes
        const genreFilter = document.getElementById('genre-filter');
        const yearFilter = document.getElementById('year-filter');
        
        if (genreFilter) {
            genreFilter.addEventListener('change', populateAllMoviesGrid);
        }
        if (yearFilter) {
            yearFilter.addEventListener('change', populateAllMoviesGrid);
        }
    } else if (document.querySelector('.contact-form')) {
        // Contact page
        handleContactForm();
    }
});
