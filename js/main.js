"use strict";!function(t){t(window).on("load",function(){t("#preloader").length&&t("#preloader").delay(100).fadeOut("slow",function(){t(this).remove()})}),t(window).scroll(function(){100<t(this).scrollTop()?t(".back-to-top").fadeIn("slow"):t(".back-to-top").fadeOut("slow")}),t(".back-to-top").click(function(){return t("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1}),(new WOW).init(),t(window).scroll(function(){100<t(this).scrollTop()?t("#header").addClass("header-scrolled"):t("#header").removeClass("header-scrolled")}),100<t(window).scrollTop()&&t("#header").addClass("header-scrolled"),t(".main-nav a, .mobile-nav a, .scrollto").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=t(this.hash);if(e.length){var o=0;return t("#header").length&&(o=t("#header").outerHeight(),t("#header").hasClass("header-scrolled")||(o-=40)),t("html, body").animate({scrollTop:e.offset().top-o},1500,"easeInOutExpo"),t(this).parents(".main-nav, .mobile-nav").length&&(t(".main-nav .active, .mobile-nav .active").removeClass("active"),t(this).closest("li").addClass("active")),t("body").hasClass("mobile-nav-active")&&(t("body").removeClass("mobile-nav-active"),t(".mobile-nav-toggle i").toggleClass("fa-times fa-bars"),t(".mobile-nav-overly").fadeOut()),!1}}});var e=t("section"),l=t(".main-nav, .mobile-nav"),i=t("#header").outerHeight();t(window).on("scroll",function(){var a=t(this).scrollTop();e.each(function(){var e=t(this).offset().top-i,o=e+t(this).outerHeight();e<=a&&a<=o&&(l.find("li").removeClass("active"),l.find('a[href="#'+t(this).attr("id")+'"]').parent("li").addClass("active"))})}),t('[data-toggle="counter-up"]').counterUp({delay:10,time:1e3}),t(window).on("load",function(){var e=t(".photo-gallery-container").isotope({itemSelector:".photo-gallery-item"});t("#photo-gallery-flters li").on("click",function(){t("#photo-gallery-flters li").removeClass("filter-active"),t(this).addClass("filter-active"),e.isotope({filter:t(this).data("filter")})})}),t(".extra-schools-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,items:1}),t(".clients-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,responsive:{0:{items:2},768:{items:4},900:{items:6}}})}(jQuery);