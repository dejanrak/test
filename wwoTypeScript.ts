type EmployeeFile = {
  refId: string;
  data: Data;
};

type Data = {
  name: string;
  surname: string;
  type: string;
};

const files: EmployeeFile[] = [
  {
    refId: "example1",
    data: {
      name: "Goran",
      surname: "Jankovic",
      type: "Student",
    },
  },
  {
    refId: "example2",
    data: {
      name: "Srdjan",
      surname: "Jakovljevic",
      type: "Nastavnik",
    },
  },
  {
    refId: "example3",
    data: {
      name: "Petar",
      surname: "Stanojevic",
      type: "Student",
    },
  },
  {
    refId: "example4",
    data: {
      name: "Slobodan",
      surname: "Jahic",
      type: "Obezbedjenje",
    },
  },
  {
    refId: "example5",
    data: {
      name: "Nemanja",
      surname: "Bilic",
      type: "Student",
    },
  },
];

console.log(files[0].data);
