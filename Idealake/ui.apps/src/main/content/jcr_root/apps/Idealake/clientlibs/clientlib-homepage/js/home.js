// var winWidth = $(window).width();
// var winHeight = $(window).height();
var winWidth = $(window).width();

$(document).ready(function() {
    evolveGraphicsSilder();
    paymentFaq();
    meetourteam();
    rollupcounter();
    myslider();
    bannerAwards()
});

$(window).on('scroll', function() {
    if (winWidth > 991) {
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
            $('.bs-sec.type-Rocket').addClass('active');
        } else {
            $('.bs-sec.type-Rocket').removeClass('active');
        }
    }
});

function paymentFaq() {
    $('.accord-item .accord-link').click(function(e) {
        var $this = $(this);
        var parentElm = $this.closest(".accord-item");
        if ($this.hasClass("active")) {
            parentElm.find(".accord-cont").removeClass("active");
            $this.removeClass("active");
            parentElm.find(".accord-cont").slideUp();
        } else {
            $(".accord-list").find(".accord-cont").removeClass("active");
            $(".accord-list").find(".accord-link").removeClass("active");
            $(".accord-list").find(".accord-cont").slideUp();
            parentElm.find(".accord-cont, .accord-link").addClass("active");
            parentElm.find(".accord-cont").slideDown();
        }
    });
}

function evolveGraphicsSilder() {
    // $('.js-graphicDesign').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     prevArrow: '<button class="slick-prev"><span class="icon-left-arrow icon"></span></button>',
    //     nextArrow: '<button class="slick-next"><span class="icon-right-arrow icon"></span></button>'
    // });
};
//console.log('homepage');
// var swiper = new Swiper(".js-graphicDesign", {
//     slidesPerView: 'auto',
//     loop: false,
//     spaceBetween: 15,
//     navigation: {
//         nextEl: ".swiper-button-next.next",
//         prevEl: ".swiper-button-prev.prev",
//     },
// })
//};

// function rocketAnimation() {
//     $('.bs-sec.type-Rocket').addClass('active');
// }

$(window).on('resize', function() {
    // setSliderHeight();
});

function myslider() {
    var cardslider = $('.my-slider').cardslider({
        swipe: true,
        direction: 'up',
        keys: false,
        afterCardChange: function(event, ui) {
            arroweffect();

            // console.log(`.Thumbwrap a[data-slide=${event}]`)

            $(`.Thumbwrap a[data-slide=${event+1}]`).addClass('active').siblings().removeClass('active')
                // $('.Thumbwrap a.active').removeClass('active');
                // setSliderHeight(); 
        }
    }).data('cardslider');

    $(document).on('click', '.Thumbwrap a', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var slideno = $(this).attr('data-slide') - 1;
        cardslider.changeCardTo(parseInt(slideno));
    });

    if ($('.cardslider-cards').find('li.out').length == 0) {
        $('.cardslider-nav-prev').addClass('disabled');
    }
}

function arroweffect() {
    var totalli = $('.cardslider-cards').find('li.cardslider-card').length;
    var activeli = $('.cardslider-cards').find('li.out').length;

    if (activeli == 0) {
        $('.cardslider-nav-prev').addClass('disabled');
    } else {
        $('.cardslider-nav-prev').removeClass('disabled');
    }

    if ((totalli - 1) == activeli) {
        $('.cardslider-nav-next').addClass('disabled');
    } else {
        $('.cardslider-nav-next').removeClass('disabled');
    }
}


function meetourteam() {
    var swiperTeam;
    if (winWidth <= 768) {
        swiperTeam = new Swiper("#meetourteam", {
            slidesPerView: 1.2,
            loop: false,
            spaceBetween: 10,
        });
    } else if (winWidth <= 991) {

        swiperTeam = new Swiper("#meetourteam", {
            slidesPerView: 2.2,
            spaceBetween: 15,
            loop: false,
        });
    }

}

const stats = document.querySelectorAll(".counter_animation");

