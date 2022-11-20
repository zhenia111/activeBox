//const div=document.querySelector('div');
//const headerImg=document.querySelectorAll('h1')
//const h1 = document.getElementsByTagName('h1')

//console.dir(h1)
//console.dir(headerImg)
//console.dir(div);
//console.log(Array.from(headerImg));
//console.log(Array.prototype.slice.call(headerImg))
//console.log([...headerImg])

//window
//const windowWidth=window.innerWidth
//console.log(`ширина окна браузера: ${windowWidth} px`)

//Браузер
//console.log(navigator.userAgent);

//if (navigator.userAgent.includes("Chrome")) {
//    console.log('Браузер Хром');
//} else if(navigator.userAgent.includes("Firefox")) {
//    console.log('Браузер Firefox');
//}else{
 //   console.log('error');
//}


//Платформа
//console.log(navigator.platform);

//С помощью обьекта location получаем текущий URL или перенаправить браузер по новому адресу*/

//получаем URL
//console.log(location.href);

//меняем URL
//Location.href=""https://trucktire.com

//History
//history.back();
//history.forward();

//Alert
//alert('Привет!')

//Confirm
//const confirmResult=confirm('хочешь научиться верстать?');
//console.log(confirmResult);

//Prompt
//const promptResult=prompt('Кто ты такой?');
//console.log(promptResult);




//навигация по документу



//Самые верхние доступны как свойста обьекта document
//const htmlElement=document.documentElement;
//const headElement=document.head;


//Получаем объект body
//const bodyElement=document.body;
//console.log(htmlElement);
//console.log(headElement);
//console.log(bodyElement);


//const firstChildNode=bodyElement.firstChild;
//const lastChildNode=bodyElement.lastChild;
//console.log(firstChildNode);
//console.log(lastChildNode);



//коллекция childNodes содержит список всех детей включая все текстовые узлы переносы и т.д.

//const bodyElement=document.body;

//const childNodes=bodyElement.childNodes;
//console.log(childNodes);

//для проверки дочерних элементов
//console.log(bodyElement.hasChildNodes());



//const bodyElement=document.body;
//const childNodes=bodyElement.childNodes;

//перебор коллекции
//for (let node of childNodes){
//   console.log(node);}



//Получаем объект body
//const bodyElement=document.body;

//Соседние и родительские узлы
//const previousSiblingNode=bodyElement.previousSibling;
//const nextSiblingNode=bodyElement.nextSibling;
//const parentNode=bodyElement.parentNode;
//console.log(previousSiblingNode);
//console.log(nextSiblingNode);
//console.log(parentNode);



//Получаем объект body
//const bodyElement=document.body;
//const bodyChildren=bodyElement.children;
//console.log(bodyChildren);

//for(let node of bodyChildren){
//    console.log(node);
//}


//навигация только по элементам!!!!



//Получаем объект body
//const bodyElement=document.body;

//первый и последний дочерние элементы
//const firstChild=bodyElement.firstElementChild;
//const lastChild=bodyElement.lastElementChild;
//console.log(firstChild);
//console.log(lastChild);

//соседние и родительские элементы
//const previousSibling=bodyElement.previousElementSibling;
//const nextSibling=bodyElement.nextElementSibling;
//const parentElement=bodyElement.parentElement;
//console.log(previousSibling);
//console.log(nextSibling);
//console.log(parentElement);



//поиск произвольного элемента
//elem.querySelectorAll(CSS);


//поиск по селектору класса
//const elemsOne=document.querySelectorAll('.features__icon');
//console.log(elemsOne[2]);
//const elemsTwo=document.querySelectorAll('.features__item');
//console.log(elemsTwo);

//поиск селектора по тегу
//const elemsThree=document.querySelectorAll('img');
//console.log(elemsThree);

//поиск по смешанному селектору тега и класса
//const elemsFour=document.querySelectorAll('h4.features__title');
//console.log(elemsFour);

//поиск по тегу первого уровня вложенности
//const elemsFive=document.querySelectorAll('.features__item>img');
//console.log(elemsFive);

//Поиск по нескольким классам
//const elemsSix=document.querySelectorAll('.features__item,.team__item')
//console.log(elemsSix);

//поиск по вложенным классам
//const elemsSeven=document.querySelectorAll('.team__inner.team__name')
//console.log(elemsSeven);

//поиск по ID
//const elemsNine=document.querySelectorAll('#list__item')

