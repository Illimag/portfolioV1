"use strict";
/*--------------------------------------------------------------
 TABLE OF CONTENTS:
 ----------------------------------------------------------------
 # Vars
 # Settings
 # Document Ready

 # Functions
 ## Function Exists
 ## Sticky Header
 ## Prepare Navigation Active Item
 ## Show - Hide Navigation
 ## Click Navigation
 ## Prevent Navigation With Submenu
 ## Back To Top Button
 ## Decoration Height
 ## Portfolio
 ## Blog
 ## Content Parallax
 ## LightBox - Featherlight
 ## Validate Form - Contact Form
 ## Google Maps
 ## Accordion
 ## Toggle
 ## Tabs
 ## Gallery
 ## Arrange Widget Recent Projects
 --------------------------------------------------------------*/


/*--------------------------------------------------------------
 # Vars
 --------------------------------------------------------------*/
if ( ish == null || typeof(ish) !== "object" ) {
	var ish = {}
}

var ishStickyOn = false;
var ishAnimValue = 300;
var ishPageEffectAnimSpeed = 500; 
var ishCurrentScreenTopPos = 0;
var ishMacy;
var ishMacyActive = false;
var ishPortfolioAnimation;
var ishBlogAnimation;
var ishPortfolioTimer;


/*--------------------------------------------------------------
 # Settings
 --------------------------------------------------------------*/
var ishStickySmart = true;


/*--------------------------------------------------------------
 # Document Ready
 --------------------------------------------------------------*/
jQuery(document).ready(function($) {

	ish.pageEffectOnLoad();
	ish.activatePortfolio();
	ish.activateBlog();
	ish.controlStickyHeader();
	ish.activateContentParallax();
	ish.prepareNavigationActiveItem();
	ish.showHideNavigation();
	ish.backToTopButton();
	ish.clickNavigation();
	ish.preventNavWithSubmenu();
	ish.activateLightBox();
	ish.validateForm();
	ish.decorationHeight();
	ish.activateAccordion();
	ish.activateToggle();
	ish.activateTabs();
	ish.activateGallery();
	ish.arrangeWidgetRecentProjects();
	
	ish.pageEffectOnUnload();

});


/*--------------------------------------------------------------
 # Functions
 --------------------------------------------------------------*/


/*--------------------------------------------------------------
 ## Function Exists
 --------------------------------------------------------------*/
function functionExists( name ) {
	return( 'function' === eval('typeof ish.' + name) );
}


/*--------------------------------------------------------------
 ## Add page effect on load page and on leave page
 --------------------------------------------------------------*/
if ( ! functionExists( 'pageEffectOnLoad' ) ) {
	ish.pageEffectOnLoad = function() {

		setTimeout(function() {
			$('body').addClass('ish-no-blur');
			$('.ish-blurred-overlay').fadeOut( ishPageEffectAnimSpeed );
		}, 0);
	}
}

if ( ! functionExists( 'pageEffectOnUnload' ) ) {
	ish.pageEffectOnUnload = function() {

		jQuery('.ish-blurred a').click(function(event) {

			if ( !( event.defaultPrevented || event.isDefaultPrevented() || event.ctrlKey || event.shiftKey || event.metaKey || event.which == 2) ){
			

				var actTarget = event.currentTarget;
				var actTargetHref = actTarget.getAttribute('href');

				if ( 0 > actTargetHref.indexOf('#') && 0 > actTargetHref.indexOf('http') && false == jQuery( actTarget ).parent().hasClass('ish-has-submenu') ) {
					event.preventDefault();
					$('body').removeClass('ish-no-blur');
					$('.ish-blurred-overlay').fadeIn( ishPageEffectAnimSpeed );
					setTimeout( function() {
						window.location = actTargetHref;
					}, ishPageEffectAnimSpeed );
				}

			}

		});
	}
}


/*--------------------------------------------------------------
 ## Sticky Header
 --------------------------------------------------------------*/
