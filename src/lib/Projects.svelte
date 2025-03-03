<script>
  import img1 from "./../assets/images/1.jpeg";
  //import img2 from "./../assets/projects/2.png";
  //import img3 from "./../assets/projects/3.png";
  //import img4 from "./../assets/projects/4.png";

  let projects = [
    {
      img: "https://dreamhomes-e679f.web.app/images/1prj-1.jpg",
      title: "Residential Projects",
      content:
        "Discover your perfect home with our diverse range of residential projects, tailored to fit every lifestyle and aspiration",
    },
    {
      img: "https://dreamhomes-e679f.web.app/images/2prj-1.jpg",
      title: "Interior Projects",
      content:
        "Transform any space with our Interior Projects, where talented designers bring your unique vision to life through inspiring and masterful transformations",
    },
    {
      img: "https://dreamhomes-e679f.web.app/images/3prj-1.jpg",
      title: "Design Projects",
      content:
        "Elevate your business with our Design Projects, featuring commercial spaces that blend innovative design with practical functionality for a truly inspiring work environment",
    },

    // {
    //   img: "https://static.wixstatic.com/media/c837a6_c5afd1e1cd2042a4bc55b49fb93a8573~mv2.jpg/v1/fit/w_978,h_1138,q_90/c837a6_c5afd1e1cd2042a4bc55b49fb93a8573~mv2.jpg",
    //   title: "Building Information Modelling",
    //   content: "UK Projects",
    // },
    // {
    //   img: "https://static.wixstatic.com/media/8cb73eac866c405b9085bd76468fd0b5.jpg/v1/fit/w_978,h_1138,q_90/8cb73eac866c405b9085bd76468fd0b5.jpg",
    //   title: "3D Visualisation and Models",
    //   content: "",
    // },
    // {
    //   img: "https://static.wixstatic.com/media/c837a6_0c85a01871584b379bdb4a5f261ddf53~mv2.jpg/v1/fit/w_1475,h_1138,q_90/c837a6_0c85a01871584b379bdb4a5f261ddf53~mv2.jpg",
    //   title: "",
    //   content: "",
    // },
    // {
    //   img: "https://static.wixstatic.com/media/c837a6_ff17ef7473f04d19bbacf6161681a26c~mv2.jpg/v1/fit/w_1475,h_1138,q_90/c837a6_ff17ef7473f04d19bbacf6161681a26c~mv2.jpg", //img4,
    //   title: "",
    //   content: "",
    // },
    // {
    //   img: "https://static.wixstatic.com/media/c837a6_a4eefd197f2049a598ba9749e86ce259~mv2.jpg/v1/fit/w_1475,h_1138,q_90/c837a6_a4eefd197f2049a598ba9749e86ce259~mv2.jpg",
    //   title: "",
    //   content: "",
    // },
  ];
</script>

<div class="p-8" data-aos="fade">
  <h1 class="raleway text-4xl text-gray-500 md:text-5xl font-semibold lg:py-8">
    Our <br /><span class="text-primary md:text-6xl lg:text-7xl md:font-normal"
      >&emsp;Projects</span
    >
  </h1>
  <div class="flex flex-col m-auto p-auto">
    <div
      class="flex overflow-x-scroll lg:overflow-auto p-4 hide-scroll-bar no-scrollbar lg:justify-center"
    >
      <div class="flex flex-nowrap md:flex-wrap lg:gap-8">
        {#each projects as project}
          <div class="inline-block px-3 select-none" data-aos="fade">
            <div
              class="group grid border-black border-4 w-max h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div
                class="col-start-1 row-start-1 opacity-0 hover:opacity-100 transition-all flex flex-col justify-center w-48 md:w-64 lg:w-72 z-20 top-1 bottom-1 {project.title
                  ? 'bg-black/50 backdrop-blur-md'
                  : ''} m-0 rounded-sm p-4"
              >
                <div class="barlow text-white text-xl md:text-3xl">
                  {project.title}
                </div>
                <div
                  class="barlow text-secondary text-sm md:text-md font-normal"
                >
                  {project.content}
                </div>
              </div>
              <img
                class="col-start-1 row-start-1 w-48 h-72 xs:h-80 md:h-96 md:w-64 lg:w-72 object-cover scale-110 transition-all group-hover:scale-[120%]"
                src={project.img}
                alt="project"
              />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
