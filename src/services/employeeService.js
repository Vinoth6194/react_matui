const KEYS = {
  employees: "employees",
};
export const getDepartmentCollection = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" },
];

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.employees));
}

export function insertEmployee(data) {
  let employees = getAllEmployees();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}
