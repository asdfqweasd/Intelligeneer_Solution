import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Products",
    hash: "#products",
  },
  {
    name: "Robotics",
    hash: "#robotics",
  },
  {
    name: "Training",
    hash: "#training",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const categories = [
  { name: "Technology", value: "technology" },
  { name: "Business", value: "business" },
  { name: "Entertainment", value: "entertainment" },
  { name: "Sports", value: "sports" },
  { name: "General", value: "general" },
];