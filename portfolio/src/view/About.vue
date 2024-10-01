<script setup>
import Navbar from "@/components/Navbar.vue"
import experiences from "../../data/experiences.json"
</script>

<template>
  <div class="bg-gray-100 h-full min-h-screen">
    <Navbar />
    <!-- component -->

    <div class="flex flex-col items-center justify-center min-h-screen">
      <!-- dark theme -->
      <div class="container m-4">
        <div class="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
          <!-- alert -->

          <!-- profile card -->
          <div class="flex flex-col sticky top-0 z-10">
            <div
              class="bg-gray-800 border border-gray-800 shadow-lg rounded-2xl p-4"
            >
              <div class="flex-none sm:flex">
                <div class="relative h-32 w-32 sm:mb-0 mb-3">
                  <img
                    src="/img/Aom.png"
                    alt="Aom"
                    class="w-32 h-32 object-cover rounded-2xl"
                  />
                </div>
                <div class="flex-auto sm:ml-5 justify-evenly">
                  <div class="flex items-center justify-between sm:mt-2">
                    <div class="flex items-center">
                      <div class="flex flex-col">
                        <div
                          class="w-full flex-none text-lg text-gray-200 font-bold leading-none"
                        >
                          Panipak Jongsirivanich
                        </div>
                        <div class="flex-auto text-gray-400 my-1 mt-4">
                          <span class="mr-3">Front-End Developer</span
                          ><span
                            class="mr-3 border-r border-gray-600 max-h-0"
                          ></span
                          ><span>(SIT) KMUTT</span>
                        </div>
                        <div class="flex-auto text-gray-400 my-1">
                          <span class="mr-3">Age : 21 years</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex pt-2 text-sm text-gray-400">
                    <div class="flex-1 inline-flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#a1a1a1"
                          fill-rule="evenodd"
                          d="M3.013 9.151C3 9.691 3 10.302 3 11v2c0 2.828 0 4.243.879 5.121C4.757 19 6.172 19 9 19h6c2.828 0 4.243 0 5.121-.879C21 17.243 21 15.828 21 13v-2c0-.698 0-1.31-.013-1.849l-8.016 4.453a2 2 0 0 1-1.942 0zm.23-2.121q.125.03.243.096L12 11.856l8.514-4.73q.119-.065.243-.096c-.13-.474-.33-.845-.636-1.151C19.243 5 17.828 5 15 5H9c-2.828 0-4.243 0-5.121.879c-.307.306-.506.677-.636 1.15"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p class="">hello.panipak@outlook.com</p>
                    </div>
                    <div class="flex-1 inline-flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#a1a1a1"
                          d="m6.68 3.32l.613-.613a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L9.5 8.5a.98.98 0 0 0-.183 1.133a11.3 11.3 0 0 0 5.05 5.05a.98.98 0 0 0 1.133-.184l1.793-1.792a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414l-.613.613a6 6 0 0 1-7.843.558l-1.208-.907a23 23 0 0 1-4.6-4.6l-.907-1.208A6 6 0 0 1 6.68 3.32"
                        />
                      </svg>
                      <p class="">089-492-4600</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!---stats-->
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 sm:col-span-4">
              <RouterLink to="/activity">
                <div
                  class="p-4 relative bg-gray-800 border border-gray-800 shadow-lg rounded-2xl hover:shodow-lg cursor-pointer transition ease-in duration-500 transform hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-14 w-14 absolute bottom-4 right-3 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#a1a1a1"
                      d="M16.5 5.5a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m-3.6 13.9l1-4.4l2.1 2v6h2v-7.5l-2.1-2l.6-3A7.3 7.3 0 0 0 22 13v-2c-1.76.03-3.4-.89-4.3-2.4l-1-1.6c-.36-.6-1-1-1.7-1c-.3 0-.5.1-.8.1L9 8.3V13h2V9.6l1.8-.7l-1.6 8.1l-4.9-1l-.4 2zM4 9a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3v2zm1-4a1 1 0 0 1-1-1a1 1 0 0 1 1-1h5v2zm-2 8a1 1 0 0 1-1-1a1 1 0 0 1 1-1h4v2z"
                    />
                  </svg>

                  <div
                    class="text-2xl text-gray-100 font-medium leading-8 mt-5"
                  >
                    5
                  </div>
                  <div class="text-sm text-gray-500">Activities</div>
                </div>
              </RouterLink>
            </div>

            <div class="col-span-12 sm:col-span-4">
              <RouterLink to="/experience">
                <div
                  class="p-4 relative bg-gray-800 border border-gray-800 shadow-lg rounded-2xl hover:shodow-lg cursor-pointer transition ease-in duration-500 transform hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-14 w-14 absolute bottom-4 right-3 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                    />
                  </svg>
                  <div class="flex justify-between items-center">
                    <i class="fab fa-behance text-xl text-gray-400"></i>
                  </div>
                  <div
                    class="text-2xl text-gray-100 font-medium leading-8 mt-5"
                  >
                    {{ experiences.length }}
                  </div>
                  <div class="text-sm text-gray-500">Projects</div>
                </div>
              </RouterLink>
            </div>

            <div class="col-span-12 sm:col-span-4">
              <RouterLink to="/activity">
                <div
                  class="p-4 relative bg-gray-800 border border-gray-800 shadow-lg rounded-2xl hover:shodow-lg cursor-pointer transition ease-in duration-500 transform hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-14 w-14 absolute bottom-4 right-3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#a1a1a1"
                      d="M4 3c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h8v5l3-3l3 3v-5h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm8 2l3 2l3-2v3.5l3 1.5l-3 1.5V15l-3-2l-3 2v-3.5L9 10l3-1.5zM4 5h5v2H4zm0 4h3v2H4zm0 4h5v2H4z"
                    />
                  </svg>
                  <div class="flex justify-between items-center">
                    <i class="fab fa-codepen text-xl text-gray-400"></i>
                  </div>
                  <div
                    class="text-2xl text-gray-100 font-medium leading-8 mt-5"
                  >
                    2
                  </div>
                  <div class="text-sm text-gray-500">Certificates</div>
                </div>
              </RouterLink>
            </div>
          </div>

          <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div
              class="flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl"
            >
              <div class="">
                <div class="p-5 flex-auto justify-center">
                  <h2
                    class="text-center text-2xl font-bold py-4 text-yellow-400"
                  >
                    Get to Know Panipak
                  </h2>
                  <p class="text-sm text-gray-300 px-8 mb-2">
                    Hello I'm Panipak I was born and raised here in Bangkok
                    Province.
                  </p>
                  <p class="text-sm text-gray-300 px-8 mb-2">
                    I love playing guitar, I’m currently studying at the School
                    of Information Technology, KMUTT. ( IT )
                  </p>
                  <p class="text-sm text-gray-300 px-8 mb-2">
                    I’m actively seeking an internship opportunity and I’m
                    particularly interested in the role of a Frontend Developer.
                  </p>
                  <p class="text-sm text-gray-300 px-8 mb-2">
                    I’m enjoy learning new things and thrive on taking on
                    challenging tasks.
                  </p>
                </div>
              </div>
            </div>
            <!--elements-->
            <div class="flex flex-col space-y-4">
              <div
                class="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500 transform hover:scale-105"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center mr-auto">
                    <div class="inline-flex w-12 h-12">
                      <img
                        src="/img/Study/srv.png"
                        alt="srv"
                        class="relative w-12 h-12 object-cover rounded-2xl"
                      />
                      <!-- <span class="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"></span> -->
                      <span></span>
                    </div>
                    <a href="http://www.sirinusorn-school.com/" target="_blank">
                      <div class="flex flex-col ml-3">
                        <div class="font-medium leading-none text-gray-100">
                          Sirinusorn School
                        </div>
                        <p class="text-sm text-gray-500 leading-none mt-1">
                          Elementary School
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500 transform hover:scale-105"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center mr-auto">
                    <div class="inline-flex w-12 h-12">
                      <img
                        src="/img/Study/mws.png"
                        alt="mws"
                        class="relative p-1 w-12 h-14 object-cover rounded-2xl"
                      />
                    </div>
                    <a href="https://www.mws.ac.th/home/" target="_blank">
                      <div class="flex flex-col ml-3 min-w-0">
                        <div class="font-medium leading-none text-gray-100">
                          Mathayom Wat Sing School
                        </div>
                        <p
                          class="text-sm text-gray-500 leading-none mt-1 truncate"
                        >
                          Middle School
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500 transform hover:scale-105"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center mr-auto">
                    <div class="inline-flex w-12 h-12">
                      <img
                        src="/img/Study/mws.png"
                        alt="mws"
                        class="relative p-1 w-12 h-14 object-cover rounded-2xl"
                      />
                    </div>
                    <a href="https://www.mws.ac.th/home/" target="_blank">
                      <div class="flex flex-col ml-3 min-w-0">
                        <div class="font-medium leading-none text-gray-100">
                          Mathayom Wat Sing School (GEP)
                        </div>
                        <p
                          class="text-sm text-gray-500 leading-none mt-1 truncate"
                        >
                          High School
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500 transform hover:scale-105"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center mr-auto">
                    <div class="inline-flex w-12 h-12">
                      <img
                        src="/img/Study/kmutt.png"
                        alt="mws"
                        class="relative p-1 w-16 h-13 object-cover rounded-2xl"
                      />
                    </div>
                    <a href="https://www.sit.kmutt.ac.th/" target="_blank">
                      <div class="flex flex-col ml-3 min-w-0">
                        <div class="font-medium leading-none text-gray-100">
                          School of Information Technology, KMUTT ( IT )
                        </div>
                        <p
                          class="text-sm text-gray-500 leading-none mt-1 truncate"
                        >
                          University
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div
            class="bg-gray-800 border border-gray-800 shadow-lg rounded-2xl p-4"
          >
            <div class="flex-none sm:flex">
              <div class="flex-auto sm:ml-5 justify-evenly">
                <div class="flex items-center justify-between sm:mt-2">
                  <div class="flex items-center">
                    <div class="flex flex-col">
                      <div
                        class="w-full flex-none text-xl text-yellow-400 font-bold leading-none"
                      >
                        Skills
                      </div>
                      <div class="flex-auto text-gray-400 my-1 mt-4">
                        <span class="mr-3 font-bold text-l text-blue-500">Frontend </span
                        ><span
                          class="mr-3 border-r border-gray-600 max-h-0"
                        ></span
                        ><span>Javascript , HTML , CSS , Vue.js (Advance)</span>
                      </div>
                      <div class="flex-auto text-gray-400 my-1 mt-4">
                        <span class="mr-3 font-bold text-l text-blue-500">Backend </span
                        ><span
                          class="mr-3 border-r border-gray-600 max-h-0"
                        ></span
                        ><span>Java , Spring Boot ( Intermediate )</span>
                      </div>
                      <div class="flex-auto text-gray-400 my-1 mt-4">
                        <span class="mr-3 font-bold text-l text-blue-500">Database </span
                        ><span
                          class="mr-3 border-r border-gray-600 max-h-0"
                        ></span
                        ><span>Mysql ( Intermediate )</span>
                      </div>
                      <div class="flex-auto text-gray-400 my-1 mt-4">
                        <span class="mr-3 font-bold text-l text-blue-500">Devops </span
                        ><span
                          class="mr-3 border-r border-gray-600 max-h-0"
                        ></span
                        ><span
                          >Linux , Docker , Docker compose , CI/CD with Github
                          Actions ( Intermediate )</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
