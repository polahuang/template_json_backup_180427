//==============================================================================
// SVG (icon) 變色
function svg_change_color() {
  $('img.svg').each(function() {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Check if the viewport is set, else we gonna set it if we can.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      // Replace image with new SVG
      $img.replaceWith($svg);
      $svg.fadeIn(0);
    }, 'xml');
  });
}


//==============================================================================
function menu_icon(x) {
  x.classList.toggle("change");
}
//==============================================================================
// 首頁 banner effect
function effect_slider_1() {
  $(".effect-slider-1").slick({
    dots: true,
  });
}
// 首頁 套裝產品 effect
function effect_item_1() {
  $(".effect-item-1").slick({
    infinite: false, //不要loop
    variableWidth: true, //自訂億寬度
    slidesToShow: 1, //一次滑動一個項目
    slidesToScroll: 1,
    centerMode: true, //置中
    dots: true,
    arrows: true
  });
  $('.effect-item-1 .slick-dots li').eq(2).trigger('click');
}
//==============================================================================
// 讀取網址 有tab標籤者就點擊自身 (gx-success.html)(gx-about.html)
// function tabchange() {
//   if ($(window).width() >= 1024) {
//     var tabid = document.location.hash.split("/");
//     var url = window.location.href.split('#')[0];
//     tabid = tabid.pop();
//     $('a[href="' + tabid + '"]').trigger('click');
//   }
// }
//==============================================================================
// 滿版 DIV
// function fullbox() {
//   var heaH = $('.header').outerHeight();
//   var pagH = $('.page-header').outerHeight();
//   $('.full-banner').css({
//     width: $(window).width(),
//     height: $(window).height() - (heaH + pagH)
//   });
// }
//==============================================================================
// 價格表 (版面)
// function toggleColspan() {
//   if ($(window).width() >= 990) {
//     $('.style-table thead tr th').attr('colspan', 1);
//   } else if ($(window).width() <= 990) {
//     $('.style-table thead tr th').attr('colspan', 2);
//   }
// }
//==============================================================================
//----------
// include-html
//----------
function loadpage() {
  $('[data-include-html]').each(function() {
    var html = $(this).attr('data-include-html');
    $(this).load(html);
  })
}
//----------
// click  load-page
//----------
function click_loadpage() {
  $(document).on('click', '[data-click-include-html]', function(e) {
    e.preventDefault();
    var target_page = $(this).attr('data-click-include-html');
    var this_page = $(this).parent().parent().attr('data-toggle-content');
    //$('body#'+ this_page +' main article').hide().load(target_page).fadeIn('300'); //animate
    $('body#' + this_page + ' main article').load(target_page);
    setTimeout(function() {
      //loadpage();
      w3.includeHTML();
    }, 10);
  });
  setTimeout(function() {
    var target_active = $('#nav').children().find('a.active');
    $(target_active).trigger('click');
  }, 30);
  // setTimeout(function() {
  //   var target_active = $('#nav').children().find('a.active');
  //   var target_active_attr = $(target_active).attr('data-click-loadpage');
  //   $('body#'+ this_page +' main article').load(target_active_attr);
  // }, 50);
}

//==============================================================================
//----------
// (TAB) data-tab click
//----------
// <div class="Controller-tab">[data-tab-nav="el"] [data-tab-content="el"]</div>
function Controller_tab() {
  $(document).on('click', '[data-tab-nav]', function(e) {
    e.preventDefault();
    var target_nav = $(this).attr('data-tab-nav');
    //console.log(target_nav);
    // removeClass
    $(this).parents().siblings().children().removeClass('active');
    $(this).parents().find('.Controller-tab').find('[data-tab-content="'+ target_nav +'"]').siblings().removeClass('active');
    $(this).closest('.Controller-tab').find('[data-toggle-content]').removeClass('active');
    // addClass
    $(this).addClass('active');
    $('[data-tab-content="' + target_nav + '"]').addClass('active');
    // 不是主選單的連結按鈕
    if ($(this).hasClass('target-active')) {
      $(this).parents().find('nav a').removeClass('active');
      $(this).parents().find('nav a[href="#' + target_nav + '"]').addClass('active');
    }
  });
}
//----------
// (TAB) data-tab mouseover
//----------
function Controller_tab_hover() {
  $(document).on('mouseover', '[data-tab-hover-nav]', function(e) {
    e.preventDefault();
    var target_nav = $(this).attr('data-tab-hover-nav');
    $(this).parents().find('[data-tab-hover-content]').removeClass('active');
    $(this).parents().find('[data-tab-hover-content="' + target_nav + '"]').addClass('active');
  });
}




