---
show: true
group: PhD
width: 6
date: 2024-08-01 00:00:00 -0400
title: Differentiable Quadrotor Simulation
subtitle: CMU &middot; RISLab &middot; Present
icon: fas fa-helicopter
color: linear-gradient(135deg, #c41230, #4a0a15)
description:
skills:
  - PyTorch
  - Analytical Policy Gradients
  - Reinforcement Learning
  - GPU Simulation
---
<p class="mb-4">
  Traditional reinforcement learning often requires millions of interactions to
  learn effective control policies. This project investigates
  <strong>analytical policy gradients (APGs)</strong>, which leverage
  <strong>differentiable physics</strong> to compute gradients directly through
  the dynamics, enabling faster and more sample-efficient policy learning. To
  support this research, I developed a
  <strong>GPU-accelerated differentiable quadrotor simulator in PyTorch</strong>
  capable of simulating <strong>100,000+ drones in parallel</strong>, providing
  a fast and scalable platform for developing and evaluating autonomous flight
  algorithms.
</p>
<div class="row align-items-stretch">
  <div class="col-sm-6 d-flex flex-column mt-3 mt-md-0">
    <video
      autoplay
      controls
      muted
      playsinline
      loop
      preload="metadata"
      class="w-100 rounded">
      <source src="{{ "/assets/images/showcase/diffsim/interception_single.mp4" | relative_url }}" type="video/mp4">
    </video>
    <p class="small text-muted mt-2 mb-0 text-center">
      Single-environment interception
    </p>
  </div>

  <div class="col-sm-6 d-flex flex-column mt-3 mt-md-0">
    <video
      autoplay
      controls
      muted
      playsinline
      loop
      preload="metadata"
      class="w-100 rounded">
      <source src="{{ "/assets/images/showcase/diffsim/interception_multi.mp4" | relative_url }}" type="video/mp4">
    </video>
    <p class="small text-muted mt-2 mb-0 text-center">
      Multiple environments simulated in parallel
    </p>
  </div>
</div>

<div class="mt-4">
  <h6 class="fw-bold mb-3">Learn More</h6>
  <a target="_blank" href="https://arxiv.org/abs/2607.02472">
    <i class="fas fa-external-link-alt"></i>
    Learning Agile Intruder Interception (arXiv, 2026)
  </a>
</div>