if ( ! functionExists( 'controlStickyHeader' ) ) {
	ish.controlStickyHeader = function() {

		jQuery(document).on('scroll', function() {

			var screenTop = jQuery(document).scrollTop();
			var scrollStepValue = 50;

			if ( ( ( ishCurrentScreenTopPos - scrollStepValue ) > screenTop ) ||
				( ( ishCurrentScreenTopPos + scrollStepValue ) < screenTop ) ) {

				var siteHeader = jQuery('.site-header');
				var ishHeader = jQuery('.ish-header');
				var headerHeight = siteHeader.find('.ish-header').outerHeight( true );
				var topValue = siteHeader.find('.ish-container-fluid:first-child').outerHeight( true ) - 100;

			
				if (( topValue < screenTop ) && ( false === ishStickyOn )) {

					ishStickyOn = true;
					siteHeader.find('.ish-header').css('display', 'block');

					ishHeader.stop( true, true ).fadeOut(ishAnimValue, function () {
						ishHeader.before('<div class="ish-replace-header" style="height: ' + headerHeight + 'px; width: 100%;"></div>');
						siteHeader.addClass('ish-sticky-on');

						if (false === ishStickySmart) {
							ishHeader.stop( true, true ).fadeIn(ishAnimValue);
						}

					});

					ishCurrentScreenTopPos = screenTop;

				} else if (( topValue < screenTop ) && ( true === ishStickyOn )) {

					if (ishCurrentScreenTopPos >= screenTop) {
						ishHeader.stop( true, true ).fadeIn(ishAnimValue);
					} else if (( ishCurrentScreenTopPos < screenTop ) && ( true === ishStickySmart )) {
						ishHeader.stop( true, true ).fadeOut(ishAnimValue);
					}

					ishCurrentScreenTopPos = screenTop;

				} else if (( topValue >= screenTop ) && ( true === ishStickyOn )) {

					ishStickyOn = false;
					ishHeader.stop( true, true ).fadeOut(ishAnimValue, function () {
						siteHeader.find('.ish-replace-header').remove();
						siteHeader.removeClass('ish-sticky-on');
						siteHeader.find('.ish-header').css('display', 'table');
						ishHeader.stop( true, true ).fadeIn(ishAnimValue);
					});

					ishCurrentScreenTopPos = screenTop;

				} else {
					ishCurrentScreenTopPos = screenTop;
				}
			}
		})
	}
}


/*--------------------------------------------------------------
 ## Prepare Navigation Active Item
 --------------------------------------------------------------*/
if ( ! functionExists( 'prepareNavigationActiveItem' ) ) {
	ish.prepareNavigationActiveItem = function() {
		var activeItem = jQuery('.ish-active-item');
		activeItem.parents('li:last').addClass('ish-active-item');
		activeItem.parents('li').find('ul').css('display', 'block');
	}
}


/*--------------------------------------------------------------
 ## Show - Hide Navigation
 --------------------------------------------------------------*/
if ( ! functionExists( 'showHideNavigation' ) ) {
	ish.showHideNavigation = function() {

		var showHideDelay = 500;
		var ishNavigation = jQuery('.ish-navigation');
		var setOpacity = function(displayVal){
			ishNavigation.css( 'opacity', displayVal );
		};

		jQuery('.ish-menu-container a, .ish-nav-close').click(function( event ) {
			event.preventDefault();
			if ( ishNavigation.hasClass('ish-nav-on') ) {
				ishNavigation.removeClass('ish-nav-on');
				setTimeout( function(){ setOpacity('0') }, showHideDelay );
			} else {
				setTimeout( function(){ setOpacity('1') }, 0 );
				ishNavigation.addClass('ish-nav-on');
			}
		});

		jQuery(document).keyup(function(e) {
			if (e.keyCode == 27) {
				ishNavigation.removeClass( 'ish-nav-on' );
				setTimeout( function(){ setOpacity('0') }, showHideDelay );
			}
		});
	}
}


/*--------------------------------------------------------------
 ## Click Navigation
 --------------------------------------------------------------*/
if ( ! functionExists( 'clickNavigation' ) ) {
	ish.clickNavigation = function() {
		jQuery('.ish-navigation li a').click(function() {
			var thisEl = jQuery(this);
			
			thisEl.siblings('ul').slideToggle();
		
		})
	}
}


/*--------------------------------------------------------------
 ## Prevent Navigation With Submenu
 --------------------------------------------------------------*/
if ( ! functionExists( 'preventNavWithSubmenu' ) ) {
	ish.preventNavWithSubmenu = function() {
		jQuery('.ish-has-submenu > a').click(function(event) {
			event.preventDefault();
		})
	}
}


/*--------------------------------------------------------------
 ## Back To Top
 --------------------------------------------------------------*/
if ( ! functionExists( 'backToTopButton' ) ) {
	ish.backToTopButton = function() {
		jQuery('.ish-back-to-top > a').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate( { scrollTop: 0 }, 500 );
		})
	}
}


/*--------------------------------------------------------------
 ## Decoration height
 --------------------------------------------------------------*/
