---
layout: page
title: "Blog"
description: "Practical notes on RTL design, verification, synthesis and FPGA architecture."
permalink: /blog/
---
<div class="article-list">{% for post in site.posts %}<a class="article-row" href="{{ post.url | relative_url }}"><div><span class="article-date">{{ post.date | date: "%d %b %Y" }}</span><h3>{{ post.title }}</h3><p>{{ post.description }}</p></div><span class="row-arrow">↗</span></a>{% endfor %}</div>
