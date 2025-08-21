import { useParams } from "react-router-dom";
import { students } from "../fakeData";

export default function StudentDetails() {
  const { id } = useParams();
  const student = students.find((s) => s.id === Number(id));

  if (!student) return <h3 className="text-red-600">Student not found</h3>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Student Details</h2>
      <p>
        <span className="font-bold">ID:</span> {student.id}
      </p>
      <p>
        <span className="font-bold">Name:</span> {student.name}
      </p>
      <p>
        <span className="font-bold">Course:</span> {student.course}
      </p>
    </div>
  );
}
