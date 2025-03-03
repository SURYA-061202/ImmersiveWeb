<script>
    //import img1 from "./../assets/service/1.png";
    //import img2 from "./../assets/service/2.png";
    //import img3 from "./../assets/service/3.png";

    let img1 = "https://ik.imagekit.io/dataoverflow/indianinfra/service1.png";
    let img2 = "https://ik.imagekit.io/dataoverflow/indianinfra/service2.png";
    let img3 = "https://ik.imagekit.io/dataoverflow/indianinfra/service3.png";

    let content = [
        `Tech enabled high quality commercial construction. No
        contractor Delay & On-time Project Delivery.`,
        `World class infrastructure at best prices. Realtime updates and status on progress. 3D image planning and design. Best in market materials at affordable range.`,
        `We bring you the most trusted and transparent construction way of your dream home. We have special curated packages for all ranges and for all budgets. Basic to Elite model. Affordable payment model. All in-house verified employees and no third party contractors.`,
    ];

    let openTab = 1;

    function toggleTabs(tabNumber) {
        openTab = tabNumber;
    }
</script>

<div class="p-4 py-8 sm:p-6 md:p-8 lg:p-16">
    <div class="flex flex-col items-center justify-center bg-black rounded-2xl">
        <div
            data-aos="fade"
            class="flex barlow gap-x-4 p-6 text-sm sm:text-lg md:justify-start md:w-full lg:px-16 md:gap-x-16"
        >
            <button
                class="py-2 cursor-pointer md:px-4 {openTab === 1
                    ? 'text-primary'
                    : 'text-[#FFCBBBB8] hover:text-[#FFCBBB]'}"
                on:click={() => toggleTabs(1)}
            >
                Commercial
            </button>
            <button
                class="py-2 cursor-pointer md:px-4 {openTab === 2
                    ? 'text-primary'
                    : 'text-[#FFCBBBB8] hover:text-[#FFCBBB]'}"
                on:click={() => toggleTabs(2)}
            >
                Infrastructure
            </button>
            <button
                class="py-2 cursor-pointer md:px-4 {openTab === 3
                    ? 'text-primary'
                    : 'text-[#FFCBBBB8] hover:text-[#FFCBBB]'}"
                on:click={() => toggleTabs(3)}
            >
                Residential
            </button>
        </div>
        {#if openTab === 1}
            <div
                class="flex flex-col w-full px-6 pb-6 barlow gap-4 md:flex-row md:flex-row-reverse md:p-8 lg:px-16"
            >
                <img
                    src={img1}
                    class="w-full object-cover h-[40%] md:w-[40%]"
                    alt="decoration"
                    width="491"
                    height="378"
                />
                <div class="flex flex-col grow justify-center gap-4">
                    <div class="text-white text-2xl md:text-4xl">
                        Commercial
                    </div>
                    <p
                        class="text-[#FFFFFFAB] w-[70%] md:pb-16 md:text-xl font-normal"
                    >
                        {content[0]}
                    </p>
                </div>
            </div>
        {:else if openTab === 2}
            <div
                class="flex flex-col w-full px-6 pb-6 barlow gap-4 md:flex-row md:flex-row-reverse md:p-8 lg:px-16"
            >
                <img
                    src={img2}
                    class="w-full object-cover h-[40%] md:w-[40%]"
                    alt="decoration"
                    width="491"
                    height="378"
                />
                <div class="flex flex-col grow md:justify-center md:gap-4">
                    <div class="text-white text-2xl md:text-4xl">
                        Infrastructure
                    </div>
                    <p
                        class="text-[#FFFFFFAB] w-[70%] md:pb-16 md:text-xl font-normal"
                    >
                        {content[1]}
                    </p>
                </div>
            </div>
        {:else}
            <div
                class="flex flex-col w-full px-6 pb-6 barlow gap-4 md:flex-row md:flex-row-reverse md:p-8 lg:px-16"
            >
                <img
                    src={img3}
                    class="w-full object-cover h-[40%] md:w-[40%]"
                    alt="decoration"
                    width="491"
                    height="378"
                />
                <div class="flex flex-col grow md:justify-center md:gap-4">
                    <div class="text-white text-2xl md:text-4xl">
                        Residential
                    </div>
                    <p
                        class="text-[#FFFFFFAB] w-[70%] md:pb-16 md:text-xl font-normal"
                    >
                        {content[2]}
                    </p>
                </div>
            </div>
        {/if}
    </div>
</div>
