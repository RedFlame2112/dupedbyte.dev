---
title: "Building dupedbyte.dev"
description: "Hello World! Welcome to dupedbyte.dev!"
pubDate: 2025-12-25
readTime: 7
tags:
  - astro
  - tailwind
  - security
  - devops
  - writing
difficulty: 1
draft: false
---

Merry Christmas and Happy Holidays! This is my first official post on dupedbyte.dev! I created this website as a spot where I can talk through what I am building,showcase the work I care about, and document my learning process in the ever-changing tech landscape.

## Building the site

I started with a simple static layout in Astro and Tailwind because I wanted a fast default and a design system that would not drift every time I write a new post. The green palette shows up everywhere: card borders, gradients, and buttons. Shiki handles the code blocks, KaTeX renders math cleanly, and the markdown stays simple enough that I can write in one sitting.

The base layout does the heavy lifting: nav, footer, theme toggles, and that little floating terminal. As a fun bonus, I've also added a mini terminal for various commands to help enhance the experience. Expect for some more commands and functions added to this in the future!

Content lives in `src/content/blog/` with a schema that keeps titles, tags, difficulty, and read time consistent. I index posts so Pagefind can run client side when I publish, and I plan to keep shipping to Cloudflare Pages for predictable deploys.

> [!TIP]
> Want to view my resume without digging or downloading it directly? Hit the floating terminal, type `resume`, and it opens in a new tab.

## What I do

Currently, I am an M.C.S. student at UIUC after finishing a B.S. in Computer Engineering this May of 2025. My passion is designing and implementing systems that hold up under pressure and telling the story in a way others can learn from. I plan on utilizing this platform to share my passion to everyone who views it, and document my projects and what I've learned along the way.


## What Comes Next?

I consider this site to be my public notebook of sorts, documenting my work and journey in systems engineering, AI, and computer security. I want this to reflect the way I learn and work on things, which means building something tangible, breaking it down into parts, and then writing down what I've done so I can reproduce what I've done or learn from what went wrong.

A sizeable chunk of what I publish will be CTF writeups and machine walkthroughs. The goal of these are not supposed to be simple "here is the flag" posts as that feels that defeats the purpose of these. I want them to focus on repeatable workflows that can be analyzed and improved over time, like how I approach reversing, PWN techniques, and patterns that show up repeatedly across challenges. I also want to include some of my dead ends, because they often show me what went wrong and how I'm able to backtrack and figure out new possibilities from there. 

Alongside that, I'm also going to document some of my personal projects in general systems design and development. To me, personal projects are a way for me to chase curiosity without worrying for constraints, so I can treat them like small research sprints that start with a question and end with something I can measure and iterate on. On dupedbyte.dev, I'm going to document these projects from first sketch to final build, design decisions, tools I used in the past, and the tradeoffs I made when things didn't work according to plan. I have some blog posts already in mind relating to projects I've worked on in my past, so stay tuned for these. 

Finally, I want this blog to hold project deep dives, not just announcements. When I build something, I want to capture what I measured, what tradeoffs I made, and what I would change if I had another week. Over time, I want dupedbyte.dev to read like an honest timeline of my personal and career growth as an engineer and explain the work clearly enough that other people can reuse it.