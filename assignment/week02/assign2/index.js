let history_list=[
    {
        category:"과외비",
        detail:"10월 월급",
        amount: 500000
    },{
        category:"식비",
        detail:"서브웨이",
        amount:-30000
    },{
        category:"용돈",
        detail:"10월 용돈",
        amount:100000
    },{
        category:"식비",
        detail:"수육국밥",
        amount:-10000
    }];
let filteredList=history_list;
let clickedIncome=true, clickedOutcome=true;

const total=document.querySelector("#totalMoney");
let detaillist=document.querySelector("#detaillist");
const income=document.querySelector("#income_tot");
const outcome=document.querySelector("#outcome_tot");
const inBtn=document.querySelector("#in");
const outBtn=document.querySelector("#out");
const addBtn=document.querySelector("#bottom div");
const modal = document.querySelector('.modalWrap');
var radio = document.getElementsByName("inout");
const c_in = document.getElementById('category-in');
const c_out= document.getElementById('category-out');
const m_input=document.querySelector('#input-amount');
const m_content=document.querySelector('#input-content');

const submitBtn=document.querySelector('.modal-saveBtn');
const closeBtn = document.querySelector('.modal-closeBtn');
const closeModal = document.querySelector('.deleteModalWrap');
let inputAmount=0;
let inputContent="";
let inputSign=1;
let inputCategory="";

makeHistoryList();
calculateHistory();

inBtn.addEventListener("click",infilter);
outBtn.addEventListener("click",outfilter);
addBtn.addEventListener("click",addList);
submitBtn.addEventListener("click",submitList);

c_in.addEventListener("change",function(event){
    console.log(event.target.value);
    inputCategory=event.target.value;
})
c_out.addEventListener("change",function(event){
    inputCategory=event.target.value;
    console.log(event.target.value);
})
m_input.addEventListener("change",function(event){
    console.log(event.target.value);
    inputAmount=event.target.value;
})
m_content.addEventListener("change",function(event){
    console.log(event.target.value);
    inputContent=event.target.value;
})


function infilter(){
    clickedIncome=(!clickedIncome);
    doFilter()
}

function outfilter(){
    clickedOutcome=(!clickedOutcome);
    doFilter()
}

function doFilter(){
    detaillist.replaceChildren();
    if(clickedIncome && clickedOutcome)
        filteredList=history_list;
    else if(clickedIncome)
        filteredList=history_list.filter((each)=>each.amount>0);
    else if(clickedOutcome)
        filteredList=history_list.filter((each)=>each.amount<0);
    else
        filteredList=[];    

    makeHistoryList();
}

function makeHistoryList(){
    filteredList.forEach((each)=>{
        
        const eachlist = document.createElement('div');
        const category = document.createElement('div');
        const detail = document.createElement('div');
        const amount = document.createElement('div');
        const xbtn = document.createElement('div');
        
        category.innerText=each.category;
        detail.innerText=each.detail;
        amount.innerText=each.amount;
        xbtn.innerText='x';
        
        eachlist.appendChild(category);
        eachlist.appendChild(detail);
        eachlist.appendChild(amount);
        eachlist.appendChild(xbtn);
    
        eachlist.classList.add('eachlist');
        detaillist.appendChild(eachlist);
    
        each.amount<0 ? amount.classList.add('out') : amount.classList.add('in')

        xbtn.classList.add('xbtn');
        xbtn.addEventListener('click', deleteHistory);


    })
}

function deleteHistory(event){
    closeModal.style.display="block";
    let yes = document.querySelector('#closeYes');
    let no = document.querySelector('#closeNo');
    
    yes.addEventListener("click",(e)=>{
        if(e.target.value){
            detaillist.removeChild(event.target.parentNode);
            const idx= history_list.findIndex(each => each.detail ===event.target.previousElementSibling.previousElementSibling.innerText)
            history_list.splice(idx,1);
            closeModal.style.display="none";
            doFilter()
            calculateHistory();
        }
    })

    no.addEventListener("click",(e)=>{
        e.target.value && (closeModal.style.display="none")
    })
    
}   

function calculateHistory(){
    let init_balance=0;
    let income_total=0;
    let outcome_total=0;
    history_list.forEach((each)=>{
        init_balance+=each.amount;
        each.amount<0 ? outcome_total+=each.amount : income_total+=each.amount;
    })
    total.innerText=init_balance;
    income.innerText=income_total;
    outcome.innerText=outcome_total;
}

function addList(){
    modal.style.display = 'block';
}

function submitList(){
    history_list.push({
        category:inputCategory,
        detail:inputContent,
        amount: inputAmount*inputSign
    })
    window.alert("저장되었습니다.");
    detaillist.replaceChildren();
    makeHistoryList();
    calculateHistory();

}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

for(var i=0 ; i < radio.length ; i++){
    radio[i].addEventListener('click', function () {
    if(this.id === "add-in"){
        console.log("in");
        inputSign=1;
        inputCategory=c_in.options[c_in.selectedIndex].value;
        document.getElementById('add-category-in').style.display="block";
        document.getElementById('add-category-out').style.display="none";
    }else{
        console.log("out");
        inputSign=-1;
        inputCategory=c_out.options[c_out.selectedIndex].value;

        document.getElementById('add-category-out').style.display="block";
        document.getElementById('add-category-in').style.display="none";
    }
    console.log(inputCategory);
})
}