class Control<NodeType extends HTMLElement = HTMLElement> {
    public node: NodeType;
  
    constructor(
      parentNode: HTMLElement | null,
      tagName = "div",
      className = "",
      content = "",
     /*  id = "", */
      
    ) {
      const el = document.createElement(tagName);
      el.className = className;
      el.textContent = content;
     /*  el.id =id; */
      
      if (parentNode) {
        parentNode.append(el);
      }
      this.node = el as NodeType;
    }
  
    destroy(): void {
      this.node.remove();
    }
  }
  
  export default Control;
  