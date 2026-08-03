---
show: true
group: Other Experiences
width: 4
date: 2021-06-01 00:00:00 -0400
title: Autonomous Surface Vehicles
subtitle: UPenn &middot; ScalAR Lab &middot; Summer 2021
icon: fas fa-microchip
color: linear-gradient(135deg, #011f5b, #7a0019)
description:
skills:
  - KiCad
  - Python
  - Path Planning
  - Simulation
---
<p class="mb-4">
  I spent the summer in Penn's <strong>ScalAR Lab</strong> developing hardware
  and autonomy for a full-scale <strong>Clearpath Heron autonomous surface
  vehicle (ASV)</strong>. My work ranged from designing custom electronics for
  the robot to developing waypoint planning software for autonomous river
  surveys on the Schuylkill River.
</p>

<hr>

<h5>Hardware: RS232 → USB PCB</h5>

<p>
  I designed, fabricated, and assembled a custom PCB that converts RS232 to USB,
  allowing modern peripherals to interface with the Heron.
</p>

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-1">
    <img src="{{ "/assets/images/showcase/upenn-sar/pcb_schem.png" | relative_url }}" alt="RS232 to USB PCB schematic" class="img-fluid rounded pcb-gallery-image">
    <p class="small text-muted mt-2 mb-0 text-center">Schematic</p>
  </div>

  <div class="col-sm-4 mt-3 mt-md-1">
    <img src="{{ "/assets/images/showcase/upenn-sar/pcb_footprint.png" | relative_url }}" alt="PCB layout and routing" class="img-fluid rounded pcb-gallery-image">
    <p class="small text-muted mt-2 mb-0 text-center">PCB layout</p>
  </div>

  <div class="col-sm-4 mt-3 mt-md-1">
    <img src="{{ "/assets/images/showcase/upenn-sar/pcb_3d.png" | relative_url }}" alt="Assembled RS232 to USB PCB" class="img-fluid rounded pcb-gallery-image">
    <p class="small text-muted mt-2 mb-0 text-center">Fabricated board</p>
  </div>
</div>

<hr>

<h5>Autonomous Field Deployment</h5>

<p>
  I also developed a lawnmower waypoint generator within the robot's ROS
  autonomy stack, enabling the Heron to autonomously survey bounded regions and
  collect depth measurements for riverbed reconstruction.
</p>

<div class="row">
  <div class="col-sm-7 mt-3 mt-md-0">
    <img src="{{ "/assets/images/showcase/upenn-sar/cover.jpg" | relative_url }}" alt="Heron USV during autonomous field deployment" class="img-fluid rounded">
  </div>

  <div class="col-sm-5 mt-3 mt-md-0">
    <img src="{{ "/assets/images/showcase/upenn-sar/river_bed.png" | relative_url }}" alt="3D riverbed reconstruction from depth data" class="img-fluid rounded mb-3">

```
<img src="{{ "/assets/images/showcase/upenn-sar/lawn_mower.png" | relative_url }}" alt="Lawnmower-style waypoint pattern" class="img-fluid rounded">
```

  </div>
</div>

<p class="small text-muted mt-2 text-center">
   Field Experiments, riverbed reconstruction, and waypoint planning.
</p>
