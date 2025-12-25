import { inputOption } from "../SelectInput/option";

// პროგრამირების მიმართულებები
export const PROGRAMMING_FIELD_OPTIONS: inputOption[] = [
  { value: "frontend", label: "Frontend Development" },
  { value: "backend", label: "Backend Development" },
  { value: "fullstack", label: "Full Stack Development" },
  { value: "mobile", label: "Mobile Development" },
  { value: "devops", label: "DevOps / Cloud Engineering" },
  { value: "data_science", label: "Data Science / ML" },
  { value: "ui_ux", label: "UI/UX Design" },
  { value: "qa", label: "QA / Testing" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "game_dev", label: "Game Development" },
  { value: "blockchain", label: "Blockchain Development" },
  { value: "other", label: "Other" },
];

// გამოცდილების დონე / პოზიცია
export const EXPERIENCE_LEVEL_OPTIONS: inputOption[] = [
  { value: "student", label: "Student / Learner" },
  { value: "junior", label: "Junior Developer" },
  { value: "mid", label: "Mid-Level Developer" },
  { value: "senior", label: "Senior Developer" },
  { value: "lead", label: "Tech Lead" },
  { value: "architect", label: "Software Architect" },
  { value: "manager", label: "Engineering Manager" },
  { value: "freelancer", label: "Freelancer" },
  { value: "intern", label: "Intern" },
  { value: "career_change", label: "Career Changer" },
  { value: "hobbyist", label: "Hobbyist" },
];

export const GENDER_OPTIONS: inputOption[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];