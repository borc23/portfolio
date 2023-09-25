console.log('It\'s working')

// Function to set the theme
function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css';
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css';
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css';
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css';
    }

    localStorage.setItem('theme', mode);
}

// Function to load the theme from local storage
function loadTheme() {
    let theme = localStorage.getItem('theme');
    if (theme == null) {
        setTheme('light');
    } else {
        setTheme(theme);
    }
}

// Call the loadTheme function to set the theme on page load
loadTheme();

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log('Option clicked:', mode);
        setTheme(mode);
    });
}


// Function to load the theme from local storage and set it for the page
function loadThemeForSubPage() {
    let theme = localStorage.getItem('theme');
    if (theme != null) {
        document.getElementById('theme-style').href = theme + '.css';
    }
}

// Call the loadThemeForDjango function to set the theme on the django.html page
loadThemeForSubPage();