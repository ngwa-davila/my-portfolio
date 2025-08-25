
  const words = ["I'm a designer!", "I'm a developer!"];
  let i = 0;
  let j = 0;
  let currentWord = '';
  let isDeleting = false;
  const speed = 100;
  const target = document.getElementById("typed-text");

  function type() {
    if (i < words.length) {
      if (!isDeleting && j <= words[i].length) {
        currentWord = words[i].substring(0, j++);
      } else if (isDeleting && j >= 0) {
        currentWord = words[i].substring(0, j--);
      }
      target.textContent = currentWord;

      if (j === words[i].length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }
      if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
      }
      setTimeout(type, isDeleting ? speed / 2 : speed);
    }
  }
  type();
 
 
  const toggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
    sunIcon.classList.toggle('hidden', theme === 'dark-theme');
    moonIcon.classList.toggle('hidden', theme === 'light-theme');
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark-theme' : 'light-theme');
  }

  toggleBtn.addEventListener('click', () => {
    const newTheme = document.body.className === 'dark-theme' ? 'light-theme' : 'dark-theme';
    setTheme(newTheme);
  });


   