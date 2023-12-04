let valores =[7,8,9,6,5,4,3,2,1]



/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}