//поиск по атрибуту
//const elemsTen=document.querySelectorAll('[data-item]')
//console.log(elemsTen);


//получение конкретного элемента коллекции
//const //elems=document.querySelectorAll('.team__item');
//console.log(elems[2]);

//for (const item of elems){
 //   console.log(item)
//    }

//elems.forEach(item)=>{
 //   console.log(item)
//}


//Искать можно не только в document

//const myTeamItems=document.querySelectorAll('.team__item');
//console.log(myTeamItems);

//const myFirstSocial=myTeamItems[0].querySelectorAll('.social');
//console.log(myFirstSocial);



//elem.querySelector(CSS)


//возвращает первый элемент внутри elem соответствующий данному СSS-селектору

//const myfirstTeamItem=document.querySelector('.team__item');
//console.log(myfirstTeamItem);




//поиск произвольного элемента


//const elem=document.getElementById('listItem');


//const elems =document.getElementsByTagName('h1');
//console.log(elems);


//const elems2=document.getElementsByClassName('header');
//console.log(elems2);

//const elem3=document.getElementsByName('list'); в данном случае имя нет
//console.log(elem3);




//разница статичной и живой коллекции

//const listStatic=document.querySelectorAll('.features__item');
//const listLive=document.getElementsByClassName('features__item');

//console.log(listStatic);
//console.log(listLive);

//создаем новый HTML-объект
//const featuresItem=document.querySelector('.features');
//featuresItem.insertAdjacentHTML(
//"beforeend",
//    '<div class="features__item">новый item<div>'
//);



//Метод closest elem.closest(css)

//const elem=document.querySelector('.intro__subtitle');
//const parentList=elem.closest('.intro');
//console.log(parentList);




//проверка matches

//const elems=document.querySelectorAll('.btn');
//for (let elem of elems){
//    if (elem.matches('[class$="btn btn--red "]')){
//        console.log('red');

//}?????????????????????????????????


//получив объект мы можем применить всойства навигации

//const works=document.querySelector('.works');
//const list=works.nextElementSibling;
//console.log(list);




//изменение документа DOM



//const mainHeading=document.querySelector('.intro__title');

//получает содержимое обьекта как есть вместе с HTML
//const headlineContent=mainHeading.innerHTML;
//console.log(headlineContent);





//перезаписываем содержание объекта

//mainHeading.innerHTML="я понял как менять объекты!";





//Дописывает содержимое объекта

//mainHeading.innerHTML=
//`<p>${headlineContent}</p> <p>Я понял как изменять объеты!</p>`;
//console.log(mainHeading.innerHTML);




//пробую сам !!!!

//const myIntro=document.querySelector(".intro__inner");
//console.log(myIntro);

//const myBotton=myIntro.lastElementChild;
//console.log(myBotton);

//const myBottonContent=myBotton.innerHTML;

//myBotton.innerHTML=`${myBottonContent} <p>я поменял кнопку<p/>`;





//Меняем содержимое элемента целиком с помощью outerHTML

//const mainHeading=document.querySelector('.intro__title');
//получаем содержимое элемента а также сам элемент
//const mainHeadingContent=mainHeading.outerHTML;
//console.log(mainHeadingContent);
//mainHeading.outerHTML=`<p>я пытаюсь изменить документ</p>`;
//console.log(mainHeading.outerHTML);





//просто текст элемента textContent

//const mainHeading=document.querySelector('.intro__title');
//const mainHeadingContent=mainHeading.textContent;
//console.log(mainHeadingContent);

//пытаемся изменить
//mainHeading.textContent= `<p> Пытаюсь изменить заголовок</p>`;
//console.log(mainHeading.textContent);



//data.
//содержание тектового узла/коментария

//const features=document.querySelector('.features');
//const getComment=features.nextSibling;
//console.log(getComment);
//console.log(getComment.data);

//изменение текстового узла
//getComment.data='Привет я изменил комментарий!'
//console.log(getComment.data);





//создание элементов и узлов




//Создание элемента(Тега)


//const newElement=document.createElement('div');
//console.log(newElement);

//наполняем новый элемент контентом
//newElement.innerHTML=`<p>я создал новый элемент</p> <p>it is owesome<p/>`;
//console.log(newElement);

//создание тектового элемента
//const newText=document.createTextNode('Hello!');
//console.log(newText);





//Методы вставки объекта в документ

//Получаем объект с которым работаем
//const features=document.querySelector('.features');

