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


// 각 섹션에 애니메이션을 적용
function updateAnimation(activeIndex) {
    const sections = document.querySelectorAll('.swiper-slide');
    sections.forEach((section, index) => {
        if (index === activeIndex) {
            // 활성화된 슬라이드에 애니메이션을 추가
            section.classList.add('swiper-slide-active');
        } else {
            // 비활성화된 슬라이드는 애니메이션을 제거
            section.classList.remove('swiper-slide-active');
        }
    });
}










// 디자인 클릭 시 팝업 실행 클릭한 이미지가 팝업 이미지로 교체
const thubimage1 = document.querySelectorAll('#detail_bnr .swiper-slide');
const thubimage2 = document.querySelectorAll('#sns_bnr .swiper-slide');
const thubimage3 = document.querySelectorAll('#horiz_bnr .swiper-slide');
const popupBg = document.querySelector('.popup_bg');
console.log(thubimage1, thubimage2, thubimage3, popupBg);

// 팝업 숨기기 popupbg
popupBg.style.display='none';

// 클릭해서 팝업
for (let detail of thubimage1){
    detail.addEventListener('click',() => {
        //console.log("클릭확인")
        popupBg.style.display='flex';
        popupBg.children[0].children[0].src = detail.children[0].src;
        //팝업 실행 시 전체 수직 swiper 스크롤 기능 막기
        wrap.mousewheel.disable(); // 스크롤 풀기 enable
    })
}
for (let sns of thubimage2){
    sns.addEventListener('click',() => {
        //console.log("클릭확인")
        popupBg.style.display='flex';
        popupBg.children[0].children[0].src = sns.children[0].src;
        //팝업 실행 시 전체 수직 swiper 스크롤 기능 막기
        wrap.mousewheel.disable(); // 스크롤 풀기 enable
    })
}
for (let horiz of thubimage3){
    horiz.addEventListener('click',() => {
        //console.log("클릭확인")
        popupBg.style.display='flex';
        popupBg.children[0].children[0].src = horiz.children[0].src;
        //팝업 실행 시 전체 수직 swiper 스크롤 기능 막기
        wrap.mousewheel.disable(); // 스크롤 풀기 enable
    })
}

// 배경popupbg 클릭 시 팝업 popupbg 숨기기
popupBg.addEventListener('click', () => {
    popupBg.style.display='none';
    wrap.mousewheel.enable();
})