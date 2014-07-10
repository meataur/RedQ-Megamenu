(function($) {
	"use strict";

    var shrinkHeader = 300;


    // $('#header').next().html('<div style="height: 103px"></div>');
    var shrink = $('#header').next();

    	shrink.css('margin-top', 103);

    // $('.shrinkHeader').css('margin-top', 103);

    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.header').addClass('shrink');
        } else {
            $('.header').removeClass('shrink');

        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
})(jQuery);

(function($) {
	"use strict";

	var easing = 'jswing';

	var RedQ = {

		redQ_init : function() {
			// RedQ.redQ_nav_hover();
			// RedQ.redQ_small_submenu();
			RedQ.redQ_navbar_toggle();
		},

		// redQ_nav_hover : function() {
		// 	$('.dropdown').on('mouseenter', function() {
		// 		var self = $(this);

		// 		self.find('.dropdown-menu').stop().slideDown(300, easing);
		// 	});

		// 	$('.dropdown').on('mouseleave', function() {
		// 		var self = $(this);

		// 		self.find('.dropdown-menu').stop().slideUp(300, easing);
		// 	});
		// },
		redQ_small_submenu: function() {
			var sel = $('li.dropdown ul.sub-menu li.dropdown');
			sel.addClass('has-caret');
			sel.append('<span class="nav-caret fa fa-caret-right"></span>');

			var caret = $('.has-caret').on('click', function(e) {
				e.preventDefault();
				console.log('work');
				$(this).find('.sub-menu').css('display', 'block');
			});
		},
		redQ_navbar_toggle: function() {
			$('.navbar-toggle').on('click', function() {
				console.log('hello');
				$('.collapse.navbar-collapse').toggleClass('in');
			});
		},


	};

	RedQ.redQ_init();

})(jQuery);


(function($) {

    // DOM ready
    $(function() {
    	$('.dropdown').has('ul').prepend('<span class="nav-caret"><i class="fa fa-plus-square"></i></span>');

    	$('.nav-list').on('click', '.nav-caret', function() {

    		$(this).parent('.dropdown').toggleClass('open');

    		$(this).children('.fa-plus-square').toggleClass('fa-minus-square');
            // Toggle the nested nav
            // $(this).siblings('.sub-menu').toggle();
            // $(this).siblings('.dropdown-menu').toggle();

        });
   	});

})(jQuery);