//const newElement=document.createElement('div');
//newElement.innerHTML=`<p>i created new element</p> <p>it is owesome<p/>`;

//Вставляем элемент

//перед объекта
//features.before(newElement);
//после объекта
//features.after(newElement);
//внутрь и в начало объекта
//features.prepend(newElement);
//внутрь и в конец объекта
//features.append(newElement);




//Втавка сразу нескольких фрагментов

//features.append(newElement,newText);
//console.log(features);

//вставка обычного текста с HTML тегами

//features.after('<p>Я вставляю новый</p> <p>текст с HTML тегами</p>');





//метод вставки insertAdjacentHTML/text/Element

//const features=document.querySelector('.features');

//вставляем текст,HTML,элемент
//features.insertAdjacentHTML(
//'afterend',
//`<p>Вставляю текст</p> <p>другим способом</p>`
//);

//'beforebegin'-вставить непосредственно перед features
//'afterbegin'-вставить в начало features
//'beforeend'-вставить в конец features
//'afterend'-втавить непосредственно после features




//метод вставки insertAdjacentText и insertAdjacentElement

//features.insertAdjacentText(
//    'beforeend',
//    `Привет страна-я текст`
//);

//features.insertAdjacentElement(
//'beforebegin',
//    newElement
//);





//перенос элемента

//const team=document.querySelector('.team');
//const works=document.querySelector('.works');

//team.before(works);





//клонирование узлов документа cloneNode

//const reviews=document.querySelector('.reviews');

//клонирование без дочерних элементов
//const cloneReviews=reviews.cloneNode();

//глубокое клонирование с содержимым
//const cloneReviews=reviews.cloneNode(true);

//const works=document.querySelector('.works');
//works.after(cloneReviews);




//удаление объектов
//const works=document.querySelector('.works');
//works.remove();







//DOM Стили и классы
//управление классами
//Свойство className и classList


//className
//const featuresTitle=document.querySelector('.features__title');

//получаем имена классов
//const featuresTitleClassName=featuresTitle.className;
//console.log(featuresTitleClassName);

//перезаписываем все классы
//featuresTitle.className="newfeatures";




//свойство classList
//const featuresTitle=document.querySelector('.features__title');

//добавить класс
//featuresTitle.classList.add('active');
//featuresTitle.classList.add('awesome');
//удалить класс
//featuresTitle.classList.remove('awesome');
//добавить класс если его нет, а если есть удалить
//featuresTitle.classList.toggle('awesome');
//проверка наличия класса,возвращает true или false
//console.log(featuresTitle.classList.contains('features__title'));

//проверка наличия класса
//if(featuresTitle.classList.contains('features__title')){
//    console.log('у меня есть класс features__title ')
//};

//classList является перебираемым,поэтому можно перечислить все классы при помощи for...of

//for(let className of featuresTitle.classList){
//    console.log(className);
//};





//управление стилями
//element.style

//const teamProf=document.querySelector('.team__prof');
//console.log(teamProf);
//задаем стиль с помощью css свойства
//teamProf.style.color="blue";
//для свойства из нескольких слов используется camelCase
//teamProf.style.marginBottom="50px";
//teamProf.style.fontWeight='3';

//какждое свойство пишеться отдельно
//Получение значений свойства только если оно написано в атрибуте style!!!
//console.log(teamProf.style.color);
//console.log(teamProf.style.fontWeight);

//сброс стиля
//teamProf.style.color="";



//полная запись стилей
//style.cssText

//const teamProf=document.querySelector('.team__prof');

//teamProf.style.cssText=`
//    color:green;
//    margin-Bottom:80px;

//`;


//вычисляем стили getComputedSlyle(element,[pseudo])

//const teamProf=document.querySelector('.team__prof');

//получает значение свойства только если оно записано в атрибуте style
//console.log(teamProf.style.fontSize);

//стиль элемента
//const teamProfStyles=getComputedStyle(teamProf);
//console.log(teamProfStyles.fontSize);
//будет показано ЛЮБОЕ свойсто к этому объекту


//стили псевдоэлемента


//const navLink=document.querySelector('.nav__link');
//console.log(navLink);

//const navLinkPseudoStyle=getComputedStyle(navLink,"::hover");
//console.log(navLinkPseudoStyle.opacity);
//console.log(navLinkPseudoStyle.textDecoration);

//eetComputedStyle-ипользуется только для чтения
//teamProfStyles.fontSize='50px';


