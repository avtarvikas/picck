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
  { role: "Professional", logo: user, link: '/signup/p' },
  { role: "Company", logo: company, link: '/signup/c' },
  { role: "Recruiter", logo: recruiter, link: '/signup/r' },
  { role: "Marketing", logo: marketing, link: '/signup/m' }
];

export const hiringProcess = [
  {
    label: "Cost Effective",
    description:
      "We are almost free for employee / Employer.",
    image: application
  },
  {
    label: "Flat Pricing",
    description:
      "You dont have pay to our services, Use then pay.",
    image: interview
  },
  {
    label: "Recruit a Back Ground Verified Profile ",
    description:
      "",
    image: finalInterview
  },
  {
    label: "End to END",
    description:
      "Company that takes care of Employment / Payrole / Consulting / Hiring / BGV.",
    image: assessment
  },
  {
    label: "Integrate with your Company Website",
    description:
      "For careers.",
    image: decision
  },
  {
    label: "Hire for task and Freelancing",
    description:
      "",
    image: offer
  }
];

export const jobOpening = [
  { description: "Manager Vendor Management", location: "Lahore" },
  { description: "Regional Head Sales - DFS", location: "Lahore" },
  { description: "Manager Vendor Management", location: "Islamabad" },
  { description: "Officer Employee Engagement", location: "Karachi" }
];
