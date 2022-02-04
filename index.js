// // let s="kshounish boi is a good boi"
// // console.log(s.lastIndexOf('boi'))
// // console.log(s.slice(0,3))
// // let d=s.replace("boi","girl");//replaces only the first occureence and returns a string
// // console.log(d,s)

// let d=new Date()
// console.log(d)
//dom
let ele=document.getElementsByClassName('container')//might return a array
//ele[0].style.background='yellow'
ele[0].classList.add('bgpri');
//ele[0].classList.remove('bgpri');

tn=document.getElementsByTagName('div')
createele=document.createElement('p')
createele.innerText="para is created"
tn[0].appendChild(createele);
// ele2=document.createElement('b')
// ele2.innerText="this is bold"
// tn[0].replaceChild(ele2,createele)//new,old
//selecting usong query
sel=document.querySelectorAll('.container')
console.log(sel)
let c=0;

function clicked(){ 
    c++;
    console.log("clicked")
    if(c&1) ele[0].style.background="white";
    else ele[0].style.background="yellow";
}

window.onload=function(){
    console.log("window is loaded")
    c=0;
}
//event listener
// firstcontainer=ele[0]
// firstcontainer.addEventListener('click',function(){
//     console.log("click hua");
// })

// secondcontainer=ele[1]
// secondcontainer.addEventListener('mouseover',function(){
//     console.log("mouse laya");
// })

//settimeout and setinterval
// sum=(a,b)=>{
//     return a+b;
// }
done=()=>{
    console.log("5s")
}
//setTimeout(done(),5000);
//setInterval(clicked,100);