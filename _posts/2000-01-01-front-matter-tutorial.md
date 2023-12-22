--- 
# the title that will appear in the HTML head tag
layout: post
title: front matter
permalink: /front-matter/
tags: ihavetag js rb
birds_vertical:
  - Tui
  - Kea
  - Pukeko
  - Piwakawaka
  - Kereru
  - Weka

# no new line
Kea: >-
  The kea is the world’s only alpine parrot and native to New Zealand,
  with high **intelligence** and **curiosity** - which also extends to its eating habits.

# need new line
kakapo: |-
  The kakapo is another parrot native to New Zealand
  Unlike the kea, it is a nocturnal, flightless herbivore, and the **heaviest** parrot in the world.
  Unfortunately, these traits have led to it being critically endangered.
---


{% assign read_time = page.content | number_of_words | divided_by: 200 %}

{% if read_time > 0 %}
Read time: {{ read_time }}
{% endif %}

{% assign cal = "testing" %}
{{ cal | upcase}} {{cal | downcase}} {{ cal | size}} {{ cal | prepend: "<p>" | append: "</p>"}}

{{ "2021-01-01T00:00:00Z" | date_to_long_string }}

---

{% assign title = "home" %}
{% assign title = page.title %}
{% if title == "home" %}
 <h3>This is the homepage</h3>
{% elsif title == "about" %}
 <h3>This is the about page</h3>
{% else %}
 <h3>Welcome!</h3>
{% endif %}

---

{% assign products = "Kiwi,Tui,Kea,Karariki,Weka" | split: "," %}
<ul>
 {% for item in products %}
   <li>{{ item }}</li>
 {% endfor %}
</ul>

---

<head>
… rest of head
{% if page.title %}
  <title>CawCannon | {{ page.title }}</title>
{% else %}
  <title>CawCannon</title>
{% endif %}
  <link rel="stylesheet" href="css/style.css">
</head>



birds_inline: [Kiwi, Tui, Kea, Karakiri, Weka]
{% for bird in page.birds_vertical %}
  {{ bird }}
{% endfor %}

---
<pre>{{page.Kea | markdownify}}</pre>
<pre>{{page.kakapo | markdownify}}</pre>

---

<ul>
{% for post in site.posts %}
 <li><a href="{{ post.url | relative_url}}">{{ post.title }}</a></li>
 <span>{{ post.date | date: "%b %d, %Y" }}</span>
{% endfor %}
{% for tag in post.tags %}
  <div class="tag"><span class="">{{ tag }}</span></div>
{% endfor %}
</ul>

Tags:
<ol>
{% for tag in page.tags %}
  <li class="">{{ tag }}</li>
{% endfor %}
</ol>