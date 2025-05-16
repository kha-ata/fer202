import React from 'react';

function PeopleList() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 28, occupation: "Teacher" }
  ];

  return (
    <div>
      <h2>Bang thong tin nguoi</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Ten</th>
            <th>Tuoi</th>
            <th>Nghe nghiep</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleList;
