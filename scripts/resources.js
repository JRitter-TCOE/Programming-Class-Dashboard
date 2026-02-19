import Slider from "./Slider.js";
import * as general from "./generalResources.js";
import * as python from "./pythonResources.js";

const resources = $('#resources');

const generalSlider = new Slider(general);
resources.append($('<h2>General</h2>'));
resources.append(generalSlider.html);


const pythonSlider = new Slider(python);
resources.append($('<h2>Python References</h2>'));
resources.append(pythonSlider.html);