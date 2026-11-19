// Content for the E-Guard site: contact details, feature list and team.

export const CONTACT = {
  email: "eguardproject@gmail.com",
  university: "6th of October University – Information Systems & Computer Science",
};

export type Feature = { title: string; text: string; icon: string; status: "Planned" | "In development" };

export const FEATURES: Feature[] = [
  { title: "Smart wearable monitoring", text: "Health readings collected by a wrist-worn bracelet.", icon: "M7 3h10v18H7zM9 12h2l1-2 1 4 1-2h1", status: "Planned" },
  { title: "AI-assisted fall detection", text: "Designed to help flag possible falls.", icon: "M12 4a2 2 0 1 0 0 .1M8 21l3-8-3-3 4-3 3 4 3 1", status: "Planned" },
  { title: "Intelligent camera monitoring", text: "Spots unusual movement or inactivity.", icon: "M3 7h13v10H3zM16 11l5-3v8l-5-3", status: "Planned" },
  { title: "Real-time notifications", text: "Timely alerts to the user and guardians.", icon: "M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4", status: "In development" },
  { title: "Emergency alert management", text: "Warning and emergency levels with escalation.", icon: "M12 3 2 20h20zM12 10v4M12 17v.5", status: "In development" },
  { title: "Family connectivity", text: "Keeps approved relatives informed.", icon: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-4 3-6 6-6s6 2 6 6M17 8a2.5 2.5 0 1 1 0 5M21 19c0-3-2-5-4-5", status: "In development" },
  { title: "Doctor recommendations", text: "Doctors add notes and advice.", icon: "M5 4h14v16H5zM12 8v8M8 12h8", status: "In development" },
  { title: "Medical history management", text: "Keeps relevant records in one place.", icon: "M6 3h9l4 4v14H6zM9 12h7M9 16h7", status: "In development" },
  { title: "Privacy-aware access control", text: "Each role sees only what it is permitted to.", icon: "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6zM9 12l2 2 4-4", status: "Planned" },
];

export type TeamMember = { name: string; role: string; bio: string; photo?: string };

export const TEAM: TeamMember[] = [
  { name: "Mohannad Sameh Hassan Abdelbaqee", role: "Embedded Systems", bio: "Works on the wearable bracelet and sensor integration." },
  { name: "Youssef Mohamed Hassan Mohamed", role: "Flutter Development", bio: "Builds the E-Guard mobile application." },
  { name: "Youssef Montaser Mahmoud", role: "Flutter Development", bio: "Builds the E-Guard mobile application." },
  { name: "Salma Ahmed Attia Asaker", role: "Backend Development", bio: "Works on data communication and system integration." },
  { name: "Safa Mahmoud Abdaljwad", role: "Backend Development", bio: "Works on data communication and system integration." },
  { name: "Sakina Mohammed Alahmad", role: "Artificial Intelligence", bio: "Works on AI-assisted monitoring and detection." },
  { name: "Salma Ahmed Ramadan", role: "Artificial Intelligence", bio: "Works on AI-assisted monitoring and detection." },
  { name: "Rahaf Mohamed Abdullah", role: "Artificial Intelligence", bio: "Works on AI-assisted monitoring and detection." },
];
