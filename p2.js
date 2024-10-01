let array=["pizza","juice"]

let total =0;
for(let i=0;i<array.length;i++){
    switch(array[i]){
        case "pizza":
            total+=400
            break
        case "juice":
            total+=150
            break
    }

}

if(total<=500){
    console.log(total)
}
else{
    console.log(total-(total*0.1))
}


