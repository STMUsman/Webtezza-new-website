// temporory


<header class="sm:pt-3.5 sm:px-3.5 lg:flex lg:justify-center lg:pt-5 xl:px-0 [@media(min-width:2048px)]:pt-10 fixed z-50">
<nav id="navbar"
  class=" nav-class sm:border sm:rounded-full sm:px-6 sm:items-center sm:content-center lg:border lg:rounded-full lg:px-5 lg:items-center lg:content-center xl:px-10 [@media(min-width:2048px)]:w-[2000px] [@media(min-width:2048px)]:h-28">
  <div
    class="container fixed bg-fixed lg:static  gap-0 flex items-center justify-between p-5 lg:p-0 bg-transparent lg:gap-5 xl:gap-40 [@media(min-width:2048px)]:gap-14 [@media(min-width:2048px)]:p-0">
    <div id="nav-menu"
      class="bg-black absolute top-0 left-[-100%] min-h-[100vh] w-full sm:w-0 flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto ">
      <ul class="flex flex-col items-center gap-6 lg:gap-4 lg:flex-row lg:bg-transparent xl:gap-6 ">
        <li>
          <a href="index.html"
            class="nav-link [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold ">Home</a>
        </li>
        <li>
          <a href="ourstory.html"
            class="nav-link [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold">OurStory</a>
        </li>
        <li>
          <a href="service.html"
            class="nav-link [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold">Service</a>
        </li>
        <li>
          <a href="contact.html"
            class="nav-link [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold">Contact
            Us</a>
        </li>
        <li>
          <button>
            <a href="signup.html" class="nav-link lg:hidden">Sign up</a>
          </button>
        </li>
        <li>
          <button>
            <a href="login.html" class="nav-link lg:hidden">Login</a>
          </button>
        </li>
      </ul>
    </div>

    <div class="lg:pr-36 xl:pr-[155px] [@media(min-width:2048px)]:pr-[180px]">
      <img src="Assets/img/logo (2).png" alt=""
        class="w-40 h-auto md:w-56 md:h-auto lg:w-52 lg:h-auto xl:w-56 [@media(min-width:2048px)]:w-[360px]" />
    </div>
    <div id="nav-menu"
      class="absolute top-0 left-[-100%] min-h-[100vh] w-full flex items-center justify-center duration-300 lg:static lg:min-h-fit lg:w-auto ">
      <ul class="flex flex-col items-center gap-5 lg:flex-row xl:gap-6">

        <li class="flex justify-center items-center">
          <button
            class="nav-link w-28 xl:w-32 h-6 rounded-full border bg-transparent [@media(min-width:2048px)]:w-52 [@media(min-width:2048px)]:h-12">
            <a href="login.html"
              class="[@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold">Login</a>
          </button>
        </li>
        <li class="flex justify-center items-center">
          <button class="nav-link">
            <a href="#profile" class=""><img src="Assets/img/icons8-male-user-48.png" alt=""
                class="lg:w-10 h-auto xl:w-12 [@media(min-width:2048px)]:w-20"> </a>
          </button>
        </li>
      </ul>
    </div>
    <div class="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden ">
      <i class="ri-menu-line" id="hamburger"></i>
    </div>
  </div>
</nav>
</header>
























