<script>
  import banner from "./../assets/banner-small.png";
  import facebook from "./../assets/facebook.png";
  import instagram from "./../assets/instagram.png";
  import linkedin from "./../assets/linkedin.png";
  import contact from "./../assets/contact.png";

  let recipient = "business@indianinfra.in";

  let firstName;
  let lastName;
  let email;
  let subject;
  let message;

  //window.open('mailto:test@example.com?subject=subject&body=body');
  function onSubmit() {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      message + `\n\nRegards\n${firstName + " " + lastName}\n${email}`
    )}`;

    //window.location.href = mailtoLink;
    window.open(mailtoLink);
  }
</script>

<div class="p-8 flex flex-col justify-center gap-8 md:gap-16">
  <div class="flex flex-col justify-end md:flex-row md:flex-row-reverse gap-8">
    <div
      class="flex flex-col justify-center raleway text-black font-normal lg:p-32"
    >
      <div class="text-6xl">Our</div>
      <div class="text-primary px-4 text-6xl">Contact</div>
      <div class="barlow text-md px-5 text-black/50">
        Let us craft greatness together
      </div>
    </div>
    <div
      class="flex flex-col bg-[#FEE8D488] rounded-xl lg:mt-16 justify-center"
    >
      <img class="object-cover rounded-t-xl" src={banner} alt="indian infra" />
      <div class="flex flex-col barlow text-black p-4 md:px-8">
        <div class="barlow text-lg font-bold md:text-xl">Contact</div>
        <div class="text-md lg:text-lg inter text-black font-normal leading-6">
          Email: business@indianinfra.in <br />
          Mobile: +91 8939103103
        </div>
      </div>
      <div class="flex flex-row justify-end p-2 gap-2 items-center md:p-8 px-2">
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
    </div>
  </div>
  <div class="flex flex-col text-black gap-4 md:gap-8 md:my-16">
    <div class="barlow font-bold text-5xl">Reach Us</div>
    <div
      class="border-4 border-[#FFCAB9] rounded-xl flex flex-row p-4 md:p-8 md:gap-8 lg:py-16"
    >
      <img
        class="hidden lg:block object-cover w-[30vw] xl:w-fit"
        src={contact}
        alt=""
      />
      <form
        class="flex flex-col justify-center grow gap-8 md:p-8"
        on:submit={onSubmit}
      >
        <!-- form  -->
        <div class="flex flex-col justify-center md:flex-row md:gap-8">
          <!-- form left -->
          <!-- class="bg-[#FFF6F3] appearance-none border-primary border-2 rounded p-2 focus:border-primary" -->
          <div class="flex flex-col lg:min-w-[50%] 2xl:min-w-[30%]">
            <label
              class="mt-4 barlow text-black/80 text-sm font-medium bg-[#FFF7F5] relative top-2 left-4 px-2 w-fit"
              for="firstname"
              >First Name <span class="text-primary"> * </span></label
            >
            <input
              type="text"
              id="firstname"
              name="firstname"
              bind:value={firstName}
              class="inter bg-[#FFF6F3] appearance-none border-2 border-secondary rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#FFFBF888] focus:border-primary focus:shadow-lg"
              required
            />

            <label
              for="lastname"
              class="mt-4 barlow text-black/80 text-sm font-medium bg-[#FFF7F5] relative top-2 left-4 px-2 w-fit"
              >Last Name</label
            >
            <input
              type="text"
              id="lastname"
              name="lastname"
              bind:value={lastName}
              class="inter bg-[#FFF6F3] appearance-none border-2 border-secondary rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#FFFBF888] focus:border-primary focus:shadow-lg"
            />

            <label
              for="email"
              class="mt-4 barlow text-black/80 text-sm font-medium bg-[#FFF7F5] relative top-2 left-4 px-2 w-fit"
              >Email <span class="text-primary"> * </span></label
            >
            <input
              type="email"
              id="email"
              name="email"
              required
              bind:value={email}
              class="inter bg-[#FFF6F3] appearance-none border-2 border-secondary rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#FFFBF888] focus:border-primary focus:shadow-lg"
            />

            <label
              for="subject"
              class="mt-4 barlow text-black/80 text-sm font-medium bg-[#FFF7F5] relative top-2 left-4 px-2 w-fit"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              name="subject"
              bind:value={subject}
              class="inter bg-[#FFF6F3] appearance-none border-2 border-secondary rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#FFFBF888] focus:border-primary focus:shadow-lg"
            />
          </div>
          <!-- form right -->
          <div class="flex flex-col grow">
            <label
              for="message"
              class="mt-4 barlow text-black/80 text-sm font-medium bg-[#FFF7F5] w-fit"
              >How can we help?</label
            >
            <textarea
              id="message"
              name="message"
              required
              bind:value={message}
              placeholder="Leave us a message..."
              class="inter bg-[#FFF6F3] appearance-none border-2 border-secondary rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#FFFBF888] focus:border-primary focus:shadow-lg grow h-[30vh] md:h-fit"
            ></textarea>
          </div>
        </div>
        <!-- button -->
        <input
          type="submit"
          value="SUBMIT"
          class="bg-primary font-semibold text-white p-2 rounded hover:bg-secondary transition-all active:bg-[#DD1A00]"
        />
      </form>
    </div>
  </div>
</div>
