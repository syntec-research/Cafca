# Cafca Synthetic Dataset
Shield: [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg


Download (version 2):
[full dataset](https://dataset.ait.ethz.ch/downloads/cafca_v2/)
| [sample dataset](https://dataset.ait.ethz.ch/downloads/cafca_v2/mini_sample_dataset.zip)
| [single subject](https://dataset.ait.ethz.ch/downloads/cafca_v2/single_subject_00060.zip)

[Project Page](https://syntec-research.github.io/Cafca/)
| [Dataset Page](https://syntec-research.github.io/Cafca/cafca_dataset.html)
| [Colab Quickstart](https://colab.research.google.com/github/syntec-research/Cafca/blob/main/Cafca_Synthetic_Dataset.ipynb)

[![](https://files.ait.ethz.ch/projects/cafca/web/static/images/dataset_teaser.jpg)](https://files.ait.ethz.ch/projects/cafca/web/static/videos/dataset_video_short.mp4)

Cafca is a large-scale, diverse multiview face dataset for avatar reconstruction and animation, face parsing, synthetic-to-real transfer learning, animation, relighting, camera estimation, and more.

The full dataset contains 1,500 synthetic subjects, each of which is rendered in 3 environments with 13 random expressions from 30 views,
resulting in 1.755 Mio. images. The dataset is split into 15 chunks. Each chunk is about 83 GB and contains 100 identities.

If you want to get started quickly, you can use the colab or download a subset of the dataset from the links above.


## Version History

| Version | Date       | Description                      | Author          |
|---------|------------|---------------------------------|-----------------|
| 1.0   | 2024-09-13 | Initial release                        | Marcel C. Buehler   |
| 1.1   | 2024-10-22 | Add in-the-wild dataset                | Marcel C. Buehler   |
| 2.0   | 2025-09-19 | Add FLAME annotations and keypoints    | Marcel C. Buehler   |

## Folder Structure

After unzipping, the dataset is structured as follows:

`SUBJECT`/`EXP`_`ENV`/`{cameras_json, color_image, foreground_mask, segmentation, 'landmark2d/STAR`

`SUBJECT` and `EXP` are 5-digit numbers. `ENV` is a 3-digit number. Camera names go from `C00` to `C29`. Image data (RGB, foreground masks, and segmentation maps) are saved as PNG; the cameras as JSON. 

Each subject has folders with FLAME pseudo-GT annotations (`flame_2023_ENV`, e.g., `flame_2023_000` for environment `000`).
flame_2023_000

Please see the colab for an example on how to load a particular scene.

## Environments

The dataset contains each expression rendered in three different environments. The first environment (index `000`) is
the same for all expressions (`Laval_Indoor_9C4A5690_8k.exr`). The other two environments are picked at random from
the [Laval Indoor Dataset](http://indoor.hdrdb.com/). Environment indices are consistent within an identity but not across identities. The environment name is saved in `environment.json` in
the `color_image` folder.

## Expressions

The neutral expression (00000) is fixed for all samples.
The expressions (00001...00012) are sampled randomly for each environment. Note that the expression indices are not consistent across different environments.

## Coordinate System

The dataset uses a right-handed coordinate system following OpenCV convention (X right, Y down, Z forward). For convenience, the camera json file contains redundant information:
the full projection matrices (`P`), extrinsic and intrinsic matrices (`world2cam` / `cam2world` and `K`), and all of
these parameters individually.

## Segmentation

The segmentations are stored as grayscale 16-bit PNG. Region `0` is the background, and other entries refer to regions like facial skin, throat, hair, upper body, eyes, etc.

## FLAME 2023 Annotations and Keypoints

The dataset includes pseudo-GT annotations for keypoints and [FLAME](https://flame.is.tue.mpg.de/") 2023. These annotations were obtained by running [VHAP](https://github.com/ShenhanQian/VHAP), a photometric fitting pipeline.

The annotations are stored as `npz` files that combine all expressions for a particular frame and environment. For example, the FLAME parameters for subject `00000` and environment `000` are stored under 
`00000-00099/00000/flame_2023_000/tracked_flame_params_100.npz`.

2D Keypoints are estimated with [STAR](https://github.com/ShenhanQian/STAR/) and stored as `npz` in the `landmark2d/STAR` subfolder for each frame and camera. For example, the following path stores landmarks for subject `00000`, expression `00001`, environment `000` and camera `C00`: `00000-00099/00000/00001_000/landmark2d/STAR/C00.npz`

## Contact

Please let us know how we improve the documentation and help you get started.

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

