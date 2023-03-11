import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appTooltip]",
  exportAs: "tooltip",
})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement("div");
  visible = false;
  obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91 - 999999999,
    mentor: {
      HTML: "GFG html",
      CSS: "GFG css",
      JavaScript: "GFG javascript",
    },
  };

  @Input()
  set appTooltip(value: any) {
    this.tooltipElement.textContent = value;
    const flattenObject = (obj: any, prefix = "") =>
      Object.keys(obj).reduce((acc: any, k: any) => {
        const pre = prefix.length ? prefix + "." : "";
        if (typeof obj[k] === "object") {
          Object.assign(acc, flattenObject(obj[k], pre + k));
        } else {
          acc[pre + k] = obj[k];
        }
        return acc;
      }, {});
    const flattedObject = flattenObject(this.obj);
    console.log(flattedObject);
    if (
      Object.keys(flattedObject).includes(value) &&
      this.element.nativeElement.tagName === "DIV"
    ) {
      // this.element.nativeElement.innerHTML = flattedObject[value];
      this.renderer.setProperty(
        this.element.nativeElement,
        "innerHTML",
        flattedObject[value]
      );
      console.log(
        "%cFLATTEN OBJECT ",
        "color: red; display: block; width: 100%;",
        flattedObject[value]
      );
    }
  }

  hide(): void {
    this.renderer.setStyle(this.tooltipElement, "display", "none");
  }

  show(): void {
    this.renderer.setStyle(this.tooltipElement, "display", "contents");
  }

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.tooltipElement.className = "tooltip";
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add("tooltip-container");
  }
}
