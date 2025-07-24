// 전체 수직 스크롤 설정
const wrap = new Swiper('#wrap', {
    direction: 'vertical',  // 수직 슬라이드
    mousewheel: true,       // 마우스 휠로 슬라이드 전환
    on: {
        slideChange: function() {
            updateUnderline(this.activeIndex); // 슬라이드가 바뀔 때마다 밑줄 업데이트
            ScrollTrigger.refresh();  // 스크롤 트리거 갱신
        }
    }
});


// 내비 클릭 시 해당 위치 수직 스와이프 이동
const nav = document.querySelectorAll('nav div a');

// 수직 스와이프 이동 함수
nav.forEach((obj, idx) => {
    obj.addEventListener('click', (e) => {
        e.preventDefault(); // a href 기본 기능 제거
        wrap.slideTo(idx, 1000); // 해당 슬라이드로 이동
        clickedIndex = idx; // 클릭한 인덱스 저장
        updateUnderline(idx); // 클릭한 링크에 밑줄 추가
    });
});


//웹
const webProjects = new Swiper ('#web_projects',{
    loop:true,
    spaceBetween:0,
    centeredSlides: true,
    /* autoplay: {
        delay: 0,
        disableOnInteraction: false, // 사용자가 상호작용 후에도 autoplay 유지
    }, */
    //speed:3500,
    navigation:{
        nextEl:'#web_projects .swiper-button-next',
        prevEl:'#web_projects .swiper-button-prev',
    },
    scrollbar:{
        el:'#web_projects .swiper-scrollbar'
    },
})

// 디자인
const detailBnr = new Swiper ('#detail_bnr',{
    loop:true,
    spaceBetween:0,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false, // 사용자가 상호작용 후에도 autoplay 유지
    },
    //speed:3500,
    navigation:{
        nextEl:'#detail_bnr .swiper-button-next',
        prevEl:'#detail_bnr .swiper-button-prev',
    },
})

const snsBnr = new Swiper ('#sns_bnr',{
    loop:true,
    spaceBetween:10,
    slidesPerView : 4,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false, // 사용자가 상호작용 후에도 autoplay 유지
    },
    //speed:3500,
    navigation:{
        nextEl:'#sns_bnr .swiper-button-next',
        prevEl:'#sns_bnr .swiper-button-prev',
    },
})


const horizBnr = new Swiper ('#horiz_bnr',{
    loop:true,
    spaceBetween:10,
    slidesPerView : 3,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false, // 사용자가 상호작용 후에도 autoplay 유지
    },
    //speed:3500,
    navigation:{
        nextEl:'#horiz_bnr .swiper-button-next',
        prevEl:'#horiz_bnr .swiper-button-prev',
    },
})