// you can keep interface in a separate file and export
interface IEmployee{
  empId: number;
  empFullName: string;
  joinedDate: string;
  expInYears: number;
  skills: string[];
}

class Employee implements IEmployee{
  empId: number = 0;
  empFullName: string = '';
  joinedDate: string = '';
  expInYears: number = 0;
  skills: string[] = [];

  constructor(empId: number, empFullName: string){
    this.empId = empId;
    this.empFullName = empFullName;
    this.joinedDate = '';
    this.expInYears = 0;
    this.skills= [];
  }

  getEmpInfo(){
    console.log(`${this.empFullName} has ${this.expInYears} years of experience`);
  }
}

const employee1 = new Employee(1, "John Peter");
employee1.getEmpInfo();