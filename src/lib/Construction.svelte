<script>
    import img1 from "./../assets/construction/1.png";
    import img2 from "./../assets/construction/2.png";
    import img3 from "./../assets/construction/3.png";
    import img4 from "./../assets/construction/4.png";
    import img5 from "./../assets/construction/5.png";
    import img6 from "./../assets/construction/6.png";

    let openTab = 1;

    // let content = [
    //     `Indian Infra, a premier construction company in Chennai, specializes in delivering exceptional Commercial Construction services. From innovative design and engineering to timely project delivery, we create vibrant and functional commercial spaces. Our expertise extends to painting, interior services, and industrial buildings. Experience excellence with us—from concept to reality, where your business vision takes center stage, setting new standards in the world of commercial construction.`,
    //     `Indian Infra, a forefront construction company in Chennai, takes pride in turning dreams into reality with our Residential Construction services. From meticulous design and engineering to seamless construction and renovation, we specialize in creating homes that reflect your unique style. Our commitment to quality extends to every aspect—interior services, painting, and timely project delivery. Experience the joy of living in a space designed just for you, where every detail is meticulously crafted to ensure comfort, aesthetics, and enduring quality. Trust Indian Infra to build your dream home with excellence.`,
    //     `Elevate your surroundings with Indian Infra's Landscape Development services. As a pioneering construction company in Chennai, we specialize in creating outdoor spaces that harmonize with nature and enhance the beauty of your property. Our landscape designs seamlessly blend aesthetics with functionality, incorporating sustainable practices for enduring beauty. From lush greenery to hardscape features, we turn your vision into a captivating reality. Trust Indian Infra to transform your outdoor spaces, creating an environment that reflects your style and connects seamlessly with nature's beauty.`,
    //     `Indian Infra, a leading construction force in Chennai, propels industrial progress with unmatched expertise. Our Industrial Projects division delivers cutting-edge solutions, ensuring safety, durability, and functionality. From groundbreaking designs to seamless execution, we specialize in constructing facilities tailored to the unique needs of diverse industries. Whether manufacturing, logistics, or specialized spaces, Indian Infra stands as a beacon of reliability, crafting industrial structures that fuel efficiency and innovation. Partner with us for forward-thinking solutions that redefine industrial landscapes and stand the test of time.`,
    //     `Indian Infra stands at the forefront of construction excellence, powered by state-of-the-art construction equipment. Our commitment to efficiency and precision is evident in the careful selection and utilization of cutting-edge machinery. From advanced excavators and concrete mixers to high-capacity cranes, we deploy industry-leading equipment for every project. This ensures not only timely completion but also upholds the highest standards of safety and quality. Partner with Indian Infra for construction solutions where innovation and technology converge, laying the foundation for a future of enduring structures.`,
    //     `Step into a world of refined aesthetics and functional brilliance with Indian Infra's Interior Services. As a premier construction company in Chennai, we specialize in transforming spaces into captivating environments. Our skilled designers harmonize form and function, creating interiors that reflect your unique style and enhance the usability of every room. From concept to execution, we prioritize quality materials and innovative designs, ensuring that each detail contributes to a harmonious living or working experience. Trust Indian Infra to redefine your interiors, where every space becomes a testament to comfort, sophistication, and timeless design.`,
    // ];

    let content = [
        `Indian Infra, a premier construction company in Chennai, specializes in delivering exceptional Commercial Construction services. From innovative design and engineering to timely project delivery, we create vibrant and functional commercial spaces. Our expertise extends to painting, interior services, and industrial buildings. Experience excellence with us—from concept to reality, where your business vision takes center stage, setting new standards in the world of commercial construction.`,
        `Indian Infra brings your dream home to life with precision and care. As a leader in Residential Construction, we specialize in meticulous design, seamless construction, and thoughtful renovation services. From interior excellence to quality painting, we ensure every detail reflects your unique style. Our commitment to timely project delivery ensures you step into your new home on schedule. Trust Indian Infra to build not just houses but havens, where comfort, aesthetics, and enduring quality converge to create spaces you'll cherish for a lifetime.`,
        `Experience the beauty of nature seamlessly integrated into your surroundings with Indian Infra's Landscape Development services. As a leader in construction, we specialize in crafting outdoor spaces that harmonize with the environment. Our landscape designs blend aesthetics and functionality, incorporating sustainable practices for enduring allure. From lush greenery to captivating hardscape features, we bring your vision to life, creating outdoor environments that inspire. Trust Indian Infra to elevate your outdoor spaces, where nature and design converge to shape surroundings that resonate with your style and vision.`,
        `Indian Infra leads the way in industrial construction, providing unmatched expertise tailored to diverse industries. Our Industrial Projects division excels in delivering cutting-edge solutions, ensuring safety, durability, and functionality. From innovative designs to seamless execution, we construct facilities that meet the unique needs of manufacturing, logistics, and specialized spaces. Partner with Indian Infra for forward-thinking solutions that redefine industrial landscapes, fuel efficiency, and stand as a testament to our commitment to excellence in every project.`,
        `Indian Infra is your go-to destination for cutting-edge construction equipment services. Whether you're undertaking a major project or need specialized machinery, we offer a comprehensive range of equipment for rent. Our fleet includes advanced excavators, concrete mixers, cranes, and more, ensuring your projects benefit from efficiency and precision. With a commitment to top-tier machinery and impeccable service, Indian Infra provides the tools you need to build success. Partner with us for construction solutions where innovation and technology converge, backed by a fleet of reliable and high-performance equipment.`,
        `Step into a world of refined aesthetics and functional brilliance with Indian Infra's Interior Services. We specialize in transforming spaces into captivating environments. Our skilled designers harmonize form and function, creating interiors that reflect your unique style and enhance the usability of every room. From concept to execution, we prioritize quality materials and innovative designs, ensuring that each detail contributes to a harmonious living or working experience. Trust Indian Infra to redefine your interiors, where every space becomes a testament to comfort, sophistication, and timeless design.`,
    ];

    function toggleTabs(tabNumber) {
        openTab = tabNumber;
    }
