let studentRecords=[{name:'John',Id:123,marks:98},
{name:'Baba',Id:101,marks:23},
{name:'Yaga',Id:200,marks:45},
{name:'Wick',Id:115,marks:75},]


studentRecords.map((item)=>{
    console.log(item.name.toUpperCase());
})
//2
studentRecords.map((item)=>{
    if(item.marks>50)
    console.log(item);
})
//4
let sum=studentRecords.reduce((prevalue,curvalue)=>{
    return prevalue+=curvalue.marks
},0)
console.log(sum)
//3
studentRecords.map((item)=>{
    if(item.marks>50 && item.Id>120)
    console.log(item);})
//5
studentRecords.map((item)=>{
    if(item.marks>50)
    console.log(item.name);
})

//6
studentRecords.map((item)=>{
    if(item.Id>120)
    console.log(item.marks);})
    //7

studentRecords.map((item)=>{
    if(item.marks<50)
      item.marks+=15;
    console.log(item);})
//8
let studentRecords1 = [
    { name: 'John', class: '10th', rollNo: 101 },
    { name: 'Jane ', class: '9th', rollNo: 202 },
    { name: 'Michael', class: '11th', rollNo: 303 },
    { name: 'Emily', class: '12th', rollNo: 404 },
    { name: 'David ', class: '10th', rollNo: 505 },
    { name: 'Sarah ', class: '9th', rollNo: 606 }
  ];
  
  console.log(studentRecords1)
