import user from "../assets/png/user.png";
import recruiter from "../assets/png/recruiter.png";
import company from "../assets/png/company.png";
import marketing from "../assets/png/marketing.png";
import application from "../assets/png/icon1.png";
import interview from "../assets/png/icon2.png";
import finalInterview from "../assets/png/icon3.png";
import assessment from "../assets/png/icon4.png";
import decision from "../assets/png/icon5.png";
import offer from "../assets/png/icon6.png";

export const logger = [
  { role: "Professional", logo: user },
  { role: "Company", logo: company },
  { role: "Recruiter", logo: recruiter },
  { role: "Marketing", logo: marketing }
];

export const hiringProcess = [
  {
    label: "Application",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: application
  },
  {
    label: "Initial Interview",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: interview
  },
  {
    label: "Final Interview",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: finalInterview
  },
  {
    label: "Assessment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: assessment
  },
  {
    label: "Decision",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: decision
  },
  {
    label: "Offer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: offer
  }
];

export const jobOpening = [
  { description: "Manager Vendor Management", location: "Lahore" },
  { description: "Regional Head Sales - DFS", location: "Lahore" },
  { description: "Manager Vendor Management", location: "Islamabad" },
  { description: "Officer Employee Engagement", location: "Karachi" }
];
