export class LinkQr {
    id?:number;
    idquestion?:number;
    idresponse?:number;

    loadFromJson(jsonElement: any){
        Object.assign(this,jsonElement);
        }
}
