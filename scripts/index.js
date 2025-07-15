// 내비게이션 링크
const navLinks = document.querySelectorAll('nav div.left a');

// 현재 클릭한 링크를 추적할 변수
let clickedIndex = -1;

// 내비게이션 링크 클릭 시 해당 슬라이드로 이동
navLinks.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 기본 링크 기능 제거
        wrap.slideTo(idx, 1000); // 해당 인덱스로 슬라이드 전환
        clickedIndex = idx; // 클릭한 링크의 인덱스를 저장
        updateUnderline(idx); // 클릭한 링크에 밑줄 추가
    });
});

// swiper의 activeIndex에 맞는 링크에 밑줄 추가
function updateUnderline(activeIndex) {
    // 클릭한 인덱스와 활성화된 슬라이드의 인덱스가 다르다면
    if (clickedIndex !== activeIndex) {
        clickedIndex = activeIndex; // 활성화된 슬라이드의 인덱스로 클릭된 인덱스 갱신
    }
    
    // 모든 링크에서 scroll-active 클래스를 제거
    navLinks.forEach(link => link.classList.remove('scroll-active'));

    // 현재 활성화된 슬라이드에 해당하는 링크에만 scroll-active 클래스를 추가
    if (navLinks[activeIndex]) {
        navLinks[activeIndex].classList.add('scroll-active');
    }
}

// 페이지 로드 시 초기화: 초기 슬라이드에 맞는 링크에 밑줄 추가
document.addEventListener('DOMContentLoaded', function() {
    updateUnderline(wrap.activeIndex);
});