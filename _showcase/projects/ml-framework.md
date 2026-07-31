---
show: true
group: Projects
width: 4
date: 2023-05-01 00:00:00 -0400
title: Machine Learning from Scratch
subtitle: Personal project &middot; Winter 2023
icon: fas fa-brain
color: linear-gradient(135deg, #6366f1, #312e81)
cover_fit: contain
description:
skills:
  - Python
  - NumPy
  - Neural Networks
  - Backpropagation
link: https://github.com/Manoruo/ML_Framework
link_text: GitHub repo
---

<p class="mb-3">
  To better understand how modern deep learning frameworks work under the hood,
  I built a neural network framework from scratch in Python. Rather than relying
  on automatic differentiation, I derived and implemented the
  <strong>analytical gradients</strong> for each layer by hand, implementing the
  forward and backward passes, optimization algorithms, and training loop from
  the ground up. This project laid the groundwork for a more general
  <strong>automatic differentiation framework</strong> that I'm currently
  developing.
</p>

<div class="row">
  <div class="col-sm-7 d-flex flex-column">
    <img src="{{ "/assets/images/showcase/ml-framework/decision_boundary.png" | relative_url }}" alt="Learned decision boundary on a nonlinear multi-class dataset" class="w-100 rounded flex-grow-1" style="min-height: 0; object-fit: contain; background: #fff;">
    <p class="small text-muted mt-2 mb-0 text-center">Learned decision boundary on a nonlinear 5-class dataset.</p>
  </div>
  <div class="col-sm-5 d-flex flex-column mt-3 mt-md-0" style="gap: 0.75rem;">
    <div class="d-flex flex-column flex-grow-1" style="min-height: 0;">
      <img src="{{ "/assets/images/showcase/ml-framework/spiral.png" | relative_url }}" alt="Spiral classification: predicted vs actual vs incorrect" class="w-100 rounded flex-grow-1" style="min-height: 0; object-fit: contain; background: #fff;">
      <p class="small text-muted mt-1 mb-0 text-center">Spiral classification &mdash; predicted / actual / errors.</p>
    </div>
    <div class="d-flex flex-column flex-grow-1" style="min-height: 0;">
      <img src="{{ "/assets/images/showcase/ml-framework/mnist.png" | relative_url }}" alt="MNIST confusion matrix" class="w-100 rounded flex-grow-1" style="min-height: 0; object-fit: contain; background: #fff;">
      <p class="small text-muted mt-1 mb-0 text-center">MNIST confusion matrix after training.</p>
    </div>
  </div>
</div>

<hr>

<p class="small text-muted mb-0">
  <strong>Resources:</strong>
  <a href="https://medium.com/data-science/math-neural-network-from-scratch-in-python-d6da9f29ce65"
     target="_blank">
    Omar Aflak — Neural Network from Scratch in Python
  </a>.
  This article was my primary reference while implementing the framework.
</p>