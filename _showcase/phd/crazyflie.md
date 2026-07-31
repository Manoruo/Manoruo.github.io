---
show: true
group: PhD
width: 6
date: 2025-01-01 00:00:00 -0500
title: Crazyflie Swarm
subtitle: CMU &middot; RISLab &middot; Present
icon: fas fa-helicopter
color: linear-gradient(135deg, #c41230, #4a0a15)
cover_position: center 30%
description: 
skills:
  - Crazyflie
  - Crazyswarm
  - Vicon
  - ROS 2
  - Motion Capture
---
<p>
  The Crazyflie is a lightweight and inexpensive quadrotor that provides a safe
  platform for developing and testing new autonomy algorithms. I maintain our
  lab's Crazyflie platform, integrating the Crazyswarm software stack with our
  Vicon motion capture system and extending the hardware with a breakout deck
  and onboard third-person camera. Together, these capabilities provide a
  flexible testbed for experimenting with autonomous flight on
  resource-constrained hardware.
</p>
<div class="row align-items-stretch">
  <div class="col-sm-6 d-flex flex-column">
    <div class="d-flex flex-column flex-grow-1 mb-3" style="min-height: 0;">
      <video
        autoplay
        controls
        muted
        playsinline
        loop
        preload="metadata"
        poster="{{ "/assets/images/showcase/crazyflie/cover.jpg" | relative_url }}"
        class="w-100 rounded flex-grow-1 showcase-autoplay-video"
        data-autoplay-on-visible="true"
        style="min-height: 0; object-fit: cover;">
        <source src="{{ "/assets/images/showcase/crazyflie/swarm.mp4" | relative_url }}" type="video/mp4">
      </video>
      <p class="small text-muted mt-2 mb-0 text-center">
        Crazyswarm flight with Vicon feedback
      </p>
    </div>

    <div class="d-flex flex-column flex-grow-1" style="min-height: 0;">
      <video
        autoplay
        controls
        muted
        playsinline
        loop
        preload="metadata"
        class="w-100 rounded flex-grow-1 showcase-autoplay-video"
        data-autoplay-on-visible="true"
        style="min-height: 0; object-fit: cover;">
        <source src="{{ "/assets/images/showcase/crazyflie/figure8.mp4" | relative_url }}" type="video/mp4">
      </video>
      <p class="small text-muted mt-2 mb-0 text-center">
        Two-drone figure-eight tracking
      </p>
    </div>
  </div>

  <div class="col-sm-6 d-flex flex-column mt-3 mt-md-0">
    <img
      src="{{ "/assets/images/showcase/crazyflie/camera_feed.png" | relative_url }}"
      alt="Live onboard camera feed streaming to a laptop"
      class="w-100 rounded">
    <p class="small text-muted mt-2 mb-0 text-center">
      Live onboard camera feed streamed to a desktop
    </p>
  </div>
</div>
