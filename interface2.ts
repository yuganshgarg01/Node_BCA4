interface ScreenResolution {
  width: number;
  height: number;
}

const getScreenResolution = (): ScreenResolution => {
  if (typeof window === 'undefined') {

    return {
      width: 1920,
      height: 1080,

    };
  }

  return {
    width: window.screen.width,
    height: window.screen.height,
  };
};

const resolution = getScreenResolution();
console.log(`Screen Width: ${resolution.width}, Screen Height: ${resolution.height}`);
