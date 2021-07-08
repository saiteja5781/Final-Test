import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filteredString: string):any {

    if (filteredString =='') {

      return value;

    }


else{
    const pArray = [];

    for (const employee of value) {

      if (employee.empName.toLowerCase().includes(filteredString)) {

        pArray.push(employee);

      }

    }

    return pArray;

  }
}

}
