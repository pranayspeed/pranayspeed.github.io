---
layout: page
title: QAL - Quality-Aware Loss for 3D Reconstruction
description: A Loss for Recall–Precision Balance in 3D Reconstruction. Quality-Aware Loss for robust 3D vision and robotics.
img: assets/img/qal_chair_mvp.png
importance: 1
category: work
github: 
website: https://droneslab.github.io/qal/
related_publications: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/qal_chair_mvp.png" title="Point cloud completion on MVP with ECG" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Point cloud completion on MVP with ECG: models trained with traditional Chamfer and Earth Mover's Distance miss thin structures and introduce spurious artifacts, whereas QAL increases coverage and preserves fine details while controlling over-prediction.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/qal_illustration.png" title="Visualization of QAL coverage and attraction terms" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Visualization of QAL coverage and attraction terms showing how QAL improves point cloud completion compared to traditional losses.
</div>

### Abstract

Volumetric learning underpins many 3D vision tasks such as completion, reconstruction, and mesh generation, yet training objectives still rely on Chamfer Distance (CD) or Earth Mover's Distance (EMD), which fail to balance recall and precision. We propose Quality-Aware Loss (QAL), a drop-in replacement for CD/EMD that combines a coverage-weighted nearest-neighbor term with an uncovered–ground-truth attraction term, explicitly decoupling recall and precision into tunable components.

Across diverse pipelines, QAL achieves consistent coverage gains, improving by an average of +4.3 points over CD and +2.8 points over the best existing alternatives. Though modest in percentage, these gains reliably recover thin structures and under-represented regions that CD/EMD overlook. Extensive ablations confirm stable performance across hyperparameters and output resolutions, while full retraining on PCN and ShapeNet demonstrates generalization across datasets and backbones. Moreover, QAL-trained completions yield higher grasp scores under GraspNet evaluation, showing that improved coverage translates directly into more reliable robotic manipulation.

QAL thus offers a principled, interpretable, and practical objective for robust 3D vision and safety-critical robotics pipelines.

### Links

- **Project Website:** [https://droneslab.github.io/qal/](https://droneslab.github.io/qal/)
- **Paper:** Available on arXiv

