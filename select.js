document.addEventListener("DOMContentLoaded",()=>{
    //able to select multiple option
    optionBas();
    optionExc();
    result();
    });
function optionBas(){
    const opt=document.createElement("option");
    
    fetch(`https://api.exchangeratesapi.io/latest`)
    .then(respons =>respons.json())
    .then(data=>{
    
    const excBaseOpt=Object.keys(data.rates);
    
    for (let index = 0; index < excBaseOpt.length; index++) {
        op=excBaseOpt[index];
        var optionElement = new Option(op, op);
        document.querySelector("#baseOpt").appendChild(optionElement);
        
    };});
};

function optionExc(){
    const opt=document.createElement("option");
    
    fetch(`https://api.exchangeratesapi.io/latest`)
    .then(respons =>respons.json())
    .then(data=>{
    
    const excOpt=Object.keys(data.rates);
    
    for (let index = 0; index < excOpt.length; index++) {
        op=excOpt[index];
        var optionElement = new Option(op, op);
        document.querySelector("#excOpt").appendChild(optionElement);
        
    };});
};
function result(){
    document.querySelector("#exchangeForm").onsubmit=()=>{
        
        const base=document.querySelector("#baseOpt").value;
        const exc=document.querySelector("#excOpt").value;
        fetch(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${exc}`)
        .then(response =>response.json())
        .then(res=>{
            const result=`for each ${base} is equal to ${res.rates[exc]} ${exc}.`
            document.querySelector("#result").innerHTML=result;
        })
        .catch(()=>{
            document.querySelector("#result").innerHTML="Could not get exchange rate";
        })
        return false;
    }
};
