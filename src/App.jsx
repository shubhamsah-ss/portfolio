import "./App.css";
import Profile from "./assets/photo.jpeg";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import LinkedIn from "./assets/linkedin.svg";


function App() {
  return (
    <>
      <header className="border-b-2 border-gray-600 shadow-md shadow-gray-700">
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="font-bold text-xl">Shubham Portfolio</h1>
            </div>
            <div className="">
              <ul className="flex justify-around gap-5">
                <li>
                  <a
                    href=""
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-20 my-10 px-4 py-1">
        {/* Banner section */}
        <section>
          <div className="container m-auto flex flex-col md:flex-row gap-5 justify-between items-center">
            <div className="md:pl-20 order-2 md:order-1">
              <h2 className="font-bold text-4xl">
                Hello, I'm Shubham Kumar Sah
              </h2>
              <h2 className="font-bold text-4xl mt-1 gradient-text running-text">
                Frontend Developer
              </h2>
              <p className="mt-4 text-gray-400 text-justify md:w-2/3">
                Motivated graduate student adept in languages and development
                tools, seeking a position in a growth-oriented company. Utilize
                exceptional time-management and leadership skills to contribute
                to the company's success while further enhancing personal skill
                set.
              </p>
            </div>
            <div className="bg-gradient-to-r order-1 md:order-2 from-blue-500 to-cyan-500 rounded-full p-1">
              <img
                src={Profile}
                width={500}
                alt="Shubham Kumar Sah"
                className="rounded-full"
              />
            </div>
          </div>
        </section>

        {/* Projects section*/}
        <section>
          <div className="container m-auto space-y-5">
            <h2 className="font-semibold text-4xl mt-1 gradient-text h-12">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="border-2 border-gray-500 rounded-md p-5">
                <img
                  src={Project1}
                  alt=""
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <h3 className="text-2xl text-center font-semibold mt-5">
                  D_media
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive layout for social media application. HTML5, CSS,
                  ReactJS, Bootstrap
                </p>
                <div className="flex justify-evenly items-center gap-5 mt-5">
                  <button
                    disabled
                    className="text-sm py-3 px-5 border-0 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                  >
                    Live preview
                  </button>
                  <button className="text-sm py-3 px-5 border rounded-full hover:text-blue-500 hover:border-blue-400">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border-2 border-gray-500 rounded-md p-5">
                <img
                  src={Project2}
                  alt=""
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <h3 className="text-2xl text-center font-semibold mt-5">
                  D_media
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive layout for social media application. HTML5, CSS,
                  ReactJS, Bootstrap
                </p>
                <div className="flex justify-evenly items-center gap-5 mt-5">
                  <button className="text-sm py-3 px-5 border-0 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="text-sm py-3 px-5 border rounded-full hover:text-blue-500 hover:border-blue-400">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border-2 border-gray-500 rounded-md p-5">
                <img
                  src={Project3}
                  alt=""
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <h3 className="text-2xl text-center font-semibold mt-5">
                  D_media
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive layout for social media application. HTML5, CSS,
                  ReactJS, Bootstrap
                </p>
                <div className="flex justify-evenly items-center gap-5 mt-5">
                  <button className="py-3 px-5 border-0 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="py-3 px-5 border rounded-full hover:text-blue-500 hover:border-blue-400">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border-2 border-gray-500 rounded-md p-5">
                <img
                  src={Project4}
                  alt=""
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <h3 className="text-2xl text-center font-semibold mt-5">
                  D_media
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive layout for social media application. HTML5, CSS,
                  ReactJS, Bootstrap
                </p>
                <div className="flex justify-evenly items-center gap-5 mt-5">
                  <button className="py-3 px-5 border-0 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Live preview
                  </button>
                  <button className="py-3 px-5 border rounded-full hover:text-blue-500 hover:border-blue-400">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies section */}
        <section>
          <div className="container m-auto space-y-5">
            <h2 className="font-semibold text-4xl mt-1 gradient-text h-12">
              Technologies
            </h2>
            <div className="grid grid-cols-1 gap-y-10 lg:px-24">
              <div>
                <div className="flex justify-between">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="block w-[100%] h-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-md"></span>
              </div>
              <div>
                <div className="flex justify-between">
                  <h2 className="font-semibold">CSS, SASS</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="block w-[100%] h-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-md"></span>
              </div>
              <div>
                <div className="flex justify-between">
                  <h2 className="font-semibold">JavaScript, JQuery</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="block w-[75%] h-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-md"></span>
              </div>
              <div>
                <div className="flex justify-between">
                  <h2 className="font-semibold">Bootstrap, Tailwind</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="block w-[50%] h-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-md"></span>
              </div>
              <div>
                <div className="flex justify-between">
                  <h2 className="font-semibold">ReactJS</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="block w-[60%] h-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-md"></span>
              </div>
              <div>
                <div className="flex justify-between">
                  <h2 className="font-semibold">NextJS</h2>
                  <p className="text-gray-500">Beginner</p>
                </div>
                <span className="block w-[30%] h-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-md"></span>
              </div>
              <div>
                <div className="flex justify-between">
                  <h2 className="font-semibold">UI design in Figma</h2>
                  <p className="text-gray-500">Beginner</p>
                </div>
                <span className="block w-[25%] h-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-md"></span>
              </div>
            </div>
          </div>
        </section>

        {/* Additional skills section */}
        <section>
          <div className="container m-auto space-y-5">
            <h2 className="font-semibold text-4xl mt-1 gradient-text h-12">
              Additional technologies and skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-4">
                  Git/GitHub
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-4">
                  Jest
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-4">
                  Collaboration
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-4">
                  Communication
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-4">
                  Adaptability
                </p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-4">
                  Time management
                </p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-4">
                  Problem-solving
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About me */}
        <section>
          <div className="container m-auto space-y-5">
            <h2 className="font-semibold text-4xl mt-1 gradient-text h-12">
              About me
            </h2>
            <div className="px-5">
              <div className="space-y-28 relative before:absolute before:top-px before:left-16 before:rounded-full before:bottom-10 before:md:bottom-1 before:w-1 before:bg-white">
                <div className="pl-28 relative before:w-5 before:h-5 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-14">
                  <h3 className="absolute -left-4 -top-1 text-lg font-semibold">
                    2023
                  </h3>
                  <p className="">
                    Graduated from TNU (The Neotia University) Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Facere accusamus ad est
                    eos impedit! Ipsum amet, molestias quidem corrupti obcaecati
                    aut! Amet suscipit officia, dicta aut praesentium voluptatum
                    incidunt vitae!
                  </p>
                </div>
  
                <div className="pl-28 relative before:w-5 before:h-5 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-14">
                  <h3 className="absolute -left-4 -top-1 text-lg font-semibold">
                    2023
                  </h3>
                  <p>
                    Graduated from TNU (The Neotia University) Lorem ipsum dolor
                    sit, amet consectetur adipisicing elit. Delectus repudiandae
                    alias eos similique. In excepturi vero repellat omnis, ipsam
                    velit officia quam saepe atque a sequi id nam, laborum nisi!
                  </p>
                </div>
  
                <div className="pl-28 relative before:w-5 before:h-5 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-14">
                  <h3 className="absolute -left-4 -top-1 text-lg font-semibold">
                    2023
                  </h3>
                  <p>Graduated from TNU (The Neotia University)</p>
                </div>
  
                <div className="pl-28 relative before:w-5 before:h-5 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-14">
                  <h3 className="absolute -left-4 -top-1 text-lg font-semibold">
                    2023
                  </h3>
                  <p>Graduated from TNU (The Neotia University)</p>
                </div>
  
                <div className="pl-28 relative before:w-5 before:h-5 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-14">
                  <p>Graduated from TNU (The Neotia University)</p>
                  <h3 className="absolute -left-4 -top-1 text-lg font-semibold">
                    2023
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container m-auto flex flex-col items-center gap-5 justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright&#169; 2024</p>
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <a href="">
                  <img src={LinkedIn} className="w-6"  alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={LinkedIn} className="w-6"  alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
