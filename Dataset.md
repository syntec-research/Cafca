# Cafca Synthetic Dataset
Shield: [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg


Download:
[full dataset](https://dataset.ait.ethz.ch/downloads/cafca/)
| [sample dataset](https://dataset.ait.ethz.ch/downloads/cafca/mini_sample_dataset.zip)
| [single subject](https://dataset.ait.ethz.ch/downloads/cafca/single_subject_00000.zip)

[Colab Quickstart](https://colab.research.google.com/github/syntec-research/Cafca/blob/main/Cafca_Synthetic_Dataset.ipynb)

[![](https://files.ait.ethz.ch/projects/cafca/web/static/images/dataset_teaser.jpg)](https://files.ait.ethz.ch/projects/cafca/web/static/videos/dataset_video_short.mp4)

The full dataset contains 1,500 synthetic subjects, each of which is rendered with 13 expressions in 3 environments from 30 views,
resulting in 1.755 Mio. images. The dataset is split into 15 chunks. Each chunk is about 67 GB and contains 100 identities.

If you want to get started quickly, you can use the colab or download a subset of the dataset from the links above.

We hope this dataset will be useful for research in face reconstruction and animation, generative model training, camera
calibration, synthetic pre-training, 3D-aware segmentation, relighting, synthetic-to-real transfer learning, and
meta-learning.

## Folder Structure

After unzipping, the dataset is structured as follows:

`SUBJECT`/`EXP`_`ENV`/`{cameras_json, color_image, foreground_mask, segmentation}`

`SUBJECT` and `EXP` are 5-digit numbers. `ENV` is a 3-digit number. Camera names go from `C00` to `C29`. Image data (RGB, foreground masks, and segmentation maps) are saved as PNG; the cameras as JSON. Please see the colab for an example on how to load a particular scene.


## Environments

The dataset contains each expression rendered in three different environments. The first environment (index `000`) is
the same for all expressions (`Laval_Indoor_9C4A5690_8k.exr`). The other two environments are picked at random from
the [Laval Indoor Dataset](http://indoor.hdrdb.com/). The environment name is saved in `environment.json` in
the `color_image` folder.

## Coordinate System

The dataset uses a right-handed coordinate system. For convenience, the camera json file contains redundant information:
the full projection matrices (`P`), extrinsic and intrinsic matrices (`world2cam` / `cam2world` and `K`), and all of
these parameters individually.

## Contact

Please let us know how we improve the documentation and help you get started. If you use this dataset please
consider citing the [Cafca paper](https://syntec-research.github.io/Cafca).

## Citation
If you find this dataset useful, please consider citing:

```
@incollection{buehler2024cafca,
    title={Cafca: High-quality Novel View Synthesis of~ Expressive Faces from Casual Few-shot Captures},
    author={Marcel C. Buehler and Gengyan Li and Erroll Wood and Leonhard Helminger and Xu Chen and Tanmay Shah and Daoye Wang and Stephan Garbin and Sergio Orts-Escolano and Otmar Hilliges and Dmitry Lagun and Jérémy Riviere and Paulo Gotardo and Thabo Beeler and Abhimitra Meka and Kripasindhu Sarkar},
    year={2024},
    booktitle={ACM SIGGRAPH Asia 2024 Conference Paper},
    doi={10.1145/3680528.3687580},
    url={https://doi.org/10.1145/3680528}
}
```

## Disclaimer

This dataset is not an official Google product. It is not supported by
Google and Google specifically disclaims all warranties as to its quality,
merchantability, or fitness for a particular purpose.

