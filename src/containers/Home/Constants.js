export const roles = [
    {
        "id": 1,
        "title": "Employee",
        "type": "emp",
        "maxWidth": 3,
        "target": [
          {
            "id": 1,
            "containerID": "Exp1",
            "types": "exp"
          },
          {
            "id": 2,
            "containerID": "Exp2",
            "types": "exp"
          },
          {
            "id": 3,
            "containerID": "Exp3",
            "types": "exp"
          }
        ]
      },
      {
        "id": 2,
        "title": "Supervisor",
        "type": "sup",
        "maxWidth": 6,
        "target": [
          {
            "id": 1,
            "containerID": "Sup1",
            "types": "sup"
          },
          {
            "id": 2,
            "containerID": "Sup2",
            "types": "sup"
          },
          {
            "id": 3,
            "containerID": "Sup3",
            "types": "sup"
          }
        ]
      },
      {
        "id": 3,
        "title": "Admin",
        "type": "adm",
        "maxWidth": 6,
        "target": [
          {
            "id": 1,
            "containerID": "Adm1",
            "types": "adm"
          },
          {
            "id": 2,
            "containerID": "Adm2",
            "types": "adm"
          },
          {
            "id": 3,
            "containerID": "Adm3",
            "types": "adm"
          }
        ]
      }
  ];

  export const actions = [
    {
      "id": 1,
      "title": "Expense",
      "type": "emp",
      "width": 2
    },
    {
      "id": 2,
      "title": "Supervisor Approved",
      "type": "sup",
      "width": 3
    },
    {
      "id": 3,
      "title": "Supervisor Pending",
      "type": "sup",
      "width": 5
    },
    {
      "id": 4,
      "title": "Supervisor Denied",
      "type": "sup",
      "width": 5
    },
    {
      "id": 5,
      "title": "Admin Approved",
      "type": "adm",
      "width": 3
    },
    {
      "id": 6,
      "title": "Admin Pending",
      "type": "adm",
      "width": 6
    },
    {
      "id": 7,
      "title": "Admin Denied",
      "type": "adm",
      "width": 6
    }  
  ];

  export const initialSet = {
    Employee: [],
    Supervisor: [],
    Admin: [],
    Exp1: [],
    Exp2: [],
    Exp3: [],
    Sup1: [],
    Sup2: [],
    Sup3: [],
    Adm1: [],
    Adm2: [],
    Adm3: []
  };