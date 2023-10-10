$(document).ready(function () {
    var logonav = $('.logonav');
    var lastScrollTop = 0;

    function setOpacity(opacity) {
        logonav.css({
            'opacity': opacity,
            'transition': 'opacity 0.5s ease'
        })


    }
    

    setOpacity(0.2);

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > lastScrollTop) {
            setOpacity(Math.max(0.1, 1 - scrollTop / 200));
        } else {
            setOpacity(1);
        }

        lastScrollTop = scrollTop;
    });

    logonav.hover(
        function () {
            setOpacity(1);
        },
        function () {
            setOpacity(0.2);
        }
    );

    logonav.on('click touchstart', function () {
        setOpacity(1);
    });
});

document.getElementById("cpuOp1").checked = true;
document.getElementById("memoryOp1").checked = true;
document.getElementById("storageOp1").checked = true;
document.getElementById("powerOp1").checked = true;

let price = 2750000;

let processorDesc = "";
let processorCost = 0;
let processorSelected = true; // Default option selected
let memoryDesc = "";
let memoryCost = 0;
let memorySelected = true; // Default option selected
let storageDesc = "";
let storageCost = 0;
let storageSelected = true; // Default option selected
let psupplyDesc = "";
let psupplyCost = 0;
let psupplySelected = true; // Default option selected

let finalPrice = document.getElementById("total");

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let statusCheck = document.getElementById("statusCheck");

let cpuOp1 = document.getElementById("cpuOp1");
let cpuOp2 = document.getElementById("cpuOp2");
let cpuOp3 = document.getElementById("cpuOp3");
let cpuOp4 = document.getElementById("cpuOp4");
let cpuOp5 = document.getElementById("cpuOp5");
let ramOp1 = document.getElementById("memoryOp1");
let ramOp2 = document.getElementById("memoryOp2");
let ramOp3 = document.getElementById("memoryOp3");
let storageOp1 = document.getElementById("storageOp1");
let storageOp2 = document.getElementById("storageOp2");
let storageOp3 = document.getElementById("storageOp3");
let psuOp1 = document.getElementById("powerOp1");
let psuOp2 = document.getElementById("powerOp2");
let psuOp3 = document.getElementById("powerOp3");

function setDefaultSelection() {
    // Set default selection for processor, memory, storage, and power options
    cpuOption1();
    memoryOption1();
    storageOption1();
    psuOption1();
    cpuOptionClicked('cpuOp1');
    memoryOptionClicked('memoryOp1');
    storageOptionClicked('storageOp1');
    psuOptionClicked('powerOp1');

    // Update the descriptions after setting default selections
    updateProcessorDesc();
    updateMemoryDesc();
    updateStorageDesc();
    updateSupplyDesc();
}
document.addEventListener("DOMContentLoaded", function () {
    setDefaultSelection();
});


function cpuinfo() {
    alert("Your SOC is responsible for the processing and calculations by M-IB, it is a crucial component that includes the CPU, GPU and the NBE. \n\nIf you plan to use M-IB for less bionically capable tasks, pick the S1. However, if you plan to occasionally task M-IB with difficult requests, pick the S1-Pro. Otherwise, if you are a pro, and use M-IB for intense puropses, pick the S1 Max or S1 Ultra, being designed to carry out the hardest of tasks and really show M-IB's potential")
}
function raminfo(){
    alert("Your Memory is responsible for the speed, latency and the amount of data M-IB can quickly access at once. \n\nFor non-intensive workflows, DDR6X RAM is sufficient; however, if you plan to do intensive processing, it is recommended to choose DDR7 as it significantly lowers latency, while also dramatically increasing the capacity of main memory")
}
function storageinfo(){
    alert("Your Storage determines how many things can MI-B store locally. \n\nIf you are a casual user, or upload data in the cloud, our v1/v2 Gen X/ Gen X Pro NVMe SSDs are more than sufficient; however if you wish to use M-IB:08 extenisvely and solely store data locally, it is recommeneded to take the Gen XII Pro SSD, as it offers the best possible performance in the industry.")
}

function psuinfo(){
    alert("Your Power Supply is responsible for charging your M-IB. \n\nIf you plan to use M-IB occasionally, or for light bionic processing, then a 45-65kW charger will suffice; though if you do very power-inefficient, heavy bionic processing, then it is almost necessary to select the 125kW charger.")
}

