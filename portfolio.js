import { annotate, annotationGroup } from "https://unpkg.com/rough-notation?module"

const title = document.getElementById("title")
const projects = document.getElementById("projects")
const para3 = document.getElementById("para3")
const news = document.getElementById("news")
const moringa = document.getElementById("moringa")
const join = document.getElementById("join")
const signupform = document.getElementById("signupform")
const buttonsheader = document.getElementById("buttonsheader")

const a1 = annotate  (title, {type: 'highlight', color: 'green'})
const a5 = annotate  (moringa, {type: 'box', color: 'darkblue'})
const a2 = annotate  (projects, {type: 'highlight', color: 'lightgreen'})
const a7 = annotate  (signupform,{type:'highlight', color:'#3c00a0'})
const a8 = annotate  (buttonsheader,{type:'highlight', color:'red'})
const a4 = annotate  (news, {type: 'highlight', color: 'red'})
const a6 = annotate  (join, {type: 'box', color: 'hotpink'})

const ag =annotationGroup([a1,a5,a2,a7,a8,a4,a6])

ag.show()
