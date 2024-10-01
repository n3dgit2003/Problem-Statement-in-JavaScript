let m=1
let n=3
let sum=0;
if(m>=n){
    console.log("Enter valid");    
}

else{
    for(let i=m;i<n+1;i++){
        sum+=(i*i*i);
    }
}
console.log(sum);