//лайвхаки

//const teamProf=document.querySelector('.team__prof');
//стиль элемента
//помним про единицы измерения
//teamProf.style.fontSize="30px";
//teamProf.style.color='blue';
//const teamProfStyles=getComputedStyle(teamProf);
//получаем число
//const fontSize=parseInt(teamProfStyles.fontSize);
//console.log(fontSize);


//const introLink=document.querySelector('a.btn');
//console.log(introLink);
//console.log(introLink.href);
//получить список доступных свойств
//console.dir(introLink);



//Произвольные атрибуты

//const teamText=document.querySelector('div.team__text');
//console.log(teamText);

//устанавливаем  зналичие атрибута
//teamText.setAttribute('some-attribute','some-value');
//проверяем наличие атрибута
//if(teamText.hasAttribute('some-attribute')){
//    console.log('some-attribute существует');
//}
//получаем значение атрибута
//console.log(teamText.getAttribute('some-attribute'));
//удаляем атрибут
//teamText.removeAttribute('some-attribute');


//синхронизация между атрибутами и своиствами
//const teamText=document.querySelector('div.team__text');

//teamText.setAttribute('id','123');
//console.log(teamText.id);

//teamText.id='567';
//console.log(teamText.getAttribute('id'));


//teamText.setAttribute('value','hello!');
//console.log(teamText.value);

//teamText.value='how are you?';
//console.log(teamText.getAttribute('value'));
//в данном случае НИЧЕГО НЕ ИЗМЕНИТЬСЯ ????????????????



//нестандартые атрибуты, dataset

//использовать произвольные атрибуты -рискованно

//const teamText=document.querySelector('div.team__text');
//teamText.setAttribute('data-size','1058');
//console.log(teamText.getAttribute('data-size'));

//получаем data-атрибуты
//console.log(teamText.dataset.size);
//перезаписать значение атрибутов
//teamText.dataset.size='5080';
//console.log(teamText.dataset.size);



//полезные свойства
//const teamText=document.querySelector('div.team__text');
//получаем тег элемента
//console.log(teamText.tagName);

//скрыть или показать элемент
//teamText.hidden=true;
//console.log(teamText.hidden);
//console.log(teamText.innerHTML);
//console.log(teamText.textContent);


//задание1
//получить в перемнную элемент с атрибутом data-say-hi
//const sayHi=document.querySelector('[data-say-hi]');
//console.log(sayHi);
//console.log(sayHi.innerHTML);
//console.log(sayHi.textContent);

//задание 2
//получить в переменную последний элемент списка
//const ul=document.querySelector('ul');
//const ionchi=ul.lastElementChild;
//console.log(ionchi.innerHTML);

//задание 3
//получить в переменную коллекцию элементов с классом like
//const collectionLike=document.querySelectorAll('.like');
//console.log(collectionLike);
//for(elemLike of collectionLike){
//    console.log(elemLike);
//}

//задание 4
//куда добавиться <li>текст</li>? внуть элемента ul в конец

//JS
//const list=document.querySelector('ul');
//console.log(list);
//list.insertAdjacentHTML(
//'beforeend',
//'<li>Текст<li/>'
//);


//сравниваетм nodeList и HTML-collection

//const myTeamItemCollection=document.getElementsByClassName('team__item');
//const myTeamItemNodeList=document.querySelectorAll('.team__item');
//console.log('first console log',myTeamItemCollection,myTeamItemNodeList);

//const myTeamInner=document.querySelector('.team__inner');
//console.log(myTeamInner);
//myTeamInner.insertAdjacentHTML(
//'afterbegin',
//`<div class="team__item"><div>`
//);

//myTeamInner.innerHTML+=`<div class="team__item"><div>`;

//console.log('second console.log',myTeamItemCollection,myTeamItemNodeList);












//DOM продолжение
//clientWidth b clientHeght

//Доступная ширина и высота окна
/*
const mainElement=document.documentElement;
const mainElementWidth=mainElement.clientWidth;
const mainElementHeght=mainElement.clientHeight;

console.log(mainElementWidth,mainElementHeght);

const header=document.body.firstElementChild;
console.log(header);
const headerHeght=header.clientHeight;
console.log(headerHeght);
*/

//ширина и высота браузера вместе с полосами проктрутки!
/*
const windowWidth=window.innerWidth;
const windowHeight=window.innerHeight;
console.log(windowWidth,windowHeight);
*/

