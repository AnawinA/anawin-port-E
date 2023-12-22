---
layout: post
title: minecraft
permalink: /mc/
food: Pizza
published: true
tags: minecraft
---

<ol>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ol>

## {{ page.food }}

<h1>{{ page.food }}</h1>

---
{% assign image_files = site.static_files %}
{% for myimage in image_files %}
  <{{ myimage.path | absolute_url }}>
  <img src="{{ myimage.path | absolute_url }}" alt="{{ myimage.basename }}" width="50">
{% endfor %}

dragon