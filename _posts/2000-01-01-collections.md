---
layout: post
title: collections
author: anawin
permalink: /collections/
---
<ol>
{% for staff_member in site.staff_members %}
  <li>{{ staff_member.name }} - {{ staff_member.position }}</li>
{% endfor %}
</ol>

dfs

{% for staff_member in site.staff_members %}
  <h2>
    <a href="{{ staff_member.url | relative_url }}">
      {{ staff_member.name }} - {{ staff_member.position }}
    </a>
  </h2>
  <p>{{ staff_member.content |  markdownify | truncatewords: 20 }}</p>
{% endfor %}