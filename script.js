const mockData = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 28,
      role: "Engineer",
      hireDate: "2022-01-15",
      isActive: true,
      salary: 85000,
      department: "Development",
      projectsCompleted: 5,
      lastLogin: "2024-07-28T14:48:00.000Z",
      accessLevel: "Admin",
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 34,
      role: "Manager",
      hireDate: "2020-06-30",
      isActive: false,
      salary: 95000,
      department: "Operations",
      projectsCompleted: 10,
      lastLogin: "2024-07-30T09:21:00.000Z",
      accessLevel: "User",
    },
    {
      id: 3,
      name: "Charlie Rose",
      age: 22,
      role: "Intern",
      hireDate: "2023-03-01",
      isActive: true,
      salary: 45000,
      department: "Development",
      projectsCompleted: 1,
      lastLogin: "2024-07-29T17:03:00.000Z",
      accessLevel: "User",
    },
    {
      id: 4,
      name: "David Green",
      age: 40,
      role: "Director",
      hireDate: "2018-11-20",
      isActive: true,
      salary: 120000,
      department: "Management",
      projectsCompleted: 20,
      lastLogin: "2024-07-27T12:35:00.000Z",
      accessLevel: "Admin",
    },
    {
      id: 5,
      name: "Eva White",
      age: 30,
      role: "Designer",
      hireDate: "2021-05-15",
      isActive: true,
      salary: 70000,
      department: "Design",
      projectsCompleted: 8,
      lastLogin: "2024-07-31T10:15:00.000Z",
      accessLevel: "User",
    },
    {
      id: 6,
      name: "Frank Black",
      age: 29,
      role: "Engineer",
      hireDate: "2019-09-17",
      isActive: true,
      salary: 80000,
      department: "Development",
      projectsCompleted: 6,
      lastLogin: "2024-07-25T11:45:00.000Z",
      accessLevel: "User",
    },
    {
      id: 7,
      name: "Grace Brown",
      age: 26,
      role: "Engineer",
      hireDate: "2021-04-10",
      isActive: false,
      salary: 78000,
      department: "Development",
      projectsCompleted: 4,
      lastLogin: "2024-07-20T09:00:00.000Z",
      accessLevel: "User",
    },
    {
      id: 8,
      name: "Hank Green",
      age: 45,
      role: "Senior Manager",
      hireDate: "2017-03-25",
      isActive: true,
      salary: 110000,
      department: "Operations",
      projectsCompleted: 15,
      lastLogin: "2024-07-29T13:22:00.000Z",
      accessLevel: "Admin",
    },
    {
      id: 9,
      name: "Ivy Blue",
      age: 31,
      role: "Designer",
      hireDate: "2019-08-05",
      isActive: true,
      salary: 72000,
      department: "Design",
      projectsCompleted: 7,
      lastLogin: "2024-07-28T08:48:00.000Z",
      accessLevel: "User",
    },
    {
      id: 10,
      name: "Jack White",
      age: 37,
      role: "Product Manager",
      hireDate: "2020-02-20",
      isActive: false,
      salary: 95000,
      department: "Product",
      projectsCompleted: 12,
      lastLogin: "2024-07-26T15:18:00.000Z",
      accessLevel: "Admin",
    },
    {
      id: 11,
      name: "Kara Black",
      age: 33,
      role: "Engineer",
      hireDate: "2018-12-12",
      isActive: true,
      salary: 85000,
      department: "Development",
      projectsCompleted: 9,
      lastLogin: "2024-07-29T12:00:00.000Z",
      accessLevel: "User",
    },{
        id: 12,
        name: "Leo Green",
        age: 27,
        role: "Designer",
        hireDate: "2021-01-30",
        isActive: true,
        salary: 68000,
        department: "Design",
        projectsCompleted: 3,
        lastLogin: "2024-07-28T16:15:00.000Z",
        accessLevel: "User",
      },
      {
        id: 13,
        name: "Mona Blue",
        age: 36,
        role: "Engineer",
        hireDate: "2019-11-18",
        isActive: true,
        salary: 87000,
        department: "Development",
        projectsCompleted: 11,
        lastLogin: "2024-07-30T14:50:00.000Z",
        accessLevel: "User",
      },
      {
        id: 14,
        name: "Nina Brown",
        age: 25,
        role: "Intern",
        hireDate: "2023-04-14",
        isActive: true,
        salary: 42000,
        department: "Development",
        projectsCompleted: 2,
        lastLogin: "2024-07-31T11:00:00.000Z",
        accessLevel: "User",
      },
      {
        id: 15,
        name: "Oscar White",
        age: 42,
        role: "Director",
        hireDate: "2016-05-11",
        isActive: true,
        salary: 125000,
        department: "Management",
        projectsCompleted: 22,
        lastLogin: "2024-07-29T09:33:00.000Z",
        accessLevel: "Admin",
      }
]

document.addEventListener('DOMContentLoaded', () => {
    renderTable(mockData);
});



