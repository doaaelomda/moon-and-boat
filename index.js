let stars=document.getElementById('stars');
let boat=document.getElementById('boat');
let mount3=document.getElementById('mount3');
let mount4=document.getElementById('mount4');
let mount5=document.getElementById('mount5');
let moon=document.getElementById('moon');
let mount7=document.getElementById('mount7');
let nov=document.querySelector('.nov');
let river=document.getElementById('river');

window.onscroll=function(){
    let value=scrollY;
    stars.style.left=value +'px';
    moon.style.top=value *4 + 'px';
    mount3.style.top=value *2 +'px';
    mount4.style.top=value*1.5 +'px';
    river.style.top=value +'px';
    boat.style.top=value +'px';
    boat.style.left=value*3 +'px';
    nov.style.fontSize=value*3+'px';
    if(scrollY>=67){
        nov.style.fontSize=67+'px';
        nov.style.position='fixed';
        if(scrollY >=420){
            nov.style.display='none';
        }
        else{
            nov.style.display='block';
        }
    }
    if(scrollY>106){
        document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)';
    }
    else{
        document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)';
    }
}