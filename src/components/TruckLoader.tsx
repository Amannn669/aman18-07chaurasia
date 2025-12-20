import React from 'react';
import styled from 'styled-components';

const TruckLoader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="truckWrapper">
          <div className="truckBody">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 198 93"
              className="trucksvg"
            >
              <path
                strokeWidth={3}
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"
              />
              <path
                strokeWidth={3}
                stroke="hsl(var(--primary))"
                fill="hsl(var(--background))"
                d="M146 33.5H181.459C182.17 33.5 182.841 33.8194 183.293 34.3755L192.681 45.5508C193.334 46.3503 193.07 47.5542 192.147 48.0159L181.5 53.5V53.5H146V33.5Z"
              />
              <path
                strokeWidth={2}
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                d="M109 89.5H135V91.5H109V89.5Z"
              />
              <path
                strokeWidth={2}
                stroke="hsl(var(--primary))"
                d="M18 89.5H109V91.5H18V89.5Z"
              />
              <path
                fill="hsl(var(--primary))"
                d="M4 86.5H18V89.5H4V86.5Z"
              />
              <rect
                strokeWidth={2}
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                rx={1}
                height={7}
                width={5}
                y={63}
                x={1}
              />
              <rect
                strokeWidth={2}
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                rx={1}
                height={17}
                width={4}
                y={60}
                x={6}
              />
              <rect
                strokeWidth={2}
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                rx={1}
                height={24}
                width={6}
                y={56}
                x={11}
              />
              <rect
                strokeWidth={2}
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                rx={1}
                height={17}
                width={4}
                y={64}
                x={18}
              />
              <rect
                strokeWidth={2}
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                rx={1}
                height={12}
                width={5}
                y={68}
                x={23}
              />
              <rect
                strokeWidth={3}
                stroke="hsl(var(--primary))"
                fill="hsl(var(--background))"
                rx={2.5}
                height={64}
                width={101}
                y={25}
                x={29}
              />
            </svg>
          </div>
          <div className="truckTires">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              className="tiresvg"
            >
              <circle
                strokeWidth={3}
                stroke="hsl(var(--primary))"
                fill="hsl(var(--muted))"
                r={13.5}
                cy={15}
                cx={15}
              />
              <circle fill="hsl(var(--primary))" r={7} cy={15} cx={15} />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              className="tiresvg"
            >
              <circle
                strokeWidth={3}
                stroke="hsl(var(--primary))"
                fill="hsl(var(--muted))"
                r={13.5}
                cy={15}
                cx={15}
              />
              <circle fill="hsl(var(--primary))" r={7} cy={15} cx={15} />
            </svg>
          </div>
          <div className="road" />
          <svg
            xmlSpace="preserve"
            viewBox="0 0 453.459 453.459"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            id="Capa_1"
            version="1.1"
            fill="hsl(var(--primary))"
            className="lampPost"
          >
            <path d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993
              c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514
              c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16
              c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v56.879
              h-23.698v15.073h10.472v103.398h-10.472v15.074h10.472v47.299H237.69v19.085h28.476v-19.085h-5.452v-47.299h10.472v-15.074h-10.472
              V268.593h10.472v-15.073h-23.699v-56.879c0-43.142,14.604-54.055,30.108-64.584c15.748-10.697,33.6-22.827,33.6-77.737
              C311.195,24.368,286.828,0,252.882,0z" />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  .loader {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .truckWrapper {
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    overflow-x: hidden;
  }

  .truckBody {
    width: 130px;
    height: fit-content;
    margin-bottom: 6px;
    animation: motion 1s linear infinite;
  }

  @keyframes motion {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(3px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .truckTires {
    width: 130px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px 0px 15px;
    position: absolute;
    bottom: 0;
  }

  .truckTires svg {
    width: 24px;
  }

  .road {
    width: 100%;
    height: 1.5px;
    background-color: hsl(var(--muted-foreground) / 0.3);
    position: relative;
    bottom: 0;
    align-self: flex-end;
    border-radius: 3px;
  }

  .road::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 100%;
    background-color: hsl(var(--muted-foreground) / 0.3);
    right: -50%;
    border-radius: 3px;
    animation: roadAnimation 1.4s linear infinite;
    border-left: 10px solid hsl(var(--background));
  }

  .road::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 100%;
    background-color: hsl(var(--muted-foreground) / 0.3);
    right: -65%;
    border-radius: 3px;
    animation: roadAnimation 1.4s linear infinite;
    border-left: 4px solid hsl(var(--background));
  }

  .lampPost {
    position: absolute;
    bottom: 0;
    right: -90%;
    height: 90px;
    animation: roadAnimation 1.4s linear infinite;
  }

  @keyframes roadAnimation {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-350px);
    }
  }
`;

export default TruckLoader;
