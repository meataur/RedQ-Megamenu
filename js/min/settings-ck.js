$(document).ready(function(){$("#menu-align li").click(function(n){n.preventDefault()})}),function(n){"use strict";var e={redQ_settings_init:function(){e.menu_align(),e.menu_icons(),e.menu_color_skins()},menu_align:function(){n("#menu-align").on("click","a",function(e){e.preventDefault();var i=n(this),a=i.data("name");console.log(a),n("#mega-menu.primary-menu").removeClass("align-left align-right align-center").addClass(a)})},menu_icons:function(){n("#menu-icons").on("click","a",function(e){e.preventDefault();var i=n(this),a=i.data("name");console.log(a),n("#mega-menu.primary-menu").removeClass("icons-no icons-left icons-right icons-top").addClass(a)})},menu_color_skins:function(){n("#color-skins").on("click","a",function(e){e.preventDefault();var i=n(this),a=i.data("name");console.log(a),n("#mega-menu.primary-menu").removeClass("green-sea-skin pomegranate-skin pumpkin-skin wisteria-skin orange-skin nephritis-skin belize-hole-skin").addClass(a)})}};e.redQ_settings_init()}(jQuery);