export function Shap2() {
    const html=`
        <div>
            <div class="zyg">
                <img src = './image/i.png' width="550" height="400" >
            </div>
            <div class="men2">
                <img src="./image/dgir2.png"  alt="Рыжий кот Кекс лежит у ноутбука." width="550" height="450">

            </div>
        </div>

        <div id="wrapper3">
            <div id="left3">
                <p>
                    «В свое время мы полагали, что <b>власть</b>
                    можно обрести через участие в
                    выборах различных уровней. Сейчас, в
                    условиях массовых фальсификаций на
                    выборах и жесткого давления власти
                    на общество, такой ход событий
                    становится маловероятным.»
                    «Вместе с тем, как мы уже отмечали,
                    <b>власть</b> явно не справляется с
                    управлением страной. На фоне
                    баснословного обогащения крошечной
                    кучки олигархов и высшей бюрократии,
                    происходит ухудшение жизни
                    большинства народа.»
                </p>
            </div>
            <div id="right3">
                <p>
                  «<b>Политика</b> - это тяжелая работа, это жесткие
                  споры. Это крик, риск и даже опасность,
                  потому что политика - это не дискуссия
                  друзей, а борьба оппонентов, борьба за власть.
                  Политик должен быть готов быть жестким и
                  даже жестоким. Тем более политик, который
                  хочет стать лидером России. Размазни, как
                  последний царь или Горбачев, довели нашу
                  страну до краха, а тираны привели ее к
                  величию.»
                </p>
            </div>
        </div>
    `
    return {
        html: html, 
        init: null 
    };
}
