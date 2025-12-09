---
layout: page
title: Blog
permalink: /blog/
description: Updates and project write-ups
nav: true
nav_order: 4
---

<div class="posts">
  {% assign sorted_posts = site.posts | sort: "date" | reverse %}
  {% for post in sorted_posts %}
    <div class="post">
      <h2 class="post-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
      {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
      {% endif %}
      <a class="btn btn-sm z-depth-0" href="{{ post.url | relative_url }}">Read more</a>
    </div>
    <hr>
  {% endfor %}
</div>

