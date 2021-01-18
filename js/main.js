$(function () {

  $('.main-slider__inner').slick({
    arrows: false,
    dots: true
  });

  $('.work-with-us_slider').slick({
    arrows: true,
    dots: true
  });

  //Валидатор форм и маска для форм
  const offerFormModal = $('.offer-form-modal')
  offerFormModal.submit(function (e) {
    e.preventDefault()
  })

  offerFormModal.validate({
    errorElement: "",
    errorPlacement: (error, element) =>
      error.appendTo(element.parent().parent()),
    rules: {
      tel: {
        maskRu: true
      }
    },
    messages: {
      name: "",
      tel: ""
    },
    submitHandler: function (form) {
      const formInstance = $(form)

      console.log('submit')
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: formInstance.serialize()
      }).done(function () {
        console.log('DONE')
        formInput.val("");
        formInput.siblings().removeClass('active')
        $('.modal-wrapper-offer .success-message').addClass('show')
      });
      return false;
    }
  });
  jQuery.validator.addMethod('maskRu', function (value, element) {
    console.log(/\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value));
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
  });
  $('[name="tel"]').mask("+7(999)999-9999", {
    autoclear: false
  });

  $(".header-bottom__menu-link--scroll").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $("#mobile-menu").on("click", "a", function (event) {
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    if(!'/html/'.test(id)) {
      event.preventDefault();
      $('body,html').animate({
        scrollTop: top - 200
      }, 1500);
    }
  });
  
  $(window).on("scroll", function() {
    $(".header-bottom").toggleClass("scrolled", $(this).scrollTop() > $(window).height()-350);
    $(".header-top").toggleClass("scrolled-red", $(this).scrollTop() > $(window).height()-350); 
    $(".header-top__inner").toggleClass("white", $(this).scrollTop() > $(window).height()-350);


    // $(".header-fixed").toggleClass("scrolled", $(this).scrollTop() > $(window).height());

    // $("fixed-header").toggleClass("scrolled", $(this).scrollTop() > $(window).height()-750);

  });

  $(".requisites__wrap").hide()
  $(".contact__text-city--requisites").click(function () {
    $(this).toggleClass("contact__text-city--close");
    $(this).next().slideToggle("slow");
  });

  if (document.querySelector('#map')) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
          center: [59.939, 30.278],
          zoom: 14,
          // controls: []
        }),
  
        placemark1 = new ymaps.Placemark([59.9361524, 30.276121], {
          hintContent: '',
          balloonContent: ''
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/other/location.svg',
          // Размеры метки.
          iconImageSize: [44, 55],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
        }),
  
        placemark2 = new ymaps.Placemark([59.9415319, 30.2757611], {
          hintContent: '',
          balloonContent: ''
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/other/location.svg',
          // Размеры метки.
          iconImageSize: [44, 55],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
        });
  
      myMap.geoObjects
        .add(placemark1)
        .add(placemark2);
  
      // myMap.behaviors.get('drag').disable();
      myMap.behaviors.get('scrollZoom').disable();
      myMap.behaviors.get('rightMouseButtonMagnifier').disable();
      myMap.behaviors.get('dblClickZoom').disable();
  
  
      const placemark1HTML = $('#placemark1');
      const placemark2HTML = $('#placemark2');
  
      placemark1.events.add('click', function () {
        closeAllPlacemark();
        placemark1HTML.addClass('show');
      });
      placemark2.events.add('click', function () {
        closeAllPlacemark();
        placemark2HTML.addClass('show');
      });
      myMap.events.add('click', function () {
        closeAllPlacemark();
      });
  
      function closeAllPlacemark() {
        placemark1HTML.removeClass('show');
        placemark2HTML.removeClass('show');
      }
    });
  }

  if (document.querySelector('#map2')) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map2', {
          center: [51.6577802, 39.1930473],
          zoom: 14,
          // controls: []
        }),

        placemark1 = new ymaps.Placemark([51.6564897, 39.1889681], {
          hintContent: '',
          balloonContent: ''
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/other/location.svg',
          // Размеры метки.
          iconImageSize: [44, 55],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
        }),

        placemark2 = new ymaps.Placemark([51.6595472, 39.1915463], {
          hintContent: '',
          balloonContent: ''
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/other/location.svg',
          // Размеры метки.
          iconImageSize: [44, 55],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
        });

      myMap.geoObjects
        .add(placemark1)
        .add(placemark2);

      // myMap.behaviors.get('drag').disable();
      myMap.behaviors.get('scrollZoom').disable();
      myMap.behaviors.get('rightMouseButtonMagnifier').disable();
      myMap.behaviors.get('dblClickZoom').disable();


      const placemark1HTML = $('#placemark1');
      const placemark2HTML = $('#placemark2');

      placemark1.events.add('click', function () {
        closeAllPlacemark();
        placemark1HTML.addClass('show');
      });
      placemark2.events.add('click', function () {
        closeAllPlacemark();
        placemark2HTML.addClass('show');
      });
      myMap.events.add('click', function () {
        closeAllPlacemark();
      });

      function closeAllPlacemark() {
        placemark1HTML.removeClass('show');
        placemark2HTML.removeClass('show');
      }
    });
  }

  if (document.querySelector('#map3')) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map3', {
          center: [55.7948247, 37.7130722],
          zoom: 14,
          // controls: []
        }),
  
        placemark1 = new ymaps.Placemark([55.7948247, 37.7130722], {
          hintContent: '',
          balloonContent: ''
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/other/location.svg',
          // Размеры метки.
          iconImageSize: [44, 55],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
        });
  
      myMap.geoObjects.add(placemark1);
  
      // myMap.behaviors.get('drag').disable();
      myMap.behaviors.get('scrollZoom').disable();
      myMap.behaviors.get('rightMouseButtonMagnifier').disable();
      myMap.behaviors.get('dblClickZoom').disable();
  
  
      const placemark1HTML = $('#placemark1');
  
      placemark1.events.add('click', function () {
        closeAllPlacemark();
        placemark1HTML.addClass('show');
      });
      myMap.events.add('click', function () {
        closeAllPlacemark();
      });
  
      function closeAllPlacemark() {
        placemark1HTML.removeClass('show');
      }
    });
  }

  

});