<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

  <link href="./output.css" rel="stylesheet" />
  <script>
    tailwind.config = {
      theme: {
        extend: {

          animation: {
            'spin-slow': 'spinCircle 40s linear infinite',
            'image-spin': 'imageSpin 40s linear infinite',
          },
          keyframes: {
            spinCircle: {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
            imageSpin: {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(-360deg)' },
            },
          },
        },
      },
      plugins: [],
    };
  </script>





</head>

<body class="bg-black w-full h-full relative">
  <div class="absolute">
    <img src="Assets/img/Ellipse 4.png" alt=""
      class="mt-16 sm:mt-0 md:w-3/4 md:h-auto lg:mt-0 lg:w-4/5 lg:h-4/5 [@media(min-width:2048px)]:w-[100%] [@media(min-width:2048px)]:h-auto" />
  </div>
  <div class="absolute mt-32 md:mt-48 lg:mt-48 xl:mt-80">
    <img src="Assets/img/Group 3596.png" alt=""
      class="w-40 h-auto lg:w-60 xl:w-60 [@media(min-width:2048px)]:w-[550px]" />
  </div>

  <div class="absolute pl-3 md:pl-24 lg:pl-44 xl:pl-56">
    <img src="Assets/img/Graphic (1).png" alt=""
      class="w-16 h-auto mt-80 pt-28 md:w-28 md:mt-72 md:pt-52 lg:w-32 lg:mt-44 lg:pt-96 xl:mt-72 xl:w-36 [@media(min-width:2048px)]:w-80 [@media(min-width:2048px)]:mt-[900px] [@media(min-width:2048px)]:ml-72" />
  </div>

  <div class="absolute mt-72 flex justify-end w-full pr-5 md:pr-12 md:mt-72 lg:pr-32 [@media(min-width:2048px)]:pr-64">
    <img src="Assets/img/Graphic.png" alt=""
      class="w-3.5 h-auto md:w-6 lg:w-7 xl:w-8 [@media(min-width:2048px)]:w-16 [@media(min-width:2048px)]:mt-80" />
  </div>

  <header class="sm:pt-3.5 sm:px-3.5 lg:flex lg:justify-center lg:pt-5 xl:px-0 [@media(min-width:2048px)]:pt-10 ">
    <nav id="navbar"
      class=" nav-class sm:border sm:rounded-full sm:px-6 sm:items-center sm:content-center lg:border lg:rounded-full lg:px-5 lg:items-center lg:content-center xl:px-10 [@media(min-width:2048px)]:w-[2000px] [@media(min-width:2048px)]:h-28">
      <div
        class="container  gap-0 flex items-center justify-between p-5 lg:p-0 bg-transparent lg:gap-5 xl:gap-40 [@media(min-width:2048px)]:gap-14 [@media(min-width:2048px)]:p-0">
        <div id="nav-menu"
          class="bg-black absolute top-0 left-[-100%] min-h-[100vh] w-full sm:w-0 flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto ">
          <ul class="flex flex-col items-center gap-6 lg:gap-4 lg:flex-row lg:bg-transparent xl:gap-6 ">
            <li>
              <a href="index.html"
                class="nav-link [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold ">Home</a>
            </li>
            <li>
              <a href="ourstory.html"
                class="nav-link [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold">OurStory</a>
            </li>
            <li>
              <a href="service.html"
                class="nav-link [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold">Service</a>
            </li>
            <li>
              <a href="contact.html"
                class="nav-link [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold">Contact
                Us</a>
            </li>
            <li>
              <button>
                <a href="signup.html" class="nav-link lg:hidden">Sign up</a>
              </button>
            </li>
            <li>
              <button>
                <a href="login.html" class="nav-link lg:hidden">Login</a>
              </button>
            </li>
          </ul>
        </div>

        <div class="lg:pr-36 xl:pr-[155px] [@media(min-width:2048px)]:pr-[180px]">
          <img src="Assets/img/logo (2).png" alt=""
            class="w-40 h-auto md:w-56 md:h-auto lg:w-52 lg:h-auto xl:w-56 [@media(min-width:2048px)]:w-[360px]" />
        </div>
        <div id="nav-menu"
          class="absolute top-0 left-[-100%] min-h-[100vh] w-full flex items-center justify-center duration-300 lg:static lg:min-h-fit lg:w-auto ">
          <ul class="flex flex-col items-center gap-5 lg:flex-row xl:gap-6">

            <li class="flex justify-center items-center">
              <button
                class="nav-link w-28 xl:w-32 h-6 rounded-full border bg-transparent [@media(min-width:2048px)]:w-52 [@media(min-width:2048px)]:h-12">
                <a href="login.html"
                  class="[@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold">Login</a>
              </button>
            </li>
            <li class="flex justify-center items-center">
              <button class="nav-link">
                <a href="#profile" class=""><img src="Assets/img/icons8-male-user-48.png" alt=""
                    class="lg:w-10 h-auto xl:w-12 [@media(min-width:2048px)]:w-20"> </a>
              </button>
            </li>
          </ul>
        </div>
        <div class="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden ">
          <i class="ri-menu-line" id="hamburger"></i>
        </div>
      </div>
    </nav>
  </header>

  <!-- Hero -->

  <section>
    <div class="pt-40 flex flex-col md:pt-32 lg:pt-24 xl:pt-16 [@media(min-width:2048px)]:pt-64">
      <div class="relative flex justify-center z-[-1]">
        <img src="Assets/img/logo (6).png" alt="" class="absolute w-60 h-auto md:w-[550px] lg:w-[750px] xl:w-[1200px]">
        <div>
          <div class="flex justify-center z-[-1]">
            <img src="Assets/img/Group 3595.png" alt=""
              class="w-64 h-auto md:w-5/12 lg:w-2/5 xl:w-[45%] z-10 [@media(min-width:2048px)]:w-[60%]" />
          </div>
          <div class="justify-center flex z-50">
            <img src="Assets/img/image 3.png" alt=""
              class="w-11/12 h-auto px-2 -mt-2 md:w-10/12 lg:pt-0 lg:w-10/12 xl:pt-0 xl:-mt-10 [@media(min-width:2048px)]:w-[1800px] z-50" />
          </div>
        </div>
      </div>


      <div class="pt-3 flex justify-center lg:pt-6 [@media(min-width:2048px)]:pt-10">
        <button
          class="w-28 h-8 rounded-full border-2 border-[#1E1AB2] font-medium text-xs md:text-sm  md:w-36 md:h-10 lg:w-52 lg:h-14 lg:text-lg xl:text-lg bg-transparent xl:w-52 xl:h-14 [@media(min-width:2048px)]:w-96 [@media(min-width:2048px)]:h-24 [@media(min-width:2048px)]:text-4xl">
          Get Started
        </button>
      </div>

      <div class="relative flex justify-end z-[-10]">
        <div class="absolute flex justify-end lg:-mt-4">
          <img src="Assets/img/Group 1000001781.png" alt=""
            class="-mt-36 w-56 md:-mt-80 md:w-2/3 lg:w-2/3 lg:-mt-96 xl:w-3/4 [@media(min-width:2048px)]:w-[1800px] [@media(min-width:2048px)]:-mt-[1300px]" />
        </div>

        <div class="absolute">
          <img src="Assets/img/Group 3594.png" alt=""
            class="-mt-2 w-16 md:w-36 lg:w-52 xl:w-72 xl:mt-16 [@media(min-width:2048px)]:w-[430px]" />
        </div>
      </div>



      <!-- image rotate -->

      <div class="flex justify-center mt-52 md:mt-56 lg:mt-48 xl:mt-44 ">

        <h1 class=" mb-8"></h1>
        <div
          class="relative w-44 h-44 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-5/12 xl:h-screen mx-auto flex items-center justify-center">
          <!-- Central Circle -->
          <div
            class="w-14 h-14 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-52 xl:h-52 [@media(min-width:2048px)]:w-80 rounded-full absolute">
            <img src="Assets/img/Group 3597.png" alt="">
          </div>

          <!-- Rotating Outer Circles -->
          <div class="absolute w-full h-full animate-spin-slow">
            <!-- 12 o'clock -->
            <div
              class="absolute -mt-1 md:mt-1 xl:top-10 [@media(min-width:2048px)]:top-40 left-1/2 transform -translate-x-1/2">
              <div
                class="w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 [@media(min-width:2048px)]:w-48  rounded-full">
                <img src="Assets/img/Group.png" alt="" class="animate-image-spin">
              </div>
            </div>
            <!-- 2 o'clock -->
            <div class="absolute top-[30%] left-[88%] transform -translate-x-1/2 -translate-y-1/2">
              <div
                class="w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 [@media(min-width:2048px)]:w-48 rounded-full">
                <img src="Assets/img/Group.png" alt="" class="animate-image-spin">
              </div>
            </div>
            <!-- 4 o'clock -->
            <div class="absolute top-[60%] left-[90%] [@media(min-width:2048px)]:left-[93%] transform -translate-x-1/2">
              <div
                class="w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 [@media(min-width:2048px)]:w-48 rounded-full">
                <img src="Assets/img/Group.png" alt="" class="animate-image-spin">
              </div>
            </div>
            <!-- 6 o'clock -->
            <div
              class="absolute mt-5 md:-mb-3 xl:bottom-8 bottom-0 [@media(min-width:2048px)]:bottom-40 left-1/2 transform -translate-x-1/2">
              <div
                class="w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 [@media(min-width:2048px)]:w-48 rounded-full">
                <img src="Assets/img/Group.png" alt="" class="animate-image-spin">
              </div>
            </div>
            <!-- 8 o'clock -->
            <div
              class="absolute top-[52%] left-[10%] [@media(min-width:2048px)]:left-[7%] transform -translate-x-1/2 translate-y-1/2">
              <div
                class="w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 [@media(min-width:2048px)]:w-48 rounded-full">
                <img src="Assets/img/Group.png" alt="" class="animate-image-spin">
              </div>
            </div>
            <!-- 10 o'clock -->
            <div class="absolute top-[30%] left-[11%] transform -translate-x-1/2 -translate-y-1/2">
              <div
                class="w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 [@media(min-width:2048px)]:w-48 rounded-full">
                <img src="Assets/img/Group.png" alt="" class="animate-image-spin">
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    </div>
  </section>


  <section>
    <div class="relative flex justify-center mt-14 lg:mt-10 xl:mt-16">
      <img src="Assets/img/Ellipse 9.png" alt=""
        class="w-full  h-auto md:-mt-36  lg:-mt-52 xl:-mt-[380px]  absolute z-[-1]">
      <div
        class="flex justify-between py-5 md:py-10  lg:py-8 gap-1.5 w-full h-full  items-center md:gap-4 lg:gap-5 xl:gap-2">
        <div><img src="Assets/img/Group22.png" alt=""
            class="w-80 h-52 md:h-auto rotate-12 -ml-6 lg:h-auto lg:w-96 xl:w-[540px] xl:h-[530px] [@media(min-width:2048px)]:w-[1400px] [@media(min-width:2048px)]:h-[1400px]">
        </div>
        <div class="pl-2"><button
            class="w-32  h-8 border-2  border-[#1E1AB2] rounded-full text-xs md:text-sm font-normal md:font-medium md:w-52 md:h-12 lg lg:w-56 lg:h-12 lg:font-medium  lg:text-lg xl:w-72 xl:h-16 [@media(min-width:2048px)]:w-[480px] [@media(min-width:2048px)]:h-28 [@media(min-width:2048px)]:text-3xl">Don’t
            Click This</button></div>
        <div><img src="Assets/img/Group (1)11.png" alt=""
            class="w-80 h-52 md:h-auto lg:h-auto lg:w-96 xl:w-[540px] xl:h-[530px] [@media(min-width:2048px)]:w-[1400px] [@media(min-width:2048px)]:h-[1400px]">
        </div>
      </div>
    </div>

  </section>


  <section class="relative mt-20  lg:mt-20 xl:mt-36">
    <div class="absolute mt-48 md:mt-56 lg:mt-72 xl:mt-80">
      <img src="Assets/img/Group00.png" alt="" class="w-screen h-96 md:h-[700px] lg:h-[800px] xl:h-[1300px]">

    </div>
    <div class="relative">
      <div class="pb-2 xl:pb-3">

        <div class="mt-2 flex justify-center  md:mt-4 xl:mt-0 ">
          <h1
            class=" font-medium text-sm flex justify-center items-center z-10 lg:text-xl   [@media(min-width:2048px)]:text-4xl">
            Service</h1>
        </div>
        <div class="relative flex justify-center items-center md:mt-6  ">
          <img src="Assets/img/logo (3).png" alt=""
            class="bg-transparent absolute  h-60 z-[-1] w-11/12 md:h-[450px] lg:h-[500px] xl:h-[660px]">
          <div>
            <div
              class="[@media(min-width:2048px)]:mt-24 px-5 mt-6 mb-3.5 gap-6 md:px-7 md:mt-7 md:mb-5 md:gap-10 [@media(min-width:2048px)]:gap-16 xl:mt-10 xl:gap-12 flex flex-col text-center  items-center ">
              <div class="flex flex-row gap-3 md:gap-9 lg:gap-12 xl:gap-28 [@media(min-width:2048px)]:gap-36">
                <div><img src="Assets/img/Group 3641.png" alt=""
                    class="w-10 h-auto md:w-20 lg:w-24 xl:w-28 [@media(min-width:2048px)]:w-56">
                  <div
                    class=" text-[8px] font-medium lg:text-xs xl:text-sm xl:mt-2 [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:mt-5">
                    Service</div>
                </div>
                <div><img src="Assets/img/Group 3641.png" alt=""
                    class="w-10 h-auto md:w-20 lg:w-24 xl:w-28 [@media(min-width:2048px)]:w-56">
                  <div
                    class=" text-[8px] font-medium lg:text-xs xl:text-sm xl:mt-2 [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:mt-5">
                    Service</div>
                </div>
                <div><img src="Assets/img/Group 3641.png" alt=""
                    class="w-10 h-auto md:w-20 lg:w-24 xl:w-28 [@media(min-width:2048px)]:w-56">
                  <div
                    class=" text-[8px] font-medium lg:text-xs xl:text-sm xl:mt-2 [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:mt-5">
                    Service</div>
                </div>
                <div><img src="Assets/img/Group 3641.png" alt=""
                    class="w-10 h-auto md:w-20 lg:w-24 xl:w-28 [@media(min-width:2048px)]:w-56">
                  <div
                    class=" text-[8px] font-medium lg:text-xs xl:text-sm xl:mt-2 [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:mt-5">
                    Service</div>
                </div>
                <div><img src="Assets/img/Group 3641.png" alt=""
                    class="w-10 h-auto md:w-20 lg:w-24 xl:w-28 [@media(min-width:2048px)]:w-56">
                  <div
                    class=" text-[8px] font-medium lg:text-xs xl:text-sm xl:mt-2 [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:mt-5">
                    Service</div>
                </div>
              </div>
              <div class="flex flex-row gap-3 md:gap-9 lg:gap-12 xl:gap-28 [@media(min-width:2048px)]:gap-36">
                <div><img src="Assets/img/Group 3641.png" alt=""
                    class="w-10 h-auto md:w-20 lg:w-24 xl:w-28 [@media(min-width:2048px)]:w-56">
                  <div
                    class=" text-[8px] font-medium lg:text-xs xl:text-sm xl:mt-2 [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:mt-5">
                    Service</div>
                </div>
                <div><img src="Assets/img/Group 3641.png" alt=""
                    class="w-10 h-auto md:w-20 lg:w-24 xl:w-28 [@media(min-width:2048px)]:w-56">
                  <div
                    class=" text-[8px] font-medium lg:text-xs xl:text-sm xl:mt-2 [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:mt-5">
                    Service</div>
                </div>
                <div><img src="Assets/img/Group 3641.png" alt=""
                    class="w-10 h-auto md:w-20 lg:w-24 xl:w-28 [@media(min-width:2048px)]:w-56">
                  <div
                    class=" text-[8px] font-medium lg:text-xs xl:text-sm xl:mt-2 [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:mt-5">
                    Service</div>
                </div>
                <div><img src="Assets/img/Group 3641.png" alt=""
                    class="w-10 h-auto md:w-20 lg:w-24 xl:w-28 [@media(min-width:2048px)]:w-56">
                  <div
                    class=" text-[8px] font-medium lg:text-xs xl:text-sm xl:mt-2 [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:mt-5">
                    Service</div>
                </div>
                <div><img src="Assets/img/Group 3641.png" alt=""
                    class="w-10 h-auto md:w-20 lg:w-24 xl:w-28 [@media(min-width:2048px)]:w-56">
                  <div
                    class=" text-[8px] font-medium lg:text-xs xl:text-sm xl:mt-2 [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:mt-5">
                    Service</div>
                </div>
              </div>
            </div>
            <div class="flex justify-center"><img src="Assets/img/Vector 1.png" alt=""
                class="w-3/5 h-auto md:mt-3 xl:mt-3.5 xl:w-6/12 [@media(min-width:2048px)]:mt-12 [@media(min-width:2048px)]:w-8/12">
            </div>
            <div class="flex justify-center mt-2 md:mt-7 xl:mt-10 [@media(min-width:2048px)]:mt-16">
              <div
                class="flex flex-row justify-between bg-[#FFFFFF] bg-opacity-5  w-10/12 h-auto gap-2 md:gap-7 py-1.5 md:py-3 rounded-2xl lg:px-5 lg:py-4 xl:gap-12 xl:w-full xl:px-8 xl:py-7 [@media(min-width:2048px)]:py-10 [@media(min-width:2048px)]:px-20">
                <img src="Assets/img/Frame 6 (1).png" alt=""
                  class="w-12 h-auto md:w-28 lg:w-32 xl:w-44 [@media(min-width:2048px)]:w-80">
                <img src="Assets/img/Frame 4 (1).png" alt=""
                  class="w-12 h-auto md:w-28 lg:w-32 xl:w-44 [@media(min-width:2048px)]:w-80">
                <img src="Assets/img/Frame 5 (1).png" alt=""
                  class="w-12 h-auto md:w-28 lg:w-32 xl:w-44 [@media(min-width:2048px)]:w-80">
                <img src="Assets/img/Frame 3 (1).png" alt=""
                  class="w-12 h-auto md:w-28 lg:w-32 xl:w-44 [@media(min-width:2048px)]:w-80">
                <img src="Assets/img/Frame 2 (1).png" alt=""
                  class="w-12 h-auto md:w-28 lg:w-32 xl:w-44 [@media(min-width:2048px)]:w-80">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 md:mt-36 lg:mt-24 xl:mt-32 [@media(min-width:2048px)]:mt-80">
        <div class="flex justify-center ">
          <h1
            class="font-Poppins font-semibold text-base md:text-lg lg:text-3xl xl:text-3xl z-10 [@media(min-width:2048px)]:text-5xl">
            Our signature</h1>
        </div>
        <div class="flex justify-center mt-2.5 md:mt-5 [@media(min-width:2048px)]:mt-8">
          <p
            class=" font-medium text-[10px] font-Poppins w-3/4 h-auto text-center md:text-sm lg:text-lg lg:w-2/3 xl:w-3/5 xl:text-lg z-10 [@media(min-width:2048px)]:text-3xl">
            At Webtezza, we offer tailored IT solutions, including software development, mobile app design, cloud
            integration, and cybersecurity. Our expert team is dedicated to helping businesses enhance their digital
            presence, streamline operations, and stay competitive with the latest technology.</p>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="mt-6 w-3/4 xl:w-2/3 md:mt-14 lg:mt-16 xl:mt-20 [@media(min-width:2048px)]:mt-28">
          <div class="flex justify-center px-6 lg:px-10 xl:px-12"><img src="Assets/img/Group 1000001788.png" alt=""
              class="w-full h-auto">
          </div>
          <div class="-mt-5 md:-mt-10 lg:-mt-12 xl:-mt-14 [@media(min-width:2048px)]:-mt-28">
            <ul
              class="flex justify-around md:justify-between lg:justify-between [@media(min-width:2048px)]:justify-between">
              <li><img src="Assets/img/Group 1000001789.png" alt=""
                  class="w-8 md:w-[70px] lg:w-24 xl:w-32 [@media(min-width:2048px)]:w-52 h-auto">

              </li>

              <li class="flex justify-center items-center"><img src="Assets/img/Vector (1).png" alt=""
                  class="w-1.5 md:w-3 lg:w-4 xl:w-6 h-auto"></li>

              <li class="mr-5 md:mr-0"><img src="Assets/img/Group 1000001790.png" alt=""
                  class="w-8 md:w-[70px] lg:w-24 xl:w-32 [@media(min-width:2048px)]:w-52 h-auto">

              </li>

              <li class="flex justify-center items-center"><img src="Assets/img/Vector (1).png" alt=""
                  class="w-1.5 md:w-3 lg:w-4 xl:w-6 h-auto"></li>

              <li><img src="Assets/img/Group 1000001791.png" alt=""
                  class="w-8 md:w-[70px] lg:w-24 xl:w-32 [@media(min-width:2048px)]:w-52 h-auto">

              </li>

              <li class="flex justify-center items-center"><img src="Assets/img/Vector (1).png" alt=""
                  class="w-1.5 md:w-3 lg:w-4 xl:w-6 h-auto"></li>

              <li><img src="Assets/img/Group 1000001792.png" alt=""
                  class="w-8 md:w-[70px] lg:w-24 xl:w-32 [@media(min-width:2048px)]:w-52 h-auto">

              </li>
            </ul>
          </div>

        </div>
      </div>
      <div class="flex justify-center m-5 mt-16 md:mt-72 lg:mt-72 xl:mt-[370px] [@media(min-width:2048px)]:mt-[550px]">
        <div
          class="w-3/4 h-auto border-2 xl:border-4 rounded-3xl xl:rounded-[40px] px-3 py-2 [@media(min-width:2048px)]:p-20 md:px-5 md:py-4 lg:px-9 lg:py-6 xl:px-12 xl:py-7 border-[#1E1AB2]  border-opacity-20">
          <h1
            class="text-[8px] md:text-xs lg:text-sm xl:text-xl font-medium justify-center flex [@media(min-width:2048px)]:text-3xl">
            Colobrative Brand
          </h1>
          <ul class="flex justify-between mt-2 md:mt-8 lg:mt-5 xl:mt-7 [@media(min-width:2048px)]:mt-16">
            <li><img src="Assets/img/Background.png" alt=""
                class="w-5 md:w-10 lg:w-14 xl:w-20 h-auto [@media(min-width:2048px)]:w-36"></li>
            <li><img src="Assets/img/Background.png" alt=""
                class="w-5 md:w-10 lg:w-14 xl:w-20 h-auto [@media(min-width:2048px)]:w-36"></li>
            <li><img src="Assets/img/Background.png" alt=""
                class="w-5 md:w-10 lg:w-14 xl:w-20 h-auto [@media(min-width:2048px)]:w-36"></li>
            <li><img src="Assets/img/Background.png" alt=""
                class="w-5 md:w-10 lg:w-14 xl:w-20 h-auto [@media(min-width:2048px)]:w-36"></li>
            <li><img src="Assets/img/Background.png" alt=""
                class="w-5 md:w-10 lg:w-14 xl:w-20 h-auto [@media(min-width:2048px)]:w-36"></li>
            <li><img src="Assets/img/Background.png" alt=""
                class="w-5 md:w-10 lg:w-14 xl:w-20 h-auto [@media(min-width:2048px)]:w-36"></li>
            <li><img src="Assets/img/Background.png" alt=""
                class="w-5 md:w-10 lg:w-14 xl:w-20 h-auto [@media(min-width:2048px)]:w-36"></li>
          </ul>
        </div>
      </div>
      <div class="flex md:mt-28 lg:mt-32">
        <img src="Assets/img/Group 1000001781.png" alt=""
          class="absolute w-2/4 h-auto rotate-180 -mt-40 md:-mt-[400px] lg:-mt-[500px]  xl:-mt-[650px]">
      </div>
      <div class="relative flex justify-end ">
        <img src="Assets/img/Ellipse 12.png" alt="" class="absolute w-[90%] h-auto">
      </div>
      <div>


        <div class="overflow-hidden mt-16 md:mt-44 pt-2 md:pt-7  xl:pt-20 [@media(min-width:2048px)]:mt-[500px]">
          <div class="flex w-full h-full mt-4 -rotate-[7deg]">
            <ul class="flex flex-col gap-2.5 lg:gap-4 xl:gap-5 [@media(min-width:2048px)]:gap-12">
              <li>
                <ul class="flex gap-2 lg:gap-4 xl:gap-8 [@media(min-width:2048px)]:gap-7 ">
                  <li><img src="Assets/img/Screenshot 2024-11-22 152347.png" alt=""
                      class="max-w-full max-h-full h-auto object-cover [@media(min-width:2048px)]:h-[450px] [@media(min-width:2048px)]:w-auto">
                  </li>
                  <li><img src="Assets/img/Twitter post - 3.png" alt=""
                      class="max-w-full max-h-full h-auto object-cover [@media(min-width:2048px)]:h-[450px] [@media(min-width:2048px)]:w-auto">
                  </li>
                  <li><img src="Assets/img/Twitter post - 41.png" alt=""
                      class="max-w-full max-h-full h-auto object-cover [@media(min-width:2048px)]:h-[450px] [@media(min-width:2048px)]:w-auto">
                  </li>
                  <li><img src="Assets/img/Twitter post - 5.png" alt=""
                      class="max-w-full max-h-full h-auto object-cover [@media(min-width:2048px)]:h-[440px] [@media(min-width:2048px)]:w-auto">
                  </li>
                  <li><img src="Assets/img/Screenshot 2024-11-22 151633.png" alt=""
                      class="max-w-full max-h-full h-auto object-cover  [@media(min-width:2048px)]:h-[435px] [@media(min-width:2048px)]:w-auto">
                  </li>
                </ul>
              </li>
              <li>
                <ul class="flex gap-2 lg:gap-4 xl:gap-5 [@media(min-width:2048px)]:gap-8">
                  <li><img src="Assets/img/Screenshot 2024-11-22 152510.png " alt=""
                      class="max-w-full max-h-full h-auto object-cover [@media(min-width:2048px)]:h-[450px] [@media(min-width:2048px)]:w-auto">
                  </li>
                  <li><img src="Assets/img/Twitter post - 12.png" alt=""
                      class="max-w-full max-h-full h-auto xl:h-80 object-cover [@media(min-width:2048px)]:h-[450px] [@media(min-width:2048px)]:w-auto">
                  </li>
                  <li><img src="Assets/img/Screenshot 2024-11-22 145849.png" alt=""
                      class="max-w-full max-h-full h-auto object-cover [@media(min-width:2048px)]:h-[410px] [@media(min-width:2048px)]:w-auto [@media(min-width:2048px)]:-mt-5">
                  </li>
                  <li><img src="Assets/img/Screenshot 2024-11-22 150634.png" alt=""
                      class="max-w-full max-h-full h-auto object-cover [@media(min-width:2048px)]:h-[420px] [@media(min-width:2048px)]:w-auto [@media(min-width:2048px)]:-mt-6">
                  </li>
                </ul>
              </li>
              <li>
                <ul class="flex gap-2 lg:gap-4 xl:gap-5 [@media(min-width:2048px)]:gap-9">
                  <li><img src="Assets/img/Twitter post - 4.png" alt=""
                      class="max-w-full max-h-full h-auto object-cover [@media(min-width:2048px)]:h-[470px] [@media(min-width:2048px)]:w-auto">
                  </li>
                  <li><img src="Assets/img/Twitter post - 12.png" alt=""
                      class="max-w-full max-h-full h-auto object-cover [@media(min-width:2048px)]:h-[430px] [@media(min-width:2048px)]:w-auto">
                  </li>
                  <li><img src="Assets/img/Twitter post - 91.png" alt=""
                      class="max-w-full max-h-full h-auto object-cover xl:h-[230px]  pl-1 -mt-6 xl:-mt-24 [@media(min-width:2048px)]:h-[400px] [@media(min-width:2048px)]:w-auto [@media(min-width:2048px)]:-mt-20">
                  </li>
                  <li><img src="Assets/img/Screenshot 2024-11-22 150051.png" alt=""
                      class="max-w-full max-h-full h-auto object-cover -mt-6 xl:-mt-24 [@media(min-width:2048px)]:h-[400px] [@media(min-width:2048px)]:w-auto [@media(min-width:2048px)]:-mt-20">
                  </li>
                </ul>
              </li>
              <li>
                <ul class="flex float-end gap-2 lg:gap-4 xl:gap-5 [@media(min-width:2048px)]:gap-8">
                  <li><img src="Assets/img/Twitter post - 11 (1).png" alt=""
                      class="h-12 w-auto md:h-28 -mt-10 md:-mt-14 lg:h-36 lg:-mt-16 xl:h-60 xl:-mt-40 [@media(min-width:2048px)]:h-[400px] [@media(min-width:2048px)]:w-auto [@media(min-width:2048px)]:-mt-44">
                  </li>
                  <li><img src="Assets/img/Twitter post - 11.png" alt=""
                      class="h-12 w-auto md:h-28 -mt-10 md:-mt-14 lg:h-36 lg:-mt-14 xl:h-52 xl:-mt-36 [@media(min-width:2048px)]:h-[400px] [@media(min-width:2048px)]:w-auto [@media(min-width:2048px)]:-mt-40">
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="[@media(min-width:2048px)]:mt-32 md:mt-24 lg:mt-28 xl:mt-32 mt-10">
    <div class="relative">
      <div class=" flex justify-center">
        <h1 class="font-Poppins font-medium text-lg lg:text-xl xl:text-2xl z-10 [@media(min-width:2048px)]:text-5xl">FAQ
        </h1>
      </div>
      <div class="relative">
        <img src="Assets/img/Ellipse 13.png" alt="" class="absolute w-full h-auto md:-mt-60 xl:-mt-[700px] bg-cover">
        <div class="relative flex justify-center">
          <img src="Assets/img/logo (3).png" alt=""
            class="absolute w-full mt-3 md:mt-10 h-full md:w-[85%] md:h-auto bg-cover lg:w-[80%] lg:h-auto lg:mt-14 xl:w-[75%] xl:h-auto xl:mt-16">
          <div class="mt-3 md:mt-8 lg:mt-10 xl:mt-12 w-full ">
            <ul class="flex flex-col gap-2 lg:gap-3 [@media(min-width:2048px)]:gap-7">
              <li class="z-0 flex justify-center">
                <div
                  class="dropdown  px-4 py-2 w-2/3  flex justify-between items-center  bg-[#ffffff] bg-opacity-10 rounded-lg lg:rounded-xl [@media(min-width:2048px)]:rounded-3xl font-medium text-[9px] md:px-5 md:py-4 md:text-xs lg:px-6 lg:py-5 lg:text-sm xl:px-8 xl:py-5 xl:text-base [@media(min-width:2048px)]:px-12 [@media(min-width:2048px)]:py-10 [@media(min-width:2048px)]:text-3xl">
                  <div>Q1. Why i Choose</div>
                  <!-- <li><button class="drop-btn"><img src="Assets/img/Vector (12).png" alt=""
                        class=" w-1.5 md:w-2.5 lg:w-3 xl:w-4 h-auto [@media(min-width:2048px)]:w-7"></button>
                  </li> -->
                  <div class="form">
                    <button class="button "> <img src="Assets/img/Vector (12).png" alt=""
                        class="fas fa-chevron-down w-1.5 md:w-2.5 lg:w-3 xl:w-4 h-auto [@media(min-width:2048px)]:w-7">
                    </button>
                  </div>
                </div>
              </li>
              <li class="z-0 flex justify-center">
                <div
                  class="dropdown px-4 py-2 w-2/3  flex justify-between items-center  bg-[#ffffff] bg-opacity-10 rounded-lg lg:rounded-xl [@media(min-width:2048px)]:rounded-3xl font-medium text-[9px] md:px-5 md:py-4 md:text-xs lg:px-6 lg:py-5 lg:text-sm xl:px-8 xl:py-5 xl:text-base [@media(min-width:2048px)]:px-12 [@media(min-width:2048px)]:py-10 [@media(min-width:2048px)]:text-3xl">
                  <div>Q1. Why i Choose</div>

                  <div class="form">
                    <button class="button "> <img src="Assets/img/Vector (12).png" alt=""
                        class="fas fa-chevron-down w-1.5 md:w-2.5 lg:w-3 xl:w-4 h-auto [@media(min-width:2048px)]:w-7">
                    </button>
                  </div>
                </div>
              </li>
              <li class="z-0 flex justify-center">
                <div
                  class="dropdown px-4 py-2 w-2/3  flex justify-between items-center  bg-[#ffffff] bg-opacity-10 rounded-lg lg:rounded-xl [@media(min-width:2048px)]:rounded-3xl font-medium text-[9px] md:px-5 md:py-4 md:text-xs lg:px-6 lg:py-5 lg:text-sm xl:px-8 xl:py-5 xl:text-base [@media(min-width:2048px)]:px-12 [@media(min-width:2048px)]:py-10 [@media(min-width:2048px)]:text-3xl">
                  <div>Q1. Why i Choose</div>

                  <div class="form">
                    <button class="button "> <img src="Assets/img/Vector (12).png" alt=""
                        class="fas fa-chevron-down w-1.5 md:w-2.5 lg:w-3 xl:w-4 h-auto [@media(min-width:2048px)]:w-7">
                    </button>
                  </div>
                </div>
              </li>
              <li class="z-0 flex justify-center">
                <div
                  class="dropdown px-4 py-2 w-2/3  flex justify-between items-center  bg-[#ffffff] bg-opacity-10 rounded-lg lg:rounded-xl [@media(min-width:2048px)]:rounded-3xl font-medium text-[9px] md:px-5 md:py-4 md:text-xs lg:px-6 lg:py-5 lg:text-sm xl:px-8 xl:py-5 xl:text-base [@media(min-width:2048px)]:px-12 [@media(min-width:2048px)]:py-10 [@media(min-width:2048px)]:text-3xl">
                  <div>Q1. Why i Choose</div>

                  <div class="form">
                    <button class="button "> <img src="Assets/img/Vector (12).png" alt=""
                        class="fas fa-chevron-down w-1.5 md:w-2.5 lg:w-3 xl:w-4 h-auto [@media(min-width:2048px)]:w-7">
                    </button>
                  </div>
                </div>
              </li>
              <li class="z-0 flex justify-center">
                <div
                  class="dropdown px-4 py-2 w-2/3  flex justify-between items-center  bg-[#ffffff] bg-opacity-10 rounded-lg lg:rounded-xl [@media(min-width:2048px)]:rounded-3xl font-medium text-[9px] md:px-5 md:py-4 md:text-xs lg:px-6 lg:py-5 lg:text-sm xl:px-8 xl:py-5 xl:text-base [@media(min-width:2048px)]:px-12 [@media(min-width:2048px)]:py-10 [@media(min-width:2048px)]:text-3xl">
                  <div>Q1. Why i Choose</div>

                  <div class="form">
                    <button class="button "> <img src="Assets/img/Vector (12).png" alt=""
                        class="fas fa-chevron-down w-1.5 md:w-2.5 lg:w-3 xl:w-4 h-auto [@media(min-width:2048px)]:w-7">
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex justify-center mt-4 md:mt-9 lg:mt-11 xl:mt-16 [@media(min-width:2048px)]:mt-32">
          <div
            class="w-[90%] md:w-4/5 lg:w-4/5 xl:w-[75%] h-auto rounded-2xl md:rounded-3xl lg:rounded-3xl xl:rounded-3xl [@media(min-width:2048px)]:rounded-[40px] relative overflow-hidden">
            <div
              class="absolute flex justify-end ml-44 md:ml-80 lg:ml-[420px]  xl:ml-[550px] [@media(min-width:2048px)]:ml-[1000px]">
              <img src="Assets/img/Glass effect 1.png" alt=""
                class="w-40 h-16 md:w-80 md:h-24 lg:w-[500px] lg:h-36 xl:w-[1000px] xl:h-[300px] [@media(min-width:2048px)]:w-[1100px] [@media(min-width:2048px)]:h-[400px]  object-cover">
            </div>
            <img src="Assets/img/abstract-light-painting-dark 1.png" alt="" class="w-full h-auto  ">


            <div
              class="absolute inset-0 flex flex-col justify-center px-2 md:px-4 lg:px-7 xl:px-10 [@media(min-width:2048px)]:px-20">
              <ul class="flex flex-row justify-between items-center">
                <li>
                  <h1
                    class="font-medium text-white text-[8px] md:text-sm font-Poppins lg:text-base xl:text-lg [@media(min-width:2048px)]:text-4xl">
                    Subscribe Newsletters</h1>
                </li>
                <li>
                  <form action="" class="relative flex items-center">
                    <input type="text" placeholder="Enter your email"
                      class= "text-[#000] w-44 md:w-80 text-[6px] lg:w-[450px] xl:w-[640px] lg:text-sm h-auto md:text-xs rounded-full p-1 px-2 md:p-2 lg:p-3 xl:p-5 [@media(min-width:2048px)]:w-[1100px] [@media(min-width:2048px)]:text-3xl [@media(min-width:2048px)]:p-7" />
                    <button type="submit"
                      class="w-[60px] text-[5px] p-1 md:w-28 lg:w-32 xl:w-36 xl:p-2 lg:p-1.5 h-auto rounded-3xl md:text-[10px] md:p-1 bg-[#010031] text-white absolute top-1/2 right-0.5 md:right-1 lg:right-2 xl:right-4 transform -translate-y-1/2 [@media(min-width:2048px)]:w-80 [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:right-6">
                      Subscribe Now
                    </button>
                  </form>
                </li>
              </ul>
            </div>

          </div>
        </div>


      </div>
    </div>
  </section>

  <!-- footer -->
  <section class="[@media(min-width:2048px)]:mb-80 mt-8 mb-10 md:mb-20 lg:mb-32 xl:mb-40">
    <div class="mt-4 md:mt-16 lg:mt-24 xl:mt-32 [@media(min-width:2048px)]:mt-52  ">
      <div class="flex justify-center "><img src="Assets/img/Vector 5 (1).png" alt="" class="w-[85%] h-auto z-0">
      </div>
    </div>
    <div
      class="py-6 px-7 md:py-6 md:px-10 lg:py-8 lg:px-12 xl:py-10 xl:px-14 xl:mt-6  [@media(min-width:2048px)]:mt-12">
      <div class="flex justify-start md:justify-center xl:mr-20">
        <ul class="flex flex-col md:flex-row  gap-6 md:gap-10 lg:gap-16 xl:gap-36 [@media(min-width:2048px)]:gap-60">
          <li class=" mt-1 w-full md:w-auto z-10">
            <ul>
              <li><img src="Assets/img/Layer_1.png" alt=""
                  class="w-16 h-auto md:w-20 lg:w-28 xl:w-40 [@media(min-width:2048px)]:w-72"></li>
            </ul>
          </li>
          <li class="w-full md:w-auto z-10">
            <ul class="flex flex-col gap-0.5 xl:gap-1.5 [@media(min-width:2048px)]:gap-2.5">
              <li
                class="font-medium text-[13px] md:text-sm font-Poppins lg:text-lg xl:text-lg [@media(min-width:2048px)]:text-4xl">
                Learn More</li>
              <!-- <li><img src="Assets/img/Vector 5 (1).png" alt="" class="w-[30%]"></li> -->
              <li
                class="font-bold text-[9px] mt-1.5 md:mt-3 lg:mt-4 md:text-xs lg:text-sm xl:text-sm [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:mt-4">
                LINK 1</li>
              <li class="font-bold text-[9px] md:text-xs lg:text-sm xl:text-sm [@media(min-width:2048px)]:text-2xl">
                LINK
                2
              </li>
              <li class="font-bold text-[9px] md:text-xs lg:text-sm xl:text-sm [@media(min-width:2048px)]:text-2xl">
                LINK
                3
              </li>
              <li class="font-bold text-[9px] md:text-xs lg:text-sm xl:text-sm [@media(min-width:2048px)]:text-2xl">
                LINK
                4
              </li>
              <li class="font-bold text-[9px] md:text-xs lg:text-sm xl:text-sm [@media(min-width:2048px)]:text-2xl">
                LINK
                5
              </li>
              <li class="font-bold text-[9px] md:text-xs lg:text-sm xl:text-sm [@media(min-width:2048px)]:text-2xl">
                LINK
                6
              </li>
              <li class="font-bold text-[9px] md:text-xs lg:text-sm xl:text-sm [@media(min-width:2048px)]:text-2xl">
                LINK
                7
              </li>
            </ul>
          </li>
          <li class="w-full  md:w-auto z-10">
            <ul class="flex flex-col gap-0.5 xl:gap-1.5 [@media(min-width:2048px)]:gap-2.5">
              <li
                class="font-medium text-[13px] font-Poppins  md:text-sm lg:text-lg xl:text-lg [@media(min-width:2048px)]:text-4xl">
                Tickets & Booking</li>
              <!-- <li><img src="Assets/img/Vector 5 (1).png" alt="" class="w-[48%]"></li> -->

              <li
                class="font-bold text-[9px] md:text-xs mt-1.5 lg:mt-4 md:mt-3 lg:text-sm xl:text-sm [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:mt-4">
                LINK 1</li>
              <li class="font-bold text-[9px] md:text-xs lg:text-sm xl:text-sm [@media(min-width:2048px)]:text-2xl">
                LINK
                2
              </li>
              <li class="font-bold text-[9px] md:text-xs lg:text-sm xl:text-sm [@media(min-width:2048px)]:text-2xl">
                LINK
                3
              </li>
            </ul>
          </li>
          <li class="w-full md:w-auto z-10">
            <ul class="flex flex-col gap-0.5 xl:gap-1.5 [@media(min-width:2048px)]:gap-2.5">
              <li
                class="font-bold text-[13px] font-Poppins md:text-sm lg:text-lg xl:text-lg [@media(min-width:2048px)]:text-4xl">
                Contact Us</li>
              <!-- <li><img src="Assets/img/Vector 5 (1).png" alt="" class="w-[30%]"></li> -->

              <li
                class="font-bold text-[9px] mt-1.5 md:text-xs md:mt-3 lg:mt-4 lg:text-sm xl:text-sm [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:mt-4">
                LINK 1</li>
              <li class="font-bold text-[9px] md:text-xs lg:text-sm xl:text-sm [@media(min-width:2048px)]:text-2xl">
                LINK
                2
              </li>
              <li class="font-bold text-[9px] md:text-xs lg:text-sm xl:text-sm [@media(min-width:2048px)]:text-2xl">
                LINK
                3
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="flex justify-start md:justify-end mt-4 md:-mt-3 xl:px-16 xl:-mt-0 xl:mr-16 md:mr-8 lg:mr-10">
        <ul class="flex flex-col gap-1.5 md:gap-0">
          <li class="flex  justify-start md:justify-center z-10">
            <h1 class="font-medium text-[13px] md:text-sm lg:text-lg [@media(min-width:2048px)]:text-2xl">
              Social</h1>
          </li>
          <!-- <li><img src="Assets/img/Vector 5 (1).png" alt="" class="w-[17%]"></li> -->
          <li class="mt-1 md:mt-3 xl:mt-6 z-10">
            <ul class="flex gap-4 md:gap-4 lg:gap-5 xl:gap-12 justify-center items-center">
              <li><img src="Assets/img/bxl-facebook.png" alt=""
                  class="w-2.5 md:w-2.5 lg:w-4 md: h-auto [@media(min-width:2048px)]:w-7"></li>
              <li><img src="Assets/img/instagram-logo.png" alt=""
                  class="w-4 md:w-3.5 lg:w-6 h-auto [@media(min-width:2048px)]:w-11"></li>
              <li><img src="Assets/img/youtube-logo.png" alt=""
                  class="w-5 md:w-4 lg:w-7 h-auto [@media(min-width:2048px)]:w-12"></li>
              <li><img src="Assets/img/Object.png" alt=""
                  class="w-5 md:w-4 lg:w-7 h-auto [@media(min-width:2048px)]:w-12"></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>



  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(function () {
      $(".dropdown").each(function () {
        const $dropdown = $(this);
        const $button = $dropdown.find(".button");
        const $list = $dropdown.find(".dropdownList");
        const $icon = $button.find(".fa-chevron-down");

        $button.click(function (e) {
          e.preventDefault();
          $list.slideToggle(500);
          $icon.toggleClass("active");
        });
      });
    });
  </script>

  <script src="main.js"></script>

</body>

</html>
































<header>
<!-- mobile view -->
 <div class="md:hidden lg:hidden xl:hidden [@media(min-width:2048px)]:hidden   justify-center ">
    <nav id="navbar"
      class=" nav-class bg-black  p-5 items-center flex w-full h-auto content-center fixed z-50">
      <div
        class="container  gap-0 flex items-center justify-between  bg-transparent ">
        <div id="nav-menu"
          class="bg-black absolute top-0 left-[-100%] min-h-[100vh] w-full  flex items-center justify-center duration-300 overflow-hidden">
          <ul class="flex flex-col items-center gap-6  bg-transparent ">
            <li>
              <a href="index.html"
                class="nav-link  ">Home</a>
            </li>
            <li>
              <a href="ourstory.html"
                class="nav-link ">OurStory</a>
            </li>
            <li>
              <a href="service.html"
                class="nav-link ">Service</a>
            </li>
            <li>
              <a href="contact.html"
                class="nav-link ">Contact
                Us</a>
            </li>
            <li>
              <button>
                <a href="signup.html" class="nav-link">Sign up</a>
              </button>
            </li>
            <li>
              <button>
                <a href="login.html" class="nav-link">Login</a>
              </button>
            </li>
          </ul>
        </div>

        <div class="lg:pr-36 xl:pr-[155px] [@media(min-width:2048px)]:pr-[180px]">
          <img src="Assets/img/logo (2).png" alt=""
            class="w-40 h-auto md:w-56 md:h-auto lg:w-52 lg:h-auto xl:w-56 [@media(min-width:2048px)]:w-[360px]" />
        </div>
    
        <div class="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden ">
          <i class="ri-menu-line" id="hamburger"></i>
        </div>
      </div>
    </nav>
 </div>




<!-- tablet size after screen size -->
  <div class="hidden md:static md:flex md:justify-center md:pt-5 xl:px-0 [@media(min-width:2048px)]:pt-10 ">
    <nav id="navbar"
      class=" nav-class  md:border md:rounded-full md:px-5 md:items-center md:content-center xl:px-10 [@media(min-width:2048px)]:w-[2000px] [@media(min-width:2048px)]:h-28">
      <div
        class="container  md:flex md:items-center md:justify-between md:p-0 md:bg-transparent md:gap-5 xl:gap-40 [@media(min-width:2048px)]:gap-14 [@media(min-width:2048px)]:p-0">
        <ul class="md:flex md:items-center md:gap-4 md:flex-row md:bg-transparent xl:gap-6 ">
          <li>
            <a href="index.html"
              class="nav-link [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold ">Home</a>
          </li>
          <li>
            <a href="ourstory.html"
              class="nav-link [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold">OurStory</a>
          </li>
          <li>
            <a href="service.html"
              class="nav-link [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold">Service</a>
          </li>
          <li>
            <a href="contact.html"
              class="nav-link [@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold">Contact
              Us</a>
          </li>
          <li>
            <button>
              <a href="signup.html" class="nav-link md:hidden">Sign up</a>
            </button>
          </li>
          <li>
            <button>
              <a href="login.html" class="nav-link md:hidden">Login</a>
            </button>
          </li>
        </ul>


        <div class="md:pr-36 xl:pr-[155px] [@media(min-width:2048px)]:pr-[180px]">
          <img src="Assets/img/logo (2).png" alt=""
            class="md:w-52 md:h-auto xl:w-56 [@media(min-width:2048px)]:w-[360px]" />
        </div>

        <ul class="md:flex  md:items-center md:gap-5 md:flex-row xl:gap-6">

          <li class="md:flex md:justify-center md:items-center">
            <button
              class="nav-link md:w-28 xl:w-32 md:h-6 md:rounded-full md:border md:bg-transparent [@media(min-width:2048px)]:w-52 [@media(min-width:2048px)]:h-12">
              <a href="login.html"
                class="[@media(min-width:2048px)]:text-2xl [@media(min-width:2048px)]:font-semibold">Login</a>
            </button>
          </li>
          <li class="md:flex md:justify-center md:items-center">
            <button class="nav-link">
              <a href="#profile" class=""><img src="Assets/img/icons8-male-user-48.png" alt=""
                  class="md:w-10 md:h-auto xl:w-12 [@media(min-width:2048px)]:w-20"> </a>
            </button>
          </li>
        </ul>

      </div>
    </nav>
  </div>
</header>