//ширина и высота документа включая прокруточную часть
/*
let scrollWidth=Math.max(
document.body.scrollWidth, document.documentElement.scrollWidth,
//document.body.offsetWidth, document.documentELement.offsetWidth,
document.body.clientWidth, document.documentElement.clientWidth
);

let scrollHeight=Math.max(
document.body.scrollHeight, document.documentElement.scrollHeight,
//document.body.offsetHeight, document.documentELement.offsetHeight,
document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollWidth,scrollHeight);
*/

//получить кол-во прокрученных пикселей
//только для чтения
/*
const windowScrollTop=window.pageYOffset;
const windowScrollLeft=window.pageXOffset;

console.log(windowScrollTop,windowScrollLeft);
*/

//управление прокруткой страницы

//Метод scrollBy(x,y) прокручивает страницу относительно ее текущего положения

function setScrollBy(){
    window.scrollBy(0,50);
    const windowScrollTop=window.pageYOffset;
    console.log(windowScrollTop);
}


//setScrollBy(0,50);

// ???????????????????????????????


//метод scrollTo(pageX,pageY) прокручивает страницу на абсолютные координаты(pageX,pageY) тоже самое что и window.scroll()
/*
function setScrollTo(){
    window.scrollTo(0,100);
    const windowScrollTop=window.pageYOffset;
    console.log(windowScrollTop);
}
*/








//введение в JS события


//Отлавливать возникновение события мы будум с помощью спциальных обработчиков

//Лю.бому событию можно назначить обработчика,т е функцию, которая сработаем как только произойдет нужное событие.Благодаря этим обработчикам js может реагировать на действия пользователя


//использование DOM-объекта
// onclick это обработчик события

//const button=document.querySelector('button.btn');
//console.log(button);
/*
button.onclick=function(){
console.log('клик!');
}
*/
/*
function showConsole(){
console.log('клик!');
}
button.onclick=showConsole;
//важно! без круглых скобок
*/

//фундаментальный недостаток способа выше назначения обработчика-невозможность повесить несколько обработчиков на одно событие
//каждое новое назначение перезапишет предыдущее

//const button=document.querySelector('button.btn');
/*
button.onclick=function(){
console.log('клик!');
}

button.onclick=function(){
console.log('клак!');
}
*/

//основной способ назначения обработчика при помощи специальных методов addEventListener and removeEventListener
//element.addEventListener(event,handler[,options]);
/*
const button=document.querySelector('button.btn');

button.addEventListener("click",function(e){
    console.log('клик!');
});
button.addEventListener("click",function(e){
    console.log('клак!');
});

button.addEventListener("mouseenter",function(e){
    console.log('в зоне кнопки');
});
*/
//или
/*
const button=document.querySelector('button.btn');
function showConsole(){
    console.log('клик!');
}
button.addEventListener("click",showConsole);
*/

//button.removeEventListener("click",showConsole);
//используется если не нужно больше отлавливать событие потомучто addEventLisener может подгружать страницу браузера
/*
const button=document.querySelector('button.btn');
function showConsole(){
    console.log('клик!');
   button.removeEventListener("click",showConsole);
}
button.addEventListener("click",showConsole);
*/


//обработчик событий addEventListener and removeEventListener

//опции

/*
const options={
    "capture":false,//фаза,на которой должен срабатывать обработчик
    "once":false,//если true,тогда обработчик будет удален автоматически после выполнения
    "passive":false//если true,то указывает,что обработчик никогда не вызовет preventDefault()
}

const button=document.querySelector('button.btn');

function showConsole(){
    console.log('клик!');
}
button.addEventListener("click",showConsole,options);
//или button.addEventListener("click",showConsole,{"capture":false,"once":false,"passive":false});
*/

//метод addEventListener сложнее onclick но из-за того что он обладает преимуществом 'прослушки' нескольких событий,и существуют события которые можно отладить только с помощью него.ЭТОТ ОТРАБОТЧИК ИСПОЛЬЗУЮТ ЧАЩЕ ВСЕГО


//объект событие

//чтобы хорошо обработать событие нужны детали того,что произошло.Не просто клик или нажатие клавиши, но и -какие координаты указателя мыши, какие клавиша нажата и т.д
//когда происходит событие браузер создает объект событие и записывает в него детали и передает его в качетве аргумента функции-обработчику
/*
const button=document.querySelector('button.btn');

function showConsole(event){
    //тип события
    //console.log(event.type);
    //объект на котором сработал обработчик
    //console.log(event.target);
    //объект к которому назначен обработчик
    //console.log(event.currentTarget);
    //положение курсора по оси X
    //console.log(event.clientX);
    //положение курсова по оси Y
    //console.log(event.clientY);

    //все детали события
    //console.log(event);
}
button.addEventListener("click",showConsole);
button.addEventListener("mouseenter",showConsole);
*/