</script>

<div class="p-8 md:mb-16" data-aos="fade">
    <h1
        class="text-4xl text-black raleway text-center border-b-4 border-primary md:text-6xl pb-4 lg:mb-8 font-medium"
    >
        Construction <span class="text-primary font-bold">Services</span>
    </h1>
    <div
        class="grid grid-cols-2 items-center barlow pt-8 gap-x-2 gap-y-4 md:gap-x-4 md:grid-cols-4 lg:mb-16"
    >
        <div
            class="flex flex-col text-sm md:text-md border-black md:border-r-4 md:pr-4 h-full justify-center lg:text-xl lg:gap-4"
        >
            <button
                class="py-1 cursor-pointer text-left focus:outline-none focus:border-2 focus:border-primary/0 focus:pl-2 focus:pr-0 {openTab ===
                1
                    ? 'text-primary'
                    : 'text-black hover:text-gray-500'}"
                on:click={() => toggleTabs(1)}
            >
                Commercial Construction
            </button>
            <button
                class="py-1 cursor-pointer text-left focus:outline-none focus:border-2 focus:border-primary/0 focus:pl-2 focus:pr-0 {openTab ===
                2
                    ? 'text-primary'
                    : 'text-black hover:text-gray-500'}"
                on:click={() => toggleTabs(2)}
            >
                Residential Construction
            </button>
            <button
                class="py-1 cursor-pointer text-left focus:outline-none focus:border-2 focus:border-primary/0 focus:pl-2 focus:pr-0 {openTab ===
                3
                    ? 'text-primary'
                    : 'text-black hover:text-gray-500'}"
                on:click={() => toggleTabs(3)}
            >
                Landscape Development
            </button>
            <button
                class="py-1 cursor-pointer text-left focus:outline-none focus:border-2 focus:border-primary/0 focus:pl-2 focus:pr-0 {openTab ===
                4
                    ? 'text-primary'
                    : 'text-black hover:text-gray-500'}"
                on:click={() => toggleTabs(4)}
            >
                Industrial Projects
            </button>
            <button
                class="py-1 cursor-pointer text-left focus:outline-none focus:border-2 focus:border-primary/0 focus:pl-2 focus:pr-0 {openTab ===
                5
                    ? 'text-primary'
                    : 'text-black hover:text-gray-500'}"
                on:click={() => toggleTabs(5)}
            >
                Construction Equipments
            </button>
            <button
                class="py-1 cursor-pointer text-left focus:outline-none focus:border-2 focus:border-primary/0 focus:pl-2 focus:pr-0 {openTab ===
                6
                    ? 'text-primary'
                    : 'text-black hover:text-gray-500'}"
                on:click={() => toggleTabs(6)}
            >
                Interiors
            </button>
        </div>
        {#if openTab === 1}
            <div class="w-fit">
                <img src={img1} alt="decorative" height="481" width="438" />
            </div>
            <div
                class="barlow text-gray-900 col-span-2 text-center text-sm lg:p-8 md:text-left md:text-md xl:text-lg"
            >
                {content[0]}
            </div>
        {:else if openTab === 2}
            <div class="">
                <img src={img2} alt="decorative" height="481" width="438" />
            </div>
            <div
                class="barlow text-gray-900 col-span-2 text-center text-sm lg:p-8 md:text-left md:text-md xl:text-lg"
            >
                {content[1]}
            </div>
        {:else if openTab === 3}
            <div class="">
                <img src={img3} alt="decorative" height="481" width="438" />
            </div>
            <div
                class="barlow text-gray-900 col-span-2 text-center text-sm lg:p-8 md:text-left md:text-md xl:text-lg"
            >
                {content[2]}
            </div>
        {:else if openTab === 4}
            <div class="">
                <img src={img4} alt="decorative" height="481" width="438" />
            </div>
            <div
                class="barlow text-gray-900 col-span-2 text-center text-sm lg:p-8 md:text-left md:text-md xl:text-lg"
            >
                {content[3]}
            </div>
        {:else if openTab === 5}
            <div class="">
                <img src={img5} alt="decorative" height="481" width="438" />
            </div>
            <div
                class="barlow text-gray-900 col-span-2 text-center text-sm lg:p-8 md:text-left md:text-md xl:text-lg"
            >
                {content[4]}
            </div>
        {:else}
            <div class="">
                <img src={img6} alt="decorative" height="481" width="438" />
            </div>
            <div
                class="barlow text-gray-900 col-span-2 text-center text-sm lg:p-8 md:text-left md:text-md xl:text-lg"
            >
                {content[5]}
            </div>
        {/if}
    </div>
</div>
