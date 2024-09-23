const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('moon-icon');
const moonIcon = document.getElementById('sun-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    
    // Toggle icon visibility
    if (document.body.classList.contains('light-mode')) {
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    }
});

var sliderCounter = 0;
var sliderContent =[
    "Developer",
    "Designer",
    "Coder",
];

var sliderValue = document.querySelector("#SliderValue");

function slide(){
    if(sliderCounter >= sliderContent.length){
        sliderCounter = 0;
    }

    sliderValue.innerHTML = "";
    sliderValue.classList.remove("holder-animation")
    void sliderValue.offsetWidth;
    sliderValue.classList.add("holder-animation")

    for(i=0; i<sliderContent[sliderCounter].length; i++){
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderContent[sliderCounter][i];

        if(letterDiv.innerHTML == ""){
            letterDiv.innerHTML = "&nbsp;";
        }
            letterDiv.classList.add("start")
            letterDiv.classList.add("animation")
            letterDiv.style.animationDelay = i / 10 + "s";
            sliderValue.appendChild(letterDiv);
        }
        sliderCounter++;
    }

    slide();
    setInterval(slide, 2000);

    const menuItems = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('.section');
let currentSection = 0;

menuItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior

        // Flip effect
        sections[currentSection].classList.add('flip');
        currentSection = index;

        // Set a timeout to change the section after the flip animation
        setTimeout(() => {
            sections.forEach((section, secIndex) => {
                if (secIndex === currentSection) {
                    section.style.display = 'block'; // Show the target section
                } else {
                    section.style.display = 'none'; // Hide others
                }
            });
            sections[currentSection].classList.remove('flip');
        }, 400); // Adjust timing to match the CSS transition
    });
});

// Function to update the pie chart based on the data-percentage attribute
document.querySelectorAll('.outer-circle, .nested-circle, .extra-circle').forEach(circle => {
    const percentage = circle.getAttribute('data-percentage');
    circle.style.setProperty('--percentage', percentage);
});

// Handle "View More" Button Click
document.querySelectorAll('.view-more-btn').forEach(button => {
    button.addEventListener('click', function () {
        const skillItem = this.parentElement;

        // Toggle the active class to expand the details box
        skillItem.classList.add('active');

        // Hide the View More button once clicked
        this.style.display = 'none';

        // Fix the size issue when expanding
        skillItem.style.height = 'auto';
    });
});

// Handle "Back" Button Click
document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', function () {
        const skillItem = this.closest('.skill-item');
        skillItem.classList.remove('active');

        // Show the View More button again when the back button is clicked
        skillItem.querySelector('.view-more-btn').style.display = 'block';

        // Fix the size issue back to default when collapsing
        skillItem.style.height = 'auto';
    });
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Display success message
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block"; // Show success message
    
    // Reset the form fields
    document.getElementById("contact-form").reset();

    // Redirect back to home after 3 seconds
    setTimeout(() => {
        window.location.href = "#"; // Redirect to the home section or page
    }, 3000); // 3000ms = 3 seconds
});

// Selecting the necessary elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuItemms = document.querySelectorAll('.menu li a'); // Get all menu links

// Toggle menu when the menu button is clicked
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active'); // Show/hide the menu
    menuBtn.querySelector('i').classList.toggle('active'); // Switch between hamburger and close icon
});

// Close the menu when a menu item is clicked (for mobile)
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 991) {
            menu.classList.remove('active'); // Hide the menu
            menuBtn.querySelector('i').classList.remove('active'); // Switch back to hamburger icon
        }
    });
});

// Optional: Close the menu if the window is resized larger than 991px
window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
        menu.classList.remove('active'); // Hide the menu
        menuBtn.querySelector('i').classList.remove('active'); // Reset icon to hamburger
    }
});









