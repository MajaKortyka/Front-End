 const chopekInfo= [
     {
        src: "https://raw.githubusercontent.com/apietryga/kurs-Front-end/master/materialy/lekcja6/img/gada.gif",
        alt: "Pan Cyfrowy Gada",
        desc: "Pan Cyfrowy Gada",
    },
     {  src: "https://raw.githubusercontent.com/apietryga/kurs-Front-end/master/materialy/lekcja6/img/siada.gif",
        alt: "Pan Cyfrowy Siada",
        desc: "Pan Cyfrowy Siada",
    },
     {
        src: "https://raw.githubusercontent.com/apietryga/kurs-Front-end/master/materialy/lekcja6/img/wstaje.gif",
        alt: "Pan cyfrowy Wstaje",
        desc: "Pan cyfrowy Wstaje",
     },
      {
        src: "https://raw.githubusercontent.com/apietryga/kurs-Front-end/master/materialy/lekcja6/img/intro.gif",
        alt: "Pan Cyfrowy Intro",
        desc: "Pan Cyfrowy Intro",
     }
]

const div=document.querySelectorAll(".parent div");
for(const [i,single] of div.entries()) {
   const img=single.querySelector("img");
   img.src=chopekInfo[i].src;
   single.onclick=function(){
      const div=document.querySelectorAll(".content div");
      div[1].innerHTML=chopekInfo[i].desc;
      const img=div[0].querySelector("img");
      img.src=chopekInfo[i].src;
   }
}