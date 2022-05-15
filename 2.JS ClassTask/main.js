
//Bal daxil edilsin bala uygun telebe varsa adi soyadi ve alacagi diplom qeyd edilsin


let mark=parseInt(prompt("Enter your GPA"));


let student1={
    name:"Gunel",
    surname:"Mustafayeva",
    GPA:97
}

let student2={
    name:"Sevda",
    surname:"Khidirova",
    GPA:85
}

let student3={
    name:"Mamed",
    surname:"Aliyev",
    GPA:73
}

let student4={
    name:"Isa",
    surname:"Quliyev",
    GPA:54
}

let Students =[student1, student2, student3, student4]

function CheckDiploma(mark){
for(let i=0; i<Students.length; i++)
{
if( Students[i].GPA==mark)
{
     if(mark<=100 && mark>90)
     {
     return `${Students[i].name} ${Students[i].surname}---Yuksek Seref Diplomu`;
     }
     else if(mark<=90 && mark>80)
     {
     return `${Students[i].name} ${Students[i].surname}--- Seref Diplomu`;
     }
     else if(mark<=80 && mark>=65)
     {
    return `${Students[i].name} ${Students[i].surname}--- Sade Diplom`;
     }
     else
     {
     return `${Students[i].name} ${Students[i].surname}--- Kesilib`;
     }
}
}
return "Siyahida bu bala uygun sagird tapilmadi"
}

console.log(CheckDiploma(mark));