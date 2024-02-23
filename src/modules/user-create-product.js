import {adsData} from '../data/ads'
const adsContainer = document.querySelector(".ads-container");

adsData.forEach((item) => {
  let outputAds = ` <article
  class="hover:text-blue-500 cursor-pointer rounded-xl flex flex-col items-center bg-white">
  <a class="w-full" href="./src/pages/info-product.html">
  <div class="w-full relative">
    <img
      class="absolute top-3 left-3 sm:w-10 h-auto w-6"
      src="/public/images/Icon/heart2.svg"
      alt="icon"
    />
    <img
      class="w-full rounded-t-md"
      src=${item.img}
      alt="card"
    />
  </div>
  <div class="md:p-5 p-2">
    <p
      class="sm:text-sm text-[10px] text-gray-600 py-1 px-2 bg-gray-200 rounded-md w-[107px]"
    >
      ${item.location}
    </p>
    <h3 class="font-semibold sm:text-lg text-sm sm:mt-4 mt-2">
      ${item.title}
    </h3>
    <p class="sm:text-sm text-[10px] text-gray-600 py-2">
      ${item.date}
    </p>
    <p class="text-gray-600 sm:text-base text-xs font-semibold">
      ${item.phone}
    </p>
    <div class="flex flex-grow h-full"></div>
    <div class="flex items-center gap-2">
      <p class="lg:text-2xl md:text-xl text-base text-black font-bold">
        ${item.price}
      </p>
      <span class="text-blue-500 md:text-base text-sm font-medium"
        >UZS</span
      >
    </div>
  </div>
</a>
</article>`;

  adsContainer.insertAdjacentHTML('beforeend', outputAds)
//   console.log(adsContainer);
});