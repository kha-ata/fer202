function PersonList() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" }
  ];

  return (
    <div>
      <h2>person'detail</h2>
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

export default PersonList;
