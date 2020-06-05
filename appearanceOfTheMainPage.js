import LANGUAGE from './language.js';

function languagePage() {
  const language = document.querySelector('.language');
  const ruLang = language.querySelector('#RU');
  const enLang = language.querySelector('#EN');
  ruLang.onclick = () => {
    ruLang.classList.add('active');
    enLang.classList.remove('active');
  };

  enLang.onclick = () => {
    enLang.classList.add('active');
    ruLang.classList.remove('active');
  };
}

languagePage();

function degreesPage() {
  const degrees = document.querySelector('.degrees');
  const fDegrees = degrees.querySelector('#F');
  const cDegrees = degrees.querySelector('#C');
  fDegrees.onclick = () => {
    fDegrees.classList.add('active');
    cDegrees.classList.remove('active');
  };

  cDegrees.onclick = () => {
    cDegrees.classList.add('active');
    fDegrees.classList.remove('active');
  };
}

degreesPage();

function changeLanguage() {
  const restart = document.querySelector('.restart');
  restart.textContent = LANGUAGE.RU.restart;
}

changeLanguage();
