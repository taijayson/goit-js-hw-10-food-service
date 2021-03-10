const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.body;

const themeSwitch = document.querySelector('.theme-switch__toggle');


themeSwitch.addEventListener('change', onChange);

function onChange(event) {
    
    if (event.target.checked) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK)   
    } else {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT)
    }


}

const currentTheme = localStorage.getItem('theme');

    if (currentTheme === Theme.DARK) {
        themeSwitch.checked = 'checked';
        body.classList.add(Theme.DARK);
    
    } else {
        body.classList.add(Theme.LIGHT);
    }  