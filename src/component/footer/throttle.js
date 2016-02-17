import React from 'react';

const {func, bool, number} = React.PropTypes;

const Throttle = (props) => {
  const {throttleRate, throttleEnabled, setThrottleRate, toggleThrottle} = props;

  const icon = throttleEnabled ? 'fa fa-circle' : 'fa fa-circle-o';
  const message = throttleEnabled ? 'Throttle to (kBps):' : 'Throttling disabled';

  let input = null;
  if (throttleEnabled) {
    const onChange = (event) => setThrottleRate(parseInt(event.target.value, 10));
    input = <input type="text" defaultValue={throttleRate} onChange={onChange} />;
  }

  return <div className="throttle">
    <button title="Toggle throttling" onClick={toggleThrottle}>
      <i className={icon} />
      <span className="message">{message}</span>
    </button>
    {input}
  </div>;
};

Throttle.propTypes = {
  toggleThrottle: func.isRequired,
  setThrottleRate: func.isRequired,
  throttleEnabled: bool,
  throttleRate: number
};

export default Throttle;
