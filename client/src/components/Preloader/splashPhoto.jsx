import "./splashPhoto.css";

const { createContext, useState, useContext } = require("react");

const SplashContext = createContext({
  showSplash: () => {},
  hideSplash: () => {},
  isShown: true,
});

export const SplashPhoto = ({ children }) => {
  const [isShown, setIsShown] = useState(true);

  const splashBtn = () => {
    setIsShown(false);
  };
  

  return (
    <SplashContext.Provider
      value={{
        showSplash: () => {
          setIsShown(true);
        },
        hideSplash: () => {
          setIsShown(false);
        },
        isShown,
      }}
    >
      {isShown ? (
        <div className="intro-obj">
          <h1 className="intro-text">WELCOME TO MARS EXPLORATION</h1>
          <button className="btn2" onClick={splashBtn}>
            Click to acces Mars Rovers
          </button>
          <img
            className="intro-photo"
            src="./Photos/9102_Rover_Tracks_2-web.jpg"
            alt="..."
          />
        </div>
      ) : null}
      {children}
    </SplashContext.Provider>
  );
};

export const useSplash = () => {
  const context = useContext(SplashContext);

  if (!context) {
    throw new Error("Must be in SplashProvider!");
  }

  return context;
};
