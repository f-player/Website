


const filmstrip = document.querySelector('.filmstrip');

let scrollAmount = 0;

function autoScroll() {
    scrollAmount += 1; // Увеличиваем значение прокрутки
    filmstrip.scrollLeft = scrollAmount; // Прокручиваем влево

    // Если достигли конца, сбрасываем прокрутку
    if (scrollAmount >= filmstrip.scrollWidth - filmstrip.clientWidth) {
        scrollAmount = 0;
    }
}


// Запускаем автоматическую прокрутку каждые 50 мс
//setInterval(autoScroll, 50);



const buttons = document.querySelectorAll('.my-btn2');

buttons.forEach(button => {
    function updateAfterContent() {
        const buttonText = button.textContent; // Получаем текст с оригинальной кнопки
        button.style.setProperty('--after-content', `"${buttonText}"`); // Устанавливаем текст в переменную CSS
    }

    // Обновляем текст при загрузке страницы
    updateAfterContent();

    // Обновляем текст при изменении текста кнопки
    button.addEventListener('DOMSubtreeModified', updateAfterContent);
});







document.getElementById('search-button').addEventListener('click', function() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const months = document.querySelectorAll('.month');
    let found = false;

    months.forEach(month => {
        if (month.textContent.toLowerCase().includes(searchValue)) {
            month.scrollIntoView({ behavior: 'smooth' });
            found = true; // Устанавливаем флаг, если нашли месяц
            return; // Выходим из цикла, если нашли
        }
    });

    if (!found) {
        alert('Месяц не найден'); // Сообщение, если месяц не найден
    }
});












// Получаем все кнопки с классом "scroll-to-top"
const buttons1 = document.querySelectorAll('.scrollToTop');

// Добавляем обработчик события для каждой кнопки
buttons1.forEach(button => {
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    });
});

// Показать или скрыть кнопки при прокрутке
window.onscroll = () => {
    buttons1.forEach(button => {
        button.style.display = window.scrollY > 10 ? 'block' : 'none'; // Показать кнопки при прокрутке вниз
    });
};










document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('btn_mainr');
    const chatWindow = document.getElementById('chat-window');

    // Проверяем, что элементы существуют
    if (!chatButton || !chatWindow) {
        console.error('Один или несколько элементов не найдены');
        return;
    }

    // Обработчик нажатия на кнопку "Задать вопрос"
    chatButton.addEventListener('click', () => {
        chatWindow.style.display = chatWindow.style.display === 'none' || chatWindow.style.display === '' ? 'block' : 'none';
    });

    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const message = chatInput.value;
            if (message.trim() !== '') {
                // Отправка сообщения пользователя
                addMessage('user', message);
                chatInput.value = ''; // Очищаем поле ввода
                autoScroll(); // Прокручиваем вниз после добавления сообщения

                // Генерация ответа AI
                const aiResponse = generateAIResponse(message);
                setTimeout(() => {
                    addMessage('ai', aiResponse);
                    autoScroll(); // Прокручиваем вниз после добавления ответа
                }, 500); // Задержка для имитации времени ответа AI
            }
        }
    });

    // Функция для добавления сообщения
    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';

        // Создаем элемент с иконкой
        const userIcon = document.createElement('img');
        userIcon.src = sender === 'user' ? 'user-icon.png' : 'ai-icon.png'; // Укажите путь к вашим иконкам
        userIcon.className = sender === 'user' ? 'user-icon' : 'ai-icon'; // Добавляем класс для стилей

        // Добавляем иконку и текст сообщения в элемент
        messageElement.appendChild(userIcon);
        const textElement = document.createElement('div');
        textElement.textContent = text;
        messageElement.appendChild(textElement);

        chatMessages.appendChild(messageElement);
    }

    // Функция для генерации ответа AI
    function generateAIResponse(userMessage) {
        // Простой пример логики для ответов AI
        if (userMessage.toLowerCase().includes('привет')) {
            return 'Привет! Как я могу помочь?';
        } else if (userMessage.toLowerCase().includes('как дела')) {
            return 'У меня всё хорошо, спасибо! А у вас?';
        } else if (userMessage.toLowerCase().includes('Путин')) {
            return 'Президент РФ';
        } else {
            return 'Извините, я не совсем понимаю. Можете уточнить?';
        }
    }

        // Функция для автоматической прокрутки вниз
        function autoScroll() {
            chatMessages.scrollTop = chatMessages.scrollHeight; // Прокрутка вниз
        }
    });
