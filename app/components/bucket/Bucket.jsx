'use client'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


const Bucket = () => {

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };



  const options = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          }
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
          bounce: false,
          direction: "none",
          enable: true,
          out_mode: "out",
          random: true,
          speed: 0.1,
          straight: false
        },
        rotate: {
          animation: {
            enable: false,
            speed: 10,
            sync: false
          }
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 1,
        },
        "shape": {
          "type": "image",
          "options": {
            "image": [
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              },
              {
                "src": "https://i.ibb.co/7gzpK5W/Content-Creators.png",
                "width": 126,
                "height": 35,
                "particles": {
                  "size": {
                    "value": 64
                  }
                }
              }
            ]
          }
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="capsuel"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}

export default Bucket