

//Custom bir array classi yaradin. 

//class buradakı  metodları implement etsin (Reduce-dan basqa)

// https://www.w3schools.com/js/js_array_iteration.asp 




class myCollection{
    constructor()
    {
    this.elements=arguments;
    }

    
    // forEach()
    forEachC=function (callback){
    for(let i=0; i<this.elements.length; i++){
    console.log(callback(this.elements[i]));
    }  
    }


    // map()
    mapC= function (callback){
    let result=[];
    for(let i=0; i<this.elements.length; i++){
    result.push(callback(this.elements[i]));
    }
    return result;
    }
    

    // filter()
    filterC= function (callback){
    let result=[];
    for(let i=0; i<this.elements.length; i++){
    if(callback(this.elements[i])){
    result.push(this.elements[i]);
    }
    }
    return result;
    }
    

    // every()
    everyC= function (callback){
    let result=true;
    for(let i=0; i<this.elements.length; i++){
    result =result && callback(this.elements[i]);
    }
    return result;
    }
 

    // some()
    someC= function (callback){
    let result=false;
    for(let i=0; i<this.elements.length; i++){
    result =result || callback(this.elements[i]);
    }
    return result;
    }


    // find() 
    findC= function (callback){
    for(let i=0; i<this.elements.length; i++){
    if(callback(this.elements[i])){
    return this.elements[i];
    }
    }
    }
    

    // includes()
    includesC= function (element){
    let result;
    for(let i=0; i<this.elements.length; i++){
    if(this.elements[i]===element){
    result=true;
    }
    }
    if(result==true){
        return true;
    }
    else{
        return false;
    }
    }
   

    // IndexOf()
    indexOfC= function (element){
    for(let i=0; i<this.elements.length; i++){
    if(this.elements[i]===element){
    return i;
    }
    }
    }


    // LastIndexOf()
    lastIndexOfC= function (element){
    for(let i=this.elements.length-1; i>=0; i--){
    if(this.elements[i]===element){
    return i;
    }
    }
    }


    // FindIndex() 
    findIndexC= function (callback){
    for(let i=0; i<this.elements.length; i++){
    if(callback(this.elements[i])){
    return i;
    }
    }
    }


    // Keys()
    keysC= function (){
    let result=[];
    for(let i=0; i<this.elements.length; i++){
    result.push(i)
    }
    return result;
    }


    // Entries()
    entriesC= function (){
    let result=[];
    for(let i=0; i<this.elements.length; i++){
    result.push(`${i},${this.elements[i]}`)
    }
    return result;
    }
 

    // Array.From()
    from= function(writing){
    let result=[];
    for(let i=0; i<writing.length; i++){
        result.push(writing[i]);
    }
    return result;
    }

}
    

   
     
    console.log("Object");
    let myC1= new myCollection(5, 1, 2, 3, 8, 10, 9, 8, 7, 5);
    console.log(myC1);

    console.log("Array For Checking Of My Methods")
    let myC2= [5, 1, 2, 3, 8, 10, 9, 8, 7, 5];
    console.log(myC2);
    



    console.log("My Custom forEach Method With Class");
    myC1.forEachC(x => { return x+3 ;});
    console.log("Checking of forEach Method With Array and Array Methods");
    myC2.forEach(x => { console.log(x+3);});




    console.log("My Custom Map Method With Class");
    let arr1= myC1.mapC(x => { return x+2;});
    console.log(arr1);
    console.log("Checking of Map Method With Array and Array Methods");
    let arr2= myC2.map(x => { return x+2;});
    console.log(arr2);




    console.log("My Custom Filter Method With Class");
    let arr3= myC1.filterC(x => { return x>2;});
    console.log(arr3);
    console.log("Checking of Filter Method With Array and Array Methods");
    let arr4= myC2.filter(x => { return x>2;});
    console.log(arr4);




    console.log("My Custom Every Method With Class");
    let answer1=myC1.everyC(x => { return x>0;})
    console.log(answer1);
    console.log("Checking of Every Method With Array and Array Methods");
    let answer2=myC2.every(x => { return x>0;})
    console.log(answer2);
    



    console.log("My Custom Some Method With Class");
    let answer3=myC1.someC(x => { return x>4;})
    console.log(answer3);
    console.log("Checking of Some Method With Array and Array Methods");
    let answer4=myC2.some(x => { return x>4;})
    console.log(answer4); 




    console.log("My Custom Find Method With Class");
    let answer5=myC1.findC(x => { return x>0;})
    console.log(answer5);
    console.log("Checking of Find Method With Array and Array Methods");
    let answer6=myC2.find(x => { return x>0;})
    console.log(answer6);
    



    console.log("My Custom Includes Method With Class");
    let answer7=myC1.includesC(10);
    console.log(answer7);
    console.log("Checking of Includes Method With Array and Array Methods");
    let answer8=myC2.includes(10)
    console.log(answer8);




    console.log("My Custom IndexOf Method With Class");
    let answer9=myC1.indexOfC(8);
    console.log(answer9);
    console.log("Checking of IndexOf Method With Array and Array Methods");
    let answer10=myC2.indexOf(8);
    console.log(answer10);




    console.log("My Custom LastIndexOf Method With Class");
    let answer11=myC1.lastIndexOfC(8);
    console.log(answer11);
    console.log("Checking of LastIndexOf Method With Array and Array Methods");
    let answer12=myC2.lastIndexOf(8);
    console.log(answer12);




    console.log("My Custom FindIndex Method With Class");
    let answer13=myC1.findIndexC(x => { return x>9;});
    console.log(answer13);
    console.log("Checking of FindIndex Method With Array and Array Methods");
    let answer14=myC2.findIndex(x => { return x>9;});
    console.log(answer14);




    console.log("My Custom Keys Method With Class");
    let answer15=myC1.keysC();
    let text1 = "";
    for (let x of answer15) {
    text1 += x+"\n";
    }
    console.log(text1);
    console.log("Checking of Keys Method With Array and Array Methods");
    let answer16=myC2.keys();
    let text2 = "";
    for (let y of answer16) {
    text2 += y+"\n";
    }
    console.log(text2);
   



    console.log("My Custom Entries Method With Class");
    let answer17=myC1.entriesC();
    let text3 = "";
    for (let z of answer17) {
    text3 += z+"\n";
    }
    console.log(text3);
    console.log("Checking of Entries Method With Array and Array Methods");
    let answer18=myC2.entries();
    let text4 = "";
    for (let t of answer18) {
    text4 += t+"\n";
    }
    console.log(text4);

    


    console.log("My Custom Array.From Method With Class");
    let answer19=myC1.from("CodeAcademy");
    console.log(answer19);
    console.log("Checking of Array.from Method With Array and Array Methods");
    let answer20=Array.from("CodeAcademy");
    console.log(answer20);