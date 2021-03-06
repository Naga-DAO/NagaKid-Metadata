const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);
const fs = require("fs");

const { baseUri, description, namePrefix, network, solanaMetadata, external_url, seller_fee, fee_recepient  } = require(`${basePath}/src/config.js`);

// read json data
let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);

data.forEach((item) => {
    if (network == NETWORK.sol) {
        item.name = `${namePrefix} #${item.edition}`;
        item.description = description;
        item.creators = solanaMetadata.creators;
        item.external_url = external_url;
    } else {
        item.name = `${namePrefix} #${item.edition}`;
        item.description = description;
        item.image = `${baseUri}/${item.edition}.png`;
        item.external_url = external_url;
        item.seller_fee_basis_points = seller_fee;
        item.fee_recipient = fee_recipient;

    }
    fs.writeFileSync(`${basePath}/build/json/${item.edition}.json`, JSON.stringify(item, null, 2));
});

fs.writeFileSync(`${basePath}/build/json/_metadata.json`, JSON.stringify(data, null, 2));

if (network == NETWORK.sol) {
    console.log(`Updated description for images to ===> ${description}`);
    console.log(`Updated name prefix for images to ===> ${namePrefix}`);
    console.log(`Updated creators for images to ===> ${JSON.stringify(solanaMetadata.creators)}`);
    console.log(`Updated external_url prefix for images to ===> ${external_url}`);
} else {
    console.log(`Updated baseUri for images to ===> ${baseUri}`);
    console.log(`Updated description for images to ===> ${description}`);
    console.log(`Updated name prefix for images to ===> ${namePrefix}`);
    console.log(`Updated external_url prefix for images to ===> ${external_url}`);
}
