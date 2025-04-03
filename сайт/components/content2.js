export function Content2() {
    const html= `
        <div class='bod'>
            <div class='head-text1'>
                <b>Функции политики</b>
            </div>
            <div>
                <ul class="bod-text">
                    <div>

                        <li><button id="btn_mainr" class="my-btn2 hover" data-text='Выражение интересов всех групп и слоев общества'><span class='btn-text'>Выражение интересов всех групп и слоев общества</span></button></li>
                        <li><button id="btn_politic" class="my-btn2 hover" data-text='Обеспечение целостности и стабильности общества'><span class='btn-text'>Обеспечение целостности и стабильности общества</span></button></li>
                        <li><button id="btn_hyster" class="my-btn2 hover" data-text='Обеспечение инновационного социального развития'><span class='btn-text'>Обеспечение инновационного социального развития</span></button></li>

                    </div>

                    <div>

                        <li><button id="btn_mainr" class="my-btn2 hover" data-text='Управление и руководство общественной жизнью'><span class='btn-text'>Управление и руководство общественной жизнью</span></button></li>
                        <li><button id="btn_politic" class="my-btn2 hover" data-text='Политическая социализация'><span class='btn-text'>Политическая социализация</span></button></li>
                        <li><button id="btn_hyster" class="my-btn2 hover" data-text='Обнаружение и разрешение социальных конфликтов'><span class='btn-text'>Обнаружение и разрешение социальных конфликтов</span></button></li>

                    </div>
                </ul>
            </div>

            <ul>
                <li><a href='' class="head-text1"><b>Виды общественной власти</b></a></li>
            </ul>
            <ul class="bod-text1">
                <div>
                    <li><button id="btn_mainr" class="vlas"><img src='https://cs14.pikabu.ru/post_img/2023/01/27/6/og_og_1674810309292546405.jpg' width='280' height='180'><span>Экономическая: контроль над экономическими ресурсами, обладание собственностью</span></button></li>
                    <li><button id="btn_politic" class="vlas"><img src='https://i.pinimg.com/originals/15/00/f0/1500f0c3a19415100be7d16bd0faf36f.png' width='280' height='180'><span>Социальная: контроль над распределением статусов, должностей, льгот и привилегий</span></button></li>
                </div>
                <div>
                    <li><button id="btn_mainr" class="vlas"><img src='https://mayakrbt.ru/attachments/ff87d5f0b166a2ba84eab30d6d6ddd7ae424e24b/store/crop/0/0/1469/980/1600/0/0/f2ded4508ebb9acd3d7e16fd56dca224700c61fb750a13ff522aa4e2dc9f/528d37f8748ce31dfb2d6bf8029f0042.jpg' width='280' height='180'><span>Культурно-информационная: контроль над средствами массовой информации</span></button></li>
                    <li><button id="btn_hyster" class="vlas"><img src='https://cdn.culture.ru/images/12925828-45fe-5793-ba22-c18e72acfc04' width='280' height='180'><span>Семейная: основывается на авторитете и мудрости</span></button></li>
                </div>
                <div>
                    <li><button id="btn_politic" class="vlas"><img src='https://avatars.mds.yandex.net/i?id=1feb06a34354abedd3ad10eab4138431_l-5221285-images-thumbs&n=13' width='280' height='180'><span>Духовная: власть над душами людей</span></button></li>
                    <li><button id="btn_hyster" class="vlas"><img src='https://avatars.mds.yandex.net/i?id=323d6213f9b7924431633757ade07dc0_l-5326618-images-thumbs&n=13' width='280' height='180'><span>Политическая: контроль в сфере управления</span></button></li>
                </div>
            </ul>
        </div>
    `

    function initializeComponentScripts() {
        const buttons = document.querySelectorAll('.my-btn2.hover');
        console.log("Content2 scripts initialized! Processing buttons for hover effect:", buttons.length);

    }
    
    
    
    return {
        html: html, 
        init: initializeComponentScripts 
    };
    
    
    
}
