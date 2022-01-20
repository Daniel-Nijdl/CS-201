//* Drag and Drop Interfaces
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

//* Project Type
//* defines what the project will look like

enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

//* Project State Management
type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  //instance = one instance of this state (itself)
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, people: number) {
    const newProject = new Project(
      Math.random.toString(),
      title,
      description,
      people,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
  }

  moveProject(projectID: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectID);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

const projectState = ProjectState.getInstance();

//* Validation
interface Validatable {
  value: string | number;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  max?: number;
  min?: number;
}

function validate(input: Validatable) {
  let isValid = true;
  if (input.required) {
    isValid = isValid && input.value.toString().trim().length !== 0;
  }
  if (input.minLength != null && typeof input.value === "string") {
    isValid = isValid && input.value.length >= input.minLength;
  }
  if (input.maxLength != null && typeof input.value === "string") {
    isValid = isValid && input.value.length <= input.maxLength;
  }
  if (input.min != null && typeof input.value === "number") {
    isValid = isValid && input.value >= input.min;
  }
  if (input.max != null && typeof input.value === "number") {
    isValid = isValid && input.value <= input.max;
  }
  return isValid;
}

function Autobind(_: any, _2: any, desc: PropertyDescriptor) {
  const originalMethod = desc.value;
  const newMethod: PropertyDescriptor = {
    get() {
      return originalMethod.bind(this);
    },
  };

  return newMethod;
}

class ProjectInput {
  templateEl: HTMLTemplateElement;
  hostEl: HTMLElement;
  formEl: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descInputEl: HTMLInputElement;
  peopleInputEl: HTMLInputElement;

  constructor() {
    this.templateEl = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;

    this.hostEl = document.getElementById("app") as HTMLElement;

    const importedTemplate = document.importNode(this.templateEl.content, true);
    this.formEl = importedTemplate.firstElementChild as HTMLFormElement;
    this.formEl.id = "user-input";

    this.titleInputEl = this.formEl.querySelector("#title") as HTMLInputElement;
    this.descInputEl = this.formEl.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputEl = this.formEl.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.peopleInputEl = this.formEl.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.init();
    this.attach();
  }

  //! first this points to ProjectInput class, second points to eventlistener, third points to ProjectInput class
  private init() {
    this.formEl.addEventListener("submit", this.submitHandler.bind(this));
  }

  //! private because it will only be used by the class (cannot be accessed outside class)
  private attach() {
    this.hostEl.insertAdjacentElement("afterbegin", this.formEl);
  }

  @Autobind
  private submitHandler(e: Event) {
    e.preventDefault();
    const userInputs = this.gatherUserInputs();
    if (userInputs) {
      const [title, desc, people] = userInputs;
      projectState.addProject(title, desc, people);
      this.clearInputs();
    }

    //! this.descInputEl points to e: Event
    // console.log(this.descInputEl.value);
  }

  private clearInputs() {
    this.titleInputEl.value = "";
    this.descInputEl.value = "";
    this.peopleInputEl.value = "";
  }

  private gatherUserInputs(): [string, string, number] | void {
    const userTitle = this.titleInputEl.value;
    const userDesc = this.descInputEl.value;
    const userPeople = this.peopleInputEl.value;

    const titleIsValid: Validatable = {
      value: userTitle,
      required: true,
    };

    const descIsValid: Validatable = {
      value: userDesc,
      required: true,
      minLength: 5,
    };

    const peopleIsValid: Validatable = {
      value: +userPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !validate(titleIsValid) ||
      !validate(descIsValid) ||
      !validate(peopleIsValid)
    ) {
      console.log("Something is wrong, please fix");
      return;
    }
    return [userTitle, userDesc, +userPeople];
  }
}

class ProjectItem implements Draggable {
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
    this.render()
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

class ProjectList implements DragTarget {
  templateEl: HTMLTemplateElement;
  hostEl: HTMLElement;
  element: HTMLElement;
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    this.assignedProjects = [];
    this.templateEl = document.getElementById(
      "project-list"
    ) as HTMLTemplateElement;
    this.hostEl = document.getElementById("app") as HTMLElement;

    const importedTemplate = document.importNode(this.templateEl.content, true);
    this.element = importedTemplate.querySelector("section") as HTMLElement;
    this.element.id = `${type}-projects`;
    this.attach();

    this.init();
    this.renderContent();
  }

  private init() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === ProjectStatus.Active;
        }
        return prj.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    ) as HTMLUListElement;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " Projects";
  }

  private attach() {
    this.hostEl.insertAdjacentElement("beforeend", this.element);
  }

  @Autobind
  dragLeaveHandler(_: DragEvent): void {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  @Autobind
  dragOverHandler(e: DragEvent): void {
    if (e.dataTransfer && e.dataTransfer.types[0] === "text/plain") {
      e.preventDefault();
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  }

  @Autobind
  dropHandler(e: DragEvent): void {
    const prjId = e.dataTransfer!.getData("text/plain");
    projectState.moveProject(
      prjId,
      this.type == "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }
}

const prjInput = new ProjectInput();
const activeProjects = new ProjectList("active");
const finishedProjects = new ProjectList("finished");


let test = 0;

if(prjInput){
  test 
}



