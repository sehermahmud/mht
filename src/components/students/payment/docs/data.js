export const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

export const flavourOptions = [
  { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
  { value: 'chocolate', label: 'Chocolate', rating: 'good' },
  { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
  { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
];

export const stateOptions = [
  {
    _id: '5f8ece6e1b7c8c0d074ae296',
    studentfullname: 'lima',
    email: 'samin@gmail.com',
    fatherName: 'fazam Dul',
    motherName: 'Saiara Mia',
  },
  {
    _id: '5f8eee796ad30823887911bf',
    studentfullname: 'Kim',
    email: 'Kim@gmail.com',
    fatherName: 'fazam Dul',
    motherName: 'Saiara Mia',
  },
  {
    _id: '5f9572b67dca1b1ab8f07405',
    studentfullname: 'Hari Rai',
    email: 'Misa@gmail.com',
    fatherName: 'fazam Dul',
    motherName: 'Saiara Mia',
  },
  {
    _id: '609610125b11e4002229cd56',
    studentPermentId: '2021527001',
    studentfullname: 'mania san',
    email: 'mania@gmail.com',
    fatherName: 'Main san',
  },
];

export const optionLength = [
  { value: 1, label: 'general' },
  {
    value: 2,
    label:
      'Evil is the moment when I lack the strength to be true to the Good that compels me.',
  },
  {
    value: 3,
    label:
      "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
  },
];

export const dogOptions = [
  { id: 1, label: 'Chihuahua' },
  { id: 2, label: 'Bulldog' },
  { id: 3, label: 'Dachshund' },
  { id: 4, label: 'Akita' },
];

// let bigOptions = [];
// for (let i = 0; i < 10000; i++) {
// 	bigOptions = bigOptions.concat(colourOptions);
// }

export const groupedOptions = [
  {
    label: 'Colours',
    options: colourOptions,
  },
  {
    label: 'Flavours',
    options: flavourOptions,
  },
];