if ( ! functionExists( 'decorationHeight' ) ) {
	ish.decorationHeight = function() {

		applyDecorHeight();

		jQuery(window).resize(function() {
			applyDecorHeight();
		});

		function applyDecorHeight() {
			var decorHeight = Math.round( 0.177 * jQuery(window).width() ) + 10 ;
			jQuery('.ish-decor-container').css('height', decorHeight + 'px');
			jQuery('.ish-no-content header').css('margin-bottom', '-' + decorHeight + 'px');
			jQuery('#map').css('margin', '-' + decorHeight + 'px 0');
		}
	}
}


/*--------------------------------------------------------------
 ## Portfolio
 --------------------------------------------------------------*/
if ( ! functionExists( 'activatePortfolio' ) ) {
	ish.activatePortfolio = function() {

		var portfolio = jQuery('.ish-pflo-gal.ish-2col');
		if ( portfolio.length > 0 ) {

			var checkPortfolio = function() {

				var windowWidth = window.innerWidth || document.body.clientWidth; 

				if ( 768 <= windowWidth ) {
					if ( !ishMacyActive ) {

					
						Macy.init({
							container: '.ish-pflo-gal.ish-2col',
							columns: 2
						});

						ishMacyActive = true;
						if (portfolio.hasClass('ish-scroll-anim')) {
					
							ishPortfolioAnimation = new AnimOnScroll({
								container_selector: '.ish-pflo-gal.ish-scroll-anim.ish-2col',
								items_selector: ' > .ish-item',
								minDuration: 0.4,
								maxDuration: 0.7,
								viewportFactor: 0,
								animate_odd_items: false,
								animate_even_items: true,
								animate_captions: true,
								even_items_animation_speed: 0.85
							});
						}
					}
				} else{
					if ( ishMacyActive ) {
						Macy.remove();
						ishPortfolioAnimation._remove();
						ishMacyActive = false;

					
						var ishPortfolio = jQuery('.ish-pflo-gal.ish-scroll-anim.ish-2col');
						if ( ishPortfolio.length ){
							ishPortfolio.find('.ish-caption').attr('style','');
						}

					}
				}

				};

			checkPortfolio();

			jQuery(window).resize(function() {

				clearTimeout(ishPortfolioTimer);
				ishPortfolioTimer = setTimeout(checkPortfolio, 300);

			});

		}

	}
}


/*--------------------------------------------------------------
 ## Blog
 --------------------------------------------------------------*/
if ( ! functionExists( 'activateBlog' ) ) {
	ish.activateBlog = function() {

		var blog = jQuery('.ish-blog-masonry.ish-2col');
		if ( blog.length > 0 ) {

			var checkBlog = function() {

				var windowWidth = window.innerWidth || document.body.clientWidth; 

				if ( 768 <= windowWidth ) {
					if ( !ishMacyActive ) {

					
						Macy.init({
							container: '.ish-blog-masonry.ish-2col',
							columns: 2
						});

						ishMacyActive = true;
						if (blog.hasClass('ish-scroll-anim')) {
						
							ishBlogAnimation = new AnimOnScroll({
								container_selector: '.ish-blog-masonry.ish-scroll-anim.ish-2col',
								items_selector: ' > .ish-item',
								minDuration: 0.4,
								maxDuration: 0.7,
								viewportFactor: 0,
								animate_odd_items: true,
								animate_even_items: true,
								animate_captions: false,
								even_items_animation_speed: 0.85
							});
						}
					}
				} else{
					if ( ishMacyActive ) {
						Macy.remove();
						ishBlogAnimation._remove();
						ishMacyActive = false;
					}
				}

			};

			checkBlog();

			jQuery(window).resize(function() {
				checkBlog();
			});

		}

	}
}


/*--------------------------------------------------------------
 ## Content Parallax
 --------------------------------------------------------------*/
