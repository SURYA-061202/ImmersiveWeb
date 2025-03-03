<script>
    import { slide, fade } from "svelte/transition";
    import { sineIn } from "svelte/easing";

    import img1 from "./../assets/clients/1.png";
    import img2 from "./../assets/clients/2.png";
    import img3 from "./../assets/clients/3.png";

    const gallery_items = [
        {
            url: img1,
            description: "Dog",
        },
        {
            url: img2,
            description: "Building",
        },
        {
            url: img3,
            description: "Staircase",
        },
        // {
        //     url: "https://res.cloudinary.com/beswift/image/upload/v1650391490/photo-1644241687200-eadaf7601290_xcz2kh.jpg",
        //     description: "Staircase",
        // },
    ];
    let currentSlideItem = 0;
    const nextImage = () => {
        currentSlideItem = (currentSlideItem + 1) % gallery_items.length;
    };
    const prevImage = () => {
        if (currentSlideItem != 0) {
            currentSlideItem = (currentSlideItem - 1) % gallery_items.length;
        } else {
            currentSlideItem = gallery_items.length - 1;
        }
    };

    let clear;
    $: {
        clearInterval(clear);
        clear = setInterval(nextImage, 1500);
    }
</script>

<div class="flex justify-center p-4">
    {#each [gallery_items[currentSlideItem]] as item (currentSlideItem)}
        <img
            class="object-cover w-[80%] md:w-[100%]"
            in:fade
            src={item.url}
            alt={item.description}
            width={438}
            height={384}
        />
    {/each}
    <!-- <div class="z-[1000] top-[50%] text-black text-8xl">
        <button class="btn z-[1000]" on:click={() => prevImage()}>.</button>
        <button class="btn" on:click={() => nextImage()}>.</button>
    </div> -->
</div>
