import js from "../assets/skills/js.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import next from "../assets/skills/next.png";
import sass from "../assets/skills/sass.png";
import mui from "../assets/skills/mui.png";
import ts from "../assets/skills/ts.png";
import sb from "../assets/skills/sb.png";
import webpack from "../assets/skills/webpack.png";
import babel from "../assets/skills/babel.png";
import node from "../assets/skills/node.png";
import express from "../assets/skills/express.png";
import postgres from "../assets/skills/postgres.png";
import docker from "../assets/skills/docker.png";
import localstack from "../assets/skills/localstack.png";
import sendgrid from "../assets/skills/sendgrid.png";
import ga from "../assets/skills/ga.png";
import firebase from "../assets/skills/firebase.png";

const skills = [
  {
    tabLabel: "Frontend",
    items: [
      {
        skillLabel: "React.JS",
        src: react,
        width: "100px",
        maxWidth: "22%",
      },
      {
        skillLabel: "Next.JS",
        src: next,
        width: "110px",
        maxWidth: "22%",
      },
      {
        skillLabel: "Webpack",
        src: webpack,
        width: "110px",
        maxWidth: "22%",
      },
      {
        skillLabel: "GA",
        src: ga,
        width: "200px",
        maxWidth: "35%",
      },
      {
        skillLabel: "Firebase",
        src: firebase,
        width: "220px",
        maxWidth: "35%",
      },
      {
        skillLabel: "Sass",
        src: sass,
        width: "130px",
        maxWidth: "20%",
      },
      {
        skillLabel: "Material-UI",
        src: mui,
        width: "350px",
        maxWidth: "55%",
      },
      {
        skillLabel: "HTML",
        src: html,
        width: "80px",
        maxWidth: "15%",
      },
      {
        skillLabel: "CSS",
        src: css,
        width: "80px",
        maxWidth: "15%",
      },
      {
        skillLabel: "Javascript",
        src: js,
        width: "80px",
        maxWidth: "15%",
      },
      {
        skillLabel: "Babel",
        src: babel,
        width: "190px",
        maxWidth: "25%",
      },
      {
        skillLabel: "Typescript",
        src: ts,
        width: "200px",
        maxWidth: "40%",
      },
      {
        skillLabel: "Storybook",
        src: sb,
        width: "300px",
        maxWidth: "40%",
      },
    ],
  },
  {
    tabLabel: "Backend",
    items: [
      {
        skillLabel: "node",
        src: node,
        width: "120px",
        maxWidth: "30%",
      },
      {
        skillLabel: "express",
        src: express,
        width: "300px",
        maxWidth: "40%",
      },
      {
        skillLabel: "postgres",
        src: postgres,
        width: "120px",
        maxWidth: "30%",
      },
      {
        skillLabel: "docker",
        src: docker,
        width: "350px",
        maxWidth: "40%",
      },
      {
        skillLabel: "localstack",
        src: localstack,
        width: "250px",
        maxWidth: "40%",
      },
      {
        skillLabel: "sendgrid",
        src: sendgrid,
        width: "250px",
        maxWidth: "35%",
      },
    ],
  },
  {
    tabLabel: "Others",
    items: [
      {
        skillLabel: "Git",
        src: "",
        width: "150px",
        maxWidth: "30%",
      },
    ],
  },
];
// "Javascript",
//   "HTML/CSS",
//   "React JS",
//   "Next JS",
//   "Sass",
//   "Material-UI",
//   "Webpack",
//   "Rollup",
//   "Storybook",
//   "Node JS",
//   "Express JS",
//   "Docker",
//   "PostgreSQL",
//   "LocalStack",
//   "Git",
//   "Visual Studio Code",
// ];
export default skills;
