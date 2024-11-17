// CHALLENGE - TYPE ALIAS
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  // console.log('employees' in staff);
  // in (Type Guard)
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager with ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is a employee in the ${staff.department} department`
    );
  }
}

const alice: Employee = { id: 1, name: 'alice', department: 'Sales' };
const steve: Employee = { id: 2, name: 'steve', department: 'HR' };

const bob: Manager = { id: 1, name: 'bob', employees: [alice, steve] };

// printStaffDetails(alice);
printStaffDetails(bob);
