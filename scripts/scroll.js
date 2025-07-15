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
        const title = slide.querySelector('.title');
        if (title) {
            gsap.fromTo(title, {
                opacity: 0, 
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 0,
            });
        }
    }

    // 슬라이드에서 애니메이션을 제거하는 함수
    function removeGSAPAnimation(slide) {
        const title = slide.querySelector('.title');
        if (title) {
            gsap.killTweensOf(title);
            title.style.opacity = ''; 
            title.style.transform = ''; 
        }
    }
});