function updateTotalCost(){
    finalPrice.innerText = ""
    finalPrice.innerText += "$" + (price + processorCost + memoryCost + storageCost + psupplyCost).toLocaleString('en-US')
}


function updateProcessorDesc(){
    document.getElementById("processor-selection").innerText = "";
    document.getElementById("processor-selection").innerText = "Processor: " + processorDesc
}

function updateMemoryDesc(){
    document.getElementById("memory-selection").innerText = "";
    document.getElementById("memory-selection").innerText = "Memory: " + memoryDesc
}

function updateStorageDesc(){
    document.getElementById("storage-selection").innerText = "";
    document.getElementById("storage-selection").innerText = "Storage: " + storageDesc
}
function updateSupplyDesc(){
    document.getElementById("psupply-selection").innerText = "";
    document.getElementById("psupply-selection").innerText = "Power Supply: " + psupplyDesc
}


function resetProcessorBorders() {
    let processorOptions = document.getElementsByClassName("processorOptions");
    for (let i = 0; i < processorOptions.length; i++) {
        processorOptions[i].style.border = "1px solid darkgrey"; // Reset border styles
    }
}

function updateProcessorBorder(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.style.border = "1px solid #3882f6"; // Set border style
    }
}

function cpuOptionClicked(clickedElementId) {
    resetProcessorBorders();
    updateProcessorBorder(clickedElementId);
}



function resetMemoryBorders() {
    let memoryOptions = document.getElementsByClassName("memoryOptions");
    for (let i = 0; i < memoryOptions.length; i++) {
        memoryOptions[i].style.border = "1px solid darkgrey";
    }
}

function updateMemoryBorder(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.style.border = "1px solid #3882f6";
    }
}

function memoryOptionClicked(clickedElementId) {
    resetMemoryBorders();
    updateMemoryBorder(clickedElementId);
}


function resetStorageBorders() {
    let storageOptions = document.getElementsByClassName("storageOptions");
    for (let i = 0; i < storageOptions.length; i++) {
        storageOptions[i].style.border = "1px solid darkgrey";
    }
}

function updateStorageBorder(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.style.border = "1px solid #3882f6";
    }
}

function storageOptionClicked(clickedElementId) {
    resetStorageBorders();
    updateStorageBorder(clickedElementId);
}


function resetPowerBorders() {
    let powerOptions = document.getElementsByClassName("psupplyOptions");
    for (let i = 0; i < powerOptions.length; i++) {
        powerOptions[i].style.border = "1px solid darkgrey";
    }
}

function updatePowerBorder(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.style.border = "1px solid #3882f6";
    }
}

function psuOptionClicked(clickedElementId) {
    resetPowerBorders();
    updatePowerBorder(clickedElementId);
}



function cpuOption1() {
    processorCost = 0;
    processorCost += 0;
    processorDesc = ""
    processorDesc += "PIS S1 with 24-core CPU, 7.5 GHz Clock Speed, 64-core GPU, 1345-core Neural-Bionic Engine"
    console.log(`You chose the ${processorDesc}, which costs $USD${processorCost}`)
    processorSelected = true
    updateTotalCost()
    updateProcessorDesc()

}


function cpuOption2() {
    processorCost = 0;
    processorCost += 295000;
    processorDesc = ""
    processorDesc += "PIS S1 with 36-core CPU, 8.4 GHz Clock Speed, 72-core GPU, 2104-core Neural-Bionic Engine"
    console.log(`You chose the ${processorDesc}, which costs $USD${processorCost}`)
    processorSelected = true
    updateTotalCost()
    updateProcessorDesc()


}

