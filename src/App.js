import { Canvas } from "@react-three/fiber";
import "./App.css";
import CanvasPage from "./components/CanvasPage";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  useTrail,
  useChain,
  useSprings,
  animated,
  useSpringRef,
  useSpring,
} from "@react-spring/web";
import styles from "./styles.module.css";
import {
  AiFillLinkedin,
  AiOutlineDownload,
  AiOutlineGithub,
  AiTwotoneMail,
} from "react-icons/ai";
import { Suspense } from "react";
import Loader from "./components/Loader";
import { useWaitContext } from "./context/waitContext";

const COORDS = [
  [80, 30],
  [120, 30],
  [80, 50],
  [90, 60],
  [100, 60],
  [110, 60],

  [120, 50],
];

const STROKE_WIDTH = 0.5;

const OFFSET = STROKE_WIDTH / 2;

const MAX_WIDTH = 200 + OFFSET * 2;
const MAX_HEIGHT = 100 + OFFSET * 2;

function App() {
  const gridApi = useSpringRef();

  const gridSprings = useTrail(32, {
    ref: gridApi,
    from: {
      x2: 0,
      y2: 0,
    },
    to: {
      x2: MAX_WIDTH,
      y2: MAX_HEIGHT,
    },
  });

  const boxApi = useSpringRef();

  const [boxSprings] = useSprings(7, (i) => ({
    ref: boxApi,
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
    delay: i * 100,
    config: {
      mass: 2,
      tension: 220,
    },
  }));

  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 4000,
    }),
    []
  );
  useChain([gridApi, boxApi, api], [0, 1, 2], 1500);

  const { wait } = useWaitContext();

  return (
    <div className="App relative z-0 ">
      <span className=" ">
        <Canvas style={{zIndex: 1}} shadows color="black">
          <Suspense fallback={<Loader />}>
            <CanvasPage />
          </Suspense>
        </Canvas>
        {wait && (
          <Parallax
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
              left: 0,
            }}
            pages={3}
          >
            <ParallaxLayer
              offset={0}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              speed={1}
            >
              <div className="bg-white/30 p-6 rounded-md absolute backdrop-blur-sm ">
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className={styles["background-container"]}
                >
                  <div className={styles.container}>
                    <svg viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}>
                      <g>
                        {gridSprings.map(({ x2 }, index) => (
                          <animated.line
                            x1={0}
                            y1={index * 10 + OFFSET}
                            x2={x2}
                            y2={index * 10 + OFFSET}
                            key={index}
                            strokeWidth={STROKE_WIDTH}
                            stroke="currentColor"
                          />
                        ))}
                        {gridSprings.map(({ y2 }, index) => (
                          <animated.line
                            x1={index * 10 + OFFSET}
                            y1={0}
                            x2={index * 10 + OFFSET}
                            y2={y2}
                            key={index}
                            strokeWidth={STROKE_WIDTH}
                            stroke="currentColor"
                          />
                        ))}
                      </g>
                      {boxSprings.map(({ scale }, index) => (
                        <animated.rect
                          key={index}
                          width={10}
                          height={10}
                          fill="currentColor"
                          style={{
                            transformOrigin: `${5 + OFFSET * 2}px ${
                              5 + OFFSET * 2
                            }px`,
                            transform: `translate(${
                              COORDS[index][0] + OFFSET
                            }px, ${COORDS[index][1] + OFFSET}px)`,
                            scale,
                          }}
                        />
                      ))}
                    </svg>
                  </div>
                  <animated.h3
                    className={"text-white font-mono text-lg"}
                    style={props}
                  >
                    printf("SCROLL")
                  </animated.h3>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={1}
              speed={0.3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="w-full flex justify-center items-center">
                <div className="bg-white/30 backdrop-blur-sm lg:w-4/6 w-full lg:rounded-md flex items-center justify-center text-[#00ff40]">
                  <ul className="flex   lg:items-baseline justify-center lg:list-disc text-lg flex-col gap-4">
                    <li className="list-none font-semibold  list-item">
                      <h1 className="text-xl text-white lg:text-2xl  font-mono">
                        Who is Batuhan Bahayetmez?{" "}
                      </h1>
                    </li>
                    <span className="text-base flex lg:flex-col items-baseline ">
                      <li className=" list-item">
                        {" "}
                        <p>I am a student at Sakarya University 📚</p>
                      </li>
                      <li className=" list-item">
                        {" "}
                        <p>I'm developing myself on the web development 💻</p>
                      </li>
                      <li className=" list-item">
                        {" "}
                        <p>I generally work with MERN</p>
                      </li>
                    </span>
                  </ul>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2.3} speed={0.2}>
              <div className="w-full flex justify-center items-center">
                <div className="bg-white/30 backdrop-blur-sm lg:w-4/6 w-full lg:rounded-md p-2 font-mono flex flex-col justify-center items-center">
                  <h1 className="text-center font-bold lg:text-2xl text-xl text-white">
                    You can reach my accounts in details below.{" "}
                  </h1>
                  <ul className="flex font-semibold  items-baseline list-disc text-[#00ff40] flex-col gap-4">
                    <li>
                      <a
                        href="https://github.com/batu0b"
                        className="flex text-[#00ff40]  gap-1"
                      >
                        GitHub <AiOutlineGithub size={20} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/batuhan-bahayetmez-610a45224/"
                        className="flex text-[#00ff40] gap-1"
                      >
                        LinkenIn <AiFillLinkedin size={20} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:batuhan.bahayetmez@gmail.com"
                        className="flex text-[#00ff40] gap-1"
                      >
                        <span style={{ marginRight: 2 }}>
                          {" "}
                          batuhan.bahayetmez@gmail.com{" "}
                        </span>
                        <AiTwotoneMail size={20} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </ParallaxLayer>
          </Parallax>
          ) }
      </span>
    </div>
  );
}

export default App;
