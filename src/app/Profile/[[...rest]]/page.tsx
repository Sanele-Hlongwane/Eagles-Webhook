import { UserProfile } from "@clerk/nextjs";

const Profile = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto py-12">
        <UserProfile />
      </div>
    </div>
  );
};

export default Profile;
