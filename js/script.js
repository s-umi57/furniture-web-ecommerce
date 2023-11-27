// Changing the Sofa's colours
var sofaModel = document.getElementById("sofa");
var colorSelect = document.getElementById("colorSelect");

// Event listener for the color select dropdown
colorSelect.addEventListener("change", function() {
    // Change the model source based on the selected color
    sofaModel.src = colorSelect.value;
});

// Changing Rocking Chair's colours
var rockingchairModel = document.getElementById("rockingChair");
var colorSelect2 = document.getElementById("colorSelect2");

// Event listener for the color select dropdown
colorSelect2.addEventListener("change", function() {
    // Change the model source based on the selected color
    rockingchairModel.src = colorSelect2.value;
});

// Changing Accent Chair's colours
var accentchairModel = document.getElementById("accentChair");
var colorSelect3 = document.getElementById("colorSelect3");

// Event listener for the color select dropdown
colorSelect3.addEventListener("change", function() {
    // Change the model source based on the selected color
    accentchairModel.src = colorSelect3.value;
});

// Adjusting Sofa Hotspots' Angle
const modelViewerSofa = document.querySelector("#sofa");
const SofaannotationClicked = (annotation) => {
    let dataset = annotation.dataset;
    modelViewerSofa.cameraTarget = dataset.target;
    modelViewerSofa.cameraOrbit = dataset.orbit;
    modelViewerSofa.fieldOfView = '45deg';
}

modelViewerSofa.querySelectorAll('button').forEach((hotspot) => {
    hotspot.addEventListener('click', () => SofaannotationClicked(hotspot));
});

// Adjusting Rocking Chair Hotspots' Angle
const modelViewerRockingChair = document.querySelector("#rockingChair");
const RockingChairannotationClicked = (annotation) => {
    let dataset = annotation.dataset;
    modelViewerRockingChair.cameraTarget = dataset.target;
    modelViewerRockingChair.cameraOrbit = dataset.orbit;
    modelViewerRockingChair.fieldOfView = '45deg';
}

modelViewerRockingChair.querySelectorAll('button').forEach((hotspot) => {
    hotspot.addEventListener('click', () => RockingChairannotationClicked(hotspot));
});

// Adjusting Accent Chair Hotspots' Angle
const modelViewerAccentChair = document.querySelector("#accentChair");
const AccentChairannotationClicked = (annotation) => {
    let dataset = annotation.dataset;
    modelViewerAccentChair.cameraTarget = dataset.target;
    modelViewerAccentChair.cameraOrbit = dataset.orbit;
    modelViewerAccentChair.fieldOfView = '80deg';
}

modelViewerAccentChair.querySelectorAll('button').forEach((hotspot) => {
    hotspot.addEventListener('click', () => AccentChairannotationClicked(hotspot));
});

// Adjusting Coffee Table Hotspots' Angle
const modelViewerCoffeeTable = document.querySelector("#coffeeTable");
const CoffeeTableannotationClicked = (annotation) => {
    let dataset = annotation.dataset;
    modelViewerCoffeeTable.cameraTarget = dataset.target;
    modelViewerCoffeeTable.cameraOrbit = dataset.orbit;
    modelViewerCoffeeTable.fieldOfView = '45deg';
}

modelViewerCoffeeTable.querySelectorAll('button').forEach((hotspot) => {
    hotspot.addEventListener('click', () => CoffeeTableannotationClicked(hotspot));
});