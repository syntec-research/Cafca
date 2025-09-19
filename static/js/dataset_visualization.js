

function initSelects() {
    const identitySel = document.getElementById('identity-select');
    const environmentSel = document.getElementById('environment-select');
    const expressionSel = document.getElementById('expression-select');
    // Populate identity options
    for (let i = 0; i < 100; i++) {
        const value = i.toString().padStart(5, '0');
        identitySel.add(new Option(value, value));
    }
    // Populate environment options
    for (let i = 0; i <= 2; i++) {
        const value = i.toString().padStart(3, '0');
        environmentSel.add(new Option(value, value));
    }
    // Populate expression options
    for (let i = 0; i <= 12; i++) {
        const value = i.toString().padStart(5, '0');
        expressionSel.add(new Option(value, value));
    }
}


$(document).ready(function () {
    initSelects();
    const identitySel = document.getElementById('identity-select');
    const environmentSel = document.getElementById('environment-select');
    const expressionSel = document.getElementById('expression-select');

    identitySel.addEventListener('change', () => {
        document.getElementById('show-image').click();
    });

    environmentSel.addEventListener('change', () => {
        document.getElementById('show-image').click();
    });

    expressionSel.addEventListener('change', () => {
        document.getElementById('show-image').click();
    });

    document.getElementById('show-image').onclick = async () => {
        const identity = identitySel.value;
        const environment = environmentSel.value;
        const expression = expressionSel.value;

        // Fetch VHAP result
        const url = `https://dataset.ait.ethz.ch/downloads/cafca_v2_unzipped/00000-00099/${identity}/flame_2023_${environment}/eval_100/image_grid/frame_${expression}.jpg`;

        const resultDiv = document.getElementById('result-vhap');
        resultDiv.textContent = 'Loading image...';

        try {
            const resp = await fetch(url);
            if (!resp.ok) throw new Error('Image not found');
            const blob = await resp.blob();
            const imgUrl = URL.createObjectURL(blob);

            // resultDiv.innerHTML = `<img src="${imgUrl}" alt="Fetched Image" style="max-width:300px;max-height:300px; width:100%">`;
            resultDiv.innerHTML = `<img src="${imgUrl}" alt="Fetched Image" style="width:100%;height:auto;display:block;">`;
        } catch (e) {
            resultDiv.textContent = 'Failed to load image.';
        }

        // Fetch RGB result
        const url_rgb = `https://dataset.ait.ethz.ch/downloads/cafca_v2_unzipped/00000-00099/${identity}/${expression}_${environment}/color_image/C00.png`;

        const resultDivRaw = document.getElementById('result-raw-rgb');
        resultDivRaw.textContent = 'Loading image...';
        try {
            const resp = await fetch(url_rgb);
            if (!resp.ok) throw new Error('Image not found');
            const blob = await resp.blob();
            const imgUrl = URL.createObjectURL(blob);

            resultDivRaw.innerHTML = `<img id="img-rgb" src="${imgUrl}" alt="Fetched Image" style="width:100%;height:auto;display:block;">`;

        } catch (e) {
            console.log(e);
            resultDivRaw.textContent = 'Failed to load image.';
        }

        // Fetch segmentation
        const url_segmentation = `https://dataset.ait.ethz.ch/downloads/cafca_v2_unzipped/00000-00099/${identity}/${expression}_${environment}/segmentation_rgb/C00.png`;

        const resultDivSeg = document.getElementById('result-raw-segmentation');
        resultDivSeg.textContent = 'Loading image...';
        try {
            const resp = await fetch(url_segmentation);
            if (!resp.ok) throw new Error('Image not found');
            const blob = await resp.blob();
            const imgUrl = URL.createObjectURL(blob);
            resultDivSeg.innerHTML = `<img id="img-segmentation" src="${imgUrl}" alt="Fetched Image" style="width:100%;height:auto;display:block;">`;
        } catch (e) {
            console.log(e);
            resultDivSeg.textContent = 'Failed to load image.';
        }

        const url_camera = `https://dataset.ait.ethz.ch/downloads/cafca_v2_unzipped/00000-00099/${identity}/${expression}_${environment}/cameras_json/C00.json`;
        try {
            const response = await fetch(url_camera);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonData = await response.json();

            // Assuming jsonData is already an array, otherwise convert to array as needed
            const dataArray = Array.isArray(jsonData) ? jsonData : [jsonData];
            console.log(dataArray);
            const fx = Math.round(dataArray[0]["focal_length"]);
            const vec = dataArray[0]["cam2world"].slice(0, 3).map(row => row[3]);
            const distance = Math.round(Math.sqrt(vec.reduce((sum, val) => sum + val * val, 0)) * 100);

            document.getElementById('camera-info').innerHTML = `<h6 class="title is-six">Camera Info</h6><p>Focal length: ${fx}</p><p>Distance: ${distance} cm</p>`;

            return dataArray;

        } catch (error) {
            console.error('Error fetching JSON:', error);
            return [];
        }
    };
    console.log("Visualizer initialized.");

    const identityOptions = Array.from(identitySel.options).map(option => option.value);
    const environmentOptions = Array.from(environmentSel.options).map(option => option.value);
    const expressionOptions = Array.from(expressionSel.options).map(option => option.value);

    document.getElementById('random-select').onclick = () => {
        const randomIdentity = identityOptions[Math.floor(Math.random() * identityOptions.length)];
        const randomEnvironment = environmentOptions[Math.floor(Math.random() * environmentOptions.length)];
        const randomExpression = expressionOptions[Math.floor(Math.random() * expressionOptions.length)];

        identitySel.value = randomIdentity;
        environmentSel.value = randomEnvironment;
        expressionOptions.value = randomExpression;

        // Trigger image fetch as if Show Image button clicked
        document.getElementById('show-image').click();
    };
    document.getElementById('random-select').click();
});