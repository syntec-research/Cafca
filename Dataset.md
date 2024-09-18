# Cafca Synthetic Dataset

Download:
[full dataset](https://dataset.ait.ethz.ch/downloads/cafca/)
| [sample dataset](https://dataset.ait.ethz.ch/downloads/cafca/mini_sample_dataset.zip)
| [single subject](https://dataset.ait.ethz.ch/downloads/cafca/00000.zip)

The full dataset contains 1,500 subjects, each of which is rendered with 13 expressions in 3 environments from 30 views,
resulting in 1.755 Mio. images. The dataset is split into 15 chunks and available for
download [here](https://dataset.ait.ethz.ch/downloads/cafca/). Each chunk is about 67 GB and contains 100 identities.

If you want to get started quickly, please you can use the colab.

We hope this dataset will be useful for research in face reconstruction and animation, generative model training, camera
calibration, synthetic pre-training, 3D-aware segmentation, relighting, synthetic-to-real transfer learning, and
meta-learning.

## Folder Structure

The paths follow this format:

`SUBJECT`/`EXP`_`ENV`/`{cameras_json, color_image, foreground_mask, segmentation}`

`SUBJECT` and `EXP` are 5-digit numbers. `ENV` is a 3-digit number. Camera names go from `C00` to `C29`.

## Colab Quick Start

Please see the colab to see how to load and visualize the data.

## Environments

The dataset contains each expression rendered in three different environments. The first environment (index `000`) is
the same for all expressions (`Laval_Indoor_9C4A5690_8k.exr`). The other two environments are picked at random from
the [Laval Indoor Dataset](http://indoor.hdrdb.com/). The environment name is saved in `environment.json` in
the `color_image` folder.

## Coordinate System

The dataset uses a right-handed coordinate system. For convenience, the camera json file contains redundant information:
the full projection matrices (`P`), extrinsic and intrinsic matrices (`world2cam` / `cam2world` and `K`), and all of
thes parameters individually.

## Contact

Please let us know how we can make this dataset useful and improve its documentation. If you use this dataset please
consider citing the [Cafca paper](https://syntec-research.github.io/Cafca).

## Disclaimer

This dataset is not an official Google product. It is not supported by
Google and Google specifically disclaims all warranties as to its quality,
merchantability, or fitness for a particular purpose.

