const data = [
  { name: 'Khaled', roll: 5, id: 2 },
  { name: 'Malek', roll: 52, id: 8 },
  { name: 'Jamu', roll: 9, id: 45 },
];

const sortByProperty = (data, property) => {
  // Use the sort method to sort the array based on the specified property
  return data.sort((a, b) => {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  });
};

// Example usage to sort by roll
const dat = (sortByProperty(data, 'roll'));
console.log(dat);
// Example usage to sort by id
(sortByProperty(data, 'id'));
