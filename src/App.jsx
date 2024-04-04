import "./App.css";
import Projects from "./data/projects.json";
import Profile from "/assets/photo.jpeg";
import LinkedIn from "/assets/linkedin.svg";
import NoImage from "/assets/no-image.png";
import Github from "/assets/github-white.svg";
import Technologies from "./data/technologies.json"
import Additional from "./data/additionalSkills.json"
import About from "./data/about.json"

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
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
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
        <section id="banner">
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
        <section id="projects">
          <div className="container m-auto space-y-5">
            <h2 className="font-semibold text-4xl mt-1 gradient-text h-12">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {Projects.map((item) => (
                <div key={item.name} className="border-2 border-gray-500 rounded-md p-5">
                  <img
                    src={item.src}
                    alt={item.name}
                    onError={(e) => (e.target.src = NoImage)}
                    className="w-full h-80 rounded-lg shadow-md"
                  />
                  <h3 className="text-2xl text-center font-semibold mt-5">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {item.description}
                  </p>
                  <div className="flex justify-evenly items-center gap-5 mt-5">
                    <a
                      disabled={item.isLive}
                      target="_blank"
                      href={item.href}
                      className={`text-sm py-3 px-5 border-0 rounded-full ${
                        item.isLive
                          ? "bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 cursor-pointer"
                          : "bg-gray-600 cursor-not-allowed"
                      }`}
                    >
                      Live preview
                    </a>
                    <a
                      target="_blank"
                      disabled={item.isAllowed}
                      href={item.repositories}
                      className={`text-sm py-3 px-5 border rounded-full ${
                        item.isAllowed
                          ? "hover:text-blue-500 hover:border-blue-400"
                          : "bg-gray-600 border-gray-600 cursor-not-allowed"
                      }`}
                    >
                      Checkout github
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies section */}
        <section id="technologies">
          <div className="container m-auto space-y-5">
            <h2 className="font-semibold text-4xl mt-1 gradient-text h-12">
              Technologies
            </h2>
            <div className="grid grid-cols-1 gap-y-10 lg:px-24">
              {
                Technologies.map(item => (
                  <div key={item.name}>
                <div className="flex justify-between">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-500">{item.proficiency == 1 && "Beginner"} {item.proficiency == 2 && "Intermediate"} {item.proficiency == 3 && "Advanced"}</p>
                </div>
                <span className={`block ${item.proficiency == 1 && "w-[25%]"} ${item.proficiency == 2 && "w-[50%]"} ${item.proficiency == 3 && "w-[100%]"} h-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-md`}></span>
              </div>
                ))
              }
            </div>
          </div>
        </section>

        {/* Additional skills section */}
        <section id="additional">
          <div className="container m-auto space-y-5">
            <h2 className="font-semibold text-4xl mt-1 gradient-text">
              Additional technologies and skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
              {
                Additional.map(item => (
                  <div key={item.name}>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-5 before:absolute relative left-4">
                 {item.name}
                </p>
              </div>
                ))
              }
            </div>
          </div>
        </section>

        {/* About me */}
        <section id="about">
          <div className="container m-auto space-y-5">
            <h2 className="font-semibold text-4xl mt-1 gradient-text h-12">
              About me
            </h2>
            <div className="px-5">
              <div className="space-y-28 relative before:absolute before:top-px before:left-16 before:rounded-full before:bottom-10 before:md:bottom-1 before:w-1 before:bg-white">
                {
                  About.map(item => (
                    <div key={item.year} className="pl-28 relative before:w-5 before:h-5 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-14">
                  <h3 className="absolute -left-4 -top-1 text-xl font-semibold">
                    {item.year}
                  </h3>
                  <p className="text-justify">
                    {item.desc}
                  </p>
                </div>
                  ))
                }
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
                <a href="https://www.linkedin.com/in/shubhamsah-ss55/">
                  <img src={LinkedIn} className="w-6" alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/shubhamsah-ss">
                  <img src={Github} className="w-6" alt="" />
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