//всплытие и погружение


//const block=document.querySelector('.block');
//const blockInner=document.querySelector('.block__inner');
//const blockInnerInner=document.querySelector('.block__inner-inner');
//console.log(block,blockInner,blockInnerInner);

//всплытие -когда на элемент происходит событие,отбаботчики сначала срабатывают на нем, потом на его родителей,затем выше и так далее,вверх по цепочке предков
/*
block.addEventListener("click",function(event){
    console.log('клик на блок');
    //console.log(event.target);
});

blockInner.addEventListener("click",function(event){
    console.log('клик на блок второго уровня');
    //event.stopPropagation();
});
blockInnerInner.addEventListener("click",function(event){
    console.log('клик на блок третьего уровня');
    //остановка всплытия
    //event.stopPropagation();
});
*/


//погружение


//чтобы что-то всплыло оно должно сначало погрузиться
//в современной разработке стадия погружения используется крайне редко.Обычно события обрабатываются во время всплытия
/*
block.addEventListener("click",function(event){
    console.log('клик на блок');
    //console.log(event.target);
});

blockInner.addEventListener("click",function(event){
    console.log('клик на блок второго уровня');
    //event.stopPropagation();
},{"capture":true});
blockInnerInner.addEventListener("click",function(event){
    console.log('клик на блок третьего уровня');
    //остановка всплытия
    //event.stopPropagation();
});
*/




//делегирование событий


//всплытие и перехват событий позволяет реализовать один из самых важных приемов разработки-ДЕЛЕГИРОВАНИЕ
/*
const buttons=document.querySelectorAll('.button');
console.log(buttons);
function showConsole(){
    console.log('УРА');
}
buttons.forEach(buttonItem=>{
    buttonItem.addEventListener("click",showConsole);
});
*/

//делегирование событий
/*
const parentButtons=document.querySelector('.allButtons');
//console.log(parentButtons);

function showConsole(){
    console.log('Ура я понял');
}

parentButtons.addEventListener("click",function(event){
if(event.target.closest('.button')){
    showConsole();
    //console.log(event.target.closest('.button'));
}
 })
*/

//главное в этот что здесь один обработчик а не 4000 шт!!!!




//действия браузера по умолчанию



/*Многие события влекут за собой действия браузера по умолчанию
Пример:
-клик по ссылке инициирует переход на новый url
-нажатие на кнопку отправить в форме-отсылку ее на сервер
-зажатие кнопки мыши над тектом и ее движение
в таком состоянии -инициирует его выделение и т.д.

Если мы обрабатываем событие в JS, то зачастую такое действие браузера нам не нужно,и это можно отменить
*/

//const link=document.querySelector('.link');
/*
link.addEventListener("click",function(event){
    console.log('наши действия');
    //отменить стандартные дейстия браузера(переход по ссылке)
    event.preventDefault();
});
*/
//или
/*
link.onclick=function (){
    console.log('наши действия');
    //отменить действия браузера (переход по ссылке)
    return false
}
*/

//необязательная опция passive для addEventListener сигнализирует браузеру что обработчик не собираетя выполнять preventDefault() это полезно для мобитьных устройств при тач скине(когда пользователь перемещает пальцем по экрану) так может подтормажи
/*
link.addEventListener("click",function(event){
    console.log('наши действия');
    //отменить стандартные дейстия браузера(переход по ссылке)
    event.preventDefault();
},{"passive":true});
*/


//основы событий мыши

//Типы событий мыши
/*Можем разделить события мыши на два типа:простые и комплексные*/

//Простые события(самые часто использованные события)

/*mousedown/mouseup-кнопка мыши нажата/отпущена над элементом
  mouseover/mouseout-курсов мыши появляется над элементом и  уходит с него
  mousemove-каждое движение мыши над элементом генерирует это событие
  contextmenu-вызывается при попытке открытия контекстного меню,как правило, нажатием правой кнопки мыши, но,заметим, что это не совсем событие мыши,оно может вызываться и специально клавишей клавиатуры!!
*/

