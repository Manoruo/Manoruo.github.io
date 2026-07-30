---
show: true
group: Other Experiences
width: 4
date: 2021-06-01 00:00:00 -0400
title: Autonomous Surface Vehicles
subtitle: UPenn &middot; ScalAR Lab &middot; Summer 2021
icon: fas fa-microchip
color: linear-gradient(135deg, #011f5b, #7a0019)
description: >-
  Built a KiCad PCB to translate RS232 to USB, a Python framework to simulate autonomous surface
  vehicles, and a waypoint algorithm to plan the lab's ASV survey of the Schuylkill River.
skills:
  - KiCad
  - Python
  - Path Planning
  - Simulation
---

<p class="mb-3">
  <strong>SUNFEST REU</strong> in the <strong>ScalAR Lab</strong>, building hardware and autonomy
  for a full-scale Clearpath Heron USV deployed on the Schuylkill River.
</p>

<hr>

<h5>Hardware: RS232 &rarr; USB PCB</h5>
<p>Designed and fabricated a custom RS232 &rarr; USB PCB so modern peripherals could interface with the Heron &mdash; schematic through assembly.</p>
<div class="row">
  <div class="col-sm-4 mt-3 mt-md-1">
    <img src="{{ "/assets/images/showcase/upenn-sar/pcb_schem.png" | relative_url }}" alt="RS232 to USB PCB schematic" class="img-fluid rounded">
    <p class="small text-muted mt-2 mb-0 text-center">Schematic</p>
  </div>
  <div class="col-sm-4 mt-3 mt-md-1">
    <img src="{{ "/assets/images/showcase/upenn-sar/pcb_footprint.png" | relative_url }}" alt="PCB layout and routing" class="img-fluid rounded">
    <p class="small text-muted mt-2 mb-0 text-center">Layout &amp; routing</p>
  </div>
  <div class="col-sm-4 mt-3 mt-md-1">
    <img src="{{ "/assets/images/showcase/upenn-sar/pcb_3d.png" | relative_url }}" alt="Assembled RS232 to USB PCB" class="img-fluid rounded">
    <p class="small text-muted mt-2 mb-0 text-center">Assembled</p>
  </div>
</div>

<hr>

<h5>Autonomous Field Deployment</h5>
<p>Wrote a <strong>lawnmower waypoint generator</strong> in a ROS autonomy stack so the Heron could survey bounded regions and collect depth data.</p>
<div class="row">
  <div class="col-sm-7 mt-3 mt-md-0">
    <img src="{{ "/assets/images/showcase/upenn-sar/cover.jpg" | relative_url }}" alt="Heron USV during autonomous field deployment" class="img-fluid rounded">
  </div>
  <div class="col-sm-5 mt-3 mt-md-0">
    <img src="{{ "/assets/images/showcase/upenn-sar/river_bed.png" | relative_url }}" alt="3D riverbed reconstruction from depth data" class="img-fluid rounded mb-3">
    <img src="{{ "/assets/images/showcase/upenn-sar/lawn_mower.png" | relative_url }}" alt="Lawnmower-style waypoint pattern" class="img-fluid rounded">
  </div>
</div>
<p class="small text-muted mt-2 text-center">Field deployment &middot; riverbed reconstruction &middot; waypoint planning.</p>
