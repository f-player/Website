export function Shap4() {
    const html=`
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
        <div>
            <li><a href='' class="head-text1"><b>В истории развития политического знания выделяют три крупных этапа:</b></a></li>
        </div>
        
        <div class="filmstrip">
            <div class="frame">
                <img src="./image/one.jpg" alt="Картинка 1" width= '300' height= '300'>
            </div>
            <div class="frame">
                <img src="./image/two.jpg" alt="Картинка 2">
            </div>
            <div class="frame">
                <img src="./image/three.jpg" alt="Картинка 3">
            </div>
            <!-- Добавьте больше кадров по необходимости -->
          </div>
    `
    return {
        html: html, 
        init: null 
    };
}
