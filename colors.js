document.addEventListener('DOMContentLoaded', function() {
  const themes = {
    default: {
      primary: '#FF1B2D',
      secondary: '#722ED1',
      accent: '#00D9FF',
      neon: '#FF1B2D',
      bg: '#0A0E1A',
      bgGradient1: 'rgba(114, 46, 209, 0.2)',
      bgGradient2: 'rgba(0, 217, 255, 0.2)',
      bgGradient3: 'rgba(255, 27, 45, 0.1)'
    },
    red: {
      primary: '#FF1B2D',
      secondary: '#B71C1C',
      accent: '#FF5252',
      neon: '#FF1B2D',
      bg: '#1A0A0A',
      bgGradient1: 'rgba(255, 27, 45, 0.2)',
      bgGradient2: 'rgba(255, 82, 82, 0.2)',
      bgGradient3: 'rgba(183, 28, 28, 0.1)'
    },
    blue: {
      primary: '#0066FF',
      secondary: '#003D99',
      accent: '#4FC3F7',
      neon: '#0066FF',
      bg: '#0A0A1A',
      bgGradient1: 'rgba(0, 102, 255, 0.2)',
      bgGradient2: 'rgba(79, 195, 247, 0.2)',
      bgGradient3: 'rgba(0, 61, 153, 0.1)'
    },
    green: {
      primary: '#00C853',
      secondary: '#00695C',
      accent: '#76FF03',
      neon: '#00C853',
      bg: '#0A1A0A',
      bgGradient1: 'rgba(0, 200, 83, 0.2)',
      bgGradient2: 'rgba(118, 255, 3, 0.2)',
      bgGradient3: 'rgba(0, 105, 92, 0.1)'
    }
  };

  function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    document.documentElement.style.setProperty('--neon-blue', theme.accent);
    document.documentElement.style.setProperty('--neon-pink', theme.primary);
    document.documentElement.style.setProperty('--neon-purple', theme.secondary);
    document.documentElement.style.setProperty('--dark-bg', theme.bg);
    
    document.body.style.backgroundImage = 
      `radial-gradient(circle at 10% 20%, ${theme.bgGradient1} 0%, transparent 50%),
       radial-gradient(circle at 90% 80%, ${theme.bgGradient2} 0%, transparent 50%),
       radial-gradient(circle at 50% 50%, ${theme.bgGradient3} 0%, transparent 50%)`;

    localStorage.setItem('selectedTheme', themeName);

    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.setProperty('--color', theme.primary);
    }
  }

  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme && themes[savedTheme]) {
    applyTheme(savedTheme);
  } else {
    applyTheme('default');
  }

  window.applyTheme = applyTheme;
});

// Feito com ♡ por Riq:)
