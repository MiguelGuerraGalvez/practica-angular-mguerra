import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen',
  standalone: false
})
export class ImagenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "http://localhost/imagenesAngular/freepik__the-style-is-candid-image-photography-with-natural__93539.jpeg";
  }

}