//комплексные события
/*
click-вызывается при mousedown,а затем mouseup над одним и тем же элементом, если использовалась основная кнопка мыши
dblclick-вызывается двойным кликом на элемент
Комплексные события состоят из простых,поэтому в теории теории мы бы могли без них обойтись
Но работать с ними удобнее
*/
/*
const button=document.querySelector('.button');
console.log(button);

button.addEventListener("mousedown",function(event){
    console.log(`нажата кнопка ${event.which}`);
});

button.addEventListener("click",function(event){
    console.log('нажата основная кнопка мыши');
});

button.addEventListener("contextmenu",function(event){
    console.log('вызвана контекстное меню(не основная кнопка мыши)');
});
*/
/*
event.which=1-нажата основная кнопка мыши(обычно левая)
event.which=2-нажата средняя кнопка мыши (колесо)
event.which=3-нажата не основная кнопка мыши(обычно правая)
*/


//соординаты :clientX/Y, pageX/Y

//const blockForMouse=document.querySelector('.blockForMouse');
//console.log(blockForMouse);

/*
blockForMouse.addEventListener("mousemove",function(event){
    blockForMouse.innerHTML=`clientX-${event.clientX} <br> clientY-${event.clientY}`;
});
*/



//наведение мыши: mouseover/out, mouseenter/leave



//события mouseover/mouseout,   relatedTarger
/*событие mouseover происходит в момент,когда курсор оказывается над элементом,а событие mouseout-в момент, когда курсор уходит с элемента
*/
/*
blockForMouse.addEventListener("mouseover",function(event){
    blockForMouse.innerHTML='курсор над элементом';
});

blockForMouse.addEventListener("mouseout",function(event){
    blockForMouse.innerHTML='курсор уходит с элемента';
});
*/
/*эти события являются особенными ,потому что у них имеется свойство relatedTarget.Оно дополняет target.Когда мышь переходит с одного элемента на другой, то один из них будет target ,а другой relatedTarget

для события mouseover :
event.target=это элемент,на который курсор перешел
event.relatedTarget-это элемент с которого курсор ушел(relatedTarget-target)

для события mouseout-наоборот:
event.target-это элемент с которого курсор ушел,
event.relatedTarget-это элемент, на который курсор перешел(target-relatedTarget)
*/
//const blockForMouse=document.querySelector('.blockForMouse');
/*
blockForMouse.addEventListener("mouseover",function(event){
    console.log(event.target);
    console.log(event.relatedTarget);
});

blockForMouse.addEventListener("mouseout",function(event){
    console.log(event.target);
    console.log(event.relatedTarget);
});
*/
//вводим в blockForMouse дочерний элемент span с текстом,и теперь при наведение на текст будет происходить всплытие-крурсор сначала уйдет с элемента а затем опять будет над ним
/*
blockForMouse.addEventListener("mouseover",function(event){
    console.log('Курсор над текстом');
});

blockForMouse.addEventListener("mouseout",function(event){
    console.log('курсор уходит с элемента');
});
*/

//События mouseenter и mouseleave
/*
Пара важных отличий:
1)Переходы внутри элемента, на эго потомки и с них , не считаются!!!!
2)События mouseenter и mouseleave не всплывают!!!!!
*/
/*
blockForMouse.addEventListener("mouseenter",function(event){
    console.log('Курсор над текстом');
});

blockForMouse.addEventListener("mouseleave",function(event){
    console.log('курсор уходит с элемента');
});
*/

//делегирование событий наведения мыши

/*
const blockForMouse=document.querySelector('.blockForMouse');

blockForMouse.addEventListener("mouseover",function(event){
    let target=event.target.closest('span');//???????
    //переход не на <span> -игрорировать
    if(!target) return;
    target.style.cssText=`background-color: #77608d;`;
});
blockForMouse.addEventListener("mouseout",function(event){
    let target=event.target.closest('span');
    //переход не на <span> -игрорировать
    if(!target) return;
    target.style.cssText=``;
});
*/


//клавиатура

/*основные события при работе с клавиатурой это:
 keydown-происходит при нажатии клавиши
 keyup-при отпускании клавиши
 */

//event.code и event.key
/*
document.addEventListener("keydown",function(event){
    console.log(`нажата клавиша ${event.code} (${event.key})`);
});

document.addEventListener("keyup",function(event){
    console.log(`отжата клавиша ${event.code} (${event.key})`);
});
*/
/*если пользователь работает с разными языками, то при переключении на другой язык символ 'g'измениться на ели на русский то"п"
Получившееся станет новым значением event.key,тогда как event.code останеться тем же "keyG"
*/