function filterData(data, filters) {
    return data.filter(item => {
        return Object.keys(filters).every(key => {
            const value = item[key];
            const filter = filters[key];
            
            switch (key) {
                case 'age':
                case 'salary':
                case 'projectsCompleted':
                    if (filter.equals != null && value !== filter.equals) return false;
                    if (filter.lessThan != null && value >= filter.lessThan) return false;
                    if (filter.lessThanOrEqual != null && value > filter.lessThanOrEqual) return false;
                    if (filter.greaterThan != null && value <= filter.greaterThan) return false;
                    if (filter.greaterThanOrEqual != null && value < filter.greaterThanOrEqual) return false;
                    if (filter.range && (value < filter.range[0] || value > filter.range[1])) return false;
                    return true;

                case 'name':
                case 'role':
                case 'department':
                case 'accessLevel':
                    if (filter.equals != null && value !== filter.equals) return false;
                    if (filter.contains != null && !value.includes(filter.contains)) return false;
                    if (filter.notContains != null && value.includes(filter.notContains)) return false;
                    if (filter.startsWith != null && !value.startsWith(filter.startsWith)) return false;
                    if (filter.endsWith != null && !value.endsWith(filter.endsWith)) return false;
                    return true;

                case 'hireDate':
                case 'lastLogin':
                    const dateValue = new Date(value);
                    const filterDate = new Date(filter.date);
                    if (filter.equals != null && dateValue.getTime() !== filterDate.getTime()) return false;
                    if (filter.lessThan != null && dateValue >= new Date(filter.lessThan)) return false;
                    if (filter.lessThanOrEqual != null && dateValue > new Date(filter.lessThanOrEqual)) return false;
                    if (filter.greaterThan != null && dateValue <= new Date(filter.greaterThan)) return false;
                    if (filter.greaterThanOrEqual != null && dateValue < new Date(filter.greaterThanOrEqual)) return false;
                    if (filter.dateRange && (dateValue < new Date(filter.dateRange[0]) || dateValue > new Date(filter.dateRange[1]))) return false;
                    return true;

                case 'isActive':
                    if (filter.equals != null && value !== filter.equals) return false;
                    return true;

                default:
                    return true;
            }
        });
    });
}

function sortData(data, sortOptions) {
    return data.sort((a, b) => {
        for (const [key, order] of Object.entries(sortOptions)) {
            let comparison = 0;
            if (typeof a[key] === 'string') {
                comparison = a[key].localeCompare(b[key]);
            } else if (typeof a[key] === 'number') {
                comparison = a[key] - b[key];
            } else if (a[key] instanceof Date) {
                comparison = a[key] - b[key];
            }
            if (comparison !== 0) return order === 'asc' ? comparison : -comparison;
        }
        return 0;
    });
}


function searchInData(data, searchTerm) {
    return data.filter(item => 
        Object.values(item).some(value => 
            value != null && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
}


function renderTable(data) {
    const tbody = document.getElementById('dataTableBody');
    tbody.innerHTML = ''; 

    data.forEach(item => {
        const row = document.createElement('tr');
        
       
        const columns = [
            item.id,
            item.name,
            item.age,
            item.role,
            item.hireDate,
            item.isActive ? 'Yes' : 'No',
            item.salary,
            item.department,
            item.projectsCompleted,
            new Date(item.lastLogin).toLocaleString(),
            item.accessLevel
        ];

        columns.forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
}


function sortTable(column) {
    const currentOrder = document.getElementById(column).dataset.order || 'asc';
    const newOrder = currentOrder === 'asc' ? 'desc' : 'asc';

   
    document.getElementById(column).dataset.order = newOrder;

   
    const sortedData = sortData(mockData, { [column]: newOrder });

    
    renderTable(sortedData);
}


function filterAndRender() {
    
    const ageEquals = parseInt(document.getElementById('ageFilterEquals').value) || null;
    const ageLessThan = parseInt(document.getElementById('ageFilterLessThan').value) || null;
    const ageGreaterThan = parseInt(document.getElementById('ageFilterGreaterThan').value) || null;
    const isActive = document.getElementById('isActiveFilter').value;

    const filters = {
        age: {
            equals: ageEquals,
            lessThan: ageLessThan,
            greaterThan: ageGreaterThan
        },
        isActive: isActive !== '' ? isActive === 'true' : null
    };

    let filteredData = filterData(mockData, filters);

   
    const searchTerm = document.getElementById('searchInput').value;
    filteredData = searchInData(filteredData, searchTerm);

  
    const sortedData = sortData(filteredData, { age: 'desc' }); 

   
    renderTable(sortedData);
}


document.addEventListener('DOMContentLoaded', () => {
    filterAndRender();
});


document.getElementById('searchInput').addEventListener('input', filterAndRender);
document.querySelectorAll('#filters input, #filters select').forEach(el => {
    el.addEventListener('input', filterAndRender);
});
