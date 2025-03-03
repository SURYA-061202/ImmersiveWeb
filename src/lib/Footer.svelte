<script>
    import logo from "./../assets/logo.png";
    import facebook from "./../assets/facebook.png";
    import instagram from "./../assets/instagram.png";
    import linkedin from "./../assets/linkedin.png";
    import LinkButton from "./LinkButton.svelte";
    import { link } from "svelte-navigator";
</script>

<div
    class="mx-8 md:mx-16 flex flex-col text-black border-black border-t-2 md:flex-row justify-between"
>
    <!-- Logo & Address -->
    <div class="flex flex-col p-2 gap-2">
        <div class="flex flex-row gap-2 justify-center pt-4 md:py-4">
            <img src={logo} alt="logo" height="32" width="32" />
            <div class="text-xl barlow my-auto text-left grow">
                INDIAN INFRA
            </div>
        </div>
        <div class="text-lg barlow text-black">
            <strong>Contact</strong> <br />
            <div class="text-md barlow text-black font-normal leading-6">
                Email: business@indianinfra.in <br />
                Mobile: +91 8939103103
            </div>
        </div>
    </div>

    <!-- Socials -->
    <div
        class="flex flex-row md:flex-col justify-between md:justify-around mb-8"
    >
        <div
            class="flex flex-row justify-center md:justify-end p-2 gap-2 items-center"
        >
            <a
                href="https://www.facebook.com/people/Indianinfrain/61550317510716/"
                target="_blank"><img src={facebook} alt="facebook logo" /></a
            >
            <a href="https://instagram.com/indianinfra.in" target="_blank"
                ><img src={instagram} alt="instagram logo" /></a
            >
            <a
                href="https://www.linkedin.com/company/indian-infraa-aec/about/"
                target="_blank"><img src={linkedin} alt="linkedin logo" /></a
            >
        </div>
        <div class="flex flex-row gap-2">
            <a
                href="/contact"
                use:link
                class="text-md sm:text-lg md:text-xl text-primary barlow my-auto font-normal hover:underline"
                >Lets discuss</a
            >
            <LinkButton size={42} />
        </div>
    </div>
</div>
<div
    class="w-full flex flex-row bg-black lg:p-2 text-[#FFB9A3cc] barlow text-center justify-center text-sm md:mt-8 font-normal gap-1 md:px-16"
>
    <div class="grow md:grow-0">© 2023 by IndianInfra</div>
    <div class="hidden">
        | Designed by
        <a href="https://www.linkedin.com/in/aatiq-hussain007/" target="_blank"
            >Aatiq Hussain</a
        >
        & Developed by
        <a href="https://data-overflow.github.io" target="_blank"
            >Data Overflow</a
        >
    </div>
</div>
