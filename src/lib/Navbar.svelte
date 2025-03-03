<script>
  import { onMount } from "svelte";
  import { Link, link } from "svelte-navigator";
  import logo from "../assets/favicon.png";
  import logoQuality from "../assets/logo.png";

  let tabIndex = 1;
  let menuState = false;

  function toggleMenu() {
    document.getElementById("nav-icon").classList.toggle("active");
    document.getElementById("navigation").classList.toggle("hidden");
    // if (!menuState) {
    //   document.getElementById("ii-nav").classList.remove("h-[100vh]");
    // } else {
    //   const nav = document.getElementById("ii-nav");
    //   console.log("give up");
    //   nav.animate([{ height: "10vh" }, { height: "100vh" }]);
    // }
    menuState = !menuState;
  }

  function onResize() {
    menuState = menuState;
  }

  onMount(() => {
    toggleMenu();
    tabIndex = { "/about": 0, "/": 1, "/engineering": 2, "/contact": 3 }[
      window.location.pathname
    ];
    document.getElementById("logo").src = logoQuality;
  });
  let oldHref = window.location.pathname;
  window.onload = () =>
    new MutationObserver((mutations) =>
      mutations.forEach(
        () =>
          oldHref !== window.location.pathname &&
          ((oldHref = window.location.pathname),
          (tabIndex = { "/about": 0, "/": 1, "/engineering": 2, "/contact": 3 }[
            window.location.pathname
          ])) /* Changed ! your code here */
      )
    ).observe(document.querySelector("body"), {
      childList: true,
      subtree: true,
    });
</script>

<svelte:window on:keydown={onResize} />

<nav id="ii-nav" class="barlow bg-black max-w-screen w-full top-0 sticky">
  <div
    class="w-[100%] flex flex-wrap items-center justify-between p-4 z-20 sticky"
  >
    <a
      href="/"
      class="flex items-center"
      use:link
      on:click={() => {
        tabIndex = 1;
      }}
    >
      <img id="logo" src={logo} class="h-8 mr-3" alt="Indian Infra Logo" />
      <span
        class="self-center text-xl whitespace-nowrap dark:text-white font-normal"
        >INDIAN INFRA</span
      >
    </a>
    <div id="menu" class="md:hidden">
      <svg
        id="nav-icon"
        class="ham hamRotate ham4 active"
        viewBox="0 0 100 100"
        width="48"
        on:click={toggleMenu}
        on:keydown={toggleMenu}
        role="button"
        tabindex="0"
      >
        <path
          class="line top"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path class="line middle" d="m 70,50 h -40" />
        <path
          class="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>
    </div>

    {#if toggleMenu}
      <div
        id="navigation"
        class="md:hidden transition ease-in-out"
        data-aos="fade"
        data-aos-offset="-1000"
      >
        <ul
          class="absolute flex flex-col gap-4 justify-center barlow font-normal text-4xl space-y-10 text-center align-middle w-full h-full"
        >
          <li>
            <a
              href="/about"
              class="button {tabIndex == 0 ? 'text-primary' : 'text-white'}"
              on:click={() => {
                tabIndex = 0;
                toggleMenu();
              }}
              use:link>Company</a
            >
          </li>
          <li>
            <a
              href="/"
              class="button {tabIndex == 1 ? 'text-primary' : 'text-white'}"
              on:click={() => {
                tabIndex = 1;
                toggleMenu();
              }}
              use:link>Construction</a
            >
          </li>
          <li>
            <a
              href="/engineering"
              class="button {tabIndex == 2 ? 'text-primary' : 'text-white'}"
              on:click={() => {
                tabIndex = 2;
                toggleMenu();
              }}
              use:link>Engineering</a
            >
          </li>
          <li
            class="text-primary inter text-[24px] border-2 border-primary py-2 px-16 rounded w-fit mx-auto"
          >
            <a
              href="/contact"
              class="text-primary align-baseline"
              on:click={() => {
                tabIndex = 3;
                toggleMenu();
              }}
              use:link>contact</a
            >
          </li>
        </ul>
      </div>
    {/if}

    <div
      class="hidden w-full md:block md:w-auto"
      id="navbar-default"
      data-aos-offset="-10000"
    >
      <ul
        class="font-normal barlow flex items-center p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0"
      >
        <li>
          <a
            href="/about"
            class="block py-2 pl-3 pr-4 md:bg-transparent hover:text-secondary {tabIndex ==
            0
              ? 'text-primary'
              : 'text-white'}"
            on:click={() => {
              tabIndex = 0;
            }}
            aria-current="page"
            use:link>Company</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 md:bg-transparent hover:text-secondary {tabIndex ==
            1
              ? 'text-primary'
              : 'text-white'}"
            aria-current="page"
            on:click={() => {
              tabIndex = 1;
            }}
            use:link>Construction</a
          >
        </li>
        <li>
          <a
            href="/engineering"
            class="block py-2 pl-3 pr-4 md:bg-transparent hover:text-secondary link {tabIndex ==
            2
              ? 'text-primary'
              : 'text-white'}"
            aria-current="page"
            on:click={() => {
              tabIndex = 2;
            }}
            use:link>Engineering</a
          >
        </li>
        <li class="h-full flex justify-center">
          <a
            href="/contact"
            class="m-auto px-8 py-1 border-2 border-primary hover:text-white hover:bg-primary hover:opacity-64 transition-all rounded items-center {tabIndex ==
            3
              ? 'bg-primary/50 text-white'
              : 'text-primary md:bg-transparent'}"
            aria-current="page"
            on:click={() => {
              tabIndex = 3;
            }}
            use:link>contact</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  nav {
    background: rgba(0, 0, 0, 0.85);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.088);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    z-index: 30;
    overscroll-behavior: contain;
  }
  /* #menu {
    display: unset;
    visibility: visible;
  } */
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* position: absolute; */
    display: inline;
  }
  .ham:focus {
    outline: none;
  }
  .hamRotate.active {
    transform: rotate(45deg);
  }
  .ham4 .top {
    stroke-dasharray: 40 121;
  }
  .ham4 .bottom {
    stroke-dasharray: 40 121;
  }
  .ham4.active .top {
    stroke-dashoffset: -68px;
  }
  .ham4.active .bottom {
    stroke-dashoffset: -68px;
  }
  .line {
    fill: none;
    transition:
      stroke-dasharray 200ms,
      stroke-dashoffset 200ms;
    stroke: #ff3c00;
    stroke-width: 5.5;
    stroke-linecap: round;
  }
  #navigation {
    position: absolute;
    background-color: #111;
    width: 100%;
    height: 100vh;
    z-index: -1;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.92);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(18, 18, 18, 0.2);
    animation: fadeIn 300ms;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  #navigation ul {
    list-style-type: none;
    /* font-size: 10vh; */
  }

  a {
    font-weight: 400;
  }

  a:active {
    color: #ea6841;
  }
</style>
