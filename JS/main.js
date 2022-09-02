let header=document.querySelector('header');
window.onscroll=function(){
    if(scrollY>50){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}


let bars=document.getElementById('bar');
let nav=document.querySelector('nav');
let times=document.querySelector('.fa-times');
let overlay=document.querySelector('.overlay');
bars.onclick=function(){
    nav.classList.toggle('active')
    overlay.classList.toggle('active')
    document.body.classList.toggle('active')
}

times.onclick=function(){
    nav.classList.remove('active');
    overlay.classList.remove('active')
    document.body.classList.remove('active')
}

let allLinks=document.querySelectorAll('nav .links a');
allLinks.forEach((e)=>{
    e.addEventListener('click',()=>{
        nav.classList.remove('active');
        overlay.classList.remove('active')
        document.body.classList.remove('active')
    })
})
overlay.onclick=function(){
    nav.classList.remove('active');
    overlay.classList.remove('active')
    document.body.classList.remove('active')
}

///Products
let allLi=document.querySelectorAll('.header ul li');
let allBox=document.querySelectorAll('.all');
allLi.forEach((e)=>{
    e.addEventListener('click',()=>{
        allLi.forEach((e)=>{
            e.classList.remove('active');
        })
        e.classList.add('active');
        allBox.forEach((e)=>{
            e.style.display='none';
        })
        document.querySelectorAll(e.getAttribute('data-name')).forEach((e)=>{
            e.style.display='block';
            
        })
    })
});





document.querySelector('.year').innerHTML=`${new Date().getFullYear()}`