//==============================================================================


// 註冊 & 登入 (.placeholder-title) 表格關注標題
// function placeholder_title() {
//   $('.login-register input').removeAttr('placeholder');
//   $('.login-register .LG-tab-content select').parent().find('.placeholder-title').hide();
//   $(document).on('focus', '.login-register input', function(e) {
//     e.preventDefault();
//     $(this).parent().find('.placeholder-title').addClass('animation');
//   });
//   $(document).on('focusout', '.login-register input', function(e) {
//     e.preventDefault();
//     if ($(this).val() == '') {
//       $(this).parent().find('.placeholder-title').removeClass('animation');
//     }
//   });
//   $(document).on('change', '.login-register .LG-tab-content select', function(e) {
//     $(this).parent().find('.placeholder-title').show().addClass('animation');
//   });
//   setTimeout(function() {
//     $('.login-register input[type=text], .login-register input[type=password], .login-register input[type=number], .login-register input[type=email], .login-register input[type=captcha]').each(function() {
//       var value = $(this).val();
//       if (value.length > 0 && value != "Default text") {
//         $(this).parent().find('.placeholder-title').addClass('animation');
//         //console.log($(this).val());
//       } else {
//         $(this).parent().find('.placeholder-title').removeClass('animation');
//         //console.log($(this).val());
//       }
//     });
//   }, 100);
// }



// 主選單 active
// function menu_active() {
//   var p = window.location.pathname;
//   if (p.length === 0 || p === "/" || p.match(/^\/?index/)) {
//     $('#nav_jabez li a').removeClass('active');
//     $('#nav_jabez li:first-child a').addClass('active');
//   } else {
//     //$('#nav_jabez li a[href*="' + location.pathname.split("/")[1] + '"]').addClass('active');
//     $('#nav_jabez li a[href*="' + location.pathname.split("/")[2] + '"]').addClass('active');
//   }
// }


