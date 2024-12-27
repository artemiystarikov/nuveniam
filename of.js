import { interpolateCubehelixLong } from 'd3-interpolate';

const color1 = '#FF5733';
const color2 = '#33FF57';

const interpolateColor = interpolateCubehelixLong(color1, color2);

// Now we can use the interpolateColor function to get an interpolated color at any point between color1 and color2
const interpolatedColor = interpolateColor(0.5); // This will return a color that is halfway between color1 and color2
