import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'apiImg',
  standalone: true
})
export class ApiImgPipe implements PipeTransform {

  transform(path: string): string {
    const url = `${environment.baseUrl}/media/${path}`;
    console.log("URL generada:", url);
    return url;
  }

}
