
import { HeaderComponent } from './components/header.js';
import { FooterComponent } from './components/footer.js';
import { Content } from './components/content.js';
import { Content2 } from './components/content2.js';
import { Content3 } from './components/content3.js';
import { Content4 } from './components/content4.js';
import { Shap } from './components/shap.js';    
import { Shap2 } from './components/shap2.js';  
import { Shap3 } from './components/shap3.js';  
import { Shap4 } from './components/shap4.js';
import { Chat } from './components/chat.js'; 
import { Back } from './components/back.js';

const app = document.getElementById('app');


const headerShapWrapper = document.createElement('div');
headerShapWrapper.id = 'header-shap-wrapper'; 

const headerContainer = document.createElement('div');
headerContainer.id = 'header-container';      

const shapContainer = document.createElement('div');
shapContainer.id = 'shap-container';          

const contentContainer = document.createElement('div');
contentContainer.id = 'content-container';    

const footerContainer = document.createElement('div');
footerContainer.id = 'footer-container';      

const chatContainer = document.createElement('div');
chatContainer.id = 'chat-container';          

const backContainer = document.createElement('div');
backContainer.id = 'back-container';


function getShapComponent(scriptName) {
    switch (scriptName) {
        case 'content.js': return Shap;
        case 'content2.js': return Shap2;
        case 'content3.js': return Shap3;
        case 'content4.js': return Shap4;
        default: return Shap; 
    }
}


function loadContent(contentProviderResult, scriptName) {
    console.log("[LoadContent] Загрузка контента и шапки для:", scriptName);

    
    const ShapFunction = getShapComponent(scriptName);
    const shapProviderResult = ShapFunction(); 

    
    if (!contentProviderResult || typeof contentProviderResult.html === 'undefined') { /* ... */ }
    if (!shapProviderResult || typeof shapProviderResult.html === 'undefined') { /* ... */ }


   
    shapContainer.innerHTML = shapProviderResult.html;
    contentContainer.innerHTML = contentProviderResult.html;


    
    let chatResult = null; 
    if (typeof Chat === 'function') {
        chatResult = Chat(); 
        if (chatResult && typeof chatResult.html !== 'undefined') {
            
            chatContainer.innerHTML = chatResult.html;
             console.log("[LoadContent] HTML чата добавлен в chatContainer.");
        } else {
            console.error("[LoadContent] ❌ Chat() не вернул корректный HTML.");
            chatContainer.innerHTML = '<!-- Ошибка загрузки чата -->';
        }
    } else {
        console.warn("[LoadContent] ⚠️ Функция Chat не найдена или не импортирована.");
        chatContainer.innerHTML = ''; 
    }



    if (app.contains(headerShapWrapper)) {
      
    } else {
   
        app.innerHTML = '';
        headerShapWrapper.appendChild(headerContainer);
        headerShapWrapper.appendChild(shapContainer);
        app.appendChild(headerShapWrapper);
        app.appendChild(contentContainer);
  
        app.appendChild(chatContainer);
        app.appendChild(backContainer); 
        app.appendChild(footerContainer);
        console.log("[LoadContent] Первая сборка DOM выполнена.");
    }


  
    if (shapProviderResult && typeof shapProviderResult.init === 'function') { /* ... */ }
    if (contentProviderResult && typeof contentProviderResult.init === 'function') { /* ... */ }


    if (chatResult && typeof chatResult.init === 'function') {
        console.log("[LoadContent] Вызов init для Chat.");
        try {
            
            chatResult.init(chatContainer); 
        } catch (e) {
            console.error("❌ Ошибка при инициализации скриптов чата:", e);
        }
    } else {
        console.log("[LoadContent] Функция init для чата не найдена или чат не загружен.");
    }


   
    if (scriptName && window.location.hash !== `#${scriptName}`) { /* ... */ }

    
    window.scrollTo(0, 0);

     console.log("[LoadContent] Загрузка завершена для:", scriptName);
}




const navigationHandler = (contentFunction, scriptName) => { 
    const contentResult = contentFunction(); 
    loadContent(contentResult, scriptName);  
};

const header = new HeaderComponent(headerContainer, navigationHandler); 
const footer = new FooterComponent(footerContainer, navigationHandler);
const backResult = Back(); 



header.render();
footer.render();

if (backResult && backResult.html) {
    backContainer.innerHTML = backResult.html; 
    console.log("[Init] HTML кнопки 'Назад' добавлен.");
    if (typeof backResult.init === 'function') {
        try {
            backResult.init(backContainer); 
            console.log("[Init] Скрипты кнопки 'Назад' инициализированы.");
        } catch (e) {
            console.error("❌ Ошибка при инициализации кнопки 'Назад':", e);
        }
    }
} else {
    console.error("[Init] ❌ Back() не вернул корректный HTML.");
}


let initialScript = window.location.hash.substring(1) || 'content.js';
let initialContentFunction;
switch (initialScript) {
    case 'content2.js': initialContentFunction = Content2; break;
    case 'content3.js': initialContentFunction = Content3; break;
    case 'content4.js': initialContentFunction = Content4; break;
    default:
        initialScript = 'content.js';
        initialContentFunction = Content;
}

loadContent(initialContentFunction(), initialScript); 



window.onpopstate = function(event) {
    console.log("Сработало onpopstate:", event.state);
    let scriptToLoad = 'content.js'; 
    if (event.state && event.state.script) {
        scriptToLoad = event.state.script;
    } else {
        scriptToLoad = window.location.hash.substring(1) || 'content.js';
    }

    let contentFunction;
     switch (scriptToLoad) {
         case 'content2.js': contentFunction = Content2; break;
         case 'content3.js': contentFunction = Content3; break;
         case 'content4.js': contentFunction = Content4; break;
         default:
             scriptToLoad = 'content.js';
             contentFunction = Content;
     }

    console.log("Загрузка из истории/хэша:", scriptToLoad);
    loadContent(contentFunction(), scriptToLoad); 
};