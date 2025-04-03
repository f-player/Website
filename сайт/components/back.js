export function Back() {

    const html = `
        <button id="scrollToTopBtn" class="scrollToTop" style="display: none;">Наверх</button>
    `;


    function initializeBackScripts(container) {
        console.log("[Back Init] 🚀 Инициализация кнопки 'Наверх'...");

        if (!container) {
            console.error("[Back Init] ❌ Контейнер для кнопки 'Наверх' не передан!");
            return;
        }


        const button = container.querySelector('#scrollToTopBtn');

        if (!button) {
            console.error("[Back Init] ❌ Кнопка #scrollToTopBtn не найдена внутри контейнера!");
            return;
        }
        console.log("[Back Init] ✅ Кнопка 'Наверх' найдена.");

        let isScrollListenerActive = false; 

        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
            console.log("[Back Button] Клик 'Наверх'.");
        });

       
        const handleScroll = () => {
           
            if (button) {
                button.style.display = window.scrollY > 150 ? 'block' : 'none'; 
            }
        };

        
        if (!isScrollListenerActive) {
            window.addEventListener('scroll', handleScroll);
            isScrollListenerActive = true;
            console.log("[Back Init] Обработчик window.onscroll добавлен.");
           
            handleScroll();
        }

       

        console.log("[Back Init] ✅ Инициализация кнопки 'Наверх' завершена.");

    } 
    
    return {
        html: html,
        init: initializeBackScripts
    };
}
