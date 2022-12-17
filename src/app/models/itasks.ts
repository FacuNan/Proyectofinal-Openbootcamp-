
export enum Lavel{
"Info",
"Urgent",
"Blacking"
}
export interface ITasks {
    title:String;
    description?:String;
    completed?:boolean;
    lavel:Lavel;



}
