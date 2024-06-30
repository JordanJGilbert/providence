// src/App.js
import React, { useState } from 'react';
import { determineIdealA1c } from './a1cCalculator';
import './App.css';

function App() {
  const [age, setAge] = useState('');
  const [healthStatus, setHealthStatus] = useState('Healthy');
  const [durationOfDiabetes, setDurationOfDiabetes] = useState('');
  const [historyHypoglycemia, setHistoryHypoglycemia] = useState(false);
  const [advancedMicrovascularComplications, setAdvancedMicrovascularComplications] = useState(false);
  const [extensiveComorbidConditions, setExtensiveComorbidConditions] = useState(false);
  const [lifeExpectancy, setLifeExpectancy] = useState('Long');
  const [frailty, setFrailty] = useState(false);
  const [hypoglycemicMeds, setHypoglycemicMeds] = useState(false);
  const [patientAttitude, setPatientAttitude] = useState('less motivated, nonadherent, poor self-care capabilities');
  const [supportResources, setSupportResources] = useState('limited');
  const [idealA1c, setIdealA1c] = useState(null);

  const calculateA1c = () => {
    const a1c = determineIdealA1c(
      parseInt(age),
      healthStatus,
      parseInt(durationOfDiabetes),
      historyHypoglycemia,
      advancedMicrovascularComplications,
      extensiveComorbidConditions,
      lifeExpectancy,
      frailty,
      hypoglycemicMeds,
      patientAttitude,
      supportResources
    );
    setIdealA1c(a1c);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Ideal A1c Calculator</h1>
        <div className="form-group">
          <label>
            Age:
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Health Status:
            <select value={healthStatus} onChange={(e) => setHealthStatus(e.target.value)}>
              <option value="Healthy">Healthy</option>
              <option value="Complex/Intermediate">Complex/Intermediate</option>
              <option value="Very Complex/Poor">Very Complex/Poor</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Duration of Diabetes (years):
            <input type="number" value={durationOfDiabetes} onChange={(e) => setDurationOfDiabetes(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            History of Severe Hypoglycemia:
            <input type="checkbox" checked={historyHypoglycemia} onChange={(e) => setHistoryHypoglycemia(e.target.checked)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Advanced Microvascular Complications:
            <input type="checkbox" checked={advancedMicrovascularComplications} onChange={(e) => setAdvancedMicrovascularComplications(e.target.checked)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Extensive Comorbid Conditions:
            <input type="checkbox" checked={extensiveComorbidConditions} onChange={(e) => setExtensiveComorbidConditions(e.target.checked)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Life Expectancy:
            <select value={lifeExpectancy} onChange={(e) => setLifeExpectancy(e.target.value)}>
              <option value="Long">Long</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Short">Short</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Frailty:
            <input type="checkbox" checked={frailty} onChange={(e) => setFrailty(e.target.checked)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Hypoglycemic Medications:
            <input type="checkbox" checked={hypoglycemicMeds} onChange={(e) => setHypoglycemicMeds(e.target.checked)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Patient Attitude:
            <select value={patientAttitude} onChange={(e) => setPatientAttitude(e.target.value)}>
              <option value="highly motivated, adherent, excellent self-care capabilities">Highly motivated, adherent, excellent self-care capabilities</option>
              <option value="less motivated, nonadherent, poor self-care capabilities">Less motivated, nonadherent, poor self-care capabilities</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Resources and Support System:
            <select value={supportResources} onChange={(e) => setSupportResources(e.target.value)}>
              <option value="readily available">Readily available</option>
              <option value="limited">Limited</option>
            </select>
          </label>
        </div>
        <button className="calculate-button" onClick={calculateA1c}>Calculate Ideal A1c</button>
        {idealA1c !== null && <h2>Ideal A1c: {idealA1c}%</h2>}
      </div>
    </div>
  );
}

export default App;
