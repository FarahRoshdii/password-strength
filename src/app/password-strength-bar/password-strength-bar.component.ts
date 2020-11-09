
import {Component, OnChanges, Input, SimpleChange} from '@angular/core';  



@Component({  

  selector: 'app-password-strength-bar',  

  templateUrl: './password-strength-bar.component.html',  

  styleUrls: ['./password-strength-bar.component.css']  

})  

export class passwordStrengthBarComponent implements OnChanges  {  

  

  @Input() passwordToCheck: string;  

  @Input() barLabel: string;  

  bar0: string;  

  bar1: string;  

  bar2: string;  

  bar3: string;  

  bar4: string;  

  scr: string;

  msg='';

  private colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];  

  

  public static measureStrength(pass: string) {  

      let score = 0; 
      var rgularExp = {
        onlyNumbers : /^[0-9]+$/ ,
        containsNumber : /\d+/,
        onlyLetters : /^[A-Za-z]+$/,}
      let len= pass.replace(/[^A-Z]/g, "").length
      let lowercases= pass.replace(/[^a-z]/g, "").length
      let specialCharacters = pass.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g);
      let letters= pass.replace(/^[A-Za-z]+$/g,"").length
      if(pass.length !== 0){
       score += ((pass.length)*4);
       
      }

      
      if(specialCharacters){
      score += (specialCharacters.length*6);
      }

      if(pass.length >= 8){
        score += (pass.length * 2);
      }

       if (len !== 0){
         let ucr=0;
         for(let i=0;i<pass.length;i++){
          if(pass[i]===pass[i+1]){
           
          ucr++; 
          }}

          if (ucr !== 0){
            score -= ((ucr)*2);
          }
         
        score += Math.abs(((len-pass.length)*2));
      }

      if(lowercases !== 0 ){
        let lcr=0;
        for(let i=0;i<pass.length;i++){
         if(pass[i]===pass[i+1]){
       
         lcr++; 
         }}

         if (lcr !== 0){
           score -= (lcr*2);
         }
         
        score += Math.abs(((len-pass.length)*2));
      }

       if(rgularExp.onlyNumbers.test(pass)){
         score -= pass.length;
       }

       if(rgularExp.onlyLetters.test(pass)){
        score -= pass.length;
      }

    

      
      let digits=pass.replace(/[^0-9]/g,"").length
      if(digits !==0){
        let nr=0;
        let sn=0;
        for(let i=0;i<pass.length-1;i++){

            if(rgularExp.containsNumber.test(pass[i])==rgularExp.containsNumber.test(pass[i+1])){
              if(pass[i]<=pass[i+1] && pass[i+1]<= pass[i+2]){
                sn++;
              }
             nr++;
            }
          
          }
          
          score -=((sn)*3);
         score -= ((nr)*2);
        score += (digits*4);
      }
    
  if (len !==0 || lowercases !==0){
  // let counter=-1;
  let sl=-1;
  for(let i=0;i<pass.length;i++){
    if(rgularExp.onlyLetters.test(pass[i]) && rgularExp.onlyLetters.test(pass[i+1])){
    if(pass.toLowerCase().charCodeAt(i+1) - pass.toLowerCase().charCodeAt(i) != 1){
    }
    else{
      sl++;

  };
    
   }
   if (sl <= 0){
    score -= ((sl)*3);
   }}
  }
  
 
  let counter2=0;
  let ss=0;
  for(let i=0;i<pass.length;i++){
    if(pass.charCodeAt(i+1) - pass.charCodeAt(i) != 1){
    }
    else{
      counter2++;
    // alert("we are seq letters")};
    
   }}
   if (counter2 % 2 === 0){
  
    ss++;
   
   }
   score -= ((ss)*3);
  

  

  
 
    if (score <=0){
      score=0;
    }
    if (score>100){
      score=100;
    }
      
      return Math.trunc(score);  

  }  


  
  
  
  

private getColor(score: number) {  
  this.msg='' + score;
  let idx = 0;  

  if (score > 90) {  

    idx = 4;  

  } else if (score > 70) {  

    idx = 3;  

  } else if (score >= 50) {  

    idx = 2;  

  } else if (score >= 30) {  

    idx = 1;  

  }  

  return {  

    idx: idx +1 ,  

    col: this.colors[idx]  

  };  

}  

  

  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {  

      var password = changes['passwordToCheck'].currentValue;  

      this.setBarColors(5, '#DDD');  

      if (password) {  

          let c = this.getColor(passwordStrengthBarComponent.measureStrength(password));  

          this.setBarColors(c.idx, c.col);  

      }  

  }  

  private setBarColors(count, col) {  

      for (let _n = 0; _n < count; _n++) {  

          this['bar' + _n] = col;  

      }  

  }  

}  
