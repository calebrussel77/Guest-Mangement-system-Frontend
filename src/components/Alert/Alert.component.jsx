import React from 'react';

const Alert = props => {
  return (
    <div
      className={`mx-auto max-w-xl border-l-4 border-${props.color}-700 bg-${props.color}-100 shadow-md py-3 my-8`}
    >
      <div className="text-center">
        <h3
          className={`text-lg text-${props.color}-700 font-bold uppercase whitespace-no-wrap`}
        >
          {props.color === 'red' ? 'ERROR MESSAGE' : 'SUCCESS MESSAGE'}
        </h3>
        <p className="p-0 m-0 text-base text-gray-700 font-bold whitespace-no-wrap">
          {props.msg}
        </p>
      </div>
    </div>
  );
};

export default Alert;
