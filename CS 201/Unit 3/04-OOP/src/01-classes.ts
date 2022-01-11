// class Department {
//   private paycheck = 1000000;

//   updatePay = (newNum: number) => {
//     this.paycheck = newNum;
//     return this.paycheck;
//   };
// }

// // IT.paychaeck = 20;
// const IT = new Department();

// console.log(IT.updatePay(20));

// // console.log(IT.paycheck);

// class ProjectMath {
//   static gravity = 9.8;
//   static speed(time: number) {
//     return time ** 2 * ProjectMath.gravity;
//   }
// }

// ProjectMath.speed(4); //

//*gradebook
//*//static array with current grades
//*// find the passing grade = 65
//*// put in an array and find the average
//*// add a new grade to the array
//* remove the lowest grade from an array
//* print out all the items in an array (...)

// class GradeBook {
//   //static array iwth current grades
//   static grades: number[] = [33, 13, 75, 64, 65, 83, 97, 42, 100];

//   //define the passing grade = 65
//   static passing: number = 65;

//   //put in an array and find the average
//   static findAvg(): number {
//     const sum = GradeBook.grades.reduce((curr, next) => {
//       return curr + next;
//     }, 0);
//     return sum / GradeBook.grades.length;
//   }

//   //add a new grade to the array
//   static addGrade(newGrade: number): number[] {
//     GradeBook.grades.push(newGrade);
//     return GradeBook.grades;
//   }

//   //find the passing grades
//   static findPassing(): number[] {
//     const passingGrades = GradeBook.grades.filter(
//       (grade) => grade > GradeBook.passing
//     );
//     return passingGrades;
//   }

//   //remove the lowest grade from an array
//   static removeLowest(): number[] {
//     const min = Math.min(...GradeBook.grades);
//     GradeBook.grades.splice(GradeBook.grades.indexOf(min), 1);
//     return GradeBook.grades;
//   }

//   //print out all the items in an array (...)
//   static printGrades(): void {
//     console.log(...GradeBook.grades);
//   }
// }

// console.log(GradeBook.findAvg()); //average of the grades array
// console.log(GradeBook.addGrade(77));
// console.log(GradeBook.findPassing());
// console.log(GradeBook.removeLowest());
// GradeBook.printGrades();

abstract class Department {
  static fiscalYear = 2022;
  protected employees: string[] = [];

  // private name: string;

  constructor(public name: string, protected readonly id: string) {
    // this.name = name
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  //!any extended classes now REQUIRE a describe method
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(...this.employees);
  }
}

class ITDepartment extends Department {
  // admins: string[];
  constructor(id: string, public admins: string[]) {
    super("IT", id);
  }

  describe() {
    console.log(`IT Dpartment -ID: ${this.id}`);
  }
}

const employee1 = Department.createEmployee("Max");

const it = new ITDepartment("d1", ["Jimmy", employee1.name]);

it.addEmployee("Tammy");
it.addEmployee("Tommy");

console.log(it.admins);

it.describe();
it.printEmployeeInformation();

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super("Accounting", id);
  }

  //method that gets the most recent report
  get mostRecent() {
    if (this.reports.length > 0) {
      return this.reports[this.reports.length - 1];
    }
    return "No reports submitted";
  }

  set mostRecent(value: string) {
    if (!value) {
      throw new Error("invalid report");
    }
    this.addReport(value);
  }

  //add a new report
  addReport(text: string) {
    this.reports.push(text);
  }

  describe() {
    console.log(`Accounting Department -ID: ${this.id}`);
  }

  //! log all reports
  //! have a case where there are no reports
  printReports() {
    if (this.reports.length === 0) {
      console.log("there no reports");
      return
    }
    console.log(...this.reports);
  }
}

const accoutning = new AccountingDepartment('d2', ['janis'])

accoutning.addEmployee("Manny")

accoutning.printEmployeeInformation()