document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const wrap = new Swiper('#wrap', {
        direction: 'vertical',
        mousewheel: true,
        on: {
            init: function () {
                const activeSlide = this.slides[this.activeIndex];
                applyGSAPAnimation(activeSlide);
            },
            slideChange: function () {
                const previousSlide = this.slides[this.previousIndex];
                const activeSlide = this.slides[this.activeIndex];

                removeGSAPAnimation(previousSlide);
                applyGSAPAnimation(activeSlide);
            }
        }
    });

// 슬라이드에 애니메이션을 추가하는 함수
function applyGSAPAnimation(slide) {
    const elements = [
        { selector: '.title', from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
        { selector: '.profile', from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
        { selector: '.education', from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
        { selector: '.experience', from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
        { selector: '.skills', from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
        { selector: '.web_projects .container .contents .left .top', from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
        { selector: '.web_projects .container .contents .left .mid', from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
        { selector: '.web_projects .container .contents .left .bottom', from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
        { selector: '.web_projects .container .contents > .right > div', from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
    ];

    elements.forEach(({ selector, from, to }) => {
        const element = slide.querySelector(selector);
        if (element) {
            gsap.fromTo(element, from, { ...to, duration: 0 });
        }
    });

    const skillBars = [
        { selector: '.photoshop', width: '80%' },
        { selector: '.oa', width: '75%' },
        { selector: '.notion', width: '65%' },
        { selector: '.html5', width: '60%' },
        { selector: '.javascript', width: '30%' },
        { selector: '.react', width: '30%' },
        { selector: '.illustrator', width: '75%' },
        { selector: '.figma', width: '75%' },
        { selector: '.github', width: '30%' },
        { selector: '.css3', width: '60%' },
        { selector: '.jquery', width: '30%' }
    ];

    skillBars.forEach(({ selector, width }) => {
        const element = slide.querySelector(`.skills ${selector}`);
        if (element) {
            gsap.fromTo(element, { width: "0%" }, { width, duration: 0 });
        }
    });

    const lastTitle = slide.querySelector('.last .container .contents h1');
    const lastText = slide.querySelector('.last .container .contents p');
    if (lastTitle) {
        gsap.fromTo(lastTitle, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0, });
    }
    if (lastText) {
        gsap.fromTo(lastText, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0, });
    }
}

// 슬라이드에서 애니메이션을 제거하는 함수
function removeGSAPAnimation(slide) {
    const elementsToRemove = [
        '.title', '.profile', '.education', '.experience', '.skills', '.web_projects .container .contents .left .top',
        //'.web_projects .container .contents .left .mid', '.web_projects .container .contents .left .bottom', '.web_projects .container .contents > .right > div',
    ];

    elementsToRemove.forEach(selector => {
        const element = slide.querySelector(selector);
        if (element) {
            gsap.killTweensOf(element);
            element.style.opacity = '';
            element.style.transform = '';
        }
    });

    const skillBarsToRemove = [
        '.photoshop', '.oa', '.notion', '.html5', '.javascript',
        '.react', '.illustrator', '.figma', '.github', '.css3', '.jquery'
    ];

    skillBarsToRemove.forEach(selector => {
        const element = slide.querySelector(`.skills ${selector}`);
        if (element) {
            gsap.killTweensOf(element);
            element.style.width = ''; // 애니메이션 초기화
        }
    });

    const lastTitle = slide.querySelector('#wrap .swiper-wrapper .last .container .contets h1');
    const lastText = slide.querySelector('#wrap .swiper-wrapper .last .container .contets p');
    if (lastTitle) {
        gsap.killTweensOf(lastTitle);
        lastTitle.style.opacity = '';
        lastTitle.style.transform = '';
    }
    if (lastText) {
        gsap.killTweensOf(lastText);
        lastText.style.opacity = '';
        lastText.style.transform = '';
    }
}
});