

// 내비게이션
let scrollTop;
const nav_wrap = document.getElementById('header');

window.addEventListener('scroll', function(){
scrollTop = window.scrollY;
console.log(scrollTop);

if(scrollTop >= 2){
  nav_wrap.classList.add('act');
}else{
  nav_wrap.classList.remove('act');
}
});

// 탑버튼
const top_btn = document.getElementById('top_btn');

window.addEventListener('scroll', function(){
scrollTop = window.scrollY;
console.log(scrollTop);

if(scrollTop > 300){
  top_btn.style.display = 'block';
}else{
  top_btn.style.display = 'none';
}
});

top_btn.addEventListener('click', function(){
  window.scrollTo({top:0, behavior:"smooth"});
});

// 메인슬라이드이미지
var swiper = new Swiper(".slide", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500, //시간 1/1000 = 1초  3초 = 3000
    disableOnInteraction: false,
  },
  effect:'fade',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// section1
let n = 1;
let l_btn = document.getElementById('l_btn');
let r_btn = document.getElementById('r_btn');
let sec1_img = document.getElementById('sec1_img');

document.getElementById("sec1_num").innerHTML = n + '/5';

l_btn.onclick=function(){
  if(n==1){
    n=5;
  }else{
    n = n - 1 ;
  }
  console.log(n);
  document.getElementById("sec1_num").innerHTML = n + '/5';
  sec1_img.src='./images/slide' + n + '.JPG';
}

r_btn.onclick=function(){
  if(n==5){
    n=1;
  }else{
    n = n + 1;
  }
  console.log(n);
  document.getElementById("sec1_num").innerHTML = n + '/5';
  sec1_img.src='./images/slide' + n + '.JPG';
}

//section2
//모달윈도우
document.addEventListener('DOMContentLoaded', function(){
const modal = document.getElementById('modal1');
const openmodal = document.getElementById('sec2_a1');
const modalimage = document.getElementById('modal_img1');
const closemodal = document.querySelector('.close');

const newimagesrc="./images/section2~1.jpg";

function showModal(event){
  event.preventDefault();
  modalimage.src = newimagesrc; 
  modal.style.display = 'block';
}

openmodal.addEventListener('click', showModal);

modalimage.addEventListener('click', showModal);

closemodal.addEventListener('click', function(){
  modal.style.display = 'none';
});

window.addEventListener('click', function(event){
  if(event.target === modal){
    modal.style.display = 'none';
  }
});
});

// sec2 모달윈도우 2번째
//모달윈도우
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('modal2');
  const openmodal = document.getElementById('sec2_a2');
  const modalimage = document.getElementById('modal_img2');
  const closemodal = document.querySelector('.close1');
  
  const newimagesrc="./images/section2~2.jpg";
  
  function showModal(event){
    event.preventDefault();
    modalimage.src = newimagesrc; 
    modal.style.display = 'block';
  }
  
  openmodal.addEventListener('click', showModal);
  
  modalimage.addEventListener('click', showModal);
  
  closemodal.addEventListener('click', function(){
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event){
    if(event.target === modal){
      modal.style.display = 'none';
    }
  });
  });

  // sec2 모달윈도우 3번째
//모달윈도우
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('modal3');
  const openmodal = document.getElementById('sec2_a3');
  const modalimage = document.getElementById('modal_img3');
  const closemodal = document.querySelector('.close2');
  
  const newimagesrc="./images/section2~3.jpg";
  
  function showModal(event){
    event.preventDefault();
    modalimage.src = newimagesrc; 
    modal.style.display = 'block';
  }
  
  openmodal.addEventListener('click', showModal);
  
  modalimage.addEventListener('click', showModal);
  
  closemodal.addEventListener('click', function(){
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event){
    if(event.target === modal){
      modal.style.display = 'none';
    }
  });
  });

  // sec2 모달윈도우 4번째
//모달윈도우
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('modal4');
  const openmodal = document.getElementById('sec2_a4');
  const modalimage = document.getElementById('modal_img4');
  const closemodal = document.querySelector('.close3');
  
  const newimagesrc="./images/section2-4.png";
  
  function showModal(event){
    event.preventDefault();
    modalimage.src = newimagesrc; 
    modal.style.display = 'block';
  }
  
  openmodal.addEventListener('click', showModal);
  
  modalimage.addEventListener('click', showModal);
  
  closemodal.addEventListener('click', function(){
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event){
    if(event.target === modal){
      modal.style.display = 'none';
    }
  });
  });
  

//section3
// 1번 그래프 모달윈도우
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('modal5');
  const openmodal = document.getElementById('sec3_a1');
  const modalimage = document.getElementById('modal_img5');
  const closemodal = document.querySelector('.close4');
  
  const newimagesrc="./images/section3-1.jpg";
  
  function showModal(event){
    event.preventDefault();
    modalimage.src = newimagesrc; 
    modal.style.display = 'block';
  }
  
  openmodal.addEventListener('click', showModal);
  
  modalimage.addEventListener('click', showModal);
  
  closemodal.addEventListener('click', function(){
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event){
    if(event.target === modal){
      modal.style.display = 'none';
    }
  });
  });

  // 2번 그래프 모달윈도우
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('modal6');
  const openmodal = document.getElementById('sec3_a2');
  const modalimage = document.getElementById('modal_img6');
  const closemodal = document.querySelector('.close5');
  
  const newimagesrc="./images/section3-2.jpg";
  
  function showModal(event){
    event.preventDefault();
    modalimage.src = newimagesrc; 
    modal.style.display = 'block';
  }
  
  openmodal.addEventListener('click', showModal);
  
  modalimage.addEventListener('click', showModal);
  
  closemodal.addEventListener('click', function(){
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event){
    if(event.target === modal){
      modal.style.display = 'none';
    }
  });
  });

  // 3번 그래프 모달윈도우
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('modal7');
  const openmodal = document.getElementById('sec3_a3');
  const modalimage = document.getElementById('modal_img7');
  const closemodal = document.querySelector('.close6');
  
  const newimagesrc="./images/section3-3.jpg";
  
  function showModal(event){
    event.preventDefault();
    modalimage.src = newimagesrc; 
    modal.style.display = 'block';
  }
  
  openmodal.addEventListener('click', showModal);
  
  modalimage.addEventListener('click', showModal);
  
  closemodal.addEventListener('click', function(){
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event){
    if(event.target === modal){
      modal.style.display = 'none';
    }
  });
  });

  // 3번 그래프 모달윈도우
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('modal8');
  const openmodal = document.getElementById('sec3_a4');
  const modalimage = document.getElementById('modal_img8');
  const closemodal = document.querySelector('.close7');
  
  const newimagesrc="./images/section3-4.jpg";
  
  function showModal(event){
    event.preventDefault();
    modalimage.src = newimagesrc; 
    modal.style.display = 'block';
  }
  
  openmodal.addEventListener('click', showModal);
  
  modalimage.addEventListener('click', showModal);
  
  closemodal.addEventListener('click', function(){
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event){
    if(event.target === modal){
      modal.style.display = 'none';
    }
  });
  });



//section4
//주식현황



