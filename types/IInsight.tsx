import { IEmployee } from "./IEmployee";


export interface IInsight {
  id: number;
  title: string;
  shortTitle: string; //30
  description: string;
  content?:string;
  image: string;
  link: string;
  date: Date;
  author?: IEmployee[];
}