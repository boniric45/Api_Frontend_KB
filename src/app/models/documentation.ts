export class Documentation {

    id?:number;
    keyword?:string;
    link?:string;
    
    loadFromJson(jsonElement: any){
        Object.assign(this,jsonElement);
        }


}
