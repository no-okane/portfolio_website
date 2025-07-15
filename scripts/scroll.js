// 전체 수직 스크롤
const wrap = new Swiper('#wrap', {
    direction: 'vertical',   // 수직 슬라이드
    mousewheel: true,        // 마우스 휠로 슬라이드 전환
    on: {
        slideChange: function() {
            updateUnderline(this.activeIndex); // 슬라이드가 바뀔 때마다 밑줄 업데이트
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