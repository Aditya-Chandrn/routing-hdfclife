import { Link, useSearchParams } from "react-router-dom";
import { students } from "../fakeData";

export default function Students() {
  const [searchParams, setSearchParams] = useSearchParams();
  const course = searchParams.get("course");

  const filteredStudents = course
    ? students.filter((s) => s.course === course)
    : students;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Students List</h2>
      <div className="mb-4 space-x-2">
        <button
          onClick={() => setSearchParams({ course: "math" })}
          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Math
        </button>
        <button
          onClick={() => setSearchParams({ course: "science" })}
          className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Science
        </button>
        <button
          onClick={() => setSearchParams({})}
          className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          All
        </button>
      </div>

      <ul className="list-disc list-inside space-y-2">
        {filteredStudents.map((student) => (
          <li key={student.id}>
            <Link
              to={`${student.id}`}
              className="text-blue-600 hover:underline"
            >
              {student.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
