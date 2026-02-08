// js/app.js
let pilatesClasses = [
  {
    title: "Beginner Pilates",
    description: "Start your journey to strength and flexibility—perfect for beginners!",
    day: "Thu",
    duration: "30 min",
    price: "$50",
    image: "https://static.wixstatic.com/media/88aac0_49b19ce6fa2343b1957188befc1710a1~mv2.jpg"
  },
  {
    title: "Reformer Pilates",
    description: "Maximize your strength, flexibility, and muscle tone with the power of the Reformer.",
    day: "Thu",
    duration: "30 min",
    price: "$50",
    image: "https://static.wixstatic.com/media/88aac0_c73d6adcd0484d13a10fd04d3a8bd801~mv2.jpg"
  },
  {
    title: "Advance Pilates",
    description: "Push your limits and master advanced techniques for total body transformation.",
    day: "Thu",
    duration: "30 min",
    price: "$50",
    image: "https://static.wixstatic.com/media/88aac0_151b51bfa40f42dca334d68c1a1ff1b6~mv2.png"
  },
  {
    title: "Advance Pilates",
    description: "Push your limits and master advanced techniques for total body transformation.",
    day: "Thu",
    duration: "30 min",
    price: "$50",
    image: "https://media.istockphoto.com/id/2027278927/photo/young-athletic-woman-exercising-with-barbell-during-sports-training-in-a-gym.jpg?s=612x612&w=0&k=20&c=ifFL7Mqc8NwTj25PAx4ONy1OOQZvc1S_kVOofsbLgFw="
  }
];

// Select the container using querySelector
const container = document.querySelector("#classesContainer");

pilatesClasses.forEach(item => {
  const card = document.createElement("div");
  card.className = "col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center ";

  card.innerHTML = `
    <div class="card h-100" style="width: 25rem; ">
      <img src="${item.image}" class="card-img-top" alt="" style="height:200px; object-fit:cover;">
      <div class="card-body">
        <h3 class="card-title text-success">${item.title}</h3>
        <p class="card-text text-success">${item.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-success">${item.day}</li>
        <li class="list-group-item text-success">${item.duration}</li>
        <li class="list-group-item text-success">${item.price}</li>
      </ul>
      <div class="card-body d-flex justify-content-center">
        <button type="button" class="btn btn-success w-50 mt-auto" >Book Now</button>
      </div>
    </div>
  `;

  container.appendChild(card);
});