if ( ! functionExists( 'activateContentParallax' ) ) {
	ish.activateContentParallax = function() {
		var parallaxSection = jQuery('.ish-content-parallax');

		if ( parallaxSection.length ) {
			var parallaxSpeed = jQuery.isNumeric( parallaxSection.attr('data-parallax-speed') ) ?
				parallaxSection.attr('data-parallax-speed') : 0.7;

			var positionContentParallax = function() {
				var scrolled = jQuery(window).scrollTop();

				if ( parallaxSection.attr('data-initial-top') ){
					parallaxSection.css('margin-top',
						parallaxSection.attr('data-initial-top') - scrolled + ( scrolled * parallaxSpeed ) + 'px' );
				} else {
					parallaxSection.attr('data-initial-top',
						(jQuery.isNumeric( parseInt( parallaxSection.css('margin-top'), 10 ) ) ) ?
							parseInt( parallaxSection.css('margin-top'), 10) : 0 );
					parallaxSection.css('margin-top',
						parallaxSection.attr('data-initial-top') - scrolled + ( scrolled * parallaxSpeed ) + 'px' );
				}

			};

			var callPositionContentParallax = function() {

				var windowWidth = window.innerWidth || document.body.clientWidth; 

				if ( 768 <= windowWidth ) {
					positionContentParallax();
				}
			};

			callPositionContentParallax();

			jQuery(document).scroll(function() {
				callPositionContentParallax();
			});

			jQuery(window).resize(function() {
				var scrolled = jQuery(window).scrollTop();

				parallaxSection.css('margin-top', '');
				parallaxSection.attr('data-initial-top', '');
				callPositionContentParallax();

			});

		}

	}
}


/*--------------------------------------------------------------
 ## LightBox - Featherlight
 --------------------------------------------------------------*/
if ( ! functionExists( 'activateLightBox' ) ) {
	ish.activateLightBox = function() {

		jQuery('body').lightGallery({
			selector: '.ish-lightbox, .ish-sc-gallery a',
			speed: 250,
			download: false,
			thumbnail: false,
			autoplay: false,
			autoplayControls: false
		});

	}
}


/*--------------------------------------------------------------
 ## Validate Form - Contact Form
 --------------------------------------------------------------*/
if ( ! functionExists( 'validateForm' ) ) {
	ish.validateForm = function() {

		
		jQuery('form .required').each(function() {
			var phValue = jQuery(this).attr('placeholder');
			jQuery(this).attr( 'placeholder', phValue + ' *' );
			jQuery(this).attr( 'required', 'required' );
		});

	
		jQuery('form input[type="text"].required').on('input', function() {
			verifyText( jQuery(this) );
		});

		jQuery('form input[type="email"]').on('input', function() {
			verifyEmail( jQuery(this) );
		});

		jQuery('form input[type="url"]').on('input', function() {
			verifyUrl( jQuery(this) );
		});

		jQuery('form textarea.required').keyup(function() {
			verifyMessage( jQuery(this) );
		});

	
		jQuery('form input[type="submit"], form button[type="submit"]').click(function(e) {
			var thisForm = jQuery(this).closest('form');

			thisForm.find('input.required, textarea.required').each(function() {
				var thisEl = jQuery(this);
				switch( thisEl.attr('type') ) {
					case 'text':
						verifyText( thisEl );
						break;
					case 'email':
						verifyEmail( thisEl );
						break;
					case 'url':
						verifyUrl( thisEl );
						break;
					default:
						verifyText( thisEl );
				}
			});

			if ( 0 == thisForm.find('.invalid').length ) {

				thisForm.submit(function(event) {

					if ( 'ish-contact-form' == thisForm.attr('id') ) {
						var url = "ajax.php";

						jQuery.ajax({
							type: "POST",
							url: url,
							data: thisForm.serialize(),
							success: function (data) {
								var obj = jQuery.parseJSON(data);

								if ('success' == obj.message) {
									alert("Email has been sent.");
								
									location.reload();
								} else if ('error' == obj.message) {
									alert("ERROR! Something went wrong.");
								} else {
									
									location.reload();
								}

							},
							error: function () {
								alert("ERROR! Something went wrong.");
							}
						});

						return false;
					}
				});

			} else {
				return false;
			}

			
		});

		
		function verifyText( thisEl ) {
			var isName = thisEl.val();
			if ( isName ) {
				thisEl.removeClass("invalid").addClass("valid");
				thisEl.parent().removeClass("required-error");
			} else {
				thisEl.removeClass("valid").addClass("invalid");
				thisEl.parent().addClass("required-error");
			}
		}

		
		function verifyEmail( thisEl ) {
			var regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			var isEmail = regExp.test( thisEl.val() );
			if ( isEmail ) {
				thisEl.removeClass("invalid").addClass("valid");
				thisEl.parent().removeClass("required-error");
			} else if ( ! thisEl.hasClass('required') && "" == thisEl.val() ) {
				thisEl.removeClass("invalid").addClass("valid");
				thisEl.parent().removeClass("required-error");
			} else {
				thisEl.removeClass("valid").addClass("invalid");
				thisEl.parent().addClass("required-error");
			}
		}

		
		function verifyUrl( thisEl ) {
			if ( 'www.' == thisEl.val().substring(0,4) ){
				thisEl.val( 'http://www.' + thisEl.val().substring(4) );
			}
			var regExp = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/;
			var isUrl = regExp.test( thisEl.val() );
			if ( isUrl ){
				thisEl.removeClass("invalid").addClass("valid");
				thisEl.parent().removeClass("required-error");
			} else if ( ! thisEl.hasClass('required') && "" == thisEl.val() ) {
				thisEl.removeClass("invalid").addClass("valid");
				thisEl.parent().removeClass("required-error");
			} else {
				thisEl.removeClass("valid").addClass("invalid");
				thisEl.parent().addClass("required-error");
			}
		}

		
		function verifyMessage( thisEl ) {
			var message = thisEl.val();
			if( message ){
				thisEl.removeClass("invalid").addClass("valid");
				thisEl.parent().removeClass("required-error");
			} else {
				thisEl.removeClass("valid").addClass("invalid");
				thisEl.parent().addClass("required-error");
			}
		}

	}
}


