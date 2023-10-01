<template>
    <div class="header">
        <div class=" bg-greens md:bg-transparent w-full p-8">
            <div
                class=" container flex items-center justify-between  mx-auto p-3 ">
                <a href="#">
                    <img class="w-20 h-20 rounded-3xl" src="/favicon.ico" alt="">
                </a>
                <div class="drap relative flex flex-row-reverse  items-center gap-3 p-2 rounded-lg" >
                    <img class=" sm:hidden cursor-pointer" src="../assets/img/menu_icon.png" alt="">
                    <ul
                        class=" drap-menu hidden absolute font-bold top-10 right-0 p-2 w-[230px] sm:block sm:-top-5 sm:right-5 sm:bg-greens sm:text-white  text-center rounded-xl bg-red-50 shadow-2xl">
                        <div class=" flex flex-col gap-2 sm:flex-row-reverse">
                            <li class="p-[4px] w-full h-[35px] flex justify-center items-center mx-auto cursor-pointer rounded-lg hover:text-white hover:bg-violet-600">
                                <NuxtLink to="/">HOME</NuxtLink></li>
                            <li class="p-[4px] w-full h-[35px] flex justify-center items-center mx-auto cursor-pointer rounded-lg hover:text-white hover:bg-violet-600">
                                <NuxtLink to="/">ABOUT</NuxtLink></li>
                            <li class="p-[4px] w-full h-[35px] flex justify-center items-center mx-auto cursor-pointer rounded-lg hover:text-white hover:bg-violet-600">
                                <NuxtLink to="/">CONTACT</NuxtLink></li>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="grid  justify-center items-center md:grid-cols-2 gap-4 p-30 md:-ml-15">

                <div class="flex flex-col justify-center items-center text-center cols-span-1  md:-ml-5">
                    <h1 class=" mb-4 p-2 font-extrabold text-lg uppercase text-red-800">Digital Marketing Landing Page 2019
                    </h1>
                    <p class="p-4 w-80 text-center font-medium text-yellow-400">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint placeat explicabo dolore! Obcaecati
                        eveniet animi velit odit officia repellat nihil vel. Laudantium, numquam molestias pariatur quisquam
                        unde illum id inventore
                    </p>
                    <NuxtLink
                        class="bg-green-400 text-red-600 hover:bg-green-500 hover:text-white p-2 shadow-boxsh1 rounded-lg border-2 border-lime-300"
                        to="/">Read More</NuxtLink>
                </div>

                <div class="flex justify-center items-center cols-span-1 sm:w-auto w-96">
                    <img class=" w-full md:p-8" src="../assets/img/box_img.png" alt="">
                </div>

            </div>

        </div>
    </div>

    <section class="p-4">
        <div class="box flex flex-col justify-center items-center text-center p-4">
            <h4 class=" text-indigo-800 font-medium text-sm p-1">INCREASE YOUR CLIENT FOR</h4>
            <h2 class="text-indigo-800 font-medium text-lg p-1">Better position of Business</h2>
            <p class="text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page
            </p>
            <img class="sm:w-8/12 md:w-6/12 p-4" src="../assets/img/business_img.jpg" alt="">
            <p class="text-gray-600 sm:px-20 py-4">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                some form, by injected humour, or randomised words which don't look even slightly believableThere are many
                variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even slightly believable
            </p>
            <a class="btn" href="#">Read More</a>
        </div>

    </section>

    <section class=" relative px-2">

        <div class="before:content-[''] rightback hidden xl:block absolute -top-24 right-0 w-72 h-101"></div>

        <div class="box flex flex-col justify-center items-center text-center p-4">
            <h4 class=" text-indigo-800 font-medium text-sm p-1">PREVIOUS PROJECTS</h4>
            <h2 class="text-indigo-800 font-medium text-lg p-1">Better position of Business</h2>
            <p class="text-gray-600">
                It is a long established fact that a reader will be distracted by the readable content of a page
            </p>
            <img class="sm:w-8/12 md:w-4/12 p-4" src="../assets/img/projects_img.png" alt="">
            <p class="text-gray-600 sm:px-20 py-4">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                some form, by injected humour, or randomised words which don't look even slightly believableThere are many
                variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even slightly believable
            </p>
            <a class="btn" href="#">Read More</a>
        </div>

    </section>

    <section class="text mx-4 sm:mx-22 sm:my-12 sm:p-14 md:mx-10 md:py-32 ">
        <div class=" bg-greens flex flex-col justify-center items-center sm:bg-transparent rounded-2xl ">
            <h1 class="my-3 w-max font-medium text-3xl text-red-800 border-b-2 border-black p-1 rounded-xl">Testimonial</h1>

            <div class="sm:flex sm:flex-col-2 justify-center items-center md:items-center">
                <div class="flex justify-center item-center sm:mb-24 sm:mt-3">
                    <img class=" w-40 h-40 rounded-full p-1 shadow-boxsh2 border-4 border-yellow-500"
                        src="../assets/img/yas.jpg" alt="">
                </div>
                <div class="mt-5 sm:mb-24 sm:mr-6 shadow-boxsh2 mx-5 rounded-2xl">
                    <h4 class=" w-max m-2 pt-2 font-medium text-red-800 border-b-2 p-1 border-black rounded-lg">DONALS :
                    </h4>
                    <p class="sm:w-72 text-center my-2 mx-3 p-2 text-yellow-400 font-medium md:w-96  lg:w-100">
                        Tof Lorem Ipsum, you need to be There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to use a pass
                        age of Lorem Ipsum, you need to be
                    </p>
                </div>
            </div>

        </div>
    </section>

    <section>
        <div class="text-center mt-4 p-3 ">
            <h4 class="text-gray-800 font-medium text-2xl my-2">Contact us</h4>
            <p class=" text-blue-600 font-medium">There are many variations of passages of Lorem Ipsum available, but theF
            </p>

            <div
                class="flex flex-col justify-center items-center mt-6 mx-4 p-4 border-2 shadow-boxsh2 border-blue-400 rounded-3xl sm:mx-20 md:w-100 md:mx-auto">
                <input class=" bg-none inp" type="text" placeholder="Name">
                <input class="inp" type="text" placeholder="Phone Number">
                <input class="inp" type="gmail" placeholder="Email">
                <textarea class="inp" placeholder="Message" cols="30" rows="1"></textarea>

                <button class=" btn w-32">Send</button>
            </div>
        </div>
    </section>

    <div class="footer">
        <section class=" relative flex flex-col py-4 justify-center items-center">

            <div class=" bottomback absolute hidden xl:block -bottom-3 right-0 w-80 h-80"></div>

            <div class=" bottomback absolute hidden xl:block transform rotate-90 -bottom-3 left-0 w-80 h-80"></div>

            <h1 class=" font-medium text-lg text-red-700 pt-2">Free Multipurpose Responsive</h1>
            <h3 class=" font-medium text-lg text-red-700 pb-6">Landing Page 2023</h3>
            <ul class=" list-none flex justify-center items-center gap-6 p-3">
                <li class="li shadow-boxsh2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-facebook text-blue-600" viewBox="0 0 16 16">
                        <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                </li>
                <li class="li shadow-boxsh2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-whatsapp text-green-600" viewBox="0 0 16 16">
                        <path
                            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                </li>
                <li class="li shadow-boxsh2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-twitter text-blue-600" viewBox="0 0 16 16">
                        <path
                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                </li>
                <li class="li shadow-boxsh2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-youtube text-red-600" viewBox="0 0 16 16">
                        <path
                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                </li>
            </ul>
        </section>

        <h1 class="text-center text-yellow-500 font-bold text-xl bg-greens my-3 p-5">Front-End Developer : Abolfazl Mollashahi</h1>

    </div>
</template>

<script setup>

// const flag = ref(false)
// function flagbtn() {
//     if (flag.value) {
//         document.querySelector('.uu').style.display = 'none'
//         flag.value = false
//     } else {
//         document.querySelector('.uu').style.display = 'block'
//         flag.value = true

//     }

// }


</script>

<style scoped>

.drap:hover .drap-menu{
    display: block;
}

.header {
    background: url(../assets/img/banner.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
}

/* .uu {
    display: none;
} */

.text {
    background: url(../assets/img/test.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.rightback {
    background: url(../assets/img/midil.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.bottomback {
    background: url(../assets/img/bottom.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}



</style>