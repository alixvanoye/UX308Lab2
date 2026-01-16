export function number2letter(nGrade){
    let sGrade = "";
    if (nGrade < 50){
        sGrade = "F"
    }
    else if(nGrade < 60){
        sGrade = "D"
    }
    else if(nGrade < 70){
        sGrade = "C";
    }
     else if(nGrade < 80){
        sGrade = "B";
     }
      else{
        sGrade = "A";
      }
    return sGrade;

}

if (import.meta.main){
    console.log(`letter grade for 73 is ${number2letter(73)}`)
}