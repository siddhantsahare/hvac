import React, { Fragment, useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const Form = () => {
  const [value, setValue] = useState(200);
  const [level, setLevel] = useState(200);

  const toolTipFunc = str => {
    return `${str}`;
  };

  return (
    <Fragment>
      <div class="container form-container shadow-lg">
        <div class="row">
          <div class="col-sm-6 bg-light">
            <br />
            <h4>* Climate Region</h4>
            <br />
            <select className="select-css">
              <option>Select Climate Region</option>
              <option value="Region-1">Region-1</option>
              <option value="Region-2">Region-2</option>
              <option value="Region-3">Region-3</option>
              <option value="Region-4">Region-4</option>
            </select>
            <br />
            <h5># of Space Area (SQFT):</h5>
            <RangeSlider
              value={value}
              min={100}
              max={2000}
              variant="primary"
              size="lg"
              step={50}
              tooltip="off"
              tooltipLabel={toolTipFunc}
              onChange={changeEvent => setValue(changeEvent.target.value)}
            />
            <div className="span-slider mx-auto">{value} Space Area (SQFT)</div>
            <br />

            <h5># of Space Height (FT):</h5>
            <RangeSlider
              value={level}
              min={100}
              max={2000}
              step={50}
              variant="primary"
              size="lg"
              tooltip="off"
              tooltipLabel={toolTipFunc}
              onChange={changeEvent => setLevel(changeEvent.target.value)}
            />
            <div className="span-slider mx-auto">{level} Space Height(FT)</div>
            <br />

            <h4>* Insulation Grade</h4>
            <br />
            <select className="select-css">
              <option>Insulation Grade</option>
              <option value="Region-1">Region-1</option>
              <option value="Region-2">Region-2</option>
              <option value="Region-3">Region-3</option>
              <option value="Region-4">Region-4</option>
            </select>
            <br />
            <h4>* Sun Exposure</h4>
            <br />
            <select className="select-css">
              <option>Sun Exposure</option>
              <option value="Region-1">Region-1</option>
              <option value="Region-2">Region-2</option>
              <option value="Region-3">Region-3</option>
              <option value="Region-4">Region-4</option>
            </select>
            <br />
            <h4>* Amount of Windows</h4>
            <br />
            <select className="select-css">
              <option>Amount of Windows</option>
              <option value="Region-1">Region-1</option>
              <option value="Region-2">Region-2</option>
              <option value="Region-3">Region-3</option>
              <option value="Region-4">Region-4</option>
            </select>
            <br />
            <h4>* Windows & Door Air Tightness</h4>
            <br />
            <select className="select-css">
              <option>Windows & Door Air Tightness</option>
              <option value="Region-1">Region-1</option>
              <option value="Region-2">Region-2</option>
              <option value="Region-3">Region-3</option>
              <option value="Region-4">Region-4</option>
            </select>
            <br />
            <h4>* Is Glass Sun Room</h4>
            <br />
            <div class="d-flex btn-group">
              <button type="button" class="btn p-3 btn-glass btn-secondary">
                Yes
              </button>
              <button type="button" class="btn p-3 btn-glass btn-secondary">
                No
              </button>
            </div>
            <br />
            <h4>* How many Occupants?</h4>
            <br />
            <select className="select-css">
              <option>How many Occupants</option>
              <option value="Region-1">Region-1</option>
              <option value="Region-2">Region-2</option>
              <option value="Region-3">Region-3</option>
              <option value="Region-4">Region-4</option>
            </select>
            <br />
            <h4>* Is there a kitchen</h4>
            <br />
            <div class="d-flex btn-group">
              <button type="button" class="btn p-3 btn-glass btn-secondary">
                Yes
              </button>
              <button type="button" class="btn p-3 btn-glass btn-secondary">
                No
              </button>
            </div>
            <br />
            <h4>* Extra Device Heat Wattage(W) </h4>
            <br />
            <select className="select-css">
              <option>Extra Device Heat Wattage(W)</option>
              <option value="Region-1">Region-1</option>
              <option value="Region-2">Region-2</option>
              <option value="Region-3">Region-3</option>
              <option value="Region-4">Region-4</option>
            </select>
          </div>

          <div class="col-sm-6 bg-light calculator-area">
            <img
              src="//images.ctfassets.net/3q1a0w8cwuwf/5MCDWS1TjpKFmeGHwiYaFx/4a7d2a07249f7256042be28268bcc2c8/climate_map_t.png"
              class="hvac-usa"
            />
            <h5 className="hvac-recommend">RECOMMENED EQUIPMENT CAPACITY</h5>
            <br />
            <br />
            <h4 className="hvac-recommend hvac-calcOutput">0 BTU</h4>
            <br />
            <br />
            <h6 className="hvac-recommend">Calculated Cooling Load: 0 BTU </h6>
            <br />
            <div className="btn hvac-recommend btn-primary">
              <h4>Calculate</h4>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
