import {Autobind} from '../decorators/auto-bind'
import { projectState } from '../state/project';
import { Validatable, validate } from '../util/validation';


export class ProjectInput {
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