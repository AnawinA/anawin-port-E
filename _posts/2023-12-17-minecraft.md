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
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ol>

## {{ page.food }}

<h1>{{ page.food }}</h1>

---
{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files %}
  {{ myimage.path }}
{% endfor %}

dragon