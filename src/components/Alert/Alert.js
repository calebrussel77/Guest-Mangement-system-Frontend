import React,{useState} from 'react';

const Alert = props => {
  const [alert, setAlert] = useState(true);

  const handleAlert = () => {
    setAlert(false);
  };
  return (
      <div
          className={
            alert
                ? `max-w-xl w-full border-l-4 border-${props.color}-700 bg-${props.color}-100 shadow-md py-2 my-8 cursor-pointer`
                : 'hidden'
          }
      >
        <div className="text-right" onClick={handleAlert}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="inline-block"
          >
            <path
                className="fill-current text-red-700 h-5 w-5"
                d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
            />
          </svg>
        </div>

        <div>
          <div className="text-center">
            <h3
                className={`text-lg text-${props.color}-700 font-bold uppercase whitespace-no-wrap text-center`}
            >
              {props.color === 'red' ? 'ERROR MESSAGE' : 'SUCCESS MESSAGE'}
            </h3>
          </div>
          <p className="p-0 m-0 text-base text-gray-700 font-bold whitespace-no-wrap text-center">
            {props.msg}
          </p>
        </div>
      </div>
  );
};

export default Alert;
