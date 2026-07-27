---
show: true
width: 4
date: 2021-09-12 00:01:00 +0800
# fill=true makes the carousel stretch to match the height of the card beside it
# (the Welcome card) instead of using a fixed height.
images:
- src: /assets/images/photos/ri_mascot.jpeg
- src: /assets/images/photos/space_needle.jpeg
- src: /assets/images/photos/seattle_fireworks.jpeg
---

<div class="carousel-fixed-label h-100 position-relative">
    <div class="carousel-highlight-badge">Highlights</div>
    {% include widgets/carousel.html id=page.id images=page.images fill=true %}
</div>
