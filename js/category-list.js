window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let category = document.querySelector('.category-list-item'),
        categoryList = document.querySelectorAll('.category-list-item ul'),
        spanList = document.querySelectorAll('.category-list-item span');

    category.addEventListener('click', function(event){
        for (let i = 0; 1 < categoryList.length; i++){
            if (categoryList[i].classList.contains('modal-open-category') && spanList[i].classList.contains('category-list-item__active')){
                categoryList[i].classList.remove('modal-open-category');
                spanList[i].classList.remove('category-list-item__active');
            } else  if (event.target == spanList[i]){         
                    categoryList[i].classList.toggle('modal-open-category');
                    spanList[i].classList.toggle('category-list-item__active');
                    }
        }
    });
});