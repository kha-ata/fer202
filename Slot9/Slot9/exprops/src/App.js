// App.js
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Welcome from "./components/Welcome";
import UserProfile from "./components/UserProfile";
import NameList from "./components/NameList";
import StudentCard from "./components/StudentCard";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const userData = { name: "sonhnde180616@fpt.edu.vn", age: 39 };
  const namesList = ["sonhnde180616@fpt.edu.vn", "test@fe.edu.vn"];
  const students = [
    { name: "khatnDE180617@fpt.edu.vn", age: 39, avatar: "/images/student1.jpg" },
    { name: "thienddtDE180618@fpt.edu.vn", age: 40, avatar: "/images/student2.jpg" },
    { name: "đucdtDE180619@fpt.edu.vn", age: 41, avatar: "/images/student3.jpg" },
  ];
  return (
    <>
      <Welcome name="sonhnde180616@fpt.edu.vn" />
      <Welcome name="fptdn@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
