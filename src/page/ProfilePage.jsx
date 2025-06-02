import React, { useEffect } from "react";
import { useProfileStore } from "../store/useProfileStore";
import  Profile  from "../components/Profile"


const ProfilePage = () => {
  const {
    loggedInUser,
    profileData,
    isLoading,
    getAllSubmission,
    getRecentSubmissions, // ← assuming this is an array
  } = useProfileStore();

  useEffect(() => {
    profileData();
    getAllSubmission(); // loads recent submissions
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <Profile />
    </>
    // <>
    //   <h1>ProfilePage</h1>
    //   {isLoading ? (
    //     <h1>Loading</h1>
    //   ) : (
    //     <h2>LoggedIn user: {loggedInUser?.name || "User is not logged in"}</h2>
    //   )}

    //   <h1>Recent Submissions</h1>
    //   {getRecentSubmissions && getRecentSubmissions.length > 0 ? (
    //     getRecentSubmissions.map((p) => (
    //       <div>
    //         <h3>Problem Title: {p.problem.title}</h3>
    //         <p>Status: {p.status}</p>
    //       </div>
    //     ))
    //   ) : (
    //     <h2>No recent submissions!</h2>
    //   )}
    // </>
  );
};

export default ProfilePage;
