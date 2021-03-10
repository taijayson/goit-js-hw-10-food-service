const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.body;

const themeSwitch = document.querySelector('.theme-switch__toggle');


themeSwitch.addEventListener('change', onChange);

function onChange(event) {

    const replaceTheme = (oldTheme, newTheme) => {
        body.classList.add(newTheme);
        body.classList.remove(oldTheme);
        localStorage.setItem('theme', newTheme)
    }
    
    if (event.target.checked) {
        replaceTheme(Theme.LIGHT, Theme.DARK);
    
    } else {
        replaceTheme(Theme.DARK, Theme.LIGHT);
    }


}

const currentTheme = localStorage.getItem('theme');

    if (currentTheme === Theme.DARK) {
        themeSwitch.checked = 'checked';
        body.classList.add(Theme.DARK);
    }  