/*--------------------------------------------------------------
 ## Google Maps
 --------------------------------------------------------------*/
if ( ! functionExists( 'initMap' ) ) {
	ish.initMap = function() {

		
		var themeMap = jQuery('#map');
		var mapColor = ( themeMap.attr('data-map-color') ) ? themeMap.attr('data-map-color') : '';
		var markerColor = ( themeMap.attr('data-marker-color') ) ? themeMap.attr('data-marker-color') : '';

	
		var myLat = ( themeMap.attr('data-map-lat') ) ? parseFloat( themeMap.attr('data-map-lat') ) : -33.9;
		var myLng = ( themeMap.attr('data-map-lng') ) ? parseFloat( themeMap.attr('data-map-lng') ) : 151.2;
		var myLatLng = {lat: myLat, lng: myLng}; 
		var styleArray = [
			{
				featureType: "all",
				stylers: [
					{ saturation: -40 },
					{ hue: mapColor },
					{ gamma: 1.2 }
				]
			}
		];

	
		var map = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng,
			scrollwheel: false,
		
			styles: styleArray,
			zoom: ( themeMap.attr('data-map-zoom') ) ? parseInt( themeMap.attr('data-map-zoom') ) : 11,
			mapTypeControl: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.LEFT_CENTER
			},
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.RIGHT_CENTER
			}
			/*scaleControl: true,
			streetViewControl: true,
			streetViewControlOptions: {
				position: google.maps.ControlPosition.RIGHT_CENTER
			}*/
		});

		
		var ishMarker = {
			path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4 z M -8,-30 a 8,8 0 1,1 16,0 8,8 0 2,2 -16,0 z',
		
			fillRule: 'evenodd',
			fillColor: markerColor,
			fillOpacity: 0.5,
			scale: ( themeMap.attr('data-marker-scale') ) ? parseFloat( themeMap.attr('data-marker-scale') ) : 1.5,
			/*strokeColor: '#ffffff',*/
			strokeWeight: 0
		};

		var mapMarkers = new Array();
		var infowindow = new google.maps.InfoWindow();
		var geocoder = new google.maps.Geocoder();
		var marker, i;

		
		geocoder.geocode( { 'address': themeMap.attr('data-map-address')}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				map.setCenter(results[0].geometry.location);
			}
		});

	
		themeMap.siblings('.map-marker').each(function(index) {
			var markerValues = new Array();

			markerValues['title'] = $(this).attr('data-title');
			markerValues['lat'] = parseFloat( $(this).attr('data-lat') );
			markerValues['lng'] = parseFloat( $(this).attr('data-lng') );
			markerValues['address'] = $(this).attr('data-address');
			markerValues['content'] = $(this).html();

			mapMarkers[index] = markerValues;
		});

		for (var i = 0; i < mapMarkers.length; i++) {
			geocodeAddress(mapMarkers[i]);
		}

		function geocodeAddress(location) {
			geocoder.geocode( { 'address': location['address']}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					
					createMarker(results[0].geometry.location, location['content'], location['title']);
				}
				else
				{
					createMarker({lat: location['lat'], lng: location['lng']}, location['content'], location['title']);
					
				}
			});
		}

		function createMarker(latlng,markerHtml,markerTitle){
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				animation: google.maps.Animation.DROP,
				icon: ishMarker,
				title: markerTitle,
				html: markerHtml
			});

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.setContent(markerHtml);
				map.panTo(this.getPosition());

				if ( '' != markerHtml.trim() ) {
					infowindow.open(map, marker);
				} else {
					infowindow.close();
				}
			});

			/*google.maps.event.addListener(marker, 'mouseover', function() {
				infowindow.setContent(markerHtml);

				if ( '' != markerHtml ) {
					infowindow.open(map, marker);
				} else {
					infowindow.close();
				}
			});*/

			/*google.maps.event.addListener(marker, 'mouseout', function() {
				infowindow.close();
			});*/
		}
	}
}