stats.forEach(stat => {
            // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
            const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
            const time = 1000;
            let result = [...patt.exec(stat.textContent)];
            let fresh = true;
            let ticks;

            // Remove first full match from result array (we dont need the full match, just the individual match groups).
            result.shift();
            // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
            result = result.filter(res => res != null);

            while (stat.firstChild) {
                stat.removeChild(stat.firstChild);
            }

            for (let res of result) {
                if (isNaN(res)) {
                    stat.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
                } else {
                    for (let i = 0; i < res.length; i++) {
                        stat.insertAdjacentHTML(
                                "beforeend",
                                `<span data-value="${res[i]}">
						<span>0</span>
						${Array(parseInt(res[i]) + 1)
							.join(0)
							.split(0)
							.map(
								(x, j) => `
							<span>${j}</span>
						`
							)
							.join("")}
					</span>`
				);
			}
		}
	}

	ticks = [...stat.querySelectorAll("span[data-value]")];

	let activate = () => {
		let top = stat.getBoundingClientRect().top;
		let offset = window.innerHeight * 0.8;

		setTimeout(() => {
			fresh = false;
		}, time);

		if (top < offset) {
			setTimeout(() => {
				for (let tick of ticks) {
					let dist = parseInt(tick.getAttribute("data-value")) + 1;
					tick.style.transform = `translateY(-${dist * 100}%)`;
				}
			}, fresh ? time : 0);
			window.removeEventListener("scroll", activate);
		}
	};
	window.addEventListener("scroll", activate);
	activate();
});

// function setSliderHeight(){
//     // var cardH = $('.cardslider .cardslider-card').attr('aria-hidden','true').outerHeight(true);
//     // $('ul.cardslider-cards').css({'height':cardH});
// }

// counter js 
function rollupcounter() {

    const stats = document.querySelectorAll(".counter");
    stats.forEach(stat => {
        // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
        const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
        const time = 1000;
        let result = [...patt.exec(stat.textContent)];
        // console.log("result", result)
        let fresh = true;
        let ticks;
        // Remove first full match from result array (we dont need the full match, just the individual match groups).
        result.shift();
        // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
        result = result.filter(res => res != null);
        while (stat.firstChild) {
            stat.removeChild(stat.firstChild);
        }
        for (let res of result) {
            if (isNaN(res)) {
                stat.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
            } else {
                for (let i = 0; i < res.length; i++) {
                    stat.insertAdjacentHTML(
                        "beforeend",
                        `<span data-value="${res[i]}">
						<span>0</span>
						${Array(parseInt(res[i]) + 1)
                            .join(0)
                            .split(0)
                            .map(
                                (x, j) => `
							<span>${j}</span>
						`
                            )
                            .join("")}
					</span>`
                    );
                }
            }
        }

        ticks = [...stat.querySelectorAll("span[data-value]")];

        let activate = () => {
            let top = stat.getBoundingClientRect().top;
            let offset = window.innerHeight * 0.8;

            setTimeout(() => {
                fresh = false;
            }, time);

            if (top < offset) {
                setTimeout(() => {
                    for (let tick of ticks) {
                        let dist = parseInt(tick.getAttribute("data-value")) + 1;
                        tick.style.transform = `translateY(-${dist * 100}%)`;
                    }
                }, fresh ? time : 0);
                window.removeEventListener("scroll", activate);
            }
        };
        window.addEventListener("scroll", activate);
        activate();
    });
}

$(window).on("load", function () {
    $("#testimonial .sliderWrap .cardslider-card .text").mCustomScrollbar({
        theme: "dark"
    });
});

function bannerAwards(){
    const swiper = new Swiper(".awardSlider", {
        // Optional parameters
        centeredSlides: true,
        slidesPerView: 1,
        grabCursor: true,
        freeMode: false,
        loop: true,
        mousewheel: false,
        keyboard: {
          enabled: true
        },
      
        // Enabled autoplay mode
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
          360: {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
          767: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 5.5,
            spaceBetween: 20
          }
        }
      });
      
}

$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("header").addClass("shadow-active");
    }
    else {
        $("header").removeClass("shadow-active");
    }
});