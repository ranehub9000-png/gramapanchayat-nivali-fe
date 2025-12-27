// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for sticky navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function highlightActiveSection() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.style.backgroundColor = 'var(--primary-color)';
                        link.style.color = 'var(--white)';
                    } else {
                        link.style.backgroundColor = '';
                        link.style.color = '';
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Call once on load
});

// Google Maps initialization (only used if API key is configured)
function initMap() {
    // Coordinates for Nivali, Chiplun, Ratnagiri, Maharashtra
    // Using approximate coordinates - you may need to adjust these
    const nivaliLocation = { lat: 17.5333, lng: 73.5094 };
    
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    // Create map centered on Nivali
    const map = new google.maps.Map(mapElement, {
        zoom: 13,
        center: nivaliLocation,
        mapTypeId: 'roadmap',
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'on' }]
            }
        ]
    });

    // Add marker for Gram Panchayat location
    const marker = new google.maps.Marker({
        position: nivaliLocation,
        map: map,
        title: 'Nivali Gram Panchayat',
        animation: google.maps.Animation.DROP,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#1e40af',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 3
        }
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px;">
                <h3 style="margin: 0 0 10px 0; color: #1e40af; font-weight: 700;">ग्रामपंचायत निवळी</h3>
                <p style="margin: 5px 0;"><strong>Nivali Gram Panchayat</strong></p>
                <p style="margin: 5px 0;">Taluka: Chiplun</p>
                <p style="margin: 5px 0;">District: Ratnagiri</p>
                <p style="margin: 5px 0;">Maharashtra - 415641</p>
            </div>
        `
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    // Try to get more accurate location if geocoding is available
    // Note: You'll need to enable Geocoding API in Google Cloud Console
    if (typeof google !== 'undefined' && google.maps && google.maps.Geocoder) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode(
            { address: 'Nivali, Chiplun, Ratnagiri, Maharashtra, India' },
            function(results, status) {
                if (status === 'OK' && results[0]) {
                    const accurateLocation = results[0].geometry.location;
                    map.setCenter(accurateLocation);
                    marker.setPosition(accurateLocation);
                }
            }
        );
    }
}

// Fallback if Google Maps API fails to load
if (typeof window !== 'undefined') {
    window.gm_authFailure = function() {
        const mapContainer = document.getElementById('map');
        if (mapContainer && !mapContainer.querySelector('iframe')) {
            // Fallback to embedded iframe if API fails
            mapContainer.innerHTML = `
                <iframe 
                    src="https://www.google.com/maps?q=Nivali,+Chiplun,+Ratnagiri,+Maharashtra,+India&output=embed" 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            `;
        }
    };
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.overview-card, .scheme-card, .village-item, .population-table-container');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
