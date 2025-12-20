import React from 'react';
import styled from 'styled-components';

interface WalkingLoaderProps {
  isTransitioning?: boolean;
}

const WalkingLoader = ({ isTransitioning = false }: WalkingLoaderProps) => {
  return (
    <StyledWrapper className={isTransitioning ? 'transitioning' : ''}>
      <div className="loader">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
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
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.transitioning {
    opacity: 0;
    transform: scale(1.5);
  }

  .loader {
    --size: 250px;
    --duration: 2s;
    --logo-color: hsl(var(--primary));
    --background: linear-gradient(
      0deg,
      hsl(var(--muted) / 0.2) 0%,
      hsl(var(--muted-foreground) / 0.2) 100%
    );
    height: var(--size);
    aspect-ratio: 1;
    position: relative;
    transition: transform 0.8s ease-out;
  }

  &.transitioning .loader {
    transform: scale(0.8);
  }

  .loader .box {
    position: absolute;
    background: hsl(var(--muted) / 0.15);
    background: var(--background);
    border-radius: 50%;
    border-top: 1px solid hsl(var(--muted-foreground));
    box-shadow: hsl(var(--foreground) / 0.3) 0px 10px 10px -0px;
    backdrop-filter: blur(5px);
    animation: ripple var(--duration) infinite ease-in-out;
  }

  .loader .box:nth-child(2) {
    inset: 40%;
    z-index: 99;
  }

  .loader .box:nth-child(3) {
    inset: 30%;
    z-index: 98;
    border-color: hsl(var(--muted-foreground) / 0.8);
    animation-delay: 0.2s;
  }

  .loader .box:nth-child(4) {
    inset: 20%;
    z-index: 97;
    border-color: hsl(var(--muted-foreground) / 0.6);
    animation-delay: 0.4s;
  }

  .loader .box:nth-child(5) {
    inset: 10%;
    z-index: 96;
    border-color: hsl(var(--muted-foreground) / 0.4);
    animation-delay: 0.6s;
  }

  .loader .box:nth-child(6) {
    inset: 0%;
    z-index: 95;
    border-color: hsl(var(--muted-foreground) / 0.2);
    animation-delay: 0.8s;
  }

  .loader .logo {
    position: absolute;
    inset: 40%;
    display: grid;
    place-content: center;
    padding: 15%;
    z-index: 100;
  }

  .loader .logo svg {
    color: var(--logo-color);
    width: 100%;
    animation: color-change var(--duration) infinite ease-in-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      box-shadow: hsl(var(--foreground) / 0.3) 0px 10px 10px -0px;
    }
    50% {
      transform: scale(1.3);
      box-shadow: hsl(var(--foreground) / 0.3) 0px 30px 20px -0px;
    }
    100% {
      transform: scale(1);
      box-shadow: hsl(var(--foreground) / 0.3) 0px 10px 10px -0px;
    }
  }

  @keyframes color-change {
    0% {
      color: var(--logo-color);
    }
    50% {
      color: hsl(var(--foreground));
    }
    100% {
      color: var(--logo-color);
    }
  }
`;

export default WalkingLoader;
