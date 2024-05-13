export class Question {

        id?:number;
        wording?:string;
        statistical?:number;

        loadFromJson(jsonElement: any){
                Object.assign(this,jsonElement);
                }
}
