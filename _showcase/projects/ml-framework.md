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
description: >-
  A neural-network framework built from scratch in Python &mdash; forward pass, backprop, and
  gradient descent implemented by hand to really understand how the pieces fit together.
skills:
  - Python
  - NumPy
  - Neural Networks
  - Backpropagation
link: https://github.com/Manoruo/ML_Framework
link_text: GitHub repo
---

<p class="mb-3">
  Built the core neural-network stack (layers, losses, optimizers, metrics) from scratch and used
  it to train models on classic datasets &mdash; a sanity check that the math actually works
  end-to-end.
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
