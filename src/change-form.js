const formSteps = document.querySelectorAll('.quiz-form');
const prevButton = document.querySelector('.buttons__previous');
const nextButton = document.querySelector('.buttons__next');
const stepElement = document.querySelector('.quiz-form__step');
// Индекс текущего шага
let currentStepIndex = 0;
// Отображаем текущий шаг и кнопку назад
displayStep();
prevButton.addEventListener('click', () => {
  currentStepIndex--;
  displayStep();
});
nextButton.addEventListener('click', () => {
  currentStepIndex++;
  displayStep();
});
// Функция отображения текущего шага
function displayStep() {
  // Скрываем все элементы формы
  formSteps.forEach(step => step.classList.add('hidden'));
  // Отображаем текущий элемент формы
  formSteps[currentStepIndex].classList.remove('hidden');
  // Отображаем номер текущего шага
  stepElement.textContent = `Шаг ${currentStepIndex + 1} из ${formSteps.length}`;
}