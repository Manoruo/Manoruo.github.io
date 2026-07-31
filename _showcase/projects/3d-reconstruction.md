---
show: true
group: Projects
width: 4
date: 2023-11-01 00:00:00 -0500
title: 3D Scene Generation
subtitle: UMBC &middot; Fall 2023
icon: fas fa-cube
color: linear-gradient(135deg, #14b8a6, #0f766e)
cover_fit: contain
description: 
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
  This project generates an <strong>interactive, physics-based 3D scene</strong>
  from a single RGB image by combining object detection, monocular depth
  estimation, 3D model retrieval, and scene assembly. The resulting environment
  can be explored and interacted with in Panda3D, creating a low-fidelity
  simulation from an ordinary photograph.
</p>

<ol class="mb-4">
  <li><strong>Detect objects</strong> in the image with a ResNet-based detector.</li>
  <li><strong>Estimate depth</strong> for each object with MiDaS to place it in 3D.</li>
  <li><strong>Query Sketchfab</strong> for candidate 3D models matching each detected class.</li>
  <li><strong>Human-in-the-loop selection</strong> &mdash; cycle through matches and choose the best fit.</li>
  <li><strong>Assemble the scene in Panda3D</strong> as a low-fidelity interactive simulation.</li>
</ol>

<div class="row justify-content-center">
  <div class="col-sm-10">
    <img src="{{ "/assets/images/showcase/3d-reconstruction/cover.png" | relative_url }}" alt="Object detection to matched 3D model" class="w-100 rounded">
    <p class="small text-muted mt-2 mb-0 text-center">Detected object in the source photo &rarr; matched 3D model from Sketchfab.</p>
  </div>
</div>