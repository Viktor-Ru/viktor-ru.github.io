// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const buttonList = document.querySelector('.price__tab-list');
const buttons = document.querySelectorAll('.price__tab-btn');



function test(evt) {
    const element = evt.target.closest('.price__tab-btn');

    if(element) {
        console.log(evt.target.getAttribute('data-id'));

        buttons.forEach((item) => {
            item.classList.remove('price__tab-btn--active');
        })

        evt.target.classList.add('price__tab-btn--active');
    }
}



buttonList.addEventListener('click', test);







// console.log(buttons);