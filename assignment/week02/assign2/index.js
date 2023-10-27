let init_balance=0;
let income_total=0;
let outcome_total=0;
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

const total=document.querySelector("#totalMoney");
const detaillist=document.querySelector("#detaillist");
const income=document.querySelector("#income_tot");
const outcome=document.querySelector("#outcome_tot");

history_list.forEach((each)=>{
    init_balance+=each.amount;
    
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

    if(each.amount<0){
        amount.classList.add('out');
        outcome_total+=each.amount;
    }else{
        amount.classList.add('in')
        income_total+=each.amount;
    }

    xbtn.classList.add('xbtn');
})

total.innerText=init_balance;
income.innerText=income_total;
outcome.innerText=outcome_total;