/*--------------------------------------------------------------
 ## Accordion
 --------------------------------------------------------------*/
if ( ! functionExists( 'activateAccordion' ) ) {
	ish.activateAccordion = function() {

		jQuery('.ish-sc-accordion > dt > a').click(function() {
			var thisEl = jQuery(this).parent();

			if ( thisEl.hasClass('ish-active-item') ) {
				thisEl.removeClass('ish-active-item').next().slideUp();
			} else {
				thisEl.parent().find('.ish-active-item').removeClass('ish-active-item').next().slideUp();
				thisEl.next().slideDown();
				thisEl.addClass('ish-active-item');
			}

			return false;
		});

	}
}


/*--------------------------------------------------------------
 ## Toggle
 --------------------------------------------------------------*/
if ( ! functionExists( 'activateToggle' ) ) {
	ish.activateToggle = function() {

		jQuery('.ish-sc-toggle > dt > a').click(function() {
			var thisEl = jQuery(this).parent();

			thisEl.toggleClass('ish-active-item').next().slideToggle();

			return false;
		});

	}
}


/*--------------------------------------------------------------
 ## Tabs
 --------------------------------------------------------------*/
if ( ! functionExists( 'activateTabs' ) ) {
	ish.activateTabs = function() {

		jQuery('.ish-tabs-menu a').click(function(event) {
			event.preventDefault();
			jQuery(this).parent().addClass('ish-active-item');
			jQuery(this).parent().siblings().removeClass('ish-active-item');
			var tab = jQuery(this).attr('href');
			jQuery('.ish-tab-content').not(tab).css('display', 'none');
			jQuery(tab).fadeIn();
		});

	}
}


/*--------------------------------------------------------------
 ## Gallery
 --------------------------------------------------------------*/
if ( ! functionExists( 'activateGallery' ) ) {
	ish.activateGallery = function() {

		var galleries = jQuery('.ish-sc-gallery');

		if ( galleries.length ) {
			galleries.each( function(){
				var thisEl = jQuery(this);
				var rowHeight = ( thisEl.attr('data-rowHeight') ) ? thisEl.attr('data-rowHeight') : 200;
				var lastRow = ( thisEl.attr('data-lastRow') ) ? thisEl.attr('data-lastRow') : 'nojustify';
				var margins = ( thisEl.attr('data-margins') ) ? thisEl.attr('data-margins') : 1;

				thisEl.justifiedGallery({
					rowHeight : rowHeight,
					lastRow : lastRow,
					margins : margins
				});
			});
		}


	}
}


/*--------------------------------------------------------------
 ## Arrange Widget Recent Projects
 --------------------------------------------------------------*/
if ( ! functionExists( 'arrangeWidgetRecentProjects' ) ) {
	ish.arrangeWidgetRecentProjects = function() {

		jQuery(window).load(function() {
			setImageTiles();
		});

		jQuery(window).resize(function() {
			setImageTiles();
		});

		function setImageTiles() {
			var widgetRecentProjectLi = jQuery('.ish-widget-recent-projects li');
			var tileWidth = Math.floor( jQuery('.ish-sidebar').width() / 3 );

			widgetRecentProjectLi.each(function () {
				var thisEl = jQuery(this);
				var thisElImage = thisEl.find('img');
				var imageMargin = 0;

				thisEl.css('height', tileWidth + 'px');
				thisElImage.removeClass('landscape').removeClass('portrait');

				if (thisElImage.width() > thisElImage.height()) {
					imageMargin = -1 * Math.floor(( thisElImage.width() / thisElImage.height() - 1 ) * 100 / 2);
					thisElImage.addClass('landscape');
					thisElImage.css('margin-left', imageMargin + '%');
				} else {
					imageMargin = -1 * Math.floor(( thisElImage.height() / thisElImage.width() - 1 ) * 100 / 2);
					thisElImage.addClass('portrait');
					thisElImage.css('margin-top', imageMargin + '%');
				}
			});
		}

	}
}
