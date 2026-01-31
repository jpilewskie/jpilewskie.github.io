---
layout: page
title: research
permalink: /research/
description: My work broadly focuses on studying clouds and storm systems within the context of their present-day impact on the Earth's climate. Storms are integral to the Earth’s climate system as they influence large-scale weather patterns and heating within the atmosphere, and produce significant amounts of rainfall. As atmospheric CO<sub>2</sub> concentrations are increasing due to human activity, extreme weather events, such as increased droughts and intensifying hurricanes, are becoming more apparent across the globe, as discussed in the Intergovernmental Panel Climate Change (IPCC) Sixth Assessment (AR6) Synthesis Report. The changing extremes have direct effects on food and water security, and other such public health and economic impacts. Climate model projections indicate that storm system behavior is expected to continue altering in response to surface warming. Yet, climate models consistently misrepresent present-day weather extremes and rainfall amounts, and there are large sources of model spread and uncertainties in simulated future climate scenarios. Such errors arise because physical processes underlying weather and climate states are not adequately captured in models. The focus of my work, therefore, is to analyze signatures of these physical processes from satellite observations of cloud, precipitation, and their energetic features. Below outline my specific interests.
nav: true
nav_order: 3
display_categories: [work]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
