const bars = document.querySelectorAll(".bar");

const data = fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    return data;
  })
  .catch((error) => console.log(error));

data.then((data) =>
  data.forEach((item, index) => {
    const amountContainer = document.createElement("div");
    amountContainer.classList.add("day-amount-container");
    amountContainer.innerHTML = `<p class="day-amount">$${item.amount}</p>`;
    bars[index].appendChild(amountContainer);
    bars[index].style.height = `${item.amount * 3}px`;
    console.log(item.amount);
  })
);

const showAmount = (e) => {
  e.target.firstChild.classList.add("active");
};

bars[new Date().getDay() - 1].classList.add("active");

const hideAmount = (e) => {
  e.target.firstChild.classList.remove("active");
};

bars.forEach((bar) => {
  bar.addEventListener("mouseover", showAmount);
  bar.addEventListener("mouseout", hideAmount);
});
