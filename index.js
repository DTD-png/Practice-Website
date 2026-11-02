document.addEventListener("DOMContentLoaded", () => {
    let count = 0;

    const titleBtn = document.getElementById("changeTitleBtn");
    const counterBtn = document.getElementById("counterButton");
    const saveLocalBtn = document.getElementById("saveLocalBtn");
    const saveSessionBtn = document.getElementById("saveSessionBtn");
    const resetBtn = document.getElementById("resetBtn");
    const statusText = document.getElementById("storageStatus");

    const savedLocalCount = localStorage.getItem("clickCount");
    if (savedLocalCount !== null) {
        count = parseInt(savedLocalCount, 10);
        counterBtn.textContent = `Clicks: ${count}`;
        statusText.textContent = `Loaded stored count (${count}) from LocalStorage.`;
    }

    titleBtn.addEventListener("click", () => {
        document.title = "Best Website";
        alert("Document title changed to 'Best Website'!");
    });

    counterBtn.addEventListener("click", () => {
        count++;
        counterBtn.textContent = `Clicks: ${count}`;
    });

    saveLocalBtn.addEventListener("click", () => {
        localStorage.setItem("clickCount", count.toString());
        statusText.textContent = `Saved count (${count}) to LocalStorage!`;
    });

    saveSessionBtn.addEventListener("click", () => {
        sessionStorage.setItem("sessionClickCount", count.toString());
        statusText.textContent = `Saved count (${count}) to SessionStorage!`;
    });

    resetBtn.addEventListener("click", () => {
        count = 0;
        counterBtn.textContent = `Clicks: ${count}`;
        localStorage.removeItem("clickCount");
        sessionStorage.removeItem("sessionClickCount");
        statusText.textContent = "Counter reset and storage cleared.";
    });
});