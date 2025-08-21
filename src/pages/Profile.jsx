export default function Profile() {
  const user = localStorage.getItem("user");

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Profile Page</h2>
      <p className="text-gray-700">
        Logged in as: <span className="font-bold">{user}</span>
      </p>
    </div>
  );
}
