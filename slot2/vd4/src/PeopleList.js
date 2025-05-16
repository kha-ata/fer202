import React from 'react';

function PeopleList() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 28, occupation: "Teacher" }
  ];

  return (
    <div>
      <h2>Danh sach nguoi</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            Ten: {person.name} - Tuoi: {person.age} - Nghe nghiep: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
