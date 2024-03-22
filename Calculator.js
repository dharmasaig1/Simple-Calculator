document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const answerInput = document.querySelector('input[name="Answer"]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.value === '=') {
                answerInput.value = eval(answerInput.value);
            } else {
                answerInput.value += button.value;
            }
        });
    });

    clearButton.addEventListener('click', () => {
        answerInput.value = '';
    });
});