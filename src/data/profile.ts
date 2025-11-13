export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  skills: string[];
  bio: string;
}

const profile: Profile = {
  name: "John Doe",
  title: "Web Developer",
  email: "john.doe@example.com",
  phone: "+1234567890",
  skills: ["JavaScript", "React", "TypeScript", "CSS", "Node.js"],
  bio: "Passionate web developer with experience in building responsive and user-friendly applications.",
};

export default profile;