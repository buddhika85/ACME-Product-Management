import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform 
{
    transform(value: string, charToConvert: string) 
    {
        value = value.replace(charToConvert, ' ');
        return value;
    }
    
}