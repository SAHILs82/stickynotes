const box1=document.getElementById('box1')
const box2=document.getElementById('box2')
const box3=document.getElementById('box3')
const box4=document.getElementById('box4')
const final=document.getElementById('final')
const finalmsg=document.getElementById('finalmsg')
let messagebox=[]

box1.addEventListener('click',function(e){
    e.preventDefault()
    console.log("msg1")
    addnewmsg()
   
})

box2.addEventListener('click',function(e){
    e.preventDefault()
    console.log("msg2")
    addnewmsg2()
})

box3.addEventListener('click',function(e){
    e.preventDefault()
    console.log("msg3")
    addnewmsg3()
})

box4.addEventListener('click',function(e){
    e.preventDefault()
    console.log("msg4")
    addnewmsg4()
})

function addnewmsg(){
    const newmsg = box1.value;
    if(!newmsg)return;
  
    let data= {
        text:newmsg,
        complete:false
    }

    messagebox.push(data)
    console.log(messagebox)
    render()
}

function addnewmsg2(){
    const newmsg2 = box2.value;
    if(!newmsg2)return;
  
    let data2= {
        text:newmsg2,
        complete:false
    }

    messagebox.push(data2)
    console.log(messagebox)
    render()
}


function addnewmsg3(){
    const newmsg3 = box3.value;
    if(!newmsg3)return;
  
    let data3= {
        text:newmsg3,
        complete:false
    }

    messagebox.push(data3)
    console.log(messagebox)
    render()
}


function addnewmsg4(){
    const newmsg4 = box4.value;
    if(!newmsg4)return;
  
    let data4= {
        text:newmsg4,
        complete:false
    }

    messagebox.push(data4)
    console.log(messagebox)
    render()
}

function render(){
    messagebox.innerHTML=null;
    for(let i=0;i<messagebox.length;i++){
        const item=document.createElement('li')
        const button=document.createElement('button')
        button.innerHTML="complete"
        
        
        button.addEventListener("click",function (e) {
            messagebox[i].complete=e.target.value;

              if(messagebox[i].complete){
                item.classList.add("complete");
                item.classList.remove("uncomplete");
            }
            else
            {
                item.classList.add("uncomplete");
                item.classList.remove("complete");
            }
            
        })

        const text=document.createElement('p')
        text.innerText=messagebox[i].text;

        // const completebutton=document.createElement("button")
        // // completebutton.type='button'
        // completebutton.innerHTML="complete"

        const Incomplete=document.createElement("button")
        Incomplete.innerHTML="incomplete"

    // completebutton.addEventListener("click",function (e) {
    //     messagebox.splice(i,1)
    //     render()
    //  })

    Incomplete.addEventListener("click",function (e) {
        messagebox.splice(i,1)
        render()
    })

    item.appendChild(button);
    item.appendChild(text);
    item.appendChild(Incomplete);
    final.appendChild(item);
    finalmsg.value=null;

  }
}
