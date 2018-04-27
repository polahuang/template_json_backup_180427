


/* nav.js 手機版 menu*/
var isLateralNavAnimating = false;
//打開或關閉 menu
setTimeout(function() {
  $('.cd-nav-trigger').on('click', function(event) {
    event.preventDefault();
    //若動畫正在進行，則停止
    if (!isLateralNavAnimating) {
      if ($(this).parents('.csstransitions').length > 0)
        isLateralNavAnimating = true;

      $('body').toggleClass('navigation-is-open');
      $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        //動畫结束
        isLateralNavAnimating = false;
      });
    }
  });
}, 1500)



function jMenu() {
  var currentHeader = "",
    idShow = null;
  var menu = {
    retial_menu: [{
        title: '<a href="gx-retail-solution.html">智能零售解決方案</a>',
        // subtitle: "智能餐飲",
        cells: [
          '<div><a href="gx-retail-solution.html" class="prod-features first-title restaurant-solution"><div class="img-icon kds-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">解決方案</div>',
          '<div><a href="gx-retail-solution.html#retail-solution_mobile" class="prod-features restaurant-solution"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>行動結帳收銀 </h4></div></a></div>',
          '<div><a href="gx-retail-solution.html#retail-solution_counter" class="prod-features restaurant-solution"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>櫃台結帳收銀 </h4></div></a></div>',
          '<div><a href="gx-retail-solution.html#jabezpos" class="prod-features restaurant-solution"><div class="f-icon bcc-cloud"></div><div class="f-content"><h4>雲端後台管理 </h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/retail-solution.jpg" alt=""></div><h4>智能零售解決方案</h4><p>最完整的 IT 零售解決方案</p><a href="gx-retail-solution.html" title="">了解更多</a></div>'
        ]
      },
      '<li class="category">雲端套裝產品</li>',
      {
        title: '<a href="gx-retail-solution.html#retail-solution_mobile">行動收銀機 - 簡易掃碼版</a>',
        // subtitle: "行動 POS 收銀機",
        cells: [
          '<div><a href="gx-retail-solution.html#retail-solution_mobile" class="prod-features first-title"><div class="img-icon v1-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="gx-features_pos.html" class="prod-features"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="gx-features_report.html" class="prod-features"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="gx-features_payment.html" class="prod-features"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/mobile_pos.jpg" alt=""></div><h4>簡易掃碼版</h4><p>微店攤商開店必備工具，結合多元支付及電子發票功能；內建高速出單機、大容量電池，收銀機帶著走，接訂單更便利。</p><a href="gx-retail-solution.html#retail-solution_mobile" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="gx-retail-solution.html#retail-solution_mobile">行動收銀機 - 進階感應版</a>',
        // subtitle: "行動電子發票機",
        cells: [
          '<div><a href="gx-retail-solution.html#retail-solution_mobile" class="prod-features first-title"><div class="img-icon v1-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="gx-features_pos.html" class="prod-features"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="gx-features_report.html" class="prod-features"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/prod_invoice.jpg" alt=""></div><h4>進階感應版</h4><p>行動電子發票即時輕鬆開立，省去稅務申報麻煩，省去列印保存問題；不怕發票遺失損毀，至少省下50%用紙量，調閱及儲存全面自動化，帶動企業流程電子化。</p><a href="gx-retail-solution.html#retail-solution_mobile" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="gx-retail-solution.html#retail-solution_counter">櫃台收銀機 - 雲端基本版</a>',
        // subtitle: "流通大師 BPOS",
        cells: [
          '<div><a href="gx-retail-solution.html#retail-solution_counter" class="prod-features first-title"><div class="img-icon t1-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="gx-features_pos.html" class="prod-features"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="gx-features_purchase.html" class="prod-features"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="gx-features_inventory.html" class="prod-features"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          '<div><a href="gx-features_crm.html" class="prod-features"><div class="f-icon bcc-member"></div><div class="f-content"><h4>CRM 顧客管理</h4></div></a></div>',
          '<div><a href="gx-features_report.html" class="prod-features"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="gx-features_payment.html" class="prod-features"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/retail_prod_02.jpg" alt=""></div><h4>雲端基本版</h4><p>流通大師 BPOS 跨平台，即裝即用；建構於 AWS 雲端服務:安全穩定、即時更新及查詢、支援離線作業。</p><a href="gx-retail-solution.html#retail-solution_counter" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="gx-retail-solution.html#retail-solution_counter">櫃台收銀機 - 雲端專業版</a>',
        // subtitle: "流通大師 B1POS",
        cells: [
          '<div><a href="gx-retail-solution.html#retail-solution_counter" class="prod-features first-title"><div class="img-icon t80-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="gx-features_pos.html" class="prod-features"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="gx-features_purchase.html" class="prod-features"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="gx-features_inventory.html" class="prod-features"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          // '<div><a href="promotion.html" class="prod-features"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="gx-features_crm.html" class="prod-features"><div class="f-icon bcc-member"></div><div class="f-content"><h4>CRM 顧客管理</h4></div></a></div>',
          '<div><a href="gx-features_report.html" class="prod-features"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="gx-features_payment.html" class="prod-features"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/retail_prod_01.jpg" alt=""></div><h4>雲端專業版</h4><p>流通大師B1POS 簡單、穩定、輕鬆開店；結帳更順暢:快速查詢與輸入商品、輕鬆查找會員、快速功能鍵設定。</p><a href="gx-retail-solution.html#retail-solution_counter" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="gx-retail-solution.html#retail-solution_counter">櫃台收銀機 - 單機專業版</a>',
        // subtitle: "流通大師 B1POS",
        cells: [
          '<div><a href="gx-retail-solution.html#retail-solution_counter" class="prod-features first-title"><div class="img-icon t80-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="gx-features_pos.html" class="prod-features"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="gx-features_purchase.html" class="prod-features"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="gx-features_inventory.html" class="prod-features"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          // '<div><a href="promotion.html" class="prod-features"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="gx-features_crm.html" class="prod-features"><div class="f-icon bcc-member"></div><div class="f-content"><h4>CRM 顧客管理</h4></div></a></div>',
          '<div><a href="gx-features_report.html" class="prod-features"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="gx-features_payment.html" class="prod-features"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/retail_prod_01.jpg" alt=""></div><h4>單機專業版</h4><p>流通大師B1POS 簡單、穩定、輕鬆開店；結帳更順暢:快速查詢與輸入商品、輕鬆查找會員、快速功能鍵設定。</p><a href="gx-retail-solution.html#retail-solution_counter" title="">了解更多</a></div>'
        ]
      },
      '<li class="category">零售多店套裝產品</li>',
      {
        title: '<a href="gx-retail-solution-bsms.html">流通大師 - 連鎖多店版</a>',
        // subtitle: "流通大師 BSMS",
        cells: [
          '<div><a href="gx-bsms.html" class="prod-features first-title"><div class="img-icon t80-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="gx-features_pos.html" class="prod-features"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="gx-features_purchase.html" class="prod-features"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="gx-features_inventory.html" class="prod-features"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          '<div><a href="gx-features_promotion.html" class="prod-features"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="gx-features_crm.html" class="prod-features"><div class="f-icon bcc-member"></div><div class="f-content"><h4>CRM 顧客管理</h4></div></a></div>',
          '<div><a href="gx-features_report.html" class="prod-features"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          // '<div><a class="prod-features"><div class="f-icon bcc-chain"></div><div class="f-content"><h4>連鎖加盟</h4></div></a></div>',
          '<div><a class="prod-features"><div class="f-icon bcc-wholesale"></div><div class="f-content"><h4>批發銷售</h4></div></a></div>',
          '<div><a href="gx-features_payment.html" class="prod-features"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/bsms.jpg" alt=""></div><h4>連鎖多店版</h4><p>流通大師 BSMS 打造企業總部的核心競爭力，搭配硬體:超敏銳觸控螢幕、內建出單機、超大雙螢幕顯示。</p><a href="gx-retail-solution-bsms.html" title="">了解更多</a></div>'
        ]
      }
    ],
    restaurant_menu: [{
        title: '<a href="gx-restaurant-solution.html">智能餐飲解決方案</a>',
        // subtitle: "智能餐飲",
        cells: [
          '<div><a href="gx-restaurant-solution.html" class="prod-features first-title restaurant-solution"><div class="img-icon kds-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">解決方案</div>',
          '<div><a href="gx-restaurant-solution.html#webmenu" class="prod-features restaurant-solution"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>顧客手機點餐 </h4></div></a></div>',
          '<div><a href="gx-restaurant-solution.html#mobile-pos" class="prod-features restaurant-solution"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>行動點餐結帳 </h4></div></a></div>',
          '<div><a href="gx-restaurant-solution.html#counter" class="prod-features restaurant-solution"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>櫃台點餐結帳 </h4></div></a></div>',
          '<div><a href="gx-restaurant-solution.html#kds" class="prod-features restaurant-solution"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>廚房接單出餐 </h4></div></a></div>',
          '<div><a href="gx-restaurant-solution.html#jabezpos" class="prod-features restaurant-solution"><div class="f-icon bcc-cloud"></div><div class="f-content"><h4>雲端後台管理 </h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/restaurant-solution.jpg" alt=""></div><h4>智能餐飲解決方案</h4><p>最完整的 IT 餐飲解決方案</p><a href="gx-restaurant-solution.html" title="">了解更多</a></div>'
        ]
      },
      '<li class="category">雲端套裝產品</li>',
      {
        title: '<a href="gx-restaurant-solution.html#mobile-pos">行動收銀機 - 簡易掃碼版</a>',
        // subtitle: "行動 POS 收銀機",
        cells: [
          '<div><a href="gx-restaurant-solution.html#mobile-pos" class="prod-features first-title"><div class="img-icon v1-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="gx-features_pos.html" class="prod-features"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          // '<div><a href="promotion.html" class="prod-features"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="gx-features_report.html" class="prod-features"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="gx-features_payment.html" class="prod-features"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/mobile_pos.jpg" alt=""></div><h4>簡易掃碼版</h4><p>微店攤商開店必備工具，結合多元支付及電子發票功能；內建高速出單機、大容量電池，收銀機帶著走，接訂單更便利。</p><a href="mobile_pos.html" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="gx-restaurant-solution.html#mobile-pos">行動收銀機 - 進階感應版</a>',
        // subtitle: "行動電子發票機",
        cells: [
          '<div><a href="gx-restaurant-solution.html#mobile-pos" class="prod-features first-title"><div class="img-icon v1-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="gx-features_pos.html" class="prod-features"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          // '<div><a href="promotion.html" class="prod-features"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="gx-features_report.html" class="prod-features"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/prod_invoice.jpg" alt=""></div><h4>進階感應版</h4><p>行動電子發票即時輕鬆開立，省去稅務申報麻煩，省去列印保存問題；不怕發票遺失損毀，至少省下50%用紙量，調閱及儲存全面自動化，帶動企業流程電子化。</p><a href="invoice_set.html" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="gx-restaurant-solution.html#counter">櫃台收銀機 - 雲端基本版</a>',
        // subtitle: "流通大師 BPOS",
        cells: [
          '<div><a href="gx-restaurant-solution.html#counter" class="prod-features first-title"><div class="img-icon t1-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="gx-features_pos.html" class="prod-features"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="gx-features_purchase.html" class="prod-features"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="gx-features_inventory.html" class="prod-features"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          // '<div><a href="promotion.html" class="prod-features"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="gx-features_crm.html" class="prod-features"><div class="f-icon bcc-member"></div><div class="f-content"><h4>CRM 顧客管理</h4></div></a></div>',
          '<div><a href="gx-features_report.html" class="prod-features"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="gx-features_payment.html" class="prod-features"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/retail_prod_02.jpg" alt=""></div><h4>雲端基本版</h4><p>流通大師 BPOS 跨平台，即裝即用；建構於 AWS 雲端服務:安全穩定、即時更新及查詢、支援離線作業。</p><a href="bpos_set.html" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="gx-restaurant-solution.html#counter">櫃台收銀機 - 雲端專業版</a>',
        // subtitle: "流通大師 B1POS",
        cells: [
          '<div><a href="gx-restaurant-solution.html#counter" class="prod-features first-title"><div class="img-icon t80-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="gx-features_pos.html" class="prod-features"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="gx-features_purchase.html" class="prod-features"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="gx-features_inventory.html" class="prod-features"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          // '<div><a href="promotion.html" class="prod-features"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="gx-features_crm.html" class="prod-features"><div class="f-icon bcc-member"></div><div class="f-content"><h4>CRM 顧客管理</h4></div></a></div>',
          '<div><a href="gx-features_report.html" class="prod-features"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="gx-features_payment.html" class="prod-features"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/restaurant_prod_01.jpg" alt=""></div><h4>雲端專業版</h4><p>流通大師B1POS 簡單、穩定、輕鬆開店；結帳更順暢:快速查詢與輸入商品、輕鬆查找會員、快速功能鍵設定。</p><a href="b1pos_set.html" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="gx-restaurant-solution.html#counter">櫃台收銀機 - 單機專業版</a>',
        // subtitle: "流通大師 B1POS",
        cells: [
          '<div><a href="gx-restaurant-solution.html#counter" class="prod-features first-title"><div class="img-icon t80-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="gx-features_pos.html" class="prod-features"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="gx-features_purchase.html" class="prod-features"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="gx-features_inventory.html" class="prod-features"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          // '<div><a href="promotion.html" class="prod-features"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="gx-features_crm.html" class="prod-features"><div class="f-icon bcc-member"></div><div class="f-content"><h4>CRM 顧客管理</h4></div></a></div>',
          '<div><a href="gx-features_report.html" class="prod-features"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="gx-features_payment.html" class="prod-features"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/restaurant_prod_01.jpg" alt=""></div><h4>單機專業版</h4><p>流通大師B1POS 簡單、穩定、輕鬆開店；結帳更順暢:快速查詢與輸入商品、輕鬆查找會員、快速功能鍵設定。</p><a href="b1pos_set.html" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="gx-restaurant-solution.html#kds">廚房接單機</a>',
        // subtitle: "雲端點餐機",
        cells: [
          '<div><a href="gx-restaurant-solution.html#kds" class="prod-features first-title"><div class="img-icon kds-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="gx-features_payment.html" class="prod-features"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_webmenu.html" class="prod-features"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>雲端點餐 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/prod_webmenu.jpg" alt=""></div><h4>廚房接單機</h4><p>雲端點餐機 打造你的智慧餐廳，開店原來這麼簡單，免下載APP立即點餐 不用等店員。只要掃瞄QRCODE就可以立刻點餐！節省你排隊的時間！</p><a href="gx-features_webmenu.html" title="">了解更多</a></div>'
        ]
      },
      '<li class="category">餐飲多店套裝產品</li>',
      {
        title: '<a href="gx-restaurant-solution-bsms.html">餐飲大師 - 連鎖多店版</a>',
        // subtitle: "餐飲大師 BSMS",
        cells: [
          '<div><a href="gx-bsms.html" class="prod-features first-title"><div class="img-icon t80-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="gx-features_pos.html" class="prod-features"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="gx-features_purchase.html" class="prod-features"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="gx-features_inventory.html" class="prod-features"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          '<div><a href="gx-features_promotion.html" class="prod-features"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="gx-features_crm.html" class="prod-features"><div class="f-icon bcc-member"></div><div class="f-content"><h4>CRM 顧客管理</h4></div></a></div>',
          '<div><a href="gx-features_report.html" class="prod-features"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          // '<div><a class="prod-features"><div class="f-icon bcc-chain"></div><div class="f-content"><h4>連鎖加盟</h4></div></a></div>',
          '<div><a class="prod-features"><div class="f-icon bcc-wholesale"></div><div class="f-content"><h4>批發銷售</h4></div></a></div>',
          '<div><a href="gx-features_payment.html" class="prod-features"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_webmenu.html" class="prod-features"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>雲端點餐 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/bsms.jpg" alt=""></div><h4>連鎖多店版</h4><p>餐飲大師 BSMS 打造企業總部的核心競爭力，搭配硬體:超敏銳觸控螢幕、內建出單機、超大雙螢幕顯示。</p><a href="gx-restaurant-solution-bsms.html" title="">了解更多</a></div>'
        ]
      }

    ],
    software_menu: [
      '<li class="category">雲端軟體</li>',
      {
        title: '<a href="gx-software_mecr.html">行動收銀 mECR</a>',
        cells: [
          '<div><a href="gx-software_mecr.html" class="prod-features first-title"><div class="img-icon jabezpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/mECR-icon.jpg" alt=""></div><h4>行動收銀 mECR</h4><p></p><a href="gx-software_mecr.html" title="">了解更多</a></div>'
        ]
      },
      {
        title: '<a href="gx-software_bpos.html">櫃檯收銀 BPOS</a>',
        cells: [
          '<div><a href="gx-software_bpos.html" class="prod-features first-title"><div class="img-icon bpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="pos.html" class="prod-features"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="purchase.html" class="prod-features"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="inventory.html" class="prod-features"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          // '<div><a href="promotion.html" class="prod-features"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="crm.html" class="prod-features"><div class="f-icon bcc-member"></div><div class="f-content"><h4>CRM 顧客管理</h4></div></a></div>',
          '<div><a href="report.html" class="prod-features"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="payment.html" class="prod-features"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_invoice.html" class="prod-features"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="gx-features_webmenu.html" class="prod-features"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>雲端點餐 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/bpos-icon.jpg" alt=""></div><h4>櫃檯收銀 BPOS</h4><p></p><a href="gx-software_bpos.html" title="">了解更多</a></div>'
        ]
      },
      {
        title: '<a href="gx-software_b1pos.html">櫃檯收銀 B1POS</a>',
        cells: [
          '<div><a href="gx-software_b1pos.html" class="prod-features first-title"><div class="img-icon jabezpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/b1pos-icon.jpg" alt=""></div><h4>櫃檯收銀 B1POS</h4><p></p><a href="gx-software_b1pos.html" title="">了解更多</a></div>'
        ]
      },
      {
        title: '<a href="gx-software_webmenu.html">雲端點餐 webmenu</a>',
        cells: [
          '<div><a href="gx-software_webmenu.html" class="prod-features first-title"><div class="img-icon jabezpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/webmenu_icon.jpg" alt=""></div><h4>雲端點餐 webmenu</h4><p></p><a href="gx-software_webmenu.html" title="">了解更多</a></div>'
        ]
      },
      {
        title: '<a href="gx-software_kds.html">雲端廚房 KDS</a>',
        cells: [
          '<div><a href="gx-software_kds.html" class="prod-features first-title"><div class="img-icon jabezpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/kds_icon.jpg" alt=""></div><h4>雲端廚房 KDS</h4><p></p><a href="gx-software_kds.html" title="">了解更多</a></div>'
        ]
      },
      {
        title: '<a href="gx-software_jabezpos.html">雲端後台 JabezPOS</a>',
        cells: [
          '<div><a href="gx-software_jabezpos.html" class="prod-features first-title"><div class="img-icon jabezpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/jabezpos-icon.jpg" alt=""></div><h4>雲端後台 JabezPOS</h4><p></p><a href="gx-software_jabezpos.html" title="">了解更多</a></div>'
        ]
      },
      {
        title: '<a href="javascript:;">Cloud2ERP</a>',
        cells: [
          '<div><a href="javascript:;" class="prod-features first-title"><div class="img-icon jabezpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
        ],
        photo: [
          '<div><div class="prod-img"><img src="image/jmenu/cloud2erp-icon.jpg" alt=""></div><h4>Cloud2ERP</h4><p></p><a href="javascript:;" title="">了解更多</a></div>'
        ]
      }
    ],
    hardware_menu: [{
        title: "POS 設備",
        // subtitle: "POS 設備",
        cells: [
          "<div class='sub-group'>桌上設備</div>",
          "<div><a data-target='#t80' class='prod-features' href='gx-hardware_t80.html'><div class='f-content pl-20'><h4>櫃檯收銀機 T80</h4></div></a></div>",
          "<div><a data-target='#t1' class='prod-features' href='gx-hardware_t1.html'><div class='f-content pl-20'><h4>櫃檯收銀機 T1</h4></div></a></div>",
          "<div><a data-target='#h10' class='prod-features' href='gx-hardware_h10.html'><div class='f-content pl-20'><h4>櫃檯收銀機 H10</h4></div></a></div>",
          "<div><a data-target='#v8' class='prod-features' href='gx-hardware_v8.html'><div class='f-content pl-20'><h4>櫃檯收銀機 V8</h4></div></a></div>",
          "<div class='sub-group'>行動設備</div>",
          "<div><a data-target='#v1' a class='prod-features' href='gx-hardware_v1.html'><div class='f-content pl-20'><h4>行動收銀機 V1</h4></div></a></div>",
          "<div><a data-target='#x990' a class='prod-features' href='gx-hardware_x990.html'><div class='f-content pl-20'><h4>行動收銀機 X990</h4></div></a></div>",
          "<div><a data-target='#aposA8' a class='prod-features' href='gx-hardware_aposA8.html'><div class='f-content pl-20'><h4>行動收銀機 APOS A8</h4></div></a></div>"
        ],
        photo: [
          '<div id="t80" class="datatarget"><div class="prod-img"><img src="image/jmenu/restaurant_prod_01.jpg" alt=""></div><h4>櫃檯收銀機 T80</h4><p>15.6吋超大雙螢幕，內建高速出單機，超强擴展，高效兼容。</p><a href="gx-hardware_t80.html" title="">了解更多</a></div>',
          '<div id="t1" class="datatarget"><div class="prod-img"><img src="image/jmenu/retail_prod_02.jpg" alt=""></div><h4>櫃檯收銀機 T1</h4><p>高通驍龍， 8 核處理器，業界首創，雙螢幕雙系統，貼心的一體式配置。</p><a href="gx-hardware_t1.html" title="">了解更多</a></div>',
          '<div id="h10" class="datatarget"><div class="prod-img"><img src="image/jmenu/h10.jpg" alt=""></div><h4>櫃檯收銀機 H10</h4><p>獨特的電源開關模式設計，內建高速出單機，帶有自動切刀的 80mm 高速熱感列印，可快速列印並切出多張票據。</p><a href="gx-hardware_h10.html" title="">了解更多</a></div>',
          '<div id="v8" class="datatarget"><div class="prod-img"><img src="image/jmenu/v8.jpg" alt=""></div><h4>櫃檯收銀機 V8</h4><p>垂直電容式不占空間小巧的機身，獨特的垂直電容式液晶顯示螢幕，讓商品顯示的筆數更多，更符合查看的便利性。</p><a href="gx-hardware_v8.html" title="">了解更多</a></div>',
          '<div id="v1" class="datatarget"><div class="prod-img"><img src="image/jmenu/mobile_pos.jpg" alt=""></div><h4>行動收銀機 V1</h4><p>5.5 寸超大螢幕，不怕老花眼看不清楚，同時開啟 10 個應用程式依然流暢。大容量電池連續工作長達 48 小時，待機高達 30 天以上。</p><a href="gx-hardware_v1.html" title="">了解更多</a></div>',
          '<div id="x990" class="datatarget"><div class="prod-img"><img src="image/jmenu/prod_invoice.jpg" alt=""></div><h4>行動收銀機 X990</h4><p>5.5 寸超大螢幕，不怕老花眼看不清楚，同時開啟 10 個應用程式依然流暢。大容量電池連續工作長達 48 小時，待機高達 30 天以上。</p><a href="gx-hardware_v1.html" title="">了解更多</a></div>',
          '<div id="aposA8" class="datatarget"><div class="prod-img"><img src="image/jmenu/APOS_A8.jpg" alt=""></div><h4>行動收銀機 APOS A8</h4><p>5.5吋大螢幕，四核心高速處理器，支援多種支付模式，大容量鋰電池，續航能力強，內建高速出單機，可印電子發票。</p><a href="gx-hardware_aposA8.html" title="">了解更多</a></div>',
          '<div id="hardware_menu_10" class="datatarget active"><div class="prod-img"><img src="image/jmenu/hardware.jpg" alt=""></div><h4>POS 設備</h4><p>POS 設備:川田 T80、商米 T1、川田 H10、川田 V8、商米 V1。</p></div>'
        ]
      },
      {
        title: "周邊設備",
        // subtitle: "周邊設備",
        cells: [
          "<div><a data-target='#peripherals_1' class='prod-features phs' href='gx-peripherals.html#s_machine'><div class='f-content pl-20'><h4>熱感式出單機</h4></div></a></div>",
          "<div><a data-target='#peripherals_2' class='prod-features phs' href='gx-peripherals.html#barcode'><div class='f-content pl-20'><h4>熱感條碼標籤機</h4></div></a></div>",
          "<div><a data-target='#peripherals_3' class='prod-features phs' href='gx-peripherals.html#e_invoice'><div class='f-content pl-20'><h4>熱感式電子發票機</h4></div></a></div>",
          "<div><a data-target='#peripherals_4' class='prod-features phs' href='gx-peripherals.html#scanner'><div class='f-content pl-20'><h4>條碼掃描器</h4></div></a></div>",
          "<div><a data-target='#peripherals_5' class='prod-features phs' href='gx-peripherals.html#till'><div class='f-content pl-20'><h4>錢櫃</h4></div></a></div>",
        ],
        photo: [
          '<div id="peripherals_1" class="datatarget"><div class="prod-img"><img src="image/jmenu/bp-t3bh.jpg" alt=""></div><h4>熱感式出單機</h4><p>TP-260 是一台輕鬆高速列印的熱感式出單機，具有高達 260 毫米打印速度。</p><a href="gx-peripherals.html#s_machine" title="">了解更多</a></div>',
          '<div id="peripherals_2" class="datatarget"><div class="prod-img"><img src="image/jmenu/godex-dt2.jpg" alt=""></div><h4>熱感條碼標籤機</h4><p>熱感條碼標籤機:列印效能全面升級 解析度 203 dpi (8 dots / mm)。</p><a href="gx-peripherals.html#barcode" title="">了解更多</a></div>',
          '<div id="peripherals_3" class="datatarget"><div class="prod-img"><img src="image/jmenu/invoice-printer.jpg" alt=""></div><h4>熱感式電子發票機</h4><p>熱感式電子發票機:快速列印，畫質清晰 列印速度 Max 170 mm / sec。</p><a href="gx-peripherals.html#e_invoice" title="">了解更多</a></div>',
          '<div id="peripherals_4" class="datatarget"><div class="prod-img"><img src="image/jmenu/scanner.jpg" alt=""></div><h4>條碼掃描器</h4><p>條碼掃描器:隨插即用，無須安裝 解碼能力 識讀所有標準一維碼。</p><a href="gx-peripherals.html#scanner" title="">了解更多</a></div>',
          '<div id="peripherals_5" class="datatarget"><div class="prod-img"><img src="image/jmenu/cashbox.jpg" alt=""></div><h4>錢櫃</h4><p>錢櫃:經濟簡約造型 尺寸 340 x 380 x 100 mm。</p><a href="gx-peripherals.html#till" title="">了解更多</a></div>',
          '<div id="hardware_menu_11" class="datatarget active"><div class="prod-img"><img src="image/jmenu/peripherals.jpg" alt=""></div><h4>周邊設備</h4><p>周邊設備:熱感式出單機、熱感條碼標籤機、熱感式電子發票機、條碼掃描器、錢櫃。</p></div>'
        ]
      }
    ]
  }

  // 滑出主選單
  $(document).on("mouseover", 'ul.nav > li > a', function() {
    currentHeader = this.id;
    if (typeof menu[this.id] == "object") {
      renderLeft(this.id);
      $(".menu").addClass("show");
      $(this).addClass('active').parent().siblings().children().removeClass('active').removeClass('at');
      //$(".menu").css({"z-index": "9999"});
      // var t = $('header').height();
      // $('.menu').css({'top':t});
      clearTime();
    }
  });


  $(document).on("mouseout", 'ul.nav > li > a', function() {
    OnHashChange();
  });
  // 第一欄位選單
  $(document).on("mouseover", 'ul.prod-nav > li > a', function() {
    //clearTime();
    $('ul.prod-nav > li > a.active').removeClass("active");
    $(this).addClass("active");
    var arr = this.id.split("_");
    var id = null;
    if (arr.length > 0)
      id = arr[arr.length - 1];
    if (typeof id == "string") {
      renderRight(parseInt(id, 10));
    }
  });
  // 第二欄位選單
  $(document).on("mouseover", '.prod-nav li a, .features-nav a', function() {
    $($(this).attr("data-target")).addClass('active').siblings().removeClass('active');
    //$($(this).attr("data-target")).fadeIn(200).siblings().fadeOut(0);
  });
  $(document).on("mouseover", '.menu', function() {
    $('ul.nav > li > a').removeClass('at');
    clearTime();
  });
  $(document).on("mouseout", '.menu, ul.nav > li > a', function() {
    clearTime();
    idShowme();
  });
  // ipad 選單右上角 關閉按鈕
  $(document).on("click", '#btn_closemenu', function() {
    clearTime();
    idShowme();
  });

  function idShowme() {
    idShow = setTimeout(function() {
      $(".menu").removeClass("show");
      OnHashChange();
      setTimeout(function() {
        $('ul.nav > li > a').removeClass('active');
      }, 500);
      // setTimeout(function(){
      // 	$(".menu").css({"z-index": "9999"})
      // 	var t = $('header').height();
      // 	$('.menu').css({'top':t});
      // }, 500);
    }, 300);
  }

  function clearTime() {
    if (idShow != null) {
      clearTimeout(idShow);
      idShow = null;
    }
  }

  function renderLeft(id) {
    $(".prod-nav").html("");
    var arr = menu[id];
    var first = -1;
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "string") {
        $(".prod-nav").append(arr[i]);
      } else {
        var props = (first == -1 ? "class='active'" : "") + " id='" + id + "_" + i + "' " +
          (typeof arr[i].href == "string" && arr[i].href.length > 0 ? "href='" + arr[i].href + "' " : "");
        if (i == 2) console.log(props)
        var props2 = (first == -1 ? "class='active'" : "") + " data-target='" + "#" + id + "_" + (i + 10) + "' " +
          (typeof arr[i].href == "string" && arr[i].href.length > 0 ? "href='" + arr[i].href + "' " : "");
        if (i == 2) console.log(props2)

        var a = (arr[i].title.indexOf("<a") == -1 && arr[i].title.indexOf("</a>") == -1) ?
          "<a " + props + props2 + ">" + arr[i].title + "</a>" :
          arr[i].title.replace("<a", "<a " + props + props2 + "active");
        var li = $("<li >" + a + "</li>").appendTo(".prod-nav");
        if (i == 2) console.log($(li).html())
        if (first == -1) first = i;
      }
    }
    renderRight(first);
  }

  function renderRight(index) {
    $(".display-area > .features-nav").html("");
    $(".display-area > .title").html("");
    $(".display-area > .prod-info").html("");
    if (typeof menu[currentHeader] == "object") {
      $(".display-area > .title").html(menu[currentHeader][index].subtitle);
      if (typeof menu[currentHeader][index].html == "string") {
        $(".display-area > .features-nav").html(menu[currentHeader][index].html);
      } else if (Array.isArray(menu[currentHeader][index].cells)) {
        var arr = menu[currentHeader][index].cells;
        var photo = menu[currentHeader][index].photo;
        for (var i = 0; i < arr.length; i++) {
          $(".display-area > .features-nav").append(arr[i]);
        }
        for (var i = 0; i < photo.length; i++) {
          $(".display-area > .prod-info").append(photo[i]);
        }
      }
    }
    $(".display-area > .title").css({
      display: $(".display-area > .title").html().length == 0 ? "none" : "block"
    });
  }


  $("div.menu").css({
    dispaly: "none",
    height: "0px",
  });


  $(document).on("click", 'a.prod-features', function() {
    $('#btn_closemenu').trigger("click");
  });

  // 硬體-周邊設備 #連結
  $(document).on("click", 'a.phs h4', function() {
    $('#btn_closemenu').trigger("click");
  });

  $(document).on("click", '.menu a', function() {
    $('#btn_closemenu').trigger("click");
  });



  // 如果選單是show的狀態, 就先停止flexslider的動畫, 當選單收起來時, 再開始flexslider
  // $('.flex-slider').flexslider('pause');
  // $('.flex-slider').flexslider('play');
}



function banner_bgswop() {
  var time = 350;
  $('body').find('.banner-solution-food-content').animate({
    'opacity': 1,
    'z-index': 1
  }, time);
  $(document).on('mouseover', 'a.solution-food-nav', function(e) {
    e.preventDefault();
    $('body').find('.banner-solution-retail-content').animate({
      'opacity': 0,
      'z-index': 0
    }, time + 30);
    $('body').find('.banner-solution-food-content').animate({
      'opacity': 1,
      'z-index': 1
    }, time);
    $('body').find('.solution-retail-nav').removeClass('active');
    $(this).addClass('active');
  });
  $(document).on('mouseover', 'a.solution-retail-nav', function(e) {
    e.preventDefault();
    $('body').find('.banner-solution-food-content').animate({
      'opacity': 0,
      'z-index': 0
    }, time + 30);
    $('body').find('.banner-solution-retail-content').animate({
      'opacity': 1,
      'z-index': 1
    }, time);
    $('body').find('.solution-food-nav').removeClass('active');
    $(this).addClass('active');
  });
  //
  // $(document).on('mouseover', '[data-hover-nav]', function(e) {
  //   e.preventDefault();
  //   var target_nav = $(this).attr('data-hover-nav');
  //   // removeClass
  //   $(this).parents().siblings().children().removeClass('active');
  //   $('body').find('[data-hover-c="' + target_nav + '"]').siblings('[data-hover-c]').removeClass('active');
  //   // addClass
  //   $(this).addClass('active');
  //   $('body').find('[data-hover-c="' + target_nav + '"]').addClass('active');
  //
  //   // var url = $(this).attr('href');
  //   // window.location.hash = url; // 網址加上頁面標籤
  // });
  // 自動切換
  // $(".banner-solution-nav ul li:first-child a").addClass("active");
  // setTimeout(autoAddClass, 3000);
  // function autoAddClass() {
  //   var next = $(".banner-solution-nav ul li a.active").removeClass("active").parent().next().children();
  //   if (next.length)
  //     $(next).addClass('active');
  //   else
  //     $('.banner-solution-nav ul li:first-child a').addClass('active');
  //   setTimeout(autoAddClass, 3000);
  // }

}

// 如果要勁道TAB內頁 要用cookie 記住 name 在叫出來 trigger it
function OnHashChange() {
  $(window).bind('hashchange', function() {
    var location = window.location;
    var hash = location.hash;
    var target = hash.replace('#', '');


    if ($('body').find('[data-tab-nav="' + target + '"]').parents().hasClass('header')) {
      //window.location == 'gx-restaurant-solution.html#mobile-pos';
      window.location == $(this).attr('[data-tab-nav]');
    }

    setTimeout(function() {
      //$('body').find('[data-tab-nav="' + target + '"]').trigger('click');

      $('body').find('[data-tab-nav="' + target + '"]').parents().siblings().children().removeClass('active');
      $('body').find('[data-tab-nav="' + target + '"]').addClass('active');
      $('body').find('[data-tab-content="' + target + '"]').siblings('[data-tab-content]').removeClass('active');
      $('body').find('[data-tab-content="' + target + '"]').addClass('active');

      var hasParent = $('body').find('[data-tab-nav="' + target + '"]').closest('[data-tab-content]').attr('data-tab-content');
      $('body').find('[data-tab-nav="' + hasParent + '"]').parents().siblings().children().removeClass('active');
      $('body').find('[data-tab-nav="' + hasParent + '"]').addClass('active');
      $('body').find('[data-tab-content="' + hasParent + '"]').siblings('[data-tab-content]').removeClass('active');
      $('body').find('[data-tab-content="' + hasParent + '"]').addClass('active');

      var Parent = $('body').find('[data-tab-nav="' + target + '"]').closest('[data-tab-content]').parents('[data-tab-content]').attr('data-tab-content');
      $('body').find('[data-tab-nav="' + Parent + '"]').addClass('active');

      //document.title = $('[data-tab-nav="' + target + '"]').text(); // 更換標題
      //console.log(target);

     //  $('html, body').stop().animate({
     //   scrollTop: 0
     // },'fast');

    }, 50);



      // 網址與頁面對應的選單狀態 (.header .nav a.at)
      if (window.location.toString().indexOf("gx-retail-solution") != -1) {
        $('.header .nav li a[id="retial_menu"]').addClass('at').siblings().children().removeClass('at');
      }
      if (window.location.toString().indexOf("gx-restaurant-solution") != -1) {
        $('.header .nav li a[id="restaurant_menu"]').addClass('at').siblings().children().removeClass('at');
      }
      if (window.location.toString().indexOf("software_") != -1) {
        $('.header .nav li a[id="software_menu"]').addClass('at').siblings().children().removeClass('at');
      }
      if (window.location.toString().indexOf("hardware_") != -1 || window.location.toString().indexOf("gx-peripherals.html") != -1) {
        $('.header .nav li a[id="hardware_menu"]').addClass('at').siblings().children().removeClass('at');
      }
      if (window.location.toString().indexOf("success") != -1) {
        $('.header .nav li a[href="gx-success.html"]').addClass('at').siblings().children().removeClass('at');
      }
      if (window.location.toString().indexOf("about") != -1) {
        $('.header .nav li a[href="gx-about.html"]').addClass('at').siblings().children().removeClass('at');
      }
      if (window.location.toString().indexOf("news") != -1) {
        $('.header .nav li a[href="gx-newslist_2017.html"]').addClass('at').siblings().children().removeClass('at');
      }
      if (window.location.toString().indexOf("support") != -1) {
        $('.header .nav li a[href="gx-support.html"]').addClass('at').siblings().children().removeClass('at');
      }



  });
  $(window).trigger('hashchange');
}


function dataTab() { // <div class="Controller-tab">[data-tab-nav="el"] [data-tab-content="el"]</div>
  $(document).on('click', '[data-tab-nav]', function(e) {
    e.preventDefault();
    var target = $(this).attr('data-tab-nav');
    window.location.hash = target; // 網址加上頁面標籤
    // removeClass
    $(this).parents().siblings().children().removeClass('active');
    $(this).addClass('active');
    $('body').find('[data-tab-content="' + target + '"]').siblings('[data-tab-default-content]').removeClass('active');
    $('body').find('[data-tab-content="' + target + '"]').siblings('[data-tab-content]').removeClass('active');
    $('body').find('[data-tab-content="' + target + '"]').addClass('active').siblings().removeClass('active');
    // 不是主選單的連結按鈕
    if ($(this).hasClass('target-active')) {
      $(this).parents().find('nav a').removeClass('active');
      $(this).parents().find('nav a[href="#' + target + '"]').addClass('active');
    }
    // show default content
    if ($(this).hasClass('default-nav')) {
      $('body').find('[data-tab-default-content="' + target + '"]').siblings('[data-tab-content]').removeClass('active');
      $('body').find('[data-tab-default-content="' + target + '"]').addClass('active');
      //$('body').find('.product-nav ol li a').removeClass('active');
      $('body').find('.product-nav ol li').removeClass('active');
    }
    // header nav
    if ($(this).parents().hasClass('header') || $(this).parents().hasClass('menu')) {
      window.location.hash = ' ';
      window.location.hash = target;
      $('#menu').removeClass('show');
    }
    paginationBottom_aside();
  });
}



function lightBox() { // 彈出視窗
  var target = $('#light-box');

  $(document).on('click', '.overlay, .close', function(e) {
    e.preventDefault();
    //el.trigger('click');
    $('body').css({
      'overflow': 'inherit'
    });
    $(target).removeClass('active');
  });

  $(document).on('click', '[data-light-box]', function(e) {
    var videoURL = $('#playerID').prop('src');

    // videoURL = videoURL.replace("&autoplay=1", "");
    // $('#playerID').prop('src','');
    // $('#playerID').prop('src',videoURL);
    //
    // $(this).children('iframe')[0].src += "&autoplay=0";

    e.preventDefault();
    var src = $(this).children('iframe').attr('src');
    $('body').css({
      'overflow': 'hidden'
    });
    $('#light-box iframe').attr('src', src);
    target.addClass('active');
  });
}


function effect_fixedHeader() {
  var time = 100;
  var header = $('#header.effect_fixed');
  var maiNnav = $('#main-nav.effect_fixed');
  var productNav = $('.product-nav ol li a');
  var subNavFirst;
  var headerHeight = header.height();
  var maiNnavHeight = maiNnav.height();
  var productNavHeight = productNav.height();
  var subNavFirstHeight;
  var mixHeight = headerHeight + maiNnavHeight;
  var sectionFirstHeight = $('main > article > [data-tab-content].active > section').outerHeight();

  $(window).scroll(function() {
    subNav_1 = $('main article [data-tab-content].active article nav.sub-nav-1:first-of-type');
    subNav_1_Height = subNav_1.height();
    subNav_2 = $('main article [data-tab-content].active article nav.sub-nav-2:first-of-type');
    subNav_2_Height = subNav_2.height();
    // 如果有第二層 tab 才讓 header 滑動時候隱藏
    if ($('main article [data-tab-content].active').hasClass('fiexd-tab')) {
      // 第一層 header & maiNnav
      if ($(this).scrollTop() >= (sectionFirstHeight - mixHeight)) {
        $('#menu').hide();
        header.stop().animate({
          'top': -headerHeight
        }, time);
        maiNnav.stop().animate({
          'top': -(headerHeight + maiNnavHeight)
        }, time);
        // product nav
        productNav.addClass('effect_fixed');
        productNav.addClass('active');
        // 第二層 sub-nav
        subNav_1.addClass('active');
        subNav_2.addClass('active').css({
           'top': '52px'
        });


      } else {
        $('#menu').show();
        header.stop().animate({
          'top': 0
        }, time);
        maiNnav.stop().animate({
          'top': headerHeight
        }, time);
        // product nav
        productNav.removeClass('effect_fixed');
        //productNav.removeClass('active');
        // 第二層 sub-nav
        subNav_1.removeClass('active');
        subNav_2.removeClass('active').css({
           'top': '0'
         });



      }
    }
    if ($('body').find('[data-tab-default-content]').hasClass('active')) {
      // product nav
      productNav.removeClass('effect_fixed');
      productNav.removeClass('active');
    }
    //--------------------------------------------------------------------------
    // subNav
    // if ($(this).scrollTop() > (sectionFirstHeight + subNavFirstHeight)) {
    //   subNavFirst.addClass('active');
    // } else {
    //   subNavFirst.removeClass('active');
    // }
    //--------------------------------------------------------------------------
  });
}

function paginationBottom_aside() { // 頁數按鈕 ---> section.page-頁數分配
  // 算出 section 值
  var section = $('main > article > section[data-tab-content].active section[class*="page-"]');
  var sectionLength = section.length; // section 數量
  var sectionHeight = section.height(); // section 高度
  var sectionTop; // section 視窗上方的距離
  // if (sectionLength) {
  //     sectionTop = section.offset().top;
  // }
  // 依照 section[data-tab-content].active ---> 動態新增頁數按鈕
  var pageLength = [];
  for (var i = 0; i < sectionLength; ++i) {
    var a = i + 1;
    var n = ".page-" + a;
    sectionTop = $('section[class*="' + n + '"]');
    pageLength.push($('<li><a href="' + n + '" data-effect="scroll">' + a + '</a></li>')); // scrollToHere();
  }
  $('.pagination-bottom ol').empty().append(pageLength);
  // 當 頁面滾動 .pagination-bottom li ---> 自動.active
  // $(window).on('scroll', function() {
  //   var Wscroll = $(this).scrollTop();
  //   sectionTop.each(function() {
  //     var ThisOffset = $(this).closest('section').offset();
  //     var targetHeight = ($(this).closest('section').outerHeight(true) / 1.5);
  //     if (Wscroll >= ThisOffset.top - targetHeight && Wscroll < ThisOffset.top + $(this).closest('section').outerHeight(true) - targetHeight) {
  //       var ThisOffsetHref = $(this).closest('section').attr('id');
  //       $(this).closest('section').addClass('active').siblings().removeClass('active');
  //       $('.pagination-bottom ol li a').addClass('active').parent().siblings().children().removeClass('active');
  //     }
  //   });
  // });


}

function additionSubtraction() {
  $(document).on('click', '[data-value="addition"]', function(e) {
    e.preventDefault();
    var num = +$(this).closest('figure').find('input').val() + 1;
    $(this).closest('figure').find('input').val(num).trigger("change");
  });
  $(document).on('click', '[data-value="subtraction"]', function(e) {
    e.preventDefault();
    var num = +$(this).closest('figure').find('input').val() - 1;
    $(this).closest('figure').find('input').val(num).trigger("change");
  });
  $(document).on('change', '[data-property="quantity"] dd input', function(e) {
    e.preventDefault();
    if ($(this).val() < 0) {
      $(this).val(0 - $(this).val());
    }
  });
}

function mobileMenuEffect() {
  if ($(window).width() <= 720) {
    // menu-icon
    $(document).on('click', '#menu-icon', function(e) {
      e.preventDefault();
      $('body').toggleClass('effect-body-left-slide');
    });
    // 第一層
    $(document).on('click', '#menu > li > a', function(e) {
      e.preventDefault();
      if ($(this).attr('href').length >= 2) {
        $('body').removeClass('effect-body-left-slide');
      } else {
        $('#menu').removeClass('effect-menu-content-left-slide').addClass('effect-menu-left-slide');
        $('#menu').addClass('effect-menu-left-slide');
        $(this).next().find('section > figure > *:nth-child(1)').addClass('effect-menu-content-left-slide');
        $(this).next().find('section > figure > *:nth-child(2)').addClass('effect-menu-content-left-slide');
      }
    });
    // 第二層
    $(document).on('click', '#menu article > section > figure > *:nth-child(2) li a', function(e) {
      e.preventDefault();
      if ($(this).attr('href').length >= 2) {
        $('body').removeClass('effect-body-left-slide');
      } else {
        $(this).parents('li').find('article > section > figure > *:nth-child(2)').removeClass('effect-menu-content-left-slide').addClass('effect-menu-left-slide');
        $(this).parents('li').find('article > section > figure > *:nth-child(3)').addClass('effect-menu-content-left-slide');
      }
    });
    // 第三層
    $(document).on('click', '#menu a', function(e) {
      e.preventDefault();
      if ($(this).attr('href').length >= 2) {
        $('body').removeClass('effect-body-left-slide');
      }
    });
    // 回上一層 按鈕
    $(document).on('click', '#menu article > section > figure > *:nth-child(1) a', function(e) {
      e.preventDefault();
      if ($(this).parent().next().hasClass('effect-menu-content-left-slide')) {
        $(this).parent().removeClass('effect-menu-content-left-slide');
        $(this).parent().next().removeClass('effect-menu-content-left-slide');
        $('#menu').removeClass('effect-menu-left-slide');
      } else {
        $(this).parents('li section figure').find('.effect-menu-content-left-slide').not('button.effect-menu-content-left-slide').removeClass('effect-menu-content-left-slide').prev().removeClass('effect-menu-left-slide').addClass('effect-menu-content-left-slide');
      }
    });
  }
}

function dataChangeClass() {
  $(document).on('click', '[data-change-class]', function(e) {
    e.preventDefault();
    var target = $(this).attr('data-change-class');
    $(this).parents().find('.change-content ol').removeClass().addClass(target);
  });
}



function videoAutoPlay() {
  $('.play-video').on('click', function(ev) {
    $(".effect-video-auto-play iframe")[0].src += "&autoplay=1";
    ev.preventDefault();
  });
  var target = $('.effect-video-auto-play');
  var target_at_play;
  var target_at;
  if (target.length) {
    target_at_play = target.offset().top - 1000;
  }
  if (target.length) {
    target_at = target.offset().top - 300;
  }
  $(window).scroll(function() {
    if ($(window).width() >= 992) {
      var c = '80%';
      var e = '100%';
      if ($(this).scrollTop() >= target_at_play) {
        var n = $(".effect-video-auto-play iframe").attr('src').includes("&autoplay=1");
        if (!n) {
          $('.play-video').trigger('click');
        }
      }
      if ($(this).scrollTop() >= target_at) {
        $(".effect-video-auto-play").css({
          'width': c
        });
      } else {
        $(".effect-video-auto-play").css({
          'width': e
        });
      }
    }
  });
}

function activeClass() {
  $(document).on('click', 'a', function() {
    $(this).parents().closest('ol').find('li button a').removeClass('active');
    $(this).parent().siblings().children().removeClass('active');
    $(this).parent().parent().siblings().children().removeClass('active');
    $(this).addClass('active');
  });
}

function scrollGoTop() {
  // 第一層 MENU
  $(document).on('click', '#main-nav ol li a', function() {
    if ($(this).parents().hasClass('effect_fixed')) {
      $("html, body").animate({
        scrollTop: 0
      }, 0);
      //return false;
    }
    $('body').find('.product-nav ol').removeClass('active');
  });
  // 第二層 MENU
  $(document).on('click', '.sub-nav-1 ol li a', function() {
    if ($(this).parents().hasClass('effect_fixed')) {
      if ($($.attr(this, 'href')).length) {
        var top = $(this).parents('.sub-nav-1').offset().top;
        $("html, body").animate({
          scrollTop: top
        }, "slow");
        return false;
      }
    }
  });
  $(document).on('click', '.sub-nav-2 ol li a', function() {
    if ($(this).parents().hasClass('effect_fixed')) {
      if ($($.attr(this, 'href')).length) {
        //var i = $('.product-nav ol li img').height();
        //var top = $('.product-nav').offset().top;
        //var navHeight = $(this).parents('.sub-nav-2').height();
        var top = $(this).parents('.sub-nav-2').parent('article').offset().top - 100;
        $("html, body").stop().animate({
          scrollTop: top
        }, "slow");
        return false;
      }
    }
  });
  // 第三層 MENU (服務生 & 櫃台)
  // $(document).on('click', '.product-nav ol li a', function() {
  //   if ($(this).parents().hasClass('effect_fixed')) {
  //     if ($($.attr(this, 'href')).length) {
  //       var top = $(this).parents('.sub-nav').offset().top;
  //       $("html, body").animate({
  //         scrollTop: top
  //       }, "slow");
  //       return false;
  //     }
  //   }
  // });
}



function productNav() {
  $('.product-nav ol').removeClass('active');
  $(document).on('click', '.product-nav ol li a', function(e) {
    e.preventDefault();
    var time = 0;
    var header = $('#header.effect_fixed');
    var maiNnav = $('#main-nav.effect_fixed');
    var headerHeight = header.height();
    var maiNnavHeight = maiNnav.height();
    var sectionHeight = $(this).closest('section').height();
    var productNavHeight = $(this).height();

    $('.product-nav ol li').removeClass('active');
    $(this).parent().addClass('active');
    $('body').find('[data-tab-default-content]').removeClass('active');

   //  header.stop().animate({
   //    'top': -headerHeight
   //  }, time);
   //  maiNnav.stop().animate({
   //    'top': -(headerHeight + maiNnavHeight)
   //  }, time);
   //
   //  $('html, body').stop().animate({
   //   scrollTop: (sectionHeight + headerHeight + maiNnavHeight) - productNavHeight
   // },'slow');

    if ($(this).parent().hasClass('active')) {
      $(this).parent().parent().addClass('active');
    }

   if ($(this).hasClass('effect_fixed')) {
     setTimeout(function(){
       $('html, body').stop().animate({
        scrollTop: (sectionHeight + headerHeight + maiNnavHeight) - productNavHeight
      },'slow');
     },80);
   }

    if ($(this).hasClass('active')) {
      setTimeout(function(){
        $(this).parents().closest('.sub-nav-2').addClass('active').animate({
         'top': productNavHeight
       },0);
      },80);
    }


  });
  $(document).on('click', '.product-nav ol li img', function(e) {
    e.preventDefault();
    $(this).parent().parent().find('a').trigger('click');
  });
}



function scroll_top() {
  $(document).on('click', 'a.scroll-to-top', function() {
    // if ($($.attr(this, 'href')).length) {
    //   var top = $($.attr(this, 'href')).offset().top - ($('#header.effect_fixed').height() + $('#main-nav.effect_fixed').height())
    //   $("html, body").animate({
    //     scrollTop: top
    //   }, "slow", function(){
    //     $('body').find($($.attr(this, 'href'))).trigger('click');
    //   });
    //   return false;
    // }
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
    $('body').find($($.attr(this, 'href'))).trigger('click');
    //$('body').find($($.attr(this, 'data-href'))).trigger('click');
    //console.log($($.attr(this, 'href')));
  });
}

function btn_active() {
  $(document).on('click', '#counter_bpos-btn', function() {
    $('body').find('[data-tab-nav="counter_bpos"]').addClass('active');
  });
}




function scrollToHere() {
  $(document).on('click', 'a', function() {
    //e.preventDefault();
    // 關閉複選單 dataToggleNav
    //$(this).parents().find('[data-toggle-content]').removeClass('active');
    // 如果有 .not-scroll 就不要滑動至該區塊
    if ($(e.target).hasClass('not-scroll')) {
      e.preventDefault();
      return;
    }
    // 手機板 - 目標tooltip顯示
    if ($(window).width() <= 990) {
      $(e.target).closest('div').children('p').addClass('active');
    }

    if ($($.attr(this, 'href')).length) {
      if ($(e.target).parents().hasClass('menu')) {
        //console.log('okok');
      }
      if ($(e.target).parents().hasClass('sub-nav-1')) { // 第二層 .sub-nav選單
        var subNavHeight = $(e.target).parents('.sub-nav').height();
        $('html, body').stop().animate({
          scrollTop: $($.attr(this, 'href')).offset().top - subNavHeight
        }, 350, function() {
          $('.sub-nav-1').addClass('active');
        });
      } else {
        $('html, body').stop().animate({ // 一般 <a>
          scrollTop: $($.attr(this, 'href')).offset().top - ($('#header.effect_fixed').height() + $('#main-nav.effect_fixed').height())
        }, 350, function() {
          if ($(window).width() <= 990) {
            // 手機板 - 目標tooltip隱藏
            $(e.target).closest('div').children('p').delay(3000).removeClass('active');
          }
        });
      }
      // if ($(e.target).parents().hasClass('product-nav')) { // 第三層
      //   var productNavHeight = $(e.target).parents('.product-nav h5').height();
      //   console.log('opop');
      //   $('html, body').stop().animate({
      //     scrollTop: $($.attr(this, 'href')).offset().top - productNavHeight
      //   }, 350, function() {
      //     $('.product-nav').addClass('active');
      //   });
      // }
    }

  });
}





// function scrollTop() {
//   $(document).on('click', 'a.scroll-to-top', function(e) {
//     e.preventDefault();
//     $('html, body').stop().animate({ // 一般 <a>
//       scrollTop: $($.attr(this, 'href')).offset().top - ($('#header.effect_fixed').height() + $('#main-nav.effect_fixed').height())
//     }, 350);
//   });
// }

function dataTriggerLinkID() {
  $(document).on('click', '[data-trigger-LinkID]', function(e) {
    e.preventDefault();
    var trigger_LinkID = $(this).attr('data-trigger-LinkID');
    $(trigger_LinkID).trigger('click');
  });
}

function fullbox() {
  var heaH = $('.header').outerHeight();
  var pagH = $('.page-header').outerHeight();
  $('.full-banner').css({
    width: $(window).width(),
    height: $(window).height() - (heaH + pagH)
  });
}

function dataToggleNav() { // <div class="Toggle-nav">[data-toggle-nav="el"] [data-toggle-content="el"]</div>
  $(document).on('click', '[data-toggle-nav]', function(e) {
    e.preventDefault();
    var target_nav = $(this).attr('data-toggle-nav');
    // toggleClass
    $(this).toggleClass('active');
    $('body').find('[data-toggle-content]').not('[data-toggle-content="' + target_nav + '"]').removeClass('active'); // 除了自身區塊以外的 data-toggle 都要關閉
    $('body').find('[data-toggle-content="' + target_nav + '"]').toggleClass('active');
  });
  // 子項目 當click 要關閉 其 下拉選單
  $(document).on('click', '[data-toggle-content] li a', function(e) {
    e.preventDefault();
    if ($(window).width() <= 990) {
      $(this).parents('[data-toggle-content]').removeClass('active');
    }
  });
}


function placeholder_title() { // 註冊 & 登入 (.placeholder-title) 表格關注標題
  $('.login-register input').removeAttr('placeholder');
  $('.login-register .LG-tab-content select').parent().find('.placeholder-title').hide();
  $(document).on('focus', '.login-register input', function(e) {
    e.preventDefault();
    $(this).parent().find('.placeholder-title').addClass('animation');
  });
  $(document).on('focusout', '.login-register input', function(e) {
    e.preventDefault();
    if ($(this).val() == '') {
      $(this).parent().find('.placeholder-title').removeClass('animation');
    }
  });
  $(document).on('change', '.login-register .LG-tab-content select', function(e) {
    $(this).parent().find('.placeholder-title').show().addClass('animation');
  });
  setTimeout(function() {
    $('.login-register input[type=text], .login-register input[type=password], .login-register input[type=number], .login-register input[type=email], .login-register input[type=captcha]').each(function() {
      var value = $(this).val();
      if (value.length > 0 && value != "Default text") {
        $(this).parent().find('.placeholder-title').addClass('animation');
        //console.log($(this).val());
      } else {
        $(this).parent().find('.placeholder-title').removeClass('animation');
        //console.log($(this).val());
      }
    });
  }, 100);
}

function menu_active() { // 主選單 active
  var p = window.location.pathname;
  if (p.length === 0 || p === "/" || p.match(/^\/?index/)) {
    $('#nav_jabez li a').removeClass('active');
    $('#nav_jabez li:first-child a').addClass('active');
  } else {
    //$('#nav_jabez li a[href*="' + location.pathname.split("/")[1] + '"]').addClass('active');
    $('#nav_jabez li a[href*="' + location.pathname.split("/")[2] + '"]').addClass('active');
  }
}

function Modal_box() { // 彈出視窗 Modal_box
  $(document).on('click', '[data-modal-btn]', function(e) {
    e.preventDefault();
    var target_btn = $(this).attr('data-modal-btn');
    $(this).parents('body').children().find('[data-modal-content]').css({
      'display': 'none'
    });
    $('[data-modal-content="' + target_btn + '"]').css({
      'display': 'block'
    });
  });
  $(document).on('click', '.modal-content .close', function(e) {
    e.preventDefault();
    $(this).parents('[data-modal-content]').css({
      'display': 'none'
    });
  });
  $(document).on('click', '.forget-password-modal', function(e) {
    e.preventDefault();
    $(this).parents('[data-modal-content]').css({
      'display': 'none'
    });
  });
}

function pos_feature() { // JabezPOS雲端後台 - 功能
  $(window).scroll(function() {
    var a = $('#select_trade');
    var a_at;
    if (a.length) {
      a_at = a.offset().top - 100;
    }
    var position = a_at + $('#select_trade').height();
    var fg = $('#cloud_to_erp2');
    var fa_at;
    if (fg.length) {
      fa_at = fg.offset().top - 200;
    }
    if ($(this).scrollTop() > position && $(this).scrollTop() < fa_at) {
      $('#fix_nav_box').fadeIn(250);
    } else {
      $('#fix_nav_box').stop().fadeOut(100);
    }
    var as = $('#features_food');
    var as_at;
    if (as.length) {
      as_at = as.offset().top - 200
    }
    if ($(this).scrollTop() >= as_at) {
      $('.fix-nav-b').addClass('active');
      $('.fix-nav-a').removeClass('active');
    } else {
      $('.fix-nav-b').removeClass('active');
      $('.fix-nav-a').addClass('active');
    }
  });
  $('.features-retail-list, .features-food-list').on('click', function(e) {
    e.preventDefault();
  });
  $('#food_link a').on('click', function(e) {
    e.preventDefault();
    $('#food_link a').removeClass('active');
    $(this).addClass('active');
    var href = $(this).attr('href');
    $('.features-food-list').fadeOut(350);
    $(href).fadeIn(350);
  });
}

function dataTooltip() {
  $(document).on('click', '*[data-tooltip]:not([data-tooltip=""])', function(e) {
    e.preventDefault();
    if ($(window).width() <= 990) {
      $('*[data-tooltip].active').not(this).removeClass('active');
      $(this).toggleClass('active');
    }
  });
}

function toggleColspan() { // JabezPOS雲端後台 - 價格表 (版面)
  //$('.price-tab-nav ul li:first-child a').trigger('click');
  //$('.price-table').addClass('animation'); // css3動畫
  if ($(window).width() >= 990) {
    $('#jabezpos_pricing .style-table thead tr th').attr('colspan', 1);
  } else if ($(window).width() <= 990) {
    $('#jabezpos_pricing .style-table thead tr th').attr('colspan', 2);
  }
}

function priceTable() { // JabezPOS雲端後台 - 價格表
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
  // 價格表 (下載價格表)
  $(document).on('click', '#myBtn_price', function() {
    $('#canvas_box').css('visibility', 'visible');
    $('main#gotop').hide();
  });
  $(document).on('click', '.close', function() {
    $('#canvas_box').css('visibility', 'hidden');
    $('main#gotop').show();
  });
}

// function effect_slider_1() {
//   $(".effect-slider-1").slick({
//     dots: true,
//   });
// }

// function effect_item_1() {
//   $(".effect-item-1").slick({
//     infinite: false, //不要loop
//     variableWidth: true, //自訂億寬度
//     slidesToShow: 1, //一次滑動一個項目
//     slidesToScroll: 1,
//     centerMode: true, //置中
//     dots: true,
//     arrows: true
//   });
//   $('.effect-item-1 .slick-dots li').eq(2).trigger('click');
// }


function footerAside() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height() + 200) {
      $('footer > aside').fadeIn(350);
    } else {
      $('footer > aside').fadeOut(350);
    }
  });
}


function dataClassDelete() {
  $('[data-class-delete]').each(function() {
    var item = $('[data-class-delete]').attr('data-class-delete');
    var n = item.split(',');
    $(n).each(function(i) {
        //console.log($('.'+ n[i]).parents('section[data-class-delete]'));
        $('.'+ n[i]).parents('section[data-class-delete]').find('.'+ n[i]).remove();
        //$(this).parents('section').find('.'+ n[i]).remove();
    });
  });
}


function ad() {
  // 清除 adbox Cookies
  //Cookies.remove('ADCookie');
  //
  var ADCookie = Cookies.get("ADCookie");

  if (ADCookie == null) {
    setTimeout(function() {
      $('body#index').addClass('ADanimate');
    }, 800);
  }

  $(document).on('click', '#ad_area .close, #ad_area a', function() {
    //e.preventDefault();
    Cookies.set('ADCookie', 'AD-show', {
      expires: 1
    });
    $(this).remove();
    setTimeout(function() {
      $('body#index').removeClass('ADanimate');
    }, 500, function() {
      $('#ad_area').remove();
    });
  });
  // 印出 Cookies
  //console.log(document.cookie);
}








////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
// function loadMe() {
//   w3.includeHTML(callback);
//   $(document).on('click', '#v1', function() {
//     $('.mobile-pos_block-area').load('html/product-overview/v1.html');
//   });
// }

////////////////////////////////////////////////////////////////////////////////
function callback() {
  //scrollToHere();
  paginationBottom_aside();
  effect_fixedHeader();
  lightBox();
  //dataClassDelete();
  OnHashChange();


  // jabezpos 輪播
  $('#jabezpos_overview-slider').owlCarousel({
    center: true,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 8000,
    paginationSpeed : 8000,
    autoplayHoverPause: true,
    items : 1
  })



  // 概觀 flexslider + 文自動畫

    $('#page-jabezpos .flexslider').flexslider({
      animation: "slide",
      start: function(slider) {
          slider.slides.eq(slider.currentSlide).addClass('flex-active-transition');
      },
      before: function(slider) {
          slider.slides.eq(slider.currentSlide).removeClass('flex-active-transition');
      },
      after: function(slider) {
          slider.slides.eq(slider.currentSlide).addClass('flex-active-transition');
      }
    });

    $('[data-tab-content="jabezpos_overview"] .flexslider').flexslider({
      animation: "slide",
      start: function(slider) {
          slider.slides.eq(slider.currentSlide).addClass('flex-active-transition');
      },
      before: function(slider) {
          slider.slides.eq(slider.currentSlide).removeClass('flex-active-transition');
      },
      after: function(slider) {
          slider.slides.eq(slider.currentSlide).addClass('flex-active-transition');
      }
    });

    // $('[data-tab-content="jabezpos"] .flexslider').flexslider({
    //   animation: "slide",
    //   start: function(slider) {
    //       slider.slides.eq(slider.currentSlide).addClass('flex-active-transition');
    //   },
    //   before: function(slider) {
    //       slider.slides.eq(slider.currentSlide).removeClass('flex-active-transition');
    //   },
    //   after: function(slider) {
    //       slider.slides.eq(slider.currentSlide).addClass('flex-active-transition');
    //   }
    // });

}
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  w3.includeHTML(callback);
  //$("img.lazyload").lazyload();
  jMenu();

  dataTab();
  banner_bgswop();
  OnHashChange();
  //dataClassDelete();

  scrollGoTop();
  productNav();
  scroll_top();
  footerAside();

  additionSubtraction();
  //mobileMenuEffect();
  dataChangeClass();
  ad();
  //activeClass();
  dataTriggerLinkID();
  dataTooltip();
  toggleColspan();
  priceTable();

  dataToggleNav();

  // effect_slider_1();
  // effect_item_1();

  menu_active();
  Modal_box();
  pos_feature();


  //---------------------------------------------------------------------------
  //







  //---------------------------------------------------------------------------
  // 聯絡我們表單
  setTimeout(FunSetContactUsForm, 2000);



  //---------------------------------------------------------------------------
  $(document).on('click', '.cd-primary-nav a', function() {
    $('.cd-nav-trigger').trigger('click');
  });

  //---------------------------------------------------------------------------
  // AOS.init({
  //   offset: 200,
  //   duration: 600,
  //   easing: 'ease-in-sine',
  //   delay: 500,
  // });

  //---------------------------------------------------------------------------

  // 最新消息 跑馬燈
  var $marqueeUl = $('#abgne_marquee ol'),
    $marqueeli = $marqueeUl.append($marqueeUl.html()).children(),
    _height = $('#abgne_marquee').height() * -1,
    scrollSpeed = 600,
    timer,
    speed = 7000 + scrollSpeed;

  // 幫左邊 $marqueeli 加上 hover 事件
  // 當滑鼠移入時停止計時器；反之則啟動
  $marqueeli.hover(function() {
    clearTimeout(timer);
  }, function() {
    timer = setTimeout(showad, speed);
  });

  // 控制跑馬燈移動的處理函式
  function showad() {
    var _now = $marqueeUl.position().top / _height;
    _now = (_now + 1) % $marqueeli.length;

    //  // $marqueeUl 移動
    $marqueeUl.animate({
      top: _now * _height
    }, scrollSpeed, function() {
      // 如果已經移動到第二組時...則馬上把 top 設 0 來回到第一組
      // 藉此產生不間斷的輪播
      if (_now == $marqueeli.length / 2) {
        $marqueeUl.css('top', 0);
      }
    });

    // 再啟動計時器
    timer = setTimeout(showad, speed);
  }

  // 啟動計時器
  timer = setTimeout(showad, speed);
  //---------------------------------------------------------------------------

  // 首頁 輪播
  $('#index_main-carouse').owlCarousel({
    center: true,
    loop: true,
    nav: true,
    dots: true,
    //autoplay: true,
    autoplayTimeout: 8000,
    paginationSpeed : 8000,
    autoplayHoverPause: true,
    items : 1
  })

 //---------------------------------------------------------------------------
 // 首頁 套裝產品
  $('.index_products .owl-carousel').owlCarousel({
    center: true,
    loop: false,
    nav: true,
    dots: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      760: {
        items: 6,
        margin: 20
      },
      1200: {
        items: 7,
        margin: 20
      }
    }
  })
  //---------------------------------------------------------------------------




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
  // footer成功案例 #連結至正確tab頁面
  // $(document).on('click', '.success-list li a', function(e) {
  //   e.preventDefault();
  //   var hash = $(this).attr('href');
  //   var index = $(this).parent().index() + 1;
  //   if (window.location.hash != 'gx-success.html') {
  //     $(location).attr('href', hash.replace('/', ''));
  //     $("html, body").animate({
  //       scrollTop: 0
  //     }, "fast");
  //   } else if (window.location.hash == 'gx-success.html') {
  //     successtab();
  //   }
  //
  //   function successtab() {
  //     $("html, body").animate({
  //       scrollTop: 0
  //     }, "fast");
  //     if (hash) {
  //       $('ul.tab2 li:nth-child(' + index + ')').trigger('click').siblings('.active').removeClass('active');
  //     }
  //   }
  // });
  //-----------------------------------------------------------------------------
  // footer關於宣揚 #連結至正確tab頁面
  // $(document).on('click', '.about-list li.about a', function(e) {
  //   e.preventDefault();
  //   var hash = $(this).attr('href');
  //   var index = $(this).parent().index() + 1;
  //   if (window.location.hash != 'gx-about.html') {
  //     $(location).attr('href', hash.replace('/', ''));
  //     $("html, body").animate({
  //       scrollTop: 0
  //     }, "fast");
  //   } else if (window.location.hash == 'gx-about.html') {
  //     abouttab();
  //   }
  //
  //   function abouttab() {
  //     $("html, body").animate({
  //       scrollTop: 0
  //     }, "fast");
  //     if (hash) {
  //       $('ul.tabs li:nth-child(' + index + ')').trigger('mouseover').siblings('.active').removeClass('active');
  //     }
  //   }
  // });

});
////////////////////////////////////////////////////////////////////////////////
$(window).load(function() {
  //menu_active();
  //dataTab();
  Modal_box();
  //hashchangeThenGoHere();





  //----------------------------------------------------------------------------
  // 所有 後方是 .html 的檔案 前方都加上 gx-
  //----------------------------------------------------------------------------


});
////////////////////////////////////////////////////////////////////////////////
$(window).resize(function() {



});
////////////////////////////////////////////////////////////////////////////////
