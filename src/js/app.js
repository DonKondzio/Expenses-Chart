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

const hideAmount = (e) => {
  e.target.firstChild.classList.remove("active");
};

bars.forEach((bar) => {
  bar.addEventListener("mouseover", showAmount);
  bar.addEventListener("mouseout", hideAmount);
});

// class HandleChart {
//   constructor() {
//     this.bars = document.querySelectorAll(".bar");
//     this.amounts = [];
//     this.init();
//   }

//   init() {
//     const data = fetch("./data.json")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => console.log(error));

//     data.then((data) => {
//       data.forEach((item) => console.log(item));
//     });
//   }

//   showAmount = (index) => {};

//   addAmountElements() {
//     this.bars.forEach((bar, index) => {
//       const amountContainer = document.createElement("div");
//       const amountParagraph = document.createElement("p");
//       amountContainer.classList.add("day-amount-container");
//       amountParagraph.classList.add("day-amount");
//       amountParagraph.textContent = `${this.amounts[index]}$`;
//       amountContainer.appendChild(amountParagraph);
//       // bar.appendChild(amountContainer);
//       // console.log(this.amounts);
//     });
//   }

//   addListeners = () => {
//     this.bars.forEach((bar, index) =>
//       bar.addEventListener("mouseover", showAmount(index))
//     );
//   };
// }

// const handleChart = new HandleChart();
