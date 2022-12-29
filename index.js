let a = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den'];
b = (a.length-1)/2
console.log(a[b])



const sis = {
    name: 'ana',
    age: 28,
}
const bro = {
    name: 'levani',
    age: 21,
}
let diff = 'ანა ლევანზე 7 წლით უფროსია';
let dif = sis.age - bro.age
console.log(dif, diff)

const student = {
    name : "tamta",
    surname: "kvernadze",
    age:20,
    subject :["math","medicine", "art", "dance", "biology"],
    roommate : {
        fullname:"mari gabadadze",
        age : 20
    }



}
let fullName= student.name + " "+ student.surname;
student.fullName = fullName;
console.log(student)
for(let i =0; i<student.subject.length; i++){
    console.log(student.subject[i])

}
let result = student.fullName + " " + "არის" + " " + student.age + " " + "წლის და მისი რუმმეითი არის" +" " + student.roommate.fullname;
console.log(result)


let str = ["Banana", "Orange", "Apple", "Mango",2,12];
for (let a = 0; a< str.length; a++){
   if(typeof(str[a])=='string'){
    console.log(str[a])
   }else {
    break
   }
    
}
let st = [12,23,43,11,9,2,121,90];
for (let n = 0; n < st.length; n++){
    if(st[n]%2==0 && st[n]>31){
        console.log(st[n], 'Element is greater than provided value and is EVEN')
    }else if(st[n]%2==1 && st[n] < 31){
        console.log(st[n] , 'Element is less than provided value and is ODD')
    }
}


