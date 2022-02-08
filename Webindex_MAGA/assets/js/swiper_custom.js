(function ($) {
    var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 1, // 슬라이더 보여주는 갯수
        spaceBetween: 30,
        loop: true, // 루프 적용됨
        navigation: { // 네비게이션 버튼 생성
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: { // 오토 플레이 시간, 버튼 클릭 후에도 움직이게 적용
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: { // 파기네션 적용됨. 모양을 CSS로 바꾸어줌.
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });

    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 4,
        spaceBetween: 18,
        slidesPerGroup: 4,
        loop: false,
        loopFillGroupWithBlank: true,


        // 사이즈 별로 작업 
        breakpoints: {
            300: {
                slidesPerView: 1.4,
                spaceBetween: 24,
                slidesPerGroup: 1,
            },
            //        648: {
            //            slidesPerView: 2,
            //            spaceBetween: 18,
            //            slidesPerGroup: 4,
            //        },
            //        768: {
            //            slidesPerView: 2,
            //            spaceBetween: 18,
            //            slidesPerGroup: 4,
            //        },
            //        1024: {
            //            slidesPerView: 3,
            //            spaceBetween: 18,
            //            slidesPerGroup: 4,
            //        },
            //        1280: {
            //            slidesPerView: 4,
            //            spaceBetween: 18,
            //            slidesPerGroup: 4,
            //        },
            600: {
                slidesPerView: 1.4,
                spaceBetween: 24,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
                slidesPerGroup: 2,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 24,
                slidesPerGroup: 4,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
                slidesPerGroup: 4,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 24,
                slidesPerGroup: 4,
            }
        },
    });

    // .movie_title ul li 클래스 변수
    var movBtn = $(".movie_title > ul > li");
    // .movie_chart > div 차트 부분 변수
    var movCont = $(".movie_chart > div");
    // movCont 변수 영역 첫번째 부분만 보이게 해준다.
    movCont.hide().eq(0).show();
    movBtn.click(function (e) {
        e.preventDefault();
        // 샾링크 차단
        var target = $(this);
        //movBtn 타켓
        var index = target.index();
        movBtn.removeClass("active");
        // 클래스 active 성질 사라짐
        target.addClass("active");
        // 버튼을 active 성질을 입힘
        movCont.css("display", "none");
        // movCont 변수를 display을 none으로 바꿈
        movCont.eq(index).css("display", "block");
        // movCont 변수를 display을 block으로 바꿈
    });

    // 공지 사항 탭 메뉴
    var tabMenu = $(".notice");
    // 컨텐츠 내용을 숨기자
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("li.active > ul").show();

    function tabList(e) {
        e.preventDefault(); //#의 기능을 차단s
        var target = $(this); // 클릭했을때 변수
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
        // 버튼을 클릭하면 -ul을 보여주고
        // 부모의 li 태그에 클래스를 추가하고
        // 형제의 li 태그에 클래스를 제거하고 
        // 제거한 자식의 ul 태그를 숨겨줌
    }
    tabMenu.find("ul > li > a").click(tabList).focus(tabList);


})(jQuery);
