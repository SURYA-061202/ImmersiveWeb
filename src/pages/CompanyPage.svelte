<script>
    import aboutMobile from "./../assets/about-us.svg";
    import aboutPc from "./../assets/about-us-desktop.svg";
    import decoration from "./../assets/decoration.svg";

    import img1 from "./../assets/about/1.png";
    import img2 from "./../assets/about/2.png";
    import img3 from "./../assets/about/3.png";
    import img4 from "./../assets/images/4.jpeg";

    let content = [
        [
            "Relationships",
            `Reputed people across the field trusted us and we have grown along with them empowering the technical details in the vast construction field.
Indian Infra bagged many contracts from well known clients like Ashok Leyland and still growing extraordinarily.`,
        ],
        [
            "Experience",
            `With several years of experience in the construction field , Indian Infra blends the latest technology and traditional values in right proportion which provides you the best deal.`,
        ],
        [
            "Accountability",
            `Right from the initial trial period, our technical executives will take care the outmost care in curating your dream project. We are responsible and accountable for our clients from Design phase to handover phase. Timely updates are provided sincerely.`,
        ],
    ];
</script>

<div class="flex flex-col h-fit lg:mb-[-6rem]">
    <div class="p-4 xs:p-8 lg:px-0 flex flex-col lg:flex-row gap-8">
        <img
            class="block lg:hidden xs:h-[25vh] md:h-[40vh]"
            src={aboutMobile}
            alt="About Us"
        />
        <img class="hidden lg:block" src={aboutPc} alt="About Us" />
        <div class="flex flex-col justify-center px-2 lg:pr-16 md:px-8 lg:pl-2">
            <div class="raleway font-bold text-black text-xl lg:text-2xl">
                We Build <span class="text-primary">the Future</span>
            </div>
            <div
                data-aos="fade"
                data-aos-delay="300"
                class="barlow font-semibold text-black/80 text-sm md:text-md"
            >
                Since 2017, Indian Infra has offered diversified construction
                services on a larger scale and has been cultivating connections
                with an expanding clientele. <br /><br /> Our expertise covers a
                wide range of fields, including residential, infrastructure,
                office and commercial, fit out works, specialist sustainable
                builds, and retail and leisure schemes, as well as the
                fulfilment of turnkey project requirements. <br /> We are committed
                to providing an ever-improving level of service, we have an excellent
                track record of project delivery, and our open approach to initiatives
                of any size allows us to be flexible.
            </div>
        </div>
    </div>
    <div
        class="p-8 md:px-16 flex flex-col md:flex-row gap-8 items-start w-full"
    >
        <img class="absolute right-16 z-[-10]" src={decoration} alt="decor" />

        <div
            class="flex flex-col justify-start raleway text-black md:w-1/3 h-full bg-[#FFF6F3]"
            data-aos="fade"
            data-aos-delay="75"
        >
            <img
                class="pb-4 h-[50vh] md:h-fit object-cover"
                src="https://ik.imagekit.io/dataoverflow/indianinfra/2.jpg"
                alt="decoration"
            />
            <div class="font-bold text-xl lg:text-2xl">{content[1][0]}</div>
            <div class="barlow font-medium text-black/80">{content[1][1]}</div>
        </div>

        <div
            data-aos="fade"
            class="flex flex-col justify-start raleway text-black md:w-1/3 h-full bg-[#FFF6F3] lg:mt-48"
        >
            <img
                class="pb-4 h-[50vh] md:h-fit object-cover"
                src="https://ik.imagekit.io/dataoverflow/indianinfra/1.jpg"
                alt="decoration"
            />
            <div class="font-bold text-xl lg:text-2xl">{content[0][0]}</div>
            <div class="barlow font-medium text-black/80">{content[0][1]}</div>
        </div>

        <div
            data-aos="fade"
            class="flex flex-col justify-start raleway text-black md:w-1/3 h-full bg-[#FFF6F3] lg:mt-96"
        >
            <img
                class="pb-4 h-[50vh] md:h-fit object-cover"
                src="https://ik.imagekit.io/dataoverflow/indianinfra/3.jpg"
                alt="decoration"
            />
            <div class="font-bold text-xl lg:text-2xl">{content[2][0]}</div>
            <div class="barlow font-medium text-black/80">{content[2][1]}</div>
        </div>
    </div>
    <div
        class="p-8 md:px-16 flex flex-row items-end gap-8 lg:relative lg:top-[-8rem]"
    >
        <img
            class="w-1/3 object-cover hidden md:block"
            src={img4}
            alt="decor"
            data-aos="fade-right"
        />
        <div class="flex flex-col">
            <div class="mukta text-black text-6xl md:text-7xl lg:text-8xl">
                Our <br /><span class="text-primary" data-aos="fade"
                    >MISSION</span
                >
            </div>
            <div
                class="barlow font-semibold text-black text-xl"
                data-aos="fade"
            >
                We Aim to Build a Better World
            </div>
        </div>
    </div>
</div>
