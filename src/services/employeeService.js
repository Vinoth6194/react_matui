const KEYS = {
  employees: "employees",
};
export const getDepartmentCollection = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" },
];

export function getAllEmployess() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.employees));
}
