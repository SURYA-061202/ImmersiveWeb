<script>
  import { link } from "svelte-navigator";
  import video from "./../assets/hero.gif";
  import LinkButton from "./LinkButton.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const container = document.getElementById("top");
    setTimeout(function () {
      if (container) {
        container.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    }, 100);
  });
</script>

<div id="top" class="w-full focus:outline-none">
  <div
    id="hero"
    class="w-full h-[60vh] top-0 left-0 md:h-[100vh] 2xl:h-[80vh] 3xl:h-[66vh]"
  >
    <img
      class="absolute w-full h-[70%] bg-cover top-0 left-0 z-[-1] md:h-full 3xl:w-[60vw] 3xl:pl-[5vw]"
      src={video}
      alt="background"
    />
    <video
      id="bg-vid"
      crossorigin="anonymous"
      playsinline
      preload="auto"
      loop
      muted
      tabindex="-1"
      autoplay
      src="https://video.wixstatic.com/video/11062b_caf2e0a7cfa741bd9d7686984c40af25/1080p/mp4/file.mp4"
      class="absolute w-full h-[70%] bg-cover object-cover top-0 left-0 z-[-1] md:h-full 3xl:w-[60vw] 3xl:pl-[5vw]"
    >
      <track kind="captions" />
    </video>
    <div
      id="box"
      class="absolute md:flex md:flex-row bg-black-100 bottom-[30%] left-[0px] w-full z-[-1] place-items-end md:h-full md:top-0 md:w-[39%] 3xl:ml-[5vw] 3xl:l-[5vw]"
    >
      <div class="md:grow md:h-[50%]" />
      <div
        data-aos="fade"
        class="raleway text-white p-8 lg:p-16 md:h-fit md:w-full z-[10]"
      >
        <div id="idk" class="text-2xl md:text-3xl lg:text-4xl font-normal">
          BUILDING THE <br />
          <span class="text-primary tracking-wide font-bold">F U T U R E</span>
        </div>
        <p class="barlow text-white font-normal">
          Most Reliable Partner for Construction Services
        </p>
      </div>
    </div>
  </div>
  <!-- <div class="h-full w-full" /> -->
  <div class="w-full p-4 xs:p-8">
    <div
      data-aos="fade"
      data-aos-delay="100"
      data-aos-offset="-100"
      class="text-2xl mukta text-[color:black] text-center md:text-4xl md:text-left pb-4"
    >
      A Leading Construction Technology Company
    </div>
    <div
      class="grid grid-cols-3 gap-2 barlow-condensed text-[color:black] content-center justify-center items-center text-center md:text-left py-2 gap-y-4 md:grid-cols-4 lg:grid-cols-7 md:text-lg lg:text-2xl"
    >
      <div data-aos="fade-up" data-aos-delay="0" data-aos-offset="-10">
        Design & <br />
        <span class="text-primary" data-aos="fade" data-aos-offset="-5"
          >Engineering</span
        >
      </div>
      <div
        class="col-span-2"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="-10"
      >
        Building Information Modelling<br />
        <span class="text-primary" data-aos="fade" data-aos-offset="-5"
          >& Digital Transformation</span
        >
      </div>
      <div data-aos="fade-up" data-aos-delay="0" data-aos-offset="-10">
        Asset <br />
        <span class="text-primary" data-aos="fade" data-aos-offset="-5"
          >Management</span
        >
      </div>
      <div data-aos="fade-up" data-aos-delay="50" data-aos-offset="-10">
        Residential <br />
        <span class="text-primary" data-aos="fade" data-aos-offset="-5"
          >Buildings</span
        >
      </div>
      <div data-aos="fade-up" data-aos-delay="100" data-aos-offset="-10">
        Renovation<br />
        <span class="text-primary" data-aos="fade" data-aos-offset="-5"
          >Services</span
        >
      </div>
      <div data-aos="fade-up" data-aos-delay="150" data-aos-offset="-20">
        Commercial<br />
        <span class="text-primary" data-aos="fade" data-aos-offset="-5"
          >Buildings</span
        >
      </div>
      <div data-aos="fade-up" data-aos-delay="200" data-aos-offset="-20">
        Painting<br />
        <span class="text-primary" data-aos="fade" data-aos-offset="-5"
          >Services</span
        >
      </div>
      <div data-aos="fade-up" data-aos-delay="250" data-aos-offset="-20">
        Interior<br />
        <span class="text-primary" data-aos="fade" data-aos-offset="-5"
          >Services</span
        >
      </div>
      <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="-30">
        Industrial<br />
        <span class="text-primary" data-aos="fade" data-aos-offset="-5"
          >Buildings</span
        >
      </div>
    </div>
  </div>
  <div class="p-8 md:pb-16 md:mb-8">
    <h1
      data-aos="fade"
      class="raleway text-primary font-medium text-3xl md:text-4xl lg:text-6xl pb-4 focus:outline-none"
    >
      <span class="text text-gray-500 focus:outline-none">Our</span>
      <br /> SERVICES
    </h1>
    <p
      data-aos="fade"
      class="barlow text-[#888e] md:w-[40%] md:text-xl lg:text-2xl"
    >
      We provide End to End Solutions, Design to Construction & handover
      services. We provide real-time tracking, best quality, and updates on
      projects daily. Timely handover of your dream project 🤝
    </p>
    <!-- FIXME <LinkButton /> -->
  </div>
</div>

<style>
  #box {
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.088);
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
  }
  img {
    object-fit: cover;
  }
</style>
