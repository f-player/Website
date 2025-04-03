
import { Content } from './content.js';
import { Content2 } from './content2.js';
import { Content3 } from './content3.js';
import { Content4 } from './content4.js';

export class FooterComponent {
    constructor(parent, navigationHandler) { 
        this.parent = parent;
        this.handleNavigation = navigationHandler; 
    }
    getHTML() {
        return `
            <style>
                ul {
                    list-style: none; /*убираем маркеры списка*/
                    margin: 0px; /*убираем верхнее и нижнее поле, равное 1em*/
                    padding-left: 0; /*убираем левый отступ, равный 40px*/
                }
                a {text-decoration: none; /*убираем подчеркивание текста ссылок*/}
                .pol b{
                    color:rgba(172, 142, 88, 0.849);
                    font-size: 3rem; 
                }
                .text b{
                    color:rgba(172, 142, 88, 0.849);
                    font-size: 3rem; 
                }
                .head-text1 b{
                    color:rgba(172, 142, 88, 0.849);
                    font-size: 3rem; 
                }

                p {
                text-indent: 2em; /* 2em - это в два раза больше размера шрифта */
                line-height: 1; /* Уменьшаем межстрочный интервал */
                margin-bottom: 0.5px; /*  Рекомендуется установить, чтобы отступ между абзацами не был слишком большим*/
                }
            </style>

            <div class="leg">
                <ul class="head">
                    <ul class="center">
                        <li><a href='' class='tel'><img src='./image/tel.png' width="30" height="25">  8 985 074 34 04</a></li>
                        <ul class="head-text1">
                            <li><a href="https://t.me/+79850743404" class='chat1'><img src="./image/tg1.png" alt="" width="30" height="30" class="chat1-img"></a></li>
                            <li><a href="https://wa.me/79850743404" class='chat'><img src="./image/vb1.png" alt="" width="30" height="30" class="chat-img"></a></li>
                            <li><a href="viber://chat?number=79850743404" class="chat"><img src="./image/ws1.png" alt="" width="30" height="30" class="chat-img"></a></li>
                            <li><a href="https://vk.com/id635137735" class="chat2"><img src="./image/vk1.png" alt="" width="30" height="30" class="chat2-img"></a></li>
                        </ul>
                    </ul>
                    <ul class="head-text">
                            <li><a class='menu' data-script='content.js'>Главная</a></li>
                            <li><a class='menu' data-script='content2.js'>Политика и власть</a></li>
                            <li><a class='menu' data-script='content3.js'>Календарь</a></li>
                            <li><a class='menu' data-script='content4.js'>Развитие</a></li>
                    </ul>
                    <ul class="center">
                        <li><img src='./image/photo2.png' width='300' height='180'></li>
                    </ul>


                </ul>
                <ul>
                    <li><a href='' class="leg-text"><b>© Разработано в МГТУ</b></a></li>
                </ul>
            </div>
        `;
    }


    render() {
        const html = this.getHTML();
        this.parent.innerHTML = html; 
        this.addEventListeners();
    }

    addEventListeners() {
        this.parent.addEventListener('click', (event) => {
            if (event.target.matches('a.menu')) {
                 event.preventDefault();
                 const link = event.target;
                 const script = link.getAttribute('data-script');
                 const contentFunction = this.getContentFunction(script); 
                 if (contentFunction && typeof this.handleNavigation === 'function') {
                     
                     this.handleNavigation(contentFunction, script);
                 } else {
                     console.error("Не найден контент или обработчик для:", script);
                 }
            }
        });
    }

    getContentFunction(script) {
        switch (script) {
            case 'content.js': return Content;
            case 'content2.js': return Content2;
            case 'content3.js': return Content3;
            case 'content4.js': return Content4;
            default: return Content; 
        }
    }
}