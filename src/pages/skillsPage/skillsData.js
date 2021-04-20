import html from "../../assets/img/skills/html-5.svg"
import css3 from "../../assets/img/skills/css3.svg"
import bootstrap from "../../assets/img/skills/bootstrap-4.svg"
import react from "../../assets/img/skills/react.svg"
import vue from '../../assets/img/skills/vue.svg'
import vuetify from '../../assets/img/skills/vuetify.svg'
import mui from "../../assets/img/skills/material-ui-1.svg"
import node from "../../assets/img/skills/nodejs.svg"
import express from "../../assets/img/skills/express.svg"
import django from "../../assets/img/skills/django.svg"
import mongodb from "../../assets/img/skills/mongodb.svg"
import firebase from '../../assets/img/skills/firebase-1.svg'
import postgre from "../../assets/img/skills/postgresql.svg"
import git from "../../assets/img/skills/git-icon.svg"
import heroku from "../../assets/img/skills/heroku.svg"
import githubPages from "../../assets/img/skills/github.svg"
import js from "../../assets/img/skills/javascript.svg"
import ts from "../../assets/img/skills/typescript.svg"
import java from '../../assets/img/skills/java.svg'
import python from "../../assets/img/skills/python.svg"


export const skills={
    frontend: [
        {
            link: "https://en.wikipedia.org/wiki/HTML5",
            imgAltText: "HTML 5",
            imgSrc: html,
            skillName: "HTML5",
        },
        {
            link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
            imgAltText: "CSS 3",
            imgSrc: css3,
            skillName: "CSS3",
        },
        {
            link: "https://reactjs.org/",
            imgAltText: "React JS",
            imgSrc: react,
            skillName: "React JS",
        },
        {
            link: "https://nextjs.org/",
            imgAltText: "next js",
            imgSrc: react,
            skillName: "NEXT JS",
        },
        {
            link: 'https://vuejs.org/',
            imgAltText: 'Vue',
            imgSrc: vue,
            skillName: "Vue JS"
        },

        {
            link: "https://material-ui.com/",
            imgAltText: "Material-UI",
            imgSrc: mui,
            skillName: "Material-UI",
        },
    ],

    backend: [
        {
            link: "https://nodejs.org/en/",
            imgAltText: "Node.js",
            imgSrc: node,
            skillName: "Node.js",
        },
        {
            link: "https://expressjs.com/",
            imgAltText: "Express",
            imgSrc: express,
            skillName: "Express",
        },
        {
            link: "https://www.djangoproject.com/",
            imgAltText: "Django",
            imgSrc: django,
            skillName: "Django",
        },
    ],
    hosting: [
        {
            link: "https://www.heroku.com/",
            imgAltText: "Heroku",
            imgSrc: heroku,
            skillName: "Heroku",
        },
        {
            link: "https://pages.github.com/",
            imgAltText: "GitHub Pages",
            imgSrc: githubPages,
            skillName: "GitHub Pages",
        },
        {
            link: "https://firebase.google.com/docs/hosting",
            imgAltText: "FireBase Hosting",
            imgSrc: firebase,
            skillName: "FireBase Hosting",
        },
    ],
    programmingLanguages: [
        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: js,
            skillName: "JavaScript",
        },
        {
            link: "https://www.typescriptlang.org/",
            imgAltText: "TypeScript",
            imgSrc: ts,
            skillName: "TypeScript",
        },
        {
            link: "https://www.python.org/",
            imgAltText: "Python",
            imgSrc: python,
            skillName: "Python",
        },
        {
            link: 'https://www.java.com/en/',
            imgAltText: 'Java',
            imgSrc: java,
            skillName: 'Java'
        },
    ],
    databases: [
        {
            link: "https://www.postgresql.org/",
            imgAltText: "PostgreSQL",
            imgSrc: postgre,
            skillName: "Postgre",
        },
        {
            link: "https://www.mongodb.com/",
            imgAltText: "MongoDB",
            imgSrc: mongodb,
            skillName: "Mongo",
        },
        {
            link: 'https://firebase.google.com/docs/database',
            imgAltText: "Firebase",
            imgSrc: firebase,
            skillName: 'FireBase'
        }
    ],
    versionControl: [
        {
            link: "https://git-scm.com/",
            imgAltText: "GIT",
            imgSrc: git,
            skillName: "GIT",
        },
    ],
}