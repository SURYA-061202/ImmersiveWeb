<script>
  import { onMount } from "svelte";
  import { Router, Route, Link } from "svelte-navigator";
  import favicon from "./assets/favicon.png";
  import TailwindCss from "./lib/TailwindCSS.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import HomePage from "./pages/HomePage.svelte";
  import EngineeringPage from "./pages/EngineeringPage.svelte";
  import CompanyPage from "./pages/CompanyPage.svelte";
  import ContactPage from "./pages/ContactPage.svelte";
  import Footer from "./lib/Footer.svelte";
  import { App as CapacitorApp } from "@capacitor/app";

  import AOS from "aos";
  import "aos/dist/aos.css";

  onMount(() => {
    AOS.init();
    window.scrollTo(0, 0);
    console.log("This website is made with ❤️ by DataOverflow");
    console.log(
      "I develop high quality fast and responsive websites (using Svelte)"
    );
    console.log(
      "Feel free to reach me out at - https://linkedin.com/in/kavirajar/ or kavirajar27@gmail.com"
    );

    CapacitorApp.addListener("backButton", ({ canGoBack }) => {
      if (!canGoBack) {
        CapacitorApp.exitApp();
      } else {
        window.history.back();
      }
    });
  });

  history.pushState = new Proxy(history.pushState, {
    apply(target, thisArg, argumentsList) {
      Reflect.apply(target, thisArg, argumentsList);
      scrollTo(-10000, -1000);
    },
  });
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={favicon} />
</svelte:head>

<Router>
  <TailwindCss />
  <Navbar />
  <div class="everything">
    <Route path="about">
      <CompanyPage />
    </Route>

    <Route path="/">
      <HomePage />
    </Route>

    <Route path="engineering">
      <div class="md:px-8 2xl:px-16">
        <EngineeringPage />
      </div>
    </Route>

    <Route path="contact">
      <div class="md:px-8">
        <ContactPage />
      </div>
    </Route>

    <Route>
      <div class="p-16 flex flex-col gap-8 h-[80vh]">
        <h1 class="text-primary barlow font-bold text-9xl focus:outline-none">
          404 :/
        </h1>
        <p class="text-black barlow text-3xl">
          The path you entered doesn't exist. <br />
          Go back <a href="/" class="text-primary hover:text-secondary">Home</a>
        </p>
      </div>
    </Route>

    <Footer />
  </div>
</Router>

<!-- <style>
  .everything {
    overscroll-behavior-block: contain;
    overscroll-behavior: contain;
  }
</style> -->
