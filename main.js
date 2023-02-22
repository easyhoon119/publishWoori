const accountLabel = document.querySelectorAll(".account-box-label");

for (let i = 0; i < accountLabel.length; i++) {
    accountLabel[i].addEventListener("click", () => {
        if (accountLabel[i].className.split(" ")[1] === "opened") {
            accountLabel[i].classList = accountLabel[i].className.split(" ")[0];
        } else {
            accountLabel[i].classList += " opened";
        }
    });
}

const moreBtn = document.querySelectorAll(".account-box-detail-box-up-more");
const modalConatiner = document.querySelector(".example-modal");

for (let i = 0; i < moreBtn.length; i++) {
    moreBtn[i].addEventListener("click", () => {
        document.body.classList += "hidden";
        modalConatiner.style.top = window.scrollY + "px";
        modalConatiner.classList += " opened";
    });
}

modalConatiner.addEventListener("click", (e) => {
    if (
        !modalConatiner
            .querySelector(".exmple-modal-container")
            .contains(e.target)
    ) {
        document.body.classList = "";
        modalConatiner.style.top = 0 + "px";
        modalConatiner.classList = modalConatiner.className.split(" ")[0];
    }
});
