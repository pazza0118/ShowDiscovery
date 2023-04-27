import { Event } from "../Helper/helper";

export abstract class ModelList<P>{

  public event: { eventName: string; callback: () => void } = {} as Event;
  public attr: P[] = [];
  seed = (numPages :number, getModels:(num:number)=>void):void => {
    for(let i = 1; i <= numPages; i++){
      getModels(i)      
    }
  }
}