//Модальные окна на Pure Js
(function () {
  new WOW().init();
  //Вызов окна колбека
  // openCallback = document.querySelector('.openCallback');
  // callbackModal = document.querySelector('.modal-wrapper__callback');

  // openCallback.addEventListener('click', function () {
  //   openBaseModal();
  //   callbackModal.classList.remove('hidden');
  //   setTimeout(function () {
  //     callbackModal.classList.remove('animation');
  //   }, 20);
  // })

  // function closecallbackPopup() {
  //   if (!callbackModal.classList.contains('hidden')) {
  //     callbackModal.classList.add('animation');    
  //     callbackModal.addEventListener('transitionend', function(e) {
  //       callbackModal.classList.add('hidden');
  //     }, {
  //       capture: false,
  //       once: true,
  //       passive: false
  //     });
  //   }
  // };
  window.addEventListener('scroll', function(e) {
    const animatingBlocks = document.querySelector('.animate-wrap');
    if(animatingBlocks) {
      if (window.pageYOffset >= '2300') {
        animatingBlocks.classList.add('threeOne--hidden');
      } else {
        animatingBlocks.classList.remove('threeOne--hidden');
      }
    }
  });
  //Вызов окна колбека
  openLeftMenu = document.querySelector('.openMenu');
  leftMenuModal = document.querySelector('.modal-wrapper__left-menu');
  leftMenuLi = document.querySelectorAll('li.header-bottom__menu-li');
  leftMenuSubmenuLinks = document.querySelectorAll('.header-bottom__menu-submenu-link');

  openLeftMenu.addEventListener('click', function () {
    openBaseModal();
    leftMenuModal.classList.toggle('hidden');
    if(leftMenuModal.classList.contains('hidden')) {
      closeAllModal();
      return;
    }
    leftMenuModal.classList.add('animation');
    setTimeout(function () {
      leftMenuModal.classList.remove('animation');
    }, 20);
  })

  leftMenuLi.forEach(el => el.addEventListener('click', function () {
    el.classList.toggle('active')
  }))

  leftMenuSubmenuLinks.forEach(el => el.addEventListener('click', function () {
    closeAllModal();
  }))

  function closeleftMenuModal() {
    if (!leftMenuModal.classList.contains('hidden')) {
      leftMenuModal.classList.add('animation');
      leftMenuModal.addEventListener('transitionend', function (e) {
        leftMenuModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }

  };

  function closeAllModal() {
    // closecallbackPopup();
    closeleftMenuModal();
    closeBaseModal();
  };

  //База модальных окон
  body = document.querySelector('body');
  modalWrapper = document.querySelector('.modal-wrapper');
  modalWrapperBg = document.querySelector('.modal-wrapper__bg');
  modalWrapperClose = document.querySelectorAll('.modal-wrapper__close');

  function openBaseModal() {
    body.classList.add('noflow');
    modalWrapper.classList.remove('hidden');
    setTimeout(function () {
      modalWrapper.classList.remove('animation');
    }, 20);
  };

  function closeBaseModal() {
    body.classList.remove('noflow');
    modalWrapper.classList.add('animation');
    modalWrapper.addEventListener('transitionend', function (e) {
      modalWrapper.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  };

  for (let i = 0; i < modalWrapperClose.length; i++) {
    modalWrapperClose[i].addEventListener('click', () => {
      closeAllModal();
    });
  }

  modalWrapperBg.addEventListener('click', function () {
    closeAllModal();
  })

  document.onkeydown = function (e) {
    e = e || window.event;
    if (e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27) {
      closeAllModal();
    }
  };


  // Анимация на главной странице

  // function animateMarquee(el, duration) {
  //   const innerEl = el.querySelector('.marquee__inner');
  //   const innerWidth = innerEl.offsetWidth;
  //   const cloneEl = innerEl.cloneNode(true);
  //   el.appendChild(cloneEl);
    
  //   let start = performance.now();
  //   let progress;
  //   let translateX;
  
  //   requestAnimationFrame(function step(now) {
  //     progress = (now - start) / duration;
   
  //     if (progress > 1) {
  //       progress %= 1;
  //       start = now;
  //     }
  
  //     translateX = innerWidth * progress;
      
  //     innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
  //     cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
  //     requestAnimationFrame(step);
  //   });
  // }
  
  // if (document.querySelector('#marquee1')) {
  //   const marquee1 = document.querySelector('#marquee1');
  //   animateMarquee(marquee1, 20000);
  // }

})();



(function () {
  if (document.querySelector('#threeOne')) {
    
    threeOne = document.querySelector('#threeOne');

    var mousePos = {
      x: .5,
      y: .5
    };
    document.addEventListener('mousemove', function (event) {
      mousePos = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      };
    });
    var phase = 0;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(95, 1300 / 1300, 0.1, 1000);
    camera.position.z = 45;

    var renderer = new THREE.WebGLRenderer({
      alpha: true
    });
    renderer.setSize(1300, 1300);

    threeOne.appendChild(renderer.domElement);

    var boxSize = 0.2;
    var geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    var materialGreen = new THREE.MeshBasicMaterial({
      transparent: true,
      color: 0xff007a,
      opacity: 0.4,
      side: THREE.DoubleSide
    });

    var pitchSegments = 60;
    var elevationSegments = pitchSegments / 2;
    var particles = pitchSegments * elevationSegments
    var side = Math.pow(particles, 1 / 3);

    var radius = 16;

    var parentContainer = new THREE.Object3D();
    // parentContainer.position.x = 30;
    scene.add(parentContainer);

    function posInBox(place) {
      return ((place / side) - 0.5) * radius * 1.2;
    }

    //Plant the seeds, grow some trees in a grid!
    for (var p = 0; p < pitchSegments; p++) {
      var pitch = Math.PI * 2 * p / pitchSegments;
      for (var e = 0; e < elevationSegments; e++) {
        var elevation = Math.PI * ((e / elevationSegments) - 0.5)
        var particle = new THREE.Mesh(geometry, materialGreen);


        parentContainer.add(particle);

        var dest = new THREE.Vector3();
        dest.z = (Math.sin(pitch) * Math.cos(elevation)) * radius; //z pos in sphere
        dest.x = (Math.cos(pitch) * Math.cos(elevation)) * radius; //x pos in sphere
        dest.y = Math.sin(elevation) * radius; //y pos in sphere

        particle.position.x = posInBox(parentContainer.children.length % side);
        particle.position.y = posInBox(Math.floor(parentContainer.children.length / side) % side);
        particle.position.z = posInBox(Math.floor(parentContainer.children.length / Math.pow(side, 2)) % side);
        // console.log(side, parentContainer.children.length, particle.position.x, particle.position.y, particle.position.z)
        particle.userData = {
          dests: [dest, particle.position.clone()],
          speed: new THREE.Vector3()
        };
      }
    }

    function render() {
      phase += 0.002;
      for (var i = 0, l = parentContainer.children.length; i < l; i++) {
        var particle = parentContainer.children[i];
        var dest = particle.userData.dests[Math.floor(phase) % particle.userData.dests.length].clone();
        var diff = dest.sub(particle.position);
        particle.userData.speed.divideScalar(1.02); // Some drag on the speed
        particle.userData.speed.add(diff.divideScalar(400)); // Modify speed by a fraction of the distance to the dest    
        particle.position.add(particle.userData.speed);
        particle.lookAt(dest);
      }

      parentContainer.rotation.y = phase * 3;
      parentContainer.rotation.x = (mousePos.y - 0.5) * Math.PI;
      parentContainer.rotation.z = (mousePos.x - 0.5) * Math.PI;

      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    render();
  }
})();

// (function() {

//   threeTwo = document.querySelector('#threeTwo');

//   var mousePos = {x:.5,y:.5};
//   document.addEventListener('mousemove', function (event) {  mousePos = {x:event.clientX/window.innerWidth, y:event.clientY/window.innerHeight};});
//   var phase = 1.5;

//   var scene = new THREE.Scene();
//   var camera = new THREE.PerspectiveCamera(95, 1000 / 1000, 0.1, 1000);
//   camera.position.z = 45;

//   var renderer = new THREE.WebGLRenderer({ alpha: true });
//   renderer.setSize(1000, 1000);

//   threeTwo.appendChild(renderer.domElement);

//   var boxSize = 0.2;
//   var geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
//   var materialGreen = new THREE.MeshBasicMaterial({transparent: true,  color: 0xff007a,  opacity: 0.4,  side: THREE.DoubleSide});

//   var pitchSegments = 60;
//   var elevationSegments = pitchSegments/2;
//   var particles = pitchSegments*elevationSegments
//   var side = Math.pow(particles, 1/3);

//   var radius = 16;

//   var parentContainer = new THREE.Object3D();
//   // parentContainer.position.x = 30;
//   scene.add(parentContainer);

//   function posInBox(place) {
//     return ((place/side) - 0.5) * radius * 1.2;  
//   }

//   //Plant the seeds, grow some trees in a grid!
//   for (var p = 0; p < pitchSegments; p++) {
//     var pitch = Math.PI * 2 * p / pitchSegments ;
//     for (var e = 0; e < elevationSegments; e++) {
//       var elevation = Math.PI  * ((e / elevationSegments)-0.5)
//       var particle = new THREE.Mesh(geometry, materialGreen);


//       parentContainer.add(particle);

//       var dest = new THREE.Vector3();
//       dest.z = (Math.sin(pitch) * Math.cos(elevation)) * radius; //z pos in sphere
//       dest.x = (Math.cos(pitch) * Math.cos(elevation)) * radius; //x pos in sphere
//       dest.y = Math.sin(elevation) * radius; //y pos in sphere

//       particle.position.x = posInBox(parentContainer.children.length % side);
//       particle.position.y = posInBox(Math.floor(parentContainer.children.length/side) % side);
//       particle.position.z = posInBox(Math.floor(parentContainer.children.length/Math.pow(side,2)) % side);
//       // console.log(side, parentContainer.children.length, particle.position.x, particle.position.y, particle.position.z)
//       particle.userData = {dests: [dest,particle.position.clone()], speed: new THREE.Vector3() };
//     }
//   }

//   function render() {
//     phase += 0.002;
//     for (var i = 0, l = parentContainer.children.length; i < l; i++) {
//       var particle = parentContainer.children[i];
//       var dest = particle.userData.dests[Math.floor(phase)%particle.userData.dests.length].clone();
//       var diff = dest.sub(particle.position);
//       particle.userData.speed.divideScalar(1.02); // Some drag on the speed
//       particle.userData.speed.add(diff.divideScalar(400));// Modify speed by a fraction of the distance to the dest    
//       particle.position.add(particle.userData.speed);
//       particle.lookAt(dest);
//     }

//     parentContainer.rotation.y = phase*3;
//     parentContainer.rotation.x = (mousePos.y-0.5) * Math.PI;
//     parentContainer.rotation.z = (mousePos.x-0.5) * Math.PI;

//     renderer.render(scene, camera);
//     requestAnimationFrame(render);
//   }
//   render();
// })();

// (function() {

//   threeThree = document.querySelector('#threeThree');

//   var mousePos = {x:.5,y:.5};
//   document.addEventListener('mousemove', function (event) {  mousePos = {x:event.clientX/window.innerWidth, y:event.clientY/window.innerHeight};});
//   var phase = 1.5;

//   var scene = new THREE.Scene();
//   var camera = new THREE.PerspectiveCamera(95, 1000 / 1000, 0.1, 1000);
//   camera.position.z = 45;

//   var renderer = new THREE.WebGLRenderer({ alpha: true });
//   renderer.setSize(800, 800);

//   threeThree.appendChild(renderer.domElement);

//   var boxSize = 0.2;
//   var geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
//   var materialGreen = new THREE.MeshBasicMaterial({transparent: true,  color: 0xff007a,  opacity: 0.4,  side: THREE.DoubleSide});

//   var pitchSegments = 60;
//   var elevationSegments = pitchSegments/2;
//   var particles = pitchSegments*elevationSegments
//   var side = Math.pow(particles, 1/3);

//   var radius = 16;

//   var parentContainer = new THREE.Object3D();
//   // parentContainer.position.x = 30;
//   scene.add(parentContainer);

//   function posInBox(place) {
//     return ((place/side) - 0.5) * radius * 1.2;  
//   }

//   //Plant the seeds, grow some trees in a grid!
//   for (var p = 0; p < pitchSegments; p++) {
//     var pitch = Math.PI * 2 * p / pitchSegments ;
//     for (var e = 0; e < elevationSegments; e++) {
//       var elevation = Math.PI  * ((e / elevationSegments)-0.5)
//       var particle = new THREE.Mesh(geometry, materialGreen);


//       parentContainer.add(particle);

//       var dest = new THREE.Vector3();
//       dest.z = (Math.sin(pitch) * Math.cos(elevation)) * radius; //z pos in sphere
//       dest.x = (Math.cos(pitch) * Math.cos(elevation)) * radius; //x pos in sphere
//       dest.y = Math.sin(elevation) * radius; //y pos in sphere

//       particle.position.x = posInBox(parentContainer.children.length % side);
//       particle.position.y = posInBox(Math.floor(parentContainer.children.length/side) % side);
//       particle.position.z = posInBox(Math.floor(parentContainer.children.length/Math.pow(side,2)) % side);
//       // console.log(side, parentContainer.children.length, particle.position.x, particle.position.y, particle.position.z)
//       particle.userData = {dests: [dest,particle.position.clone()], speed: new THREE.Vector3() };
//     }
//   }

//   function render() {
//     phase += 0.002;
//     for (var i = 0, l = parentContainer.children.length; i < l; i++) {
//       var particle = parentContainer.children[i];
//       var dest = particle.userData.dests[Math.floor(phase)%particle.userData.dests.length].clone();
//       var diff = dest.sub(particle.position);
//       particle.userData.speed.divideScalar(1.02); // Some drag on the speed
//       particle.userData.speed.add(diff.divideScalar(400));// Modify speed by a fraction of the distance to the dest    
//       particle.position.add(particle.userData.speed);
//       particle.lookAt(dest);
//     }

//     parentContainer.rotation.y = phase*3;
//     parentContainer.rotation.x = (mousePos.y-0.5) * Math.PI;
//     parentContainer.rotation.z = (mousePos.x-0.5) * Math.PI;

//     renderer.render(scene, camera);
//     requestAnimationFrame(render);
//   }
//   render();
// })();



// my code

// document.getElementById('vacancies-hide') = function() {
//   document.addEventListener.addClass('vacancy__hide')
// }

// window.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('#vacancies-hide').addEventListener('click', function() {
//     document.querySelector('.vacancies__btn-menu').classList.toggle('vacancy__hide')
//     console.log('click!')
//   })
// })




// Анимация на странице work-with-us

let SEPARATION = 70, AMOUNTX = 50, AMOUNTY = 50;
			let container, stats;
			let camera, scene, renderer;
			let particles, particle, count = 0;
			let mouseX = 0, mouseY = 0;
			let windowHalfX = window.innerWidth / 2;
			let windowHalfY = window.innerHeight / 2;
			init();
			animate();
			function init() {
				container = document.createElement('div',{  id: "particles", class: "particles"});
        
 document.getElementById('work-animation').appendChild( container );
				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 1000;
				scene = new THREE.Scene();
				particles = new Array();
				let PI2 = Math.PI * 2;
				let material = new THREE.SpriteCanvasMaterial( {
					//color: 0x3f6e86,
         color: '#565656',
          // color: 0xffffff,
					program: function ( context ) {
						context.beginPath();
						context.arc( 0, 0, .3, 0, PI2, true );
						context.fill();
					}
				} );
				let i = 0;
				for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
					for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
						particle = particles[ i ++ ] = new THREE.Sprite( material );
						particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
						particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
           // scene.background = new THREE.Color( 0x254a5d ); // UPDATED
						scene.add( particle );
					}
				}
				renderer = new THREE.CanvasRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
        renderer = new THREE.CanvasRenderer( { alpha: true }); // gradient
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
				//stats = new Stats();
				//container.appendChild( stats.dom );
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );
				//
				window.addEventListener( 'resize', onWindowResize, false );
			}
			function onWindowResize() {
				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			//
			function onDocumentMouseMove( event ) {
				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;
			}
			function onDocumentTouchStart( event ) {
				if ( event.touches.length === 1 ) {
					event.preventDefault();
					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;
				}
			}
			function onDocumentTouchMove( event ) {
				if ( event.touches.length === 1 ) {
					event.preventDefault();
					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;
				}
			}
			//
			function animate() {
				requestAnimationFrame( animate );
				render();
				//stats.update();
       
			}
			function render() {
				camera.position.x += ( mouseX - camera.position.x ) * .05;
				camera.position.y += ( - mouseY - camera.position.y ) * .05;
				camera.lookAt( scene.position );
				let i = 0;
				for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
					for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
						particle = particles[ i++ ];
						particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
							( Math.sin( ( iy + count ) * 0.5 ) * 50 );
						particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 4 +
							( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;
					}
				}
        
				renderer.render( scene, camera );
				count += 0.1;
			}