function cpuOption3() {
    processorCost = 0
    processorCost += 650000;
    processorDesc = ""
    processorDesc += "PIS S1 Pro with 96-core CPU, 11.5 GHz Clock Speed (Turbo up to 21 GHz), 128-core GPU, 4328-core Neural-Bionic Engine"
    console.log(`You chose the ${processorDesc}, which costs $USD${processorCost}`)
    processorSelected = true
    updateTotalCost()
    updateProcessorDesc()



}
function cpuOption4() {
    processorCost = 0;
    processorCost += 1200000;
    processorDesc = ""
    processorDesc += "PIS S1 Max with 158-core CPU, 13 GHz Clock Speed (Turbo up to 24.5 GHz),192-core GPU, 9344-core Neural-Bionic Engine"
    console.log(`You chose the ${processorDesc}, which costs $USD${processorCost}`)
    processorSelected = true
    updateTotalCost()
    updateProcessorDesc()


}
function cpuOption5() {
    processorCost = 0;
    processorCost += 4735000;
    processorDesc = ""
    processorDesc += "PIS S1 Ultra with 228-core CPU, 19 GHz Clock Speed (Turbo up to 42 GHz), 368-core GPU, 17,233-core Neural-Bionic Engine"
    console.log(`You chose the ${processorDesc}, which costs $USD${processorCost}`)
    processorSelected = true
    updateTotalCost()
    updateProcessorDesc()



}




function memoryOption1(){
    memoryCost = 0;
    memoryCost += 0;
    memoryDesc = ""
    memoryDesc += "1.92TB DDR6X HyperBionic Memory"
    console.log(`You chose the ${memoryDesc}, which costs $USD${memoryCost}`)
    memorySelected = true
    updateTotalCost()
    updateMemoryDesc()

}
function memoryOption2(){
    memoryCost = 0;
    memoryCost += 90000;
    memoryDesc = "";
    memoryDesc += "4.56TB DDR6X HyperBionic Memory";
    console.log(`You chose the ${memoryDesc}, which costs $USD${memoryCost}`);
    memorySelected = true;
    updateTotalCost();
    updateMemoryDesc();
    
}
function memoryOption3(){
    memoryCost = 0;
    memoryCost += 250000;
    memoryDesc = "";
    memoryDesc += "10.28TB DDR7 HyperBionic Memory";
    console.log(`You chose the ${memoryDesc}, which costs $USD${memoryCost}`);
    memorySelected = true;
    updateTotalCost();
    updateMemoryDesc()

}



function storageOption1(){
    storageCost = 0;
    storageCost += 0;
    storageDesc = "";
    storageDesc += "1.5PB Ultra-fast NVMe v1 Gen X SSD";
    console.log(`You chose the ${storageDesc}, which costs $USD${storageCost}`);
    storageSelected = true
    updateTotalCost()
    updateStorageDesc()

}
function storageOption2(){
    storageCost = 0;
    storageCost += 975625;
    storageDesc = ""
    storageDesc += "2.5PB Ultra-fast NVMe v2 Gen X Plus SSD"
    console.log(`You chose the ${storageDesc}, which costs $USD${storageCost}`)
    storageSelected = true
    updateTotalCost()
    updateStorageDesc()

    
}
function storageOption3(){
    storageCost = 0;
    storageCost += 3550000;
    storageDesc = ""
    storageDesc += "10PB Ultra-fast NVMe v2 Gen XII Pro SSD"
    console.log(`You chose the ${storageDesc}, which costs $USD${storageCost}`)
    storageSelected = true
    updateTotalCost()
    updateStorageDesc()

}



function psuOption1 (){
    psupplyCost = 0;
    psupplyCost += 0;
    psupplyDesc = ""
    psupplyDesc += "45kW GaN Hyper-Efficient \"Gold\"-Rated Power Supply"
    console.log(`You chose the ${psupplyDesc}, which costs $USD${psupplyCost}`)
    psupplySelected = true
    updateTotalCost()
    updateSupplyDesc()

}
function psuOption2 (){
    psupplyCost = 0;
    psupplyCost += 67625;
    psupplyDesc = ""
    psupplyDesc += "65kW GaN Hyper-Efficient \"Platinum\"-Rated Power Supply"
    console.log(`You chose the ${psupplyDesc}, which costs $USD${psupplyCost}`)
    psupplySelected = true;
    updateTotalCost()
    updateSupplyDesc()

    
}
function psuOption3 (){
    psupplyCost = 0;
    psupplyCost += 150000;
    psupplyDesc = ""
    psupplyDesc += "65kW GaN Hyper-Efficient \"Diamond+\"-Rated Power Supply"
    console.log(`You chose the ${psupplyDesc}, which costs $USD${psupplyCost}`)
    psupplySelected = true;
    updateTotalCost()
    updateSupplyDesc()


}

