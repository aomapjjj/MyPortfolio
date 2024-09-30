<script setup>
import Navbar from "@/components/Navbar.vue"
import ExperienceTimeLine from "@/components/ExperienceTimeLine.vue"
import Github from "@/components/icons/Github.vue"
import Figma from "@/components/icons/Figma.vue"
import Mysql from "@/components/icons/Mysql.vue";
</script>

<template>
  <div class="bg-black h-screen">
    <Navbar />
    <section>
      <div class="bg-black text-white py-8">
        <div
          class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24"
        >
          <div
            class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"
          >
            <p class="ml-2 text-indigo-600 uppercase tracking-loose">
              2022-2024
            </p>
            <p
              class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2"
            >
              EXPERIENCE
            </p>
            <p class="text-sm md:text-base text-gray-50 mb-4">
              My university experience has been enriched <br> by hands-on projects and real-world problem-solving
            </p>
            <a
              href="#"
              class="bg-transparent mr-auto hover:bg-indigo-600 text-indigo-600 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-indigo-600 hover:border-transparent"
            >
              Explore Now</a
            >
          </div>
          <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div class="container mx-auto w-full h-full">
              <div class="relative wrap overflow-hidden p-10 h-full">
                <div
                  class="border-2-2 border-blue-555 absolute h-full border"
                  style="right: 50%; border: 2px solid #ffff; border-radius: 1%"
                ></div>
                <div
                  class="border-2-2 border-blue-555 absolute h-full border"
                  style="left: 50%; border: 2px solid #ffff; border-radius: 1%"
                ></div>
                <div
                  class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                >
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-left">
                    <ExperienceTimeLine>
                      <template #image>
                        <img src="/img/Integrated/login.png" alt="Integrated" />
                      </template>
                      <template #type>Dev</template>
                      <template #year>2024</template>
                      <template #header>
                        <a
                          href="https://intproj23.sit.kmutt.ac.th/sj3/login"
                          target="_blank"
                          >IntegratedProjectI IT KradanKanban</a
                        ></template
                      >
                      <template #description>มาเรียบเรียงคำ</template>
                      <template #responsibilities>
                        Full-stack developers</template
                      >

                      <template #github
                        ><a
                          class="flex flex-row gap-2 items-center"
                          href="https://github.com/AomAPJJJ/Integrated-Project"
                          target="_blank"
                        >
                          <Github /> </a
                      ></template>
                    </ExperienceTimeLine>
                  </div>
                </div>
                <div
                  class="mb-8 flex justify-between items-center w-full right-timeline"
                >
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-left">
                    <ExperienceTimeLine>
                      <template #image>
                        <img
                          src="/img/BingoGame/hompagebingo.png"
                          alt="Bingo"
                        />
                      </template>
                      <template #type>Dev</template>
                      <template #year>2024</template>
                      <template #header>
                        <a
                          href="https://effulgent-muffin-e95471.netlify.app/"
                          target="_blank"
                          >Vue Project I <br />
                          WabiSabi BingoGame</a
                        >
                      </template>
                      <template #description>มาเรียบเรียงคำ</template>
                      <template #responsibilities> Frontend developer</template>

                      <template #github
                        ><a
                          class="flex flex-row gap-2 items-center"
                          href="https://github.com/aomapjjj/PROJECT1-SEC-1-WabiSabi"
                          target="_blank"
                        >
                          <Github /> </a
                      ></template>
                    </ExperienceTimeLine>
                  </div>
                </div>
                <div
                  class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                >
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-left">
                    <ExperienceTimeLine>
                      <template #image>
                        <img src="/img/ux/ux.png" alt="Ux" />
                      </template>
                      <template #type>UX</template>
                      <template #year>2023</template>
                      <template #header>
                        <a
                          href="https://www.sit.kmutt.ac.th/blog/news_and_activities/ux-workshop-%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B2%E0%B8%81%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B9%81%E0%B8%84%E0%B9%88%E0%B8%AD/"
                          target="_blank"
                          >Digital Experience Strategy</a
                        >
                      </template>
                      <template #description
                        >SIT KMUTT โดย ดร. อันฮวา นิลรัตน์ศิริกุล ร่วมกับบริษัท
                        ยูเอ็กซ์แอสโซซิเอชัน จำกัด จัด Workshop "Digital
                        Experience Strategy" ให้ความรู้ด้าน UX Design
                        โดยมีวิทยากรจากบริษัท ยูเอ็กซ์แอสโซซิเอชัน จำกัด
                        เป็นเวลา 11 สัปดาห์</template
                      >
                    </ExperienceTimeLine>
                  </div>
                </div>
                <div
                  class="mb-8 flex justify-between items-center w-full right-timeline"
                >
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-left">
                    <ExperienceTimeLine>
                      <template #image>
                        <img src="/img/databaseProJ/db.png" alt="DB" />
                      </template>
                      <template #type>Database</template>
                      <template #year>2023</template>
                      <template #header>
                        <a
                          href="https://docs.google.com/document/d/1To2bTkj42_lIM-9E7K2Q_u3R3QSj3lxrNowXn_XM35Y/edit#heading=h.eq7ucit01rar"
                          target="_blank"
                          >Project name: Zoo
                          management system
                        </a></template
                      >
                      <template #description>มาเรียบเรียงคำ</template>
                      <template #responsibilities> Database Designer </template>

                      <template #github
                        ><a
                          class="flex flex-row gap-2 items-center"
                          href="https://docs.google.com/document/d/1To2bTkj42_lIM-9E7K2Q_u3R3QSj3lxrNowXn_XM35Y/edit#heading=h.eq7ucit01rar"
                          target="_blank"
                        >
                          <Mysql /> </a
                      ></template>
                    </ExperienceTimeLine>
                  </div>
                </div>
                <div
                  class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                >
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-left">
                    <ExperienceTimeLine>
                      <template #image>
                        <img src="/img/ui/figma.png" alt="Ui" />
                      </template>
                      <template #type>UI</template>
                      <template #year>2022</template>
                      <template #header>
                        <a
                          href="https://www.figma.com/design/DPVE5r62cAe35e9pyqGep4/ACASBY?node-id=0-1&t=bg0AnRRw27Cp0Oqp-1"
                          target="_blank"
                          >INT104 User Experience Design UI Designer</a
                        ></template
                      >
                      <template #description>มาเรียบเรียงคำ</template>
                      <template #responsibilities> UI designer</template>

                      <template #github
                        ><a
                          class="flex flex-row gap-2 items-center"
                          href="https://www.figma.com/design/DPVE5r62cAe35e9pyqGep4/ACASBY?node-id=0-1&t=bg0AnRRw27Cp0Oqp-1"
                          target="_blank"
                        >
                          <Figma /> </a
                      ></template>
                    </ExperienceTimeLine>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* .bggd {
     background: radial-gradient(at 38.86276706538403% 19.177256486474082%, hsla(228.94736842105263, 73.0769230769231%, 20.392156862745097%, 1) 0%, hsla(228.94736842105263, 73.0769230769231%, 20.392156862745097%, 0) 100%), radial-gradient(at 33.264806031634734% 92.62381024466893%, hsla(199.7872340425532, 69.11764705882354%, 26.666666666666668%, 1) 0%, hsla(199.7872340425532, 69.11764705882354%, 26.666666666666668%, 0) 100%), radial-gradient(at 99.63136162995438% 81.5161359855169%, hsla(349.119170984456, 86.54708520179372%, 56.27450980392157%, 1) 0%, hsla(349.119170984456, 86.54708520179372%, 56.27450980392157%, 0) 100%), radial-gradient(at 78.51834744678361% 19.742672408383456%, hsla(15.971223021582741, 85.27607361963189%, 68.03921568627452%, 1) 0%, hsla(15.971223021582741, 85.27607361963189%, 68.03921568627452%, 0) 100%), radial-gradient(at 54.18448931151314% 64.2843468505214%, hsla(48.917197452229296, 92.89940828402369%, 66.86274509803921%, 1) 0%, hsla(48.917197452229296, 92.89940828402369%, 66.86274509803921%, 0) 100%), radial-gradient(at 0.17709483239789492% 11.650523840917959%, hsla(228.94736842105263, 73.0769230769231%, 20.392156862745097%, 1) 0%, hsla(228.94736842105263, 73.0769230769231%, 20.392156862745097%, 0) 100%), radial-gradient(at 72.88688122968779% 23.282663077645083%, hsla(199.7872340425532, 69.11764705882354%, 26.666666666666668%, 1) 0%, hsla(199.7872340425532, 69.11764705882354%, 26.666666666666668%, 0) 100%), radial-gradient(at 93.32367244400605% 95.27907528940129%, hsla(349.119170984456, 86.54708520179372%, 56.27450980392157%, 1) 0%, hsla(349.119170984456, 86.54708520179372%, 56.27450980392157%, 0) 100%), radial-gradient(at 42.12126672637368% 71.15565653556564%, hsla(15.971223021582741, 85.27607361963189%, 68.03921568627452%, 1) 0%, hsla(15.971223021582741, 85.27607361963189%, 68.03921568627452%, 0) 100%);            
} */
</style>
