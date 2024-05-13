export class Response {
    id?:number;
    wording?:string;
    statistical?:number;
    iddocumentation?:number;

    loadFromJson(jsonElement: any){
        Object.assign(this,jsonElement);
        }
}
