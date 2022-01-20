export class ProjectItem implements Draggable {
  project: Project;
  templateEl: HTMLTemplateElement;
  hostEl: HTMLElement;
  element: HTMLElement;
  assignedProjects: Project[];

  constructor(private hostId: string, project: Project) {
    this.project = project;
    this.assignedProjects = [];
    this.templateEl = document.getElementById(
      "single-project"
    ) as HTMLTemplateElement;
    this.hostEl = document.getElementById(this.hostId) as HTMLElement;

    const importedTemplate = document.importNode(this.templateEl.content, true);
    this.element = importedTemplate.querySelector("li") as HTMLElement;
    this.element.id = `${this.project.id}`;
    this.attach();

    this.init();
    this.render();
  }

  @Autobind
  dragEndHandler(_: DragEvent): void {
    console.log("Dragend");
  }

  @Autobind
  dragStartHandler(e: DragEvent): void {
    e.dataTransfer!.setData("text/plain", this.project.id);
    e.dataTransfer!.effectAllowed = "move";
  }

  get persons() {
    if (this.project.people === 1) {
      return "1 person";
    } else {
      return `${this.project.people} people`;
    }
  }

  private init() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  private render() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.persons + " assigned";
    this.element.querySelector("p")!.textContent = this.project.description;
  }

  private attach() {
    this.hostEl.insertAdjacentElement("beforeend", this.element);
  }
}