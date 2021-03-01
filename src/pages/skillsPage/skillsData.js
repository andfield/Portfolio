import html from "../../assets/img/skills/html-5.svg"
import css3 from "../../assets/img/skills/css3.svg"
import bootstrap from "../../assets/img/skills/bootstrap-4.svg"
import react from "../../assets/img/skills/react.svg"
import redux from "../../assets/img/skills/redux.svg"
import vue from '../../assets/img/skills/vue.svg'
import vuetify from '../../assets/img/skills/vuetify.svg'
import mui from "../../assets/img/skills/material-ui-1.svg"
import node from "../../assets/img/skills/nodejs.svg"
import express from "../../assets/img/skills/express.svg"
import django from "../../assets/img/skills/django.svg"
import flask from "../../assets/img/skills/flask.svg"
import net from '../../assets/img/skills/dotnet.svg'
import spring from '../../assets/img/skills/spring-3.svg'
import mongodb from "../../assets/img/skills/mongodb.svg"
import firebase from '../../assets/img/skills/firebase-1.svg'
import postgre from "../../assets/img/skills/postgresql.svg"
import msql from "../../assets/img/skills/mssql.svg"
import git from "../../assets/img/skills/git-icon.svg"
import heroku from "../../assets/img/skills/heroku.svg"
import githubPages from "../../assets/img/skills/github.svg"
import js from "../../assets/img/skills/javascript.svg"
import ts from "../../assets/img/skills/typescript.svg"
import java from '../../assets/img/skills/java.svg'
import python from "../../assets/img/skills/python.svg"
import csharp from "../../assets/img/skills/c--4.svg"

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
            link: "https://redux.js.org/",
            imgAltText: "Redux",
            imgSrc: redux,
            skillName: "Redux",
        },
        {
            link: 'https://vuejs.org/',
            imgAltText: 'Vue',
            imgSrc: vue,
            skillName: "Vue JS"
        },
        {
            link: 'https://vuetifyjs.com/en/',
            imgAltText: 'Vuetify',
            imgSrc: vuetify,
            skillName: 'Vuetify'
        },
        {
            link: "https://material-ui.com/",
            imgAltText: "Material-UI",
            imgSrc: mui,
            skillName: "Material-UI",
        },

        {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: bootstrap,
            skillName: "Bootstrap",
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
        {
            link: "https://flask.palletsprojects.com/",
            imgAltText: "Flask",
            imgSrc: flask,
            skillName: "Flask",
        },
        {
            link: 'https://dotnet.microsoft.com/',
            imgAltText: '.Net',
            imgSrc: net,
            skillName: '.Net'
        },
        {
            link: 'https://spring.io/projects/spring-boot',
            imgAltText: 'Spring',
            imgSrc: spring,
            skillName: 'Spring Boot'
        }
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

        {
            link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
            imgAltText: 'C#',
            imgSrc: csharp,
            skillName: 'C#'
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
            link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
            imgAltText: "MS-SQL",
            imgSrc: msql,
            skillName: "MS-SQL",
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