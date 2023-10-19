var x = document.getElementsByClassName("mySlides");
var y = document.getElementsByClassName("mySlides1");
var nav=document.querySelector("#nav");
var msgcon = document.querySelector("#msg");
var msgcon1 = document.querySelector("#msg1");
slides(0);
slides1(0);
function slides(n){
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[n].style.display = "block";
  gsap.from(x[n],{
    opacity:0,
    scale:1.2,
    delay:0,
    duration:1
  })
  slideText(n);
}
function slideText(a){
  if(a===0){
    document.querySelector(".message-content").innerHTML=`
    <div>
                <h3>PASSPORT & NOTEBOOK WALLETS</h3>
                <h2>CRANE</h2>
                <div>
                    <a href="">VIEW PRODUCTS</a>
                </div>
            </div>
    `
  }
  else if(a===1){
    document.querySelector(".message-content").innerHTML=`
    <div>
                <h3>CAMERA STRAPS</h3>
                <h2>EMU</h2>
                <div>
                    <a href="">VIEW PRODUCTS</a>
                </div>
            </div>
    `
  }
  else{
    document.querySelector(".message-content").innerHTML=`
    <div>
                <h3>EVERY DAY CARRY</h3>
                <h2>PEREGRINE</h2>
                <div>
                    <a href="">VIEW PRODUCTS</a>
                </div>
            </div>
    `
  }
  gsap.to(msgcon,{
    y:-20,
    scale:1,
    opacity:1,
    duration:1,
    delay:1,
    stagger:5
  })
}
function slides1(n){
    for (let i = 0; i < y.length; i++) {
      y[i].style.display = "none";
    }
    y[n].style.display = "block";
    gsap.from(y[n],{
      opacity:0,
      scale:1.2,
      delay:0,
      duration:1
    })
    slideText1(n);
}
function slideText1(a){
    if(a===0){
      document.querySelector(".message-content1").innerHTML=`
      <div>
                  <h3>WHERE IT ALL BEGAN</h3>
                  <h2>TALLAROOK, VIC</h2>
                  <div>
                      <a href="">WORKSHOP</a>
                  </div>
              </div>
      `
    }
    else if(a===1){
      document.querySelector(".message-content1").innerHTML=`
      <div>
                  <h3>HANDMADE IN AUSTRALIA</h3>
                  <h2>TRADITIONAL CRAFTSMANSHIP</h2>
                  <div>
                      <a href="">WORKSHOP</a>
                  </div>
              </div>
      `
    }
    else if(a===2){
        document.querySelector(".message-content1").innerHTML=`
        <div>
                    <h3>HANDMADE IN AUSTRALIA</h3>
                    <h2>TRADITIONAL CRAFTSMANSHIP</h2>
                    <div>
                        <a href="">WORKSHOP</a>
                    </div>
                </div>
        `
    }
    else{
        document.querySelector(".message-content1").innerHTML=`
        <div>
                    <h3>RAW MATERIAL</h3>
                    <h2>PREMIUM LEATHER</h2>
                    <div>
                        <a href="">WORKSHOP</a>
                    </div>
                </div>
        `
    }
    gsap.to(msgcon1,{
      y:-20,
      scale:1,
      opacity:1,
      duration:1,
      delay:1,
      stagger:5
    })
  }