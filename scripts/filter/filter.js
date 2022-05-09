const filter = function(idElem) {
    const parentElem = document.querySelector(`#${idElem}`);
    if(!parentElem) return;
    
    let tabsParentElem = parentElem.children[0]; // нашли ul
    let contentParentElem = parentElem.children[1]; // нашли ul

    if(!tabsParentElem || !contentParentElem) return;

    let tabsElems = tabsParentElem.children; // нашли li в ul 
    let contentElems = contentParentElem.children; // нашли li в ul 

    if(!tabsElems || 
       !contentElems || 
       //tabsElems.length != contentElems.length || 
       tabsElems.length <= 1) return;

    tabsElems = Array.from(tabsElems); //перевод из псевдомассива в массив
    contentElems = Array.from(contentElems); //перевод из псевдомассива в массив

    const reset = function() {
        tabsElems.forEach(elem => {
            elem.classList.remove('active');
        });
        contentElems.forEach(elem => {
            elem.classList.remove('active');
        });
    }

    const active = function(event) {
        const filter = event.target.dataset.filter; // при клике на элемент мы забираем id этого элемента 
        
        if(!filter || filter.length == 0) return;

        reset(); // удаляем active


        if(filter === 'all') {
            contentElems.forEach(elem => {
                elem.classList.add('active');
                
            });
            event.target.classList.add('active');
        } else{

        const contentElem = contentParentElem.querySelectorAll(`[data-filter=${filter}]`); // поиск по атрибуту

        if(!contentElem) return;
        
        contentElem.forEach(ind => {
            ind.classList.add('active');
        });

        event.target.classList.add('active'); // при клике присваеваем элементу класс active (вместо event.target можно записывать this)
      }
    }

    tabsElems.forEach(elem => {  // перебор псевдо массива
        elem.addEventListener('click', active) // active функция, которую будем создавать, что бы активировать каждый таб
    });

};

