---
layout: page
title: "Projects"
description: "Selected RTL, FPGA and digital design work."
permalink: /projects/
---
<div class="project-grid">{% for project in site.projects %}<a class="project-card" href="{{ project.url | relative_url }}"><div class="card-label">{{ project.category }}</div><h3>{{ project.title }}</h3><p>{{ project.excerpt }}</p><div class="tags">{% for tag in project.tags %}<span>{{ tag }}</span>{% endfor %}</div><span class="card-arrow">Explore →</span></a>{% endfor %}</div>
