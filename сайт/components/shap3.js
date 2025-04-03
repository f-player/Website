export function Shap3() {
    const html=`
        <ul class="text1">
            <li><a href='' class="head-text1"><b>КАЛЕНДАРЬ</b></a></li>
            <li><a href='' class="head-text1"><b>основных международных политических и экономических событий на 2025 год</b></a></li>
        </ul>

        <div class="search-container">
            <input type="text" id="search" placeholder="Поиск месяца..." />
            <button  id="search-button">Поиск</button>
        </div>
    `
    function initializeShap3Search() {
        console.log("[Shap3 Init] 🚀 Инициализация поиска...");

        const searchInput = document.getElementById('search');
        const searchButton = document.getElementById('search-button');

        if (!searchInput || !searchButton) {
            console.error("[Shap3 Init] ❌ Не найдены элементы поиска (input или button).");
            return;
        }

        const mainCalendarContainer = document.querySelector('#content-container > .bod > .text1');

        if (!mainCalendarContainer) {
            console.warn("[Shap3 Init] ⚠️ Не найден КОНТЕЙНЕР основной таблицы (#content-container > .bod > .text1). Поиск отключен.");
            searchButton.disabled = true;
            searchInput.disabled = true;
            searchInput.placeholder = "Ошибка: Контейнер таблицы не найден";
            return;
        }
        console.log("[Shap3 Init] ✅ Контейнер таблицы (.text1) найден:", mainCalendarContainer);

        const mainTable = mainCalendarContainer.querySelector('table');

        if (!mainTable || mainTable.tagName !== 'TABLE') {
            console.warn("[Shap3 Init] ⚠️ Не найдена ТАБЛИЦА (table) внутри контейнера .text1 или найден не table. Поиск отключен.");
            console.log("[Shap3 Init] HTML контейнера .text1:", mainCalendarContainer.innerHTML.substring(0, 500));
            searchButton.disabled = true;
            searchInput.disabled = true;
            searchInput.placeholder = "Ошибка: Таблица не найдена";
            return;
        }
        console.log("[Shap3 Init] ✅ Таблица найдена:", mainTable);




        searchButton.addEventListener('click', () => {
            const searchTermRaw = searchInput.value;
            const searchTerm = searchTermRaw.trim().toUpperCase().replace(/\s+/g, ' ');

            if (!searchTerm) {
                console.log("[Search Click] Поле поиска пустое.");
                searchInput.focus();
                return;
            }

            console.log(`[Search Click] --- Поиск начат для: "${searchTerm}" ---`);
            let found = false;

            
            const monthRows = mainTable.querySelectorAll('tr:has(td.month)');
            console.log(`[Search Click] Найдено ${monthRows.length} строк с селектором 'tr:has(td.month)'.`);

            if (monthRows.length === 0) {
                 console.warn("[Search Click] ⚠️ В таблице не найдено строк, содержащих 'td.month'. Проверьте HTML.");
            }

            monthRows.forEach((row, index) => {
                
                const monthElement = row.querySelector('td.month p b');

                if (monthElement) {
                    const monthTextRaw = monthElement.textContent;
                    const monthText = monthTextRaw.trim().toUpperCase().replace(/\s+/g, ' ');
                    console.log(`[Search Click] Строка ${index} ('tr:has(td.month)'): Сравниваем "${monthText}" |с| "${searchTerm}"`);

                    if (monthText === searchTerm) {
                        console.log(`[Search Click] ✅ Найдено совпадение для "${searchTerm}"!`);
                        row.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        console.log("[Search Click] Прокрутка к элементу выполнена.");
                        found = true;
                    }
                } else {
                    console.warn(`[Search Click] ⚠️ Строка ${index} ('tr:has(td.month)'): Не найден элемент 'td.month p b'. HTML строки:`, row.innerHTML);
                }
            });

            if (!found) {
                alert(`Месяц "${searchInput.value}" не найден в календаре событий.`);
                console.log(`[Search Click] ❌ Месяц "${searchTerm}" не найден.`);
            } else {
                 console.log(`[Search Click] --- Поиск для "${searchTerm}" завершен успешно ---`);
            }
        });

        
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });

        console.log("[Shap3 Init] ✅ Обработчики поиска установлены.");
    }

    return {
        html: html,
        init: initializeShap3Search
    };
}
