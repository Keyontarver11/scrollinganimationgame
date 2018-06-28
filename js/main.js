window.onscroll = function (e) {
  if (document.body.scrollTop >  0|| document.documentElement.scrollTop > 200){
  
    document.getElementById("crazy_boy").style.backgroundPosition = '0px 0px';
    document.getElementById("crazy_boy").style.top = '25%';
  }
  if (document.body.scrollTop >  0|| document.documentElement.scrollTop > 400){
  
    document.getElementById("crazy_boy").style.backgroundPosition = '0px 0px';
    document.getElementById("crazy_boy").style.top = '35%';
  }

    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 800){
  
      document.getElementById("crazy_boy").style.backgroundPosition = '-71px 0px';
      document.getElementById("crazy_boy").style.top = '45%';
    }
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 1200){
  
      document.getElementById("crazy_boy").style.backgroundPosition = '-142px 0px';
      document.getElementById("crazy_boy").style.top = '55%';
    }
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1600){
  
      document.getElementById("crazy_boy").style.backgroundPosition = '0px -80px';
      document.getElementById("crazy_boy").style.top = '65%';
    }
    if (document.body.scrollTop > 1600|| document.documentElement.scrollTop > 2000){
  
      document.getElementById("crazy_boy").style.backgroundPosition = '-71px -80px';
      document.getElementById("crazy_boy").style.top = '55%';
    }
    if (document.body.scrollTop >  2000|| document.documentElement.scrollTop > 2400){
  
      document.getElementById("crazy_boy").style.backgroundPosition = '-142px -80px';
      document.getElementById("crazy_boy").style.top = '45%';
    }
    if (document.body.scrollTop >  2400|| document.documentElement.scrollTop > 2800){
  
      document.getElementById("crazy_boy").style.backgroundPosition = '0px -160px';
      document.getElementById("crazy_boy").style.top = '40%';
    }
  
  
   
    
}

// let keyframe = "crazyboy"

console.log(document.body.scrollTop);




// function (animate) {
// if (document.body.scrollTop > 0)


// }

 
// window.addEventListener('scroll',function (e){
// if{()
// }    

// })

