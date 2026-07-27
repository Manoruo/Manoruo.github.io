---
show: true
group: PhD
width: 6
date: 2024-08-01 00:00:00 -0400
title: Differentiable Quadrotor Simulation
subtitle: CMU &middot; RISLab &middot; Present
icon: fas fa-helicopter
color: linear-gradient(135deg, #c41230, #4a0a15)
description: >-
  Investigating analytical policy gradients (APGs) for efficient policy training on quadrotors,
  built on top of a differentiable, GPU-accelerated simulator in PyTorch.
skills:
  - PyTorch
  - Analytical Policy Gradients
  - Reinforcement Learning
  - GPU Simulation
---

<p class="mb-3">
  Investigating <strong>analytical policy gradients (APGs)</strong> as a route to <strong>faster,
  more sample-efficient policy training</strong> for quadrotor control. Instead of only sampling
  reward signals like standard RL, we differentiate through the physics itself &mdash; letting
  gradients flow from the loss back through the dynamics to the policy.
</p>

<p class="mb-4">
  It's all built on a <strong>differentiable, GPU-accelerated quadrotor simulator</strong> in
  PyTorch that scales to <strong>100k+ drones in parallel</strong>. The clip above is one task we
  train in this sim &mdash; position control via APG.
</p>

<h5>Task: Agile Intruder Interception</h5>
<div class="row align-items-center">
  <div class="col-sm-7 mt-3 mt-md-0">
    <video controls muted playsinline loop preload="metadata" class="w-100 rounded">
      <source src="{{ "/assets/images/showcase/rislab/interception.mp4" | relative_url }}" type="video/mp4">
    </video>
  </div>
  <div class="col-sm-5 mt-3 mt-md-0">
    <p class="small mb-2">
      An APG-trained policy that intercepts an intruder using only <strong>3D directional unit
      vectors from a passive monocular camera</strong> &mdash; no relative position or distance.
      Reaches <strong>~10 m/s</strong>, roughly a 30% improvement over point-mass baselines.
    </p>
    <a class="small" target="_blank" href="https://arxiv.org/abs/2607.02472">
      <i class="fas fa-external-link-alt"></i> Learning Agile Intruder Interception (arXiv, 2026)
    </a>
  </div>
</div>

<p class="small text-muted mt-4 mb-0">
  Position control and interception are two tasks along the same research direction &mdash; more
  in the pipeline.
</p>
