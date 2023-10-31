const form = document.querySelector(".contactform__page-section");

function canSubmitForm() {
    const lastSubmitTime = localStorage.getItem("lastSubmitTime");
    if (!lastSubmitTime) return true;
    const currentTime = new Date().getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    return currentTime - lastSubmitTime >= twentyFourHours;
}

function handleSubmit(event) {
    event.preventDefault();
    const status = document.querySelector(".contactform__page-section-status");
    if (!canSubmitForm()) {
        const toast = document.querySelector(".toast");
        const closeIcon = document.querySelector(".close");
        const progress = document.querySelector(".progress");
        let timer1, timer2;
        toast.classList.add("active");
        progress.classList.add("active");
        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 5000);
        timer2 = setTimeout(() => {
            progress.classList.remove("active");
        }, 5300);
        closeIcon.addEventListener("click", () => {
            toast.classList.remove("active");
            setTimeout(() => {
                progress.classList.remove("active");
            }, 300);
            clearTimeout(timer1);
            clearTimeout(timer2);
        });
        form.classList.add("input:invalid");
        const smMessage = form.querySelectorAll("small");
        smMessage.forEach((small) => {
            small.style.visibility = "hidden";
        });
        form.querySelector(".contactform__btn").value = "Try later";
        const formFields = form.querySelectorAll("input, select, textarea");
        formFields.forEach((field) => {
            field.disabled = true;
        });
        return;
    }
    fetch(event.target.action, {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok && canSubmitForm()) {
                move();
                status.innerHTML =
                    '<svg width="55px" height="55px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><style> .cls-2 { fill: #699f4c; fill-rule: evenodd; } </style></defs><path class="cls-2" d="M800,510a30,30,0,1,1,30-30A30,30,0,0,1,800,510Zm-16.986-23.235a3.484,3.484,0,0,1,0-4.9l1.766-1.756a3.185,3.185,0,0,1,4.574.051l3.12,3.237a1.592,1.592,0,0,0,2.311,0l15.9-16.39a3.187,3.187,0,0,1,4.6-.027L817,468.714a3.482,3.482,0,0,1,0,4.846l-21.109,21.451a3.185,3.185,0,0,1-4.552.03Z" id="check" transform="translate(-770 -450)"/></svg>';
                setTimeout(() => {
                    status.innerHTML = "";
                }, 4000);
                const formFields = form.querySelectorAll("input, select, textarea");
                formFields.forEach((field) => {
                    field.disabled = true;
                });
                form.querySelector(".contactform__btn").value =
                    "Successfully submitted";
                localStorage.setItem("lastSubmitTime", new Date().getTime());
            } else {
                response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                        status.innerHTML =
                            '<svg width="55px" height="55px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-3 {fill: #9f4c4c; fill-rule: evenodd;}</style></defs><path class="cls-3" d="M390.774,690a3.994,3.994,0,0,1,2.824,1.17l15.231,15.23A4,4,0,0,1,410,709.233v21.534a4,4,0,0,1-1.172,2.831L393.6,748.828A3.989,3.989,0,0,1,390.774,750H369.225a3.989,3.989,0,0,1-2.824-1.171l-15.23-15.23A3.994,3.994,0,0,1,350,730.767V709.233a4,4,0,0,1,1.173-2.832l15.23-15.23a3.994,3.994,0,0,1,2.824-1.17h21.549ZM395,729.951A3.406,3.406,0,0,1,395,734.77l-0.22.22a3.42,3.42,0,0,1-4.833,0l-8.764-8.755a1.71,1.71,0,0,0-2.417,0l-8.741,8.746a3.417,3.417,0,0,1-4.836,0l-0.194-.193a3.408,3.408,0,0,1,.017-4.842l8.834-8.735a1.7,1.7,0,0,0,0-2.43l-8.831-8.725a3.409,3.409,0,0,1-.018-4.844l0.193-.193a3.411,3.411,0,0,1,2.418-1c0.944,0,3.255,1.835,3.872,2.455l7.286,7.287a1.708,1.708,0,0,0,2.417,0l8.764-8.748a3.417,3.417,0,0,1,4.831,0L395,705.243a3.406,3.406,0,0,1,0,4.818l-8.727,8.737a1.7,1.7,0,0,0,0,2.407Z" id="error" transform="translate(-350 -690)"/></svg>';
                        setTimeout(() => {
                            status.innerHTML = "";
                        }, 2000);
                        form.classList.add("input:invalid");
                    }
                });
            }
        })
        .catch(() => {
            status.innerHTML =
                '<svg width="55px" height="55px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-3 {fill: #9f4c4c; fill-rule: evenodd;}</style></defs><path class="cls-3" d="M390.774,690a3.994,3.994,0,0,1,2.824,1.17l15.231,15.23A4,4,0,0,1,410,709.233v21.534a4,4,0,0,1-1.172,2.831L393.6,748.828A3.989,3.989,0,0,1,390.774,750H369.225a3.989,3.989,0,0,1-2.824-1.171l-15.23-15.23A3.994,3.994,0,0,1,350,730.767V709.233a4,4,0,0,1,1.173-2.832l15.23-15.23a3.994,3.994,0,0,1,2.824-1.17h21.549ZM395,729.951A3.406,3.406,0,0,1,395,734.77l-0.22.22a3.42,3.42,0,0,1-4.833,0l-8.764-8.755a1.71,1.71,0,0,0-2.417,0l-8.741,8.746a3.417,3.417,0,0,1-4.836,0l-0.194-.193a3.408,3.408,0,0,1,.017-4.842l8.834-8.735a1.7,1.7,0,0,0,0-2.43l-8.831-8.725a3.409,3.409,0,0,1-.018-4.844l0.193-.193a3.411,3.411,0,0,1,2.418-1c0.944,0,3.255,1.835,3.872,2.455l7.286,7.287a1.708,1.708,0,0,0,2.417,0l8.764-8.748a3.417,3.417,0,0,1,4.831,0L395,705.243a3.406,3.406,0,0,1,0,4.818l-8.727,8.737a1.7,1.7,0,0,0,0,2.407Z" id="error" transform="translate(-350 -690)"/></svg>';
            setTimeout(() => {
                status.innerHTML = "";
            }, 2000);
            form.classList.add("input:invalid");
        });
}

function move() {
    const elem = document.getElementById("myBar");
    const subButn = document.querySelector(".contactform__btn");
    subButn.style.backgroundColor = "green";
    let width = 1;
    const id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}

form.addEventListener("submit", handleSubmit);