//==============================================================================
// DEMO 選單與主文 scroll (section.active) (nav.active)
function demo_focus() {
  $(window).on('scroll', function() {
    var Wscroll = $(this).scrollTop();
    $('section.section').each(function() {
      var ThisOffset = $(this).closest('section').offset();
      var targetHeight = ($(this).closest('section').outerHeight(true) / 1.5);
      if (Wscroll >= ThisOffset.top - targetHeight && Wscroll < ThisOffset.top + $(this).closest('section').outerHeight(true) - targetHeight) {
        var ThisOffsetHref = $(this).closest('section').attr('id');
        $(this).closest('section').addClass('active').siblings().removeClass('active');
        $('body > nav ol li a[href=#' + ThisOffsetHref + ']').addClass('active').parent().siblings().children().removeClass('active');
        // 背景 active狀態判斷
      }
    });
  });
}
//==============================================================================
// [ copy code ]
function setClipboard(value) {
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
//==============================================================================
// DEMO 主題色 class 複製
function copy_color() {
  $(document).on('click', '.edit-maincolor li p', function(e) {
    e.preventDefault();
    var color = $(this).attr('class');
    var res = color.replace(/bg-/g, '');
    setClipboard('$' + res);
  });
}

//==============================================================================
// DEMO 增加/減少 LIST項目
function Controller_edit() {
  $(document).on('click', '.edit-grid-item a.JS-add-item', function(e) {
    e.preventDefault();
    var this_group_id = $(this).parents('[data-tab-content="grid"]').find('.what-grid li a.active').attr('href');
    var last_item = $(this).parents('body').find(this_group_id + " [class^='content'] ol[class*='grid-'] li:last-child");
    var last_item_html = last_item.html();
    last_item.parents("[class^='content'] ol[class*='grid-']").append('<li>' + last_item_html + '</li>');
  });
  $(document).on('click', '.edit-grid-item a.JS-less-item', function(e) {
    e.preventDefault();
    var this_group_id = $(this).parents('[data-tab-content="grid"]').find('.what-grid li a.active').attr('href');
    if ($(this).parents('body').find(this_group_id + " [class^='content'] ol[class*='grid-'] li").length <= 1) {} else {
      $(this).parents('body').find(this_group_id + " [class^='content'] ol[class*='grid-'] li:last-child").remove();
    }
  });
  $(document).on('click', '.edit-grid-item a.JS-reduction-item', function(e) {
    e.preventDefault();
    var this_group_id = $(this).parents('[data-tab-content="grid"]').find('.what-grid li a.active').attr('href');
    var n = $(this).parents('body').find(this_group_id + " [class^='content'] ol[class*='grid-']").attr('class');
    var reduction_n = n.replace(/grid-/g, '');
    var first_item = $(this).parents('body').find(this_group_id + " [class^='content'] ol[class*='grid-'] li:first-child");
    var first_item_html = first_item.html();
    $(this).parents('body').find(this_group_id + " [class^='content'] ol[class*='grid-'] > *").remove();
    var add_item = '<li>' + first_item_html + '</li>';
    for (i = 1; i <= reduction_n.slice(-1); i++) {
      $(this).parents('body').find(this_group_id + " [class^='content'] ol[class*='grid-']").append(add_item);
    }
  });
}

//==============================================================================
// DEMO滿版按鈕
function toggle_fullcontent() {
  $(document).on('click', '.edit-grid-item a.JS-toggle-full', function(e) {
    e.preventDefault();
    var this_group_id = $(this).parents('[data-tab-content="grid"]').find('.what-grid li a.active').attr('href');
    var a = this_group_id + ' .content, ' + this_group_id + ' .content-full';
    $(a).toggleClass("content content-full");
  });
}


//==============================================================================
// 上傳圖片
// function readURL_1(event) {
//   var getImagePath = URL.createObjectURL(event.target.files[0]);
//   var this_group_id = $('.what-grid li a.active').attr('href'); // this sectionID
//   $(this_group_id).closest('.section').css('background-image', 'url(' + getImagePath + ')');
// }

// function readURL_2(event) {
//   var getImagePath = URL.createObjectURL(event.target.files[0]);
//   var this_group_id = $('.what-grid li a.active').attr('href'); // this sectionID
//   $(this_group_id).closest('.section').find('hgroup').css('background-image', 'url(' + getImagePath + ')');
// }


// + 背景 (menu)
function bg_item() {

  $(document).on('click', '.JS-toggle-bgimg', function(e) {
    e.preventDefault();
    $(this).parents().find('.bg-view').toggleClass('active');
  });
  $(document).on('click', '.bg-view li', function(e) {
    e.preventDefault();
    var this_group_id = $(this).parents('[data-tab-content="grid"]').find('.what-grid li a.active').attr('href'); // this sectionID
    var this_data = $(this).attr('data-note');
    var my_img = 'img-1';
    if (!$(this_group_id).children().hasClass(this_data) && !$(this).find('input').val() == '') {
      $(this_group_id).prepend('<figure class="' + this_data + ' ' + my_img + '"></figure>');
    }
    if ($(this).find('input').val() == '') {
      $(this_group_id).find('figure[class*="bg-img"]').remove();
    }

    //var hgroup_item = $(this_group_id).children().eq(0); // hgroup
    // if ($(this).index() == 1 && !$(this).siblings().hasClass('bg-img-section')) {
    //   $(this).parent().append("<input class='bg-img-section' type='file' name='background-image1' onchange='readURL_1(event)'>");
    //   $(this_group_id).addClass('bg-img');
    // }
    // if ($(this).index() == 2 && !$(this).siblings().hasClass('bg-img-hgroup')) {
    //   $(this).parent().append("<input class='bg-img-hgroup' type='file' name='background-image2' onchange='readURL_2(event)'>");
    //   $(hgroup_item).addClass('bg-img');
    // }
  });

}


//==============================================================================


// 複製 html  (section)
function copy_html() {
  $(document).on('click', '.JS-copy-html', function(e) {
    e.preventDefault();
    var this_group_id = $(this).parents('[data-tab-content="grid"]').find('.what-grid li a.active').attr('href'); // this sectionID
    $('body').append('<div id="copied"></div>');
    $('#copied').css({
      'position': 'absolute',
      'left': '-1000px',
      'top': '-1000px'
    });
    $(this_group_id).clone().appendTo('#copied');
    setClipboard($('#copied').html().replace(/\s+/g, ' '));
    $('#copied').remove();
  });
}
//==============================================================================

// function selection_text() {
//     var selObj = window.getSelection();
//     alert(selObj);
//     var selRange = selObj.getRangeAt(0);
//     // do stuff with the range
//     console.log(selRange);
//     var selectedText = selObj.toString();
//     console.log(selectedText);
// }

//==============================================================================

// img to .bg背景圖片
function img_to_bg() {
  $("img.bg").each(function() {
    //var imgId = $(this).attr('id');
    var imgSrc = $(this).attr('src');
    var imgClass = $(this).attr('class');
    $(this).after('<figure class="' + imgClass + '" style="background-image:url(' + imgSrc + ')"></figure>');
    $(this).remove();
  });
}

// img to .img背景圖片
function img_to_img() {
  $("img.img").each(function() {
    //var imgId = $(this).attr('id');
    var imgSrc = $(this).attr('src');
    var imgClass = $(this).attr('class');
    $(this).after('<figure class="' + imgClass + '" style="background-image:url(' + imgSrc + ')"></figure>');
    $(this).remove();
  });
}
//==============================================================================

// MENU
function menu_bcc() {
  var event = ('ontouchstart' in window) ? 'click' : 'mouseenter mouseleave';
  // MENU 子內容選單
  $(document).on(event, '.item-main dl dd a', function(e) {
    e.preventDefault();
    var target = $(this).attr('data-title');
    var number;
    if ($(this).attr('data-number')) {
      number = $(this).attr('data-number').split(",");
    }
    var info = $(this).parent().parent().parent().parent().find('.item-info dl');
    var features = $(this).parent().parent().parent().parent().find('.item-features dl');
    var hardware = $(this).parent().parent().parent().parent().find('.item-hardware');
    // 產品簡介
    $('.item-info dl').html('');
    if (info.children().length == '') {
      $('.item-info-content').find('[data-content="' + target + '"]').clone().appendTo(info);
    }
    // 功能模組 (零售,餐影,軟體)
    $('.item-features dl').html('');
    if (features.children().length == '' && !$(this).attr('data-number') == '') {
      for (var i = 0; i < number.length; i++) {
        $('.item-features-content').find('[data-number="' + number[i] + '"]').clone().appendTo(features);
      }
    }
    // 硬體 (周邊設備,POS設備)
    $('.item-hardware').html('');
    if (hardware.children().length == '') {
      $('.item-hardware-content').find('[data-content="' + target + '"]').clone().appendTo(hardware);
    }
  });
  // MENU 子內容選單 - 硬體 第二層 (周邊設備,POS設備)
  $(document).on(event, '.item-hardware dl dd a', function(e) {
    e.preventDefault();
    var target = $(this).attr('data-title');
    var hardware_info = $(this).parent().parent().parent().parent().find('.item-info dl');
    $('.item-info dl').html('');
    $('.item-info-content').find('[data-content="' + target + '"]').clone().appendTo(hardware_info);
  });
  // MENU 主選單
  $(document).on(event, '.menu ol li a', function(e) {
    e.preventDefault();
    var target = $(this).attr('data-title');
    $('.menu-content').find('[data-content="' + target + '"]').addClass('active').siblings().removeClass('active');
    $('.menu-content').find('[data-content="' + target + '"]').find('.item-main dl dd:first-of-type a').trigger('mouseenter');
  });
  $(document).on('click', '.mobile-menu-icon', function(e) {
    e.preventDefault();
    var space = $('.menu').width();
    // if($('body').css("left") == '0')
    // {
    //
    //     $('.menu').css({'width':space}).animate({"left": '-100%'});
    //     $('body').css({'overflow':'hidden'}).animate({'left':'0'});
    // }
    // if($('.menu').css("left") != '0')
    // {
    //   $('.menu').css({'width':space}).animate({"left": '0'});
    //     $('body').css({'overflow':'hidden'}).animate({'left':space});
    // }
    //     $('.menu').css() == "-100%" ? open() : close();
    //
    //
    //
    //     $(function(){
    //     $('#play').click(function() {
    //        $(this).css() == "-100%" ? open() : close();
    //     });
    // });
    // function open() {
    //     $('.menu').css({'width':space}).animate({"left": '-100%'});
    //     // do play
    // }
    // function close() {
    //     $('#play').val("play");
    //     // do pause
    // }

    // $('.menu').css({'width':space}).animate({"margin-right": '+=200'});
    // $('body').css({'overflow':'hidden'}).animate({'left':space});
  });
}


//==============================================================================

// list項目 顯示
function order_item() {
  //setTimeout(function() {
  var order_v = $('body').find('[data-order]').attr('data-order').split(',');
  //var id = order_v[0];
  var id = $('body').find('[data-order]').attr('id');
  var order_val = $('body').find('#' + id + '[data-order]').attr('data-order').split(',');
  var order_item = $('body').find('#' + id + '[data-order]').find('ul.data-order li');
  if (order_v != 'all') {
    $(order_item).each(function() {
      for (i = 0; i < order_item.length; i++) {
        $(order_item).eq(order_val[i] - 1).addClass('active');
      }
    })
  } else if (order_v = 'all') {
    $(order_item).addClass('active');
  }
  $(order_item).not(".active").remove();
  svg_change_color();
  //}, 120);
}


// tooltip
function tooltip() {
  // data-tooltip >> TOGGLE
  $(document).on('click', '*[data-tooltip]:not([data-tooltip=""])', function(e) {
    e.preventDefault();
    //if ($(window).width() <= 990) {
      $('*[data-tooltip].active').not(this).removeClass('active');
      $(this).toggleClass('active');
    //}
  });
}

//==============================================================================

function callback() {
    img_to_bg();
    img_to_img();
    svg_change_color();
    order_item();
}

//==============================================================================




$(document).ready(function() {
  w3.includeHTML(callback);
  //svg_change_color();
  loadpage();
  //tabchange();
  //menu_active();
  //toggleColspan();
  Controller_tab();
  Controller_tab_hover();
  demo_focus();
  copy_color();
  Controller_edit();
  toggle_fullcontent();
  bg_item();
  copy_html();
  tooltip();

  effect_slider_1();
  effect_item_1();

  //selection_text();
  click_loadpage();
  //order_item();


  //-----------------------------------------------------------------------------
  // 註冊 & 登入 (.placeholder-title) 表格關注標題
  // placeholder_title();
  // if ($.trim($("#txtUserName").val()) > '') {
  //   $("#txtUserName").parent().find('.placeholder-title').addClass('animation');
  // }
  //-----------------------------------------------------------------------------
  // data-tooltip >> TOGGLE (價格表-手機板)
  // $(document).on('click', '*[data-tooltip]:not([data-tooltip=""])', function(e) {
  //   e.preventDefault();
  //   if ($(window).width() <= 990) {
  //     $('*[data-tooltip].active').not(this).removeClass('active');
  //     $(this).toggleClass('active');
  //   }
  // });
  //-----------------------------------------------------------------------------
  // 忘記密碼 modal
  $(document).on('click', '#ForgetButton', function(e) {
    e.preventDefault();
    $('#forgetPasswordModal').css({
      'display': 'block'
    });
  });
  $(document).on('click', '#forgetPasswordModal .modal-content .close', function(e) {
    e.preventDefault();
    $('#forgetPasswordModal').css({
      'display': 'none'
    });
  });
  //-----------------------------------------------------------------------------
  // 頁面右下方的按鈕: btn-gotop + btn-contact & 所有連結滑動到該區塊
  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    // 如果有 .not-scroll 就不要滑動至該區塊
    if ($(e.target).hasClass('not-scroll')) {
      e.preventDefault();
      return;
    }
    $(this).addClass('active').parents().siblings().children().removeClass('active');
    $($.attr(this, 'href')).addClass('active').siblings().removeClass('active');
    // 手機板 - 目標tooltip顯示
    if ($(window).width() <= 990) {
      $(e.target).closest('div').children('p').addClass('active');
    }
    if ($($.attr(this, 'href')).length) {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - ($('.header').height())
      }, 100, function() {
        if ($(window).width() <= 990) {
          // 手機板 - 目標tooltip隱藏
          $(e.target).closest('div').children('p').delay(3000).removeClass('active');
        }
      });
    }
    // $('html, body').animate({
    //   scrollTop: ($($.attr(this, 'href')).offset().top) - ($('.header').height())
    // }, 500, function() {
    //   if ($(window).width() <= 990) {
    //     // 手機板 - 目標tooltip隱藏
    //     $(e.target).closest('div').children('p').delay(3000).removeClass('active');
    //   }
    // });
  });
  //-----------------------------------------------------------------------------
  // 側邊快捷
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 600) {
      $('#aside_link').fadeIn(100);
    } else {
      $('#aside_link').stop().fadeOut(100);
    }
  });
  //-----------------------------------------------------------------------------
  // 功能
  // $(window).scroll(function() {
  //   var position = ($('#select_trade').offset().top - 100) + $('#select_trade').height();
  //   var fg = $('#cloud_to_erp2').offset().top - 200
  //   if ($(this).scrollTop() > position && $(this).scrollTop() < fg) {
  //     $('#fix_nav_box').fadeIn(250);
  //   } else {
  //     $('#fix_nav_box').stop().fadeOut(100);
  //   }
  //   var as = $('#features_food').offset().top - 200
  //   if ($(this).scrollTop() >= as) {
  //     $('.fix-nav-b').addClass('active');
  //     $('.fix-nav-a').removeClass('active');
  //   } else {
  //     $('.fix-nav-b').removeClass('active');
  //     $('.fix-nav-a').addClass('active');
  //   }
  // });
  // $('.features-retail-list, .features-food-list').on('click', function(e) {
  //   e.preventDefault();
  // });
  // $('#food_link a').on('click', function(e) {
  //   e.preventDefault();
  //   $('#food_link a').removeClass('active');
  //   $(this).addClass('active');
  //   var href = $(this).attr('href');
  //   $('.features-food-list').fadeOut(350);
  //   $(href).fadeIn(350);
  // });
  // 功能 動畫效果
  // $(window).scroll(function() {
  //   var animation_target = $('.features-retail-list').offset().top - ($(window).height() / 1.8);
  //   if ($(this).scrollTop() > animation_target) {
  //     $('.features-retail-list > div, .features-retail-list h4, .features-retail-list ul').addClass('animation');
  //   }
  // });
  // $('.full-bg h3').addClass('animation');
  //-----------------------------------------------------------------------------
  // 價格表 (手機板tab-nav)
  $(document).on('click', '.price-tab-nav ul li a', function(e) {
    e.preventDefault();
    $(window).trigger('resize');
    var target = $(this).attr('href');
    $('.price-tab-nav ul li a').removeClass('active');
    $(this).addClass('active');

    $('.style-table thead tr th').removeClass('active');
    $('#side_nav').addClass('active');
    $(target).addClass('active');
    // 對應的target區塊
    var re = /#/g;
    var result = target.replace(re, "");
    $('.style-table tbody td').removeClass('active');
    $('.style-table tbody td[data-title="side_nav"]').addClass('active');
    $('.style-table tbody td[data-title="' + result + '"]').addClass('active');
    // 注意事項
    if (result == 'version_free') {
      $('.style-table tfoot td[data-title="notice_list_a"]').addClass('active');
      $('.style-table tfoot td[data-title="notice_list_b"]').removeClass('active');
    } else {
      $('.style-table tfoot td[data-title="notice_list_a"]').removeClass('active');
      $('.style-table tfoot td[data-title="notice_list_b"]').addClass('active');
    }
  });
  //-----------------------------------------------------------------------------
  // 價格表 (下載價格表)
  $(document).on('click', '#myBtn_price', function() {
    $('#canvas_box').css('visibility', 'visible');
    $('main#gotop').hide();
  });
  $(document).on('click', '.close', function() {
    $('#canvas_box').css('visibility', 'hidden');
    $('main#gotop').show();
  });
  //-----------------------------------------------------------------------------
  // footer成功案例 #連結至正確tab頁面
  $(document).on('click', '.success-list li a', function(e) {
    e.preventDefault();
    var hash = $(this).attr('href');
    var index = $(this).parent().index() + 1;
    if (window.location.hash != 'gx-success.html') {
      $(location).attr('href', hash.replace('/', ''));
      $("html, body").animate({
        scrollTop: 0
      }, "fast");
    } else if (window.location.hash == 'gx-success.html') {
      successtab();
    }

    function successtab() {
      $("html, body").animate({
        scrollTop: 0
      }, "fast");
      if (hash) {
        $('ul.tab2 li:nth-child(' + index + ')').trigger('click').siblings('.active').removeClass('active');
      }
    }
  });
  //-----------------------------------------------------------------------------
  // footer關於宣揚 #連結至正確tab頁面
  $(document).on('click', '.about-list li.about a', function(e) {
    e.preventDefault();
    var hash = $(this).attr('href');
    var index = $(this).parent().index() + 1;
    if (window.location.hash != 'gx-about.html') {
      $(location).attr('href', hash.replace('/', ''));
      $("html, body").animate({
        scrollTop: 0
      }, "fast");
    } else if (window.location.hash == 'gx-about.html') {
      abouttab();
    }

    function abouttab() {
      $("html, body").animate({
        scrollTop: 0
      }, "fast");
      if (hash) {
        $('ul.tabs li:nth-child(' + index + ')').trigger('mouseover').siblings('.active').removeClass('active');
      }
    }
  });


}); // $(document).ready




////////////////////////////////////////////////////////////////////////////////
$(window).load(function() {
  //tabchange();
  //menu_active();
  Controller_tab();
  Controller_tab_hover();
  demo_focus();
  copy_color();
  menu_bcc();
  click_loadpage();





  //-----------------------------------------------------------------------------
  // 註冊 & 登入 (.placeholder-title) 表格關注標題
  // $('.login-register input').removeAttr('placeholder');
  // $('.login-register .LG-tab-content select').parent().find('.placeholder-title').hide();
  // setTimeout(function() {
  //   $('.login-register .LG-tab-content select').parent().find('.placeholder-title').hide();
  // }, 100);
  // placeholder_title();
  //-----------------------------------------------------------------------------
  // 價格表 (版面)
  // $(window).resize();
  // toggleColspan();
  // setTimeout(function() {
  //   $('.price-tab-nav ul li:first-child a').trigger('click');
  //   $('.price-table').addClass('animation'); // css3動畫
  // }, 100);


}); // $(window).load



////////////////////////////////////////////////////////////////////////////////
$(window).resize(function() {
  //tabchange();
  //toggleColspan();
  Controller_tab();
  Controller_tab_hover();

}); // $(window).resize