//если отследить нажатие клавиши удобнее использовать event.key
//ecли отледить комбинацию клавиш то -event.code
/*
document.addEventListener("keydown",function(event){
    if(event.code=='KeyZ'&&(event.ctrlKey||event.metaKey)){
        console.log('отмена действия!');
    }
});
*/

/*автоповтор
При долгом нажатии клавиши возникает автоповтор:keydown-срабатывает снова и снова,и когда клавишу отпускают,то отрабатывает keyup
Обычно много keydown и 1 keyup.
для событий,вызванных атоповтором у обьекта события свойство event.repeat равно true
*/
/*
document.addEventListener("keydown",function(event){
    console.log(`нажата клавиша ${event.code} (${event.key})`);
    console.log(event.repeat);
});
*/
/*
const txtItem=document.querySelector('.textarea__item');
const txtItemLimit=txtItem.getAttribute('maxlength');
const txtCounter=document.querySelector('.textarea__counter span');

txtCounter.innetHTML=txtItemLimit;
console.log(txtItem.value);

txtItem.addEventListener("keyup",txtSetCounter);

txtItem.addEventListener("keydown",function(event){
    if(event.repeat) txtSetCounter();
});

function txtSetCounter(){
    const txtCounterResult=txtItemLimit-txtItem.value.length;
    txtCounter.innerHTML=txtCounterResult;
}
console.log(txtItem.value);
*/


//прокрутка (скролл)

/*
window.addEventListener('scroll',function(event){
    //кол-во прокрученных пикселей по вертикали
    //scrollY or pageYOffset (устарел)
    //кол-во прокрученных пикселей по горизонтали
    //scrollX or pageYOffset (устарел)

    console.log(`${scrollY}px`);
});
*/
//предотвращение прокрутки

/*Нельзя предотвратить прокрутку, используя event.preventDefault(),в обработчике scroll, потому что он срабатывает после того, как прокрутка уже произошла

Но можно предотвратить прокрутку используя preventDefault()
на событии, которое вызывает прокрутку, например на событие keydown для клавиш pageUp and pageDown

способов инициировать прокрутку много, но более надежным будет истпользовать css свойство overflow: hidden;
*/

/*Использование

События прокрутки scroll позволяет реагировать на прокрутку страницы или элемента. что можно сделать?

-Показать/скрыть дополнителные элементы управления или информации основываясь на том в какой части документа находиться пользователь
Например анимация при скроле или ленивая подгрузка
-Подгрузить данные, когда пользователь прокручивает страницу вниз до конца.бесконечный скрол.

Изучить использование IntersectionObserver!!!!




//события загрузки страницы



/*1)DOMContentLoaded-браузер полностью загрузил HTML,
было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть еще не загруженны.
2)load-браузер загрузил HTML и внешние ресурсы(картинки,стили и т.д.)
3)beforeunload/unload-пользователь покидает страницу
*/

/*
document.readyState-состояние загрузки

Есть 3 возможные значения:
"loading"-документ загружается
"interactive"-документ был полностью прочитан
"complete"-документ был полностью прочитан и все ресуры(такие как изображения) были тоже загружены
*/

/*
//события DOMContentLoaded срабатывает на объекте document
document.addEventListener("DOMContentLoaded",readyDOM);

//события load срабатывает на объетке window
window.addEventListener("load",readyLoad);

function readyDOM(){
    const image=document.querySelector('.image1');
    console.log(document.readyState);
    console.log('DOM загружен');
    console.log(image.offsetWidth);
};


function readyLoad(){
    const image=document.querySelector('.image1');
    console.log(document.readyState);
    console.log('страница загружена!');
    console.log(image.offsetWidth);
};
*/
/*
//coбытие beforeunLoad срабатывает на объекте window
window.addEventListener("beforeunLoad",beforeUnLoad);

function beforeUnLoad(event){
    //отмените событие как указано в стандарте
    event.preventDefault();
    //chrome требует установки возвратного значения
    event.returnValue='';

}
*/
/*
//событие unLoad срабатывает на объекте window
window.addEventListener("unLoad",function(e){
    //отправка статистики в фоновом режиме и т.д.
    //navigator.sendBeacon(url,data);
    //https://w3c.github.io/beacon/.
})
*/




































































