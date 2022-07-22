// Start Splash Screen

document.querySelector(".splash span").onclick = function () {

    let yourName = prompt("What's Your Name?");

    if (yourName == null || yourName == "") {

        document.querySelector(".person").textContent = "Unknown";
    } else {

        document.querySelector(".person").textContent = yourName;
    }

    this.parentElement.remove();
}
// End Splash Screen

// Start Variable

let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

let orderRange = [...Array(blocks.length).keys()];

// End Variable

shuffle(orderRange);

blocks.forEach((block, index) => {

    block.style.order = orderRange[index];

    block.addEventListener("click", function() {
        flipBlocks(block);
    })
});

// Start Functions

function shuffle(array) {
    let current = array.length,
        temp,
        random;

    while(current > 0) {
        random = Math.floor(Math.random() * current);

        current--;

        temp = array[current];

        array[current] = array[random];

        array[random] = temp;
    }

    return array;
}

function flipBlocks(selectBlock) {

    selectBlock.classList.add("flip");

    let flippedBlocks = blocks.filter(flipox => flipox.classList.contains("flip"));

    if (flippedBlocks.length === 2) {

        stopClick();

        matchedBlocks(flippedBlocks[0], flippedBlocks[1]);
    }
}

function stopClick() {

    blocksContainer.classList.add("no-click");

    setTimeout(() => {

        blocksContainer.classList.remove("no-click");

    }, duration);
}

function matchedBlocks(first, second) {

    let triesElement = document.querySelector(".wrong span");

    if (first.dataset.image === second.dataset.image) {

        first.classList.remove("flip");
        second.classList.remove("flip");

        first.classList.add("match");
        second.classList.add("match");
    } else {

        triesElement.textContent = parseInt(triesElement.textContent) + 1;

        setTimeout(() => {
            first.classList.remove("flip");
            second.classList.remove("flip");

        }, duration);
    }
}
// End Functions