import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, term: string): any {
    // if (term === '') {
    //   console.log( 'fady' + value);
    //   return value;
    // }
    // const employeer: any = [];
    // for (let i = 0; i <= value.length; i++) {
    //   console.log('i = ' + i);
    //   const department: string = value[i];
    //   console.log('department =' + department );
    //   if (department.startsWith(term)) {
    //     employeer.push(value[i]);
    //     console.log('employeer =' + employeer);
    //   }
    // }
    // console.log('employeer2 =' + employeer);
    // return employeer;
  }

}
