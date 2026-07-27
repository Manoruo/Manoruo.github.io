---
show: true
group: Projects
width: 4
date: 2023-11-01 00:00:00 -0500
title: Interactive 3D Scene Reconstruction
subtitle: UMBC &middot; Fall 2023
icon: fas fa-cube
color: linear-gradient(135deg, #14b8a6, #0f766e)
cover_fit: contain
description: >-
  Turns a 2D RGB photo into an interactable, physics-based 3D scene &mdash; detects objects,
  pulls matching models from SketchFab, and rebuilds the scene in Panda3D.
skills:
  - PyTorch
  - ResNet
  - MiDaS
  - Panda3D
  - SketchFab API
link: https://github.com/Manoruo/Interactive-Scene-Reconstruction
link_text: GitHub repo
---

<p class="mb-3">
  Pipeline for building an <strong>interactable, physics-based 3D scene</strong> out of a single
  2D RGB photo:
</p>

<ol class="mb-4">
  <li><strong>Detect objects</strong> in the image with a ResNet-based detector.</li>
  <li><strong>Estimate depth</strong> per object with MiDaS to place them in 3D.</li>
  <li><strong>Scrape SketchFab</strong> for candidate 3D models matching each detected class.</li>
  <li><strong>Human-in-the-loop selection</strong> &mdash; cycle through matches and pick the best fit.</li>
  <li><strong>Rebuild in Panda3D</strong> as a low-fidelity, interactable simulation.</li>
</ol>

<div class="row justify-content-center">
  <div class="col-sm-10">
    <img src="{{ "/assets/images/showcase/3d-reconstruction/cover.png" | relative_url }}" alt="Object detection to matched 3D model" class="w-100 rounded">
    <p class="small text-muted mt-2 mb-0 text-center">Detected object in the source photo &rarr; matched 3D model pulled from SketchFab.</p>
  </div>
</div>
