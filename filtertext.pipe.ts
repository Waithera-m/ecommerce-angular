import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtertext'
})
export class FiltertextPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items)
    {
      return [];
    }
    if (!searchTerm)
    {
      return items;
    }

    searchTerm.toLocaleLowerCase();

    return items.filter(it => {
      it.toLocaleLowerCase.includes(searchTerm);
    })
  }

}
