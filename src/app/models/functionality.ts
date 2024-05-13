export class Functionality {
    id?:number;
    idquestion?:number;
    wording?:string;

    loadFromJson(jsonElement: any){
        Object.assign(this,jsonElement);
        }
}
