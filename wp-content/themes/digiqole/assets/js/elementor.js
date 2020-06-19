
( function ($, elementor) {
	"use strict";

   
    var DIGIQOLE = {

        init: function () {
            
            var widgets = {
               'newszone-post-grid-slider.default': DIGIQOLE.Newszone_post_grid_slider,
               'newszone-post-block-slider.default': DIGIQOLE.Newszone_post_block_slider,
               'newszone-main-slider.default': DIGIQOLE.Newszone_main_slider,
               'newszone-post-slider.default': DIGIQOLE.Newszone_post_slider,
               'newszone-editor-pick-post-slider.default': DIGIQOLE.Newszone_editor_pick_post_slider,
               'newszone-video-post-slider2.default': DIGIQOLE.Newszone_video_slider2,
               'newszone-post-grid-loadmore.default': DIGIQOLE.Newszone_post_grid_loadmore,
		          
            };
            $.each(widgets, function (widget, callback) {
                elementor.hooks.addAction('frontend/element_ready/' + widget, callback);
            });
           
      },
            /* ----------------------------------------------------------- */
            /*  Grid slider
            /* ----------------------------------------------------------- */
            Newszone_post_grid_slider:function($scope){
            
               var $container = $scope.find('.weekend-top');
               var conrol_data = $container.attr('data-controls');
               var autoslide = true;
               var dot_nav = true;
               var nav_show = false;
               var item_count = true;
               if(conrol_data){
                  var controls = JSON.parse($container.attr('data-controls'));
                  autoslide = Boolean(controls.auto_nav_slide?true:false);
                  dot_nav = Boolean(controls.dot_nav_show?true:false);
                  nav_show = Boolean(controls.nav_show?true:false);
                  item_count = parseInt( controls.item_count );
               }
            
               if ($container.length > 0) {
                     $container.owlCarousel({
                        items: item_count,
                        loop: true,
                        autoplay: autoslide,
                        nav: nav_show,
                        dots: dot_nav,
                        autoplayTimeout: 8000,
                        autoplayHoverPause: false,
                        mouseDrag: true,
                        smartSpeed: 1100,
                        margin:30,
                        navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"],
                        responsive: {
                           0: {
                              items: 1,
                           },
                           600: {
                              items: 2,
                           },
                           1000: {
                              items:item_count,
                           }
                        }
                  
                     });
               }
          
         },

           /* ----------------------------------------------------------- */
            /*  Post block slider
            /* ----------------------------------------------------------- */
            Newszone_post_block_slider:function($scope){
            
               var $container = $scope.find('.block-slider');
               
               
               if ($container.length > 0) {
                  var controls= JSON.parse($container.attr('data-controls'));
                  var autoslide = Boolean(controls.auto_nav_slide?true:false);
                  var dot_nav = Boolean(controls.dot_nav_show?true:false);
                  var item_count = parseInt( controls.item_count );
                  
                     $container.owlCarousel({
                        items: item_count,
                        loop: true,
                        autoplay: autoslide,
                        nav: false,
                        dots: dot_nav,
                        autoplayTimeout: 8000,
                        autoplayHoverPause: false,
                        mouseDrag: true,
                        smartSpeed: 1100,
                        margin:30,
                        navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"],
                        responsive: {
                           0: {
                              items: 1,
                           },
                           600: {
                              items: 2,
                           },
                           1000: {
                              items: 3,
                           },
                           1200: {
                              items:item_count,
                           }
                        }
                  
                     });
               }
          
         },

            /* ----------------------------------------------------------- */
            /*  main slider
            /* ----------------------------------------------------------- */
            Newszone_main_slider:function($scope){
            
               var $container = $scope.find('.main-slider');
               var control_data = $container.attr('data-controls');
               var autoslide = true;
               var nav = true;
               var dot = false;
               if(control_data){
                  var controls= JSON.parse($container.attr('data-controls'));
                  var autoslide = Boolean(controls.auto_nav_slide?true:false);
                  var nav = Boolean(controls.dot_nav_show?true:false);
                  var dot = Boolean(controls.slider_dot_show?true:false);
               }
               
               if ($container.length > 0) {
                     $container.owlCarousel({
                        items: 3,
                        loop: true,
                        autoplay: autoslide,
                        nav: nav,
                        dots: dot,
                        autoplayTimeout: 5000,
                        autoplayHoverPause: true,
                        mouseDrag: true,
                        smartSpeed: 1100,
                        margin:30,
                       
                        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                        responsive: {
                           0: {
                              items: 1,
                           },
                           600: {
                              items: 1,
                           },
                           1000: {
                              items:1,
                           },
                           1300: {
                              items:1,
                           }
                        }
                  
                     });
                     $('.main-slider').on('mouseleave',function(){
                        $container.trigger('play.owl.autoplay',[1000])
                    })
                    $('.main-slider').on('mouseover',function(){
                     $container.trigger('stop.owl.autoplay')
                    });
               };

               var $container2 = $scope.find('.main-slide.style4');
               var conrol_data = $container2.attr('data-controls');
               var autoslide1 = true;
               var nav1 = true;
               var dot1 = false;
               if(conrol_data){
                  var controls1= JSON.parse($container2.attr('data-controls'));
                  var autoslide1 = Boolean(controls1.auto_nav_slide?true:false);
                  var nav1 = Boolean(controls1.dot_nav_show?true:false);
                  var dot1 = Boolean(controls1.slider_dot_show?true:false);
               }
               if ($container2.length > 0) {
                     $container2.owlCarousel({
                        items: 1,
                        loop: true,
                        autoplay: autoslide1,
                        nav: nav1,
                        dots: dot1,
                        autoplayTimeout: 5000,
                        autoplayHoverPause: true,
                        mouseDrag: true,
                        smartSpeed: 1100,
                        margin:30,
                        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                        responsive: {
                           0: {
                              items: 1,
                           },
                           600: {
                              items: 1,
                              stagePadding: 30,
                           },
                           1300: {
                              items:1,
                              stagePadding: 200,
                           }
                        }
                  
                     });
                  
               }
         },
           
            /* ----------------------------------------------------------- */
            /*  post slider
            /* ----------------------------------------------------------- */
            Newszone_post_slider:function($scope){
            
               var $container = $scope.find('.post-slider');
                
               if ($container.length > 0) {
                  var controls= JSON.parse($container.attr('data-controls'));
                  var autoslide = Boolean(controls.auto_nav_slide?true:false);
                  var dot_nav = Boolean(controls.dot_nav_show?true:false);
                  var nav = Boolean(controls.nav_show?true:false);
                  var item_count = parseInt(controls.item_count);
                  var margin = parseInt(controls.margin);
                  
                     $container.owlCarousel({
                        items: item_count,
                        loop: true,
                        autoplay: autoslide,
                        nav: nav,
                        dots: dot_nav,
                        autoplayTimeout: 8000,
                        autoplayHoverPause: true,
                        mouseDrag: true,
                        smartSpeed: 1100,
                        margin:margin,
                        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                        responsive: {
                           0: {
                              items: 1,
                           },
                           600: {
                              items: 2,
                           },
                           1000: {
                              items:2,
                           },
                           1200: {
                              items:item_count,
                           }
                        }
                  
                     });
                     $('.post-slider').on('mouseleave',function(){
                        $container.trigger('play.owl.autoplay',[1000])
                    })
                    $('.post-slider').on('mouseover',function(){
                     $container.trigger('stop.owl.autoplay')
                    });
               }
          
         },
            /* ----------------------------------------------------------- */
            /*video  post slider
            /* ----------------------------------------------------------- */
            Newszone_video_slider2:function($scope){
            
               var sync1 = $("#video-sync-slider1");
               var sync2 = $("#video-sync-slider2");
               var slidesPerPage = 4;
               var syncedSecondary = true;
             
               sync1.owlCarousel({
                 items : 1,
                 slideSpeed : 2000,
                 autoplayHoverPause:false,
                 nav: false,
                 autoplay: false,
                 dots: false,
                 loop: true,
                 responsiveRefreshRate : 200,
             }).on('changed.owl.carousel', syncPosition);
             
               sync2
                 .on('initialized.owl.carousel', function () {
                   sync2.find(".owl-item").eq(0).addClass("current");
                 })
                 .owlCarousel({
                 items : slidesPerPage,
                 dots: false,
                 nav: false,
                 smartSpeed: 200,
                 slideSpeed : 500,
                 slideBy: slidesPerPage,
                 responsiveRefreshRate : 100,
                 responsive: {
                  0: {
                     items: 1,
                  },
                  500: {
                     items: 2,
                  },
                  768: {
                     items: 3,
                  },
                  1000: {
                     items:slidesPerPage,
                  }
               }

               }).on('changed.owl.carousel', syncPosition2);
             
               function syncPosition(el) {
               
                 var count = el.item.count-1;
                 var current = Math.round(el.item.index - (el.item.count/2) - .5);
                 
                 if(current < 0) {
                   current = count;
                 }
                 if(current > count) {
                   current = 0;
                 }
                 
                 //end block
             
                 sync2
                   .find(".owl-item")
                   .removeClass("current")
                   .eq(current)
                   .addClass("current");
                     var onscreen = sync2.find('.owl-item.active').length - 1;
                     var start = sync2.find('.owl-item.active').first().index();
                     var end = sync2.find('.owl-item.active').last().index();
                 
                 if (current > end) {
                   sync2.data('owl.carousel').to(current, 100, true);
                 }
                 if (current < start) {
                   sync2.data('owl.carousel').to(current - onscreen, 100, true);
                 }
               }
               
               function syncPosition2(el) {
                 if(syncedSecondary) {
                   var number = el.item.index;
                   sync1.data('owl.carousel').to(number, 100, true);
                 }
               }
               
               sync2.on("click", ".owl-item", function(e){
                 e.preventDefault();
                 var number = $(this).index();
                 sync1.data('owl.carousel').to(number, 300, true);
               });
          
         },

         
         
         /* ----------------------------------------------------------- */
         /*   Post grid ajax load
         /* ----------------------------------------------------------- */
         
         Newszone_post_grid_loadmore:function($scope){
            var $container = $scope.find('.digiqole-post-grid-loadmore');
            if ($container.length > 0) {
               $container.on('click',function(event){
                  event.preventDefault();

                  var $that = $(this);
                  var ajaxjsondata = $that.data('json_grid_meta');
                  var digiqole_json_data = Object (ajaxjsondata);

                  var contentwrap = $scope.find('.grid-loadmore-content'), // item contentwrap
                     postperpage = parseInt(digiqole_json_data.posts_per_page), // post per page number
                     showallposts = parseInt(digiqole_json_data.total_post); // total posts count

                     var items = contentwrap.find('.grid-item'),
                     totalpostnumber = parseInt(items.length),
                     paged =  parseInt( totalpostnumber / postperpage ) + 1; // paged number

                     $.ajax({
                        url: digiqole_ajax.ajax_url,
                        type: 'POST',
                        data: {action: 'digiqole_post_ajax_loading',ajax_json_data: ajaxjsondata,paged:paged},
                        beforeSend: function(){

                           $('<i class="fa fa-spinner fa-spin" style="margin-left:10px"></i>').appendTo( "#digiqole-post-grid-loadmore" ).fadeIn(100);
                        },
                        complete:function(){
                           $scope.find('.digiqole-post-grid-loadmore .fa-spinner ').remove();
                        }
                     })

                     .done(function(data) {

                           var $pstitems = $(data);
                           $scope.find('.grid-loadmore-content').append( $pstitems );
                           var newLenght  = contentwrap.find('.grid-item').length;

                           if(showallposts <= newLenght){
                              $scope.find('.digiqole-post-grid-loadmore').fadeOut(300,function(){
                                 $scope.find('.digiqole-post-grid-loadmore').remove();
                              });
                           }

                     })

                     .fail(function() {
                        $scope.find('.digiqole-post-grid-loadmore').remove();
                     });

               });
         }


         },
         
           /* ----------------------------------------------------------- */
            /*  Editor pick post slider
            /* ----------------------------------------------------------- */
            Newszone_editor_pick_post_slider:function($scope){
            
               var $container = $scope.find('.editor-pick-post-slider');
                
               
               
               if ($container.length > 0) {
                  var controls= JSON.parse($container.attr('data-controls'));
                  var autoslide = Boolean(controls.auto_nav_slide?true:false);
                  var nav = Boolean(controls.dot_nav_show?true:false);
                  var item_count = parseInt(controls.item_count);
                  
                     $container.owlCarousel({
                        items: item_count,
                        loop: true,
                        autoplay: autoslide,
                        nav: false,
                        dots: nav,
                        autoplayTimeout: 8000,
                        autoplayHoverPause: true,
                        mouseDrag: true,
                        smartSpeed: 1100,
                        margin:30,
                        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                        responsive: {
                           0: {
                              items: 1,
                           },
                           600: {
                              items: 2,
                           },
                           1000: {
                              items:item_count,
                           }
                        }
                  
                     });

                     $('.editor-pick-post-slider').on('mouseleave',function(){
                        $container.trigger('play.owl.autoplay',[1000])
                    })
                    $('.editor-pick-post-slider').on('mouseover',function(){
                     $container.trigger('stop.owl.autoplay')
                    });
               }
          
         },
     
    };
    $(window).on('elementor/frontend/init', DIGIQOLE.init);
    
}(jQuery, window.elementorFrontend) ); 