const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Naga Kid";
const description = "Project Naga Kid";
const baseUri = "ipfs://QmeyZe8MYBtgaEpDAvnYNRWNNN44rV88JezdGXaPfJqYtA"; //CID ipfs://uri

const solanaMetadata = {
    symbol: "Naga Kid",
    seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
    external_url: "https://www.nagadaonft.com/",
    creators: [
        {
            address: "70x90d0949af536E45c6ccdbf64C6C6dF31c5B519eB", // metamask wallet ID
            share: 100,
        },
    ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
    {
        growEditionSizeTo: 10, // Taget 1111
        layersOrder: [{ name: "Color" }, { name: "Background" }, { name: "NagaKid" }, { name: "Body" }, { name: "Head" }, { name: "Mouse" }],
    },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
    width: 2000, // Picture Size
    height: 2000, // Picture Size
    smoothing: false,
};

const gif = {
    export: false,
    repeat: 0,
    quality: 100,
    delay: 500,
};

const text = {
    only: false,
    color: "#ffffff",
    size: 20,
    xGap: 40,
    yGap: 40,
    align: "left",
    baseline: "top",
    weight: "regular",
    family: "Courier",
    spacer: " => ",
};

const pixelFormat = {
    ratio: 2 / 128,
};

const background = {
    generate: true,
    brightness: "80%",
    static: false,
    default: "#000000",
};

const extraMetadata = {
    external_url: "https://www.nagadaonft.com/",
    // seller_fee_basis_points: 1000, // 100 = 1%
    // fee_recipient: "0x6d644A42aCc9156437f20Ac002F1a73A74863Efa",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
    thumbPerRow: 5,
    thumbWidth: 50,
    imageRatio: format.height / format.width,
    imageName: "preview.png",
};

const preview_gif = {
    numberOfImages: 5,
    order: "ASC", // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 500,
    imageName: "preview.gif",
};

module.exports = {
    format,
    baseUri,
    description,
    background,
    uniqueDnaTorrance,
    layerConfigurations,
    rarityDelimiter,
    preview,
    shuffleLayerConfigurations,
    debugLogs,
    extraMetadata,
    pixelFormat,
    text,
    namePrefix,
    network,
    solanaMetadata,
    gif,
    preview_gif,
};
