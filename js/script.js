'use strict';

const onClick = () => {
    const btn = document.querySelector('.subscription__button');

    btn.addEventListener('click', () => {
        alert('Hey, you clicked the button!');
    });
};

onClick();