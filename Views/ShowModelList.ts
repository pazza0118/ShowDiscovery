




export abstract class ShowModelList<M extends {attr:P[]}, P>{
  constructor(public parentElement: Element, public modelList:M){}
  abstract template(modelAttr:P):string;

  renderModel = (modelAttr: P) => {
    const modelElement = document.createElement("div");
    modelElement.innerHTML = this.template(modelAttr);
    this.parentElement.append(modelElement);
  };
  renderModelList = (): void => {
    this.modelList.attr.forEach((modelAttr) => {
      this.renderModel(modelAttr);
    });
  };
}