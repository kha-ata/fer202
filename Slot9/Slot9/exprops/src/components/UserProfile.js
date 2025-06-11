// UserProfile.js
const UserProfile = ({ user }) => (
  <div>
    <p className="custom-text">
      Hello, {user.name}, {user.age} tuổi
    </p>
  </div>
);

export default UserProfile;
