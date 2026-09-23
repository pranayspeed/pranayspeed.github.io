---
layout: page
title: Language-Conditioned Off-Road Planning
description: Robot-adaptive route planning that grounds mission preferences in semantic terrain and traversal consequences.
img: assets/img/project_previews/language_intent_planner.png
image_alt: Two-stage language-conditioned route-planning framework
importance: 1
category: research
year: 2026
venue: Ongoing research
featured: true
highlight: Two-stage region-guided planning reduces search states by 75% and candidate latency by 20–22% in the current evaluation.
tags: [Language grounding, Robot adaptation, Off-road navigation]
github: https://github.com/pranayspeed/LanguageIntentPlannerV2
related_publications: false
---

Natural-language mission preferences should influence a route only where the terrain and the active robot provide a feasible alternative. This project combines semantic region grounding, robot-specific traversal consequences, and corridor-bounded route selection for wheeled and legged robots.

{% include figure.liquid path="assets/img/project_previews/language_intent_planner.png" title="Language-conditioned robot-adaptive planning framework" class="img-fluid rounded z-depth-1" %}

The architecture separates language values from path consequences: instructions can change without rebuilding the map, while changing the robot swaps the traversal model rather than the terrain representation. A live language model is not required in the per-query planning loop.

### Current focus

- Ground typed mission objectives in semantic terrain regions.
- Generate robot-feasible candidates within a bounded corridor.
- Compare complete routes using language, terrain exposure, and robot consequences.
- Evaluate transfer across map scales and between Clearpath Jackal and Boston Dynamics Spot models.

### Links

- [Source and research artifacts](https://github.com/pranayspeed/LanguageIntentPlannerV2)
