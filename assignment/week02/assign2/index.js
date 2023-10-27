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


makeHistoryList();
calculateHistory();

inBtn.addEventListener("click",infilter);
outBtn.addEventListener("click",outfilter);

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
    detaillist.removeChild(event.target.parentNode);
    console.log(event.target.previousElementSibling.previousElementSibling.innerText);
    const idx= history_list.findIndex(each => each.detail ===event.target.previousElementSibling.previousElementSibling.innerText)
    history_list.splice(idx,1);
    doFilter()
    calculateHistory();
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