import React from 'react';
import styled from 'styled-components';

const WalkingLoader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <svg viewBox="0 0 200 200" className="head">
          <g id="head">
            <circle fill="hsl(var(--foreground))" cx="83" cy="72" r="35" />
            <circle fill="hsl(var(--foreground))" cx="69" cy="72" r="3" />
            <circle fill="hsl(var(--foreground))" cx="84" cy="58" r="3" />
          </g>
        </svg>
        <svg viewBox="0 0 200 200" className="bod">
          <g id="body">
            <circle fill="hsl(var(--foreground))" cx="83" cy="72" r="35" />
            <circle fill="hsl(var(--foreground))" cx="69" cy="72" r="3" />
            <circle fill="hsl(var(--foreground))" cx="84" cy="58" r="3" />
          </g>
        </svg>
        <svg viewBox="0 0 200 200" className="legl">
          <g id="legl">
            <ellipse
              fill="hsl(var(--foreground))"
              rx="8"
              ry="25"
              cx="17"
              cy="27"
              transform="rotate(10)"
            />
          </g>
        </svg>
        <svg viewBox="0 0 200 200" className="legr">
          <g id="legr">
            <ellipse
              fill="hsl(var(--foreground))"
              rx="8"
              ry="25"
              cx="17"
              cy="27"
              transform="rotate(10)"
            />
            <ellipse
              fill="hsl(var(--foreground))"
              rx="7"
              ry="4"
              cx="20"
              cy="53"
              transform="rotate(10)"
            />
            <ellipse
              fill="hsl(var(--foreground))"
              rx="3"
              ry="2"
              cx="30"
              cy="54"
              transform="rotate(10)"
            />
            <ellipse
              fill="hsl(var(--foreground))"
              rx="8"
              ry="25"
              cx="17"
              cy="27"
              transform="rotate(10)"
            />
            <ellipse
              fill="hsl(var(--foreground))"
              rx="7"
              ry="4"
              cx="20"
              cy="53"
              transform="rotate(10)"
            />
            <ellipse
              fill="hsl(var(--foreground))"
              rx="3"
              ry="2"
              cx="30"
              cy="54"
              transform="rotate(10)"
            />
          </g>
        </svg>
        <svg viewBox="0 0 500 500" id="gnd">
          <g id="gnd">
            <ellipse fill="hsl(var(--foreground))" rx="160" ry="10" cx="250" cy="390" />
            <ellipse fill="hsl(var(--foreground))" rx="100" ry="7" cx="100" cy="420" />
            <ellipse fill="hsl(var(--foreground))" rx="120" ry="5" cx="400" cy="410" />
            <ellipse fill="hsl(var(--foreground))" rx="180" ry="10" cx="270" cy="450" />
            <ellipse fill="hsl(var(--foreground))" rx="50" ry="5" cx="80" cy="470" />
            <ellipse fill="hsl(var(--foreground))" rx="80" ry="8" cx="450" cy="460" />
            <ellipse fill="hsl(var(--foreground))" rx="200" ry="10" cx="300" cy="500" />
          </g>
        </svg>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: hsl(var(--background));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;

  .loader {
    scale: 0.75;
    position: relative;
    width: 200px;
    height: 200px;
    translate: 10px -20px;
  }

  .loader svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .head {
    translate: 27px -30px;
    z-index: 3;
    animation: bob 1s infinite ease-in;
  }

  .bod {
    translate: 0px 30px;
    z-index: 3;
    animation: bob 1s infinite ease-in-out;
  }

  .legr {
    translate: 75px 135px;
    z-index: 0;
    animation: rstep 1s infinite ease-in;
    animation-delay: 0.45s;
  }

  .legl {
    translate: 30px 155px;
    z-index: 3;
    animation: lstep 1s infinite ease-in;
  }

  @keyframes bob {
    0% {
      transform: translateY(0) rotate(3deg);
    }
    5% {
      transform: translateY(0) rotate(3deg);
    }
    25% {
      transform: translateY(5px) rotate(0deg);
    }
    50% {
      transform: translateY(0px) rotate(-3deg);
    }
    70% {
      transform: translateY(5px) rotate(0deg);
    }
    100% {
      transform: translateY(0) rotate(3deg);
    }
  }

  @keyframes lstep {
    0% {
      transform: translateY(0) rotate(-5deg);
    }
    33% {
      transform: translateY(-15px) translate(32px) rotate(35deg);
    }
    66% {
      transform: translateY(0) translate(25px) rotate(-25deg);
    }
    100% {
      transform: translateY(0) rotate(-5deg);
    }
  }

  @keyframes rstep {
    0% {
      transform: translateY(0) translate(0px) rotate(-5deg);
    }
    33% {
      transform: translateY(-10px) translate(30px) rotate(35deg);
    }
    66% {
      transform: translateY(0) translate(20px) rotate(-25deg);
    }
    100% {
      transform: translateY(0) translate(0px) rotate(-5deg);
    }
  }

  #gnd {
    translate: -140px 0;
    rotate: 10deg;
    z-index: -1;
    filter: blur(0.5px) drop-shadow(1px 3px 5px hsl(var(--foreground) / 0.5));
    opacity: 0.25;
    animation: scroll 5s infinite linear;
  }

  @keyframes scroll {
    0% {
      transform: translateY(25px) translate(50px);
      opacity: 0;
    }
    33% {
      opacity: 0.25;
    }
    66% {
      opacity: 0.25;
    }
    to {
      transform: translateY(-50px) translate(-100px);
      opacity: 0;
    }
  }
`;

export default WalkingLoader;
