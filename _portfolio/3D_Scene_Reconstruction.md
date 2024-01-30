---
title: "Interactive Scene Reconstruction"
excerpt: "This project introduces a simulation framework that transforms 2D RGB images into interactive physics-based objects. Leveraging pre-trained PyTorch models for object detection and depth estimation, combined with Panda3D for scene reconstruction and a custom algorithm to search for 3D models, the framework offers a user-friendly interface for selecting and integrating 3D representations into the simulated environment." 
collection: research
image: /images/Interactive_Scene.jpeg
---
## Project Description

In this proposal, we outline a design for a simulation framework aimed at generating interactive physics-based objects from 2D RGB images of a scene, facilitating further analysis and study by users.

### 1. Object Detection with PyTorch
Utilized a pre-trained PyTorch ResNet model to detect objects within the image and extract their x, y positions.

### 2. Depth Estimation with Midas
Employed a pre-trained Midas model to estimate the depth of objects within the image, providing z-axis positional information.

## 3. Reconstruction with Panda3D
Utilized Panda3D to reconstruct the scene by incorporating positional information and generating 3D representations of objects for inclusion in the simulated environment.

### 4. Algorithm for 3D Model Search
Developed an algorithm to search for low-fidelity 3D representations of objects detected in the image using Sketchfab, a platform offering free 3D models.

## 5. UI Interface Development
Created a user-friendly interface using Tkinter to allow users to cycle through and select the closest 3D model corresponding to the detected object in the photo.

## Main Libraries Used
1. PyTorch
2. Panda3D 
3. Tkinter

## GitHub Repository
[Find the project here](https://github.com/Manoruo/Interactive-Scene-Reconstruction.git)
