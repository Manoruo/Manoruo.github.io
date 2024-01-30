---
permalink: /
title: "Hello! I'm Michael Anoruo"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<img src="/images/Boat_Ride.jpg" style="border-radius: 10px;" class="align-right" width="300px">


<ins>Welcome!</ins>
==========
Welcome to my personal website. Here you can find various information about my interest, skills, work experiences, and some of the personal projects I work on in my spare time. I am currently waiting to hear back from various Ph.D. programs for next fall and am looking for internship opportunities for Spring/Summer 2024. 

*Please feel free to reach out if there are any opportunities you believe I would be a good fit for!* 💡

<ins>About Me</ins>
==========

🎓 Recent Computer Science grad from the University of Maryland Baltimore County (UMBC)

📚 I plan to continue my education and have recently applied to Ph.D. programs in AI/ML

🔬 My research interest include applied AI/ML, Autonomous Vehicles, and Computer Vision

🏈 Some of my hobbies include playing [sports](https://www.hudl.com/profile/12884158/Michael-Anoruo), game development, and trying new things

<ins>Featured Projects</ins>
==========
{% assign recent_posts = site.portfolio | reverse | slice: 0, 3 %}
{% for post in recent_posts %}
  {% include portfolio-single-mini.html %}
{% endfor %}

<div style="text-align: right; font-style: italic;">
  <a href="/portfolio/">See All Projects</a>
</div>

