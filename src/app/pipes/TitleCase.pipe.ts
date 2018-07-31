import { Pipe,PipeTransform  } from '@angular/core';

@Pipe({ name: 'titlecase' })
export class TitleCasePipe implements PipeTransform {

  transform(input: string) {
    var temp = input.split(" ");
    var out = "";
    temp.forEach((element) =>{
       out = out + element.charAt(0).toUpperCase() + element.slice(1).toLowerCase() +" ";
    })
    return out;
  }
}
