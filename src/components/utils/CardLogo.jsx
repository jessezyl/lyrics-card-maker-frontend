import React from "react";

const CardLogo = ({ varient = "large", color = "#000000" }) => {
  return varient == "large" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={color}
      height="50%"
      viewBox="0 0 250 33"
    >
      <path d="m249.6 27.4c-2 1-4.8 1.6-7.2 1.6-4.6 0-7.8-1.3-11-3.7-1-.7-1.4-2.1-1.4-2.6 0-.1-.1-.2-.2-.2-.3-.1-.6-.1-1-.1-1.9 0-3.5 1.5-3.7 3.4-.1 1.1.2 2.1 1 2.9.4.5 2.2 2.1 5.1 3.3 1.9.7 4 1.1 6.5 1.1 2.7 0 5.1-.5 7-1.4 2.5-1.1 4.2-2.7 5.2-3.8.1-.1.1-.2 0-.3-.1-.2-.2-.2-.3-.2m-5.6-4.3c0-.1-.1-.6-.3-1.1-.2-.4-.6-.9-1.1-1.2-1.1-.5-2-.7-2.8-.9l-3.5-.6c-2.3-.4-4.2-1-5.7-1.9-3.1-1.8-4.6-4.8-4.6-8 0-5.7 4.6-8.3 6.1-8.7.1 0 .2 0 .3.1s.1.3 0 .4c-1.2 1.8-1.5 3.6-1.5 4.8 0 5.3 3.9 8.3 9.4 9.3l3.7.7c3.2.6 4.7 1.8 4.7 3.7 0 1.8-1.6 3.4-4.3 3.7-.2 0-.4-.1-.4-.3m-6.3-17.1c2.8 0 4.3.7 6.2 2.1.8.6 1.4.9 2.4.9s2.1-.5 2.8-1.4c.5-.7.8-1.4.8-2.4 0-.1 0-.2-.2-.3-.4-.1-.8-.3-1.2-.6-1.9-1.4-3.6-2.2-6.6-2.2s-5 1.4-5 3.5v.3c0 .1.1.3.3.3.1-.2.4-.2.5-.2m-80.5 22.9c-.5-.1-1.2-.5-1.6-1-.4-.4-.7-1-.7-2.2v-25.3c0-.2-.1-.2-.2-.3-.1 0-.5-.1-.9-.1-2.1 0-3.7 1.7-3.7 3.8v25.3c0 2.6 2 3.9 3.7 3.9 1.9 0 3.8-1.5 3.8-3.8-.2-.1-.3-.2-.4-.3m-137.1-15.6c0-.1-.1-.3-.3-.3-1.2 0-3.5 1.1-3.5 3.7 0 1.9 1.6 3.7 3.7 3.7h2.8c.2 0 .3.1.3.3v1c0 .1.1.3.3.3.6 0 4.5-1.4 4.5-2.4v-2.6c0-.2-.1-.3-.3-.3h-3.8c-2 .1-3.7-1.7-3.7-3.4m.5-11.4c2.9 0 5.1 1.1 7.1 3.1.2.1.3.2.3.3v3.7c0 .2-.1.3-.3.3h-3.7c-.1 0-.2-.1-.4-.3-1.8-1.8-4.4-2.9-7.1-2.9-1.9 0-3.2.5-3.4.5-.1.1-.3.1-.4.1-.2 0-.3-.1-.3-.3s.3-.6.6-1c2.1-2.3 4.5-3.5 7.6-3.5m-16.7 10.9c0 2.3 1 7.1 4.4 10.6 4 4.2 8.3 5.7 12.8 5.7 3.5 0 6.2-1.2 6.4-1.2s.3.1.3.3c0 .1 0 .2-.1.2-2.9 2.8-6.9 4.5-11.3 4.5-9 .1-16.4-7.2-16.4-16.1 0-3.8 1.2-6.7 2.5-8.8.2-.4 1.5-2.1 2-2.6.1-.1.2-.1.3-.1.2 0 .3.1.3.3s-.5 1.2-.9 2.9c-.2 1.1-.3 2.1-.3 4.3m200 14.8h-.2c-1.8.8-3.3 1.5-6.4 1.5-3.6 0-7-1.6-9.3-4-2.3-2.5-3.7-5.6-3.7-9.4v-15.3c0-.2-.1-.2-.2-.3-.1 0-.5-.1-.9-.1-2.1 0-3.7 1.8-3.7 3.9v14.7c0 10.5 8.8 14.4 13.7 14.4 6.2 0 9.8-3.5 10.9-4.9 0 0 .1-.1.1-.2 0-.2-.1-.3-.3-.3m.5-12.7v-14.5c0-.2-.1-.2-.2-.3-.1 0-.5-.1-.9-.1-2.1 0-3.7 1.8-3.7 3.9v14.3c0 1.2-.1 2.3-.3 3.3-.1.5-.6 1.2-.6 1.5 0 .2.1.3.3.3.3 0 2.4-.6 3.5-1.9 1-1.3 1.9-2 1.9-6.5m-129.1 14h-15.5c-2.5 0-4-1.4-4-4v-24.6c0-.2-.1-.3-.3-.3-2.7 0-4.5 1.8-4.5 4.7v23.7c0 2.9 1.7 4.7 4.7 4.7h16.3c2.3 0 3.7-1.5 3.7-3.7-.1-.3-.2-.4-.4-.5m0-26h-13.1c-.2 0-.3.1-.3.3v3.4c0 .2.1.3.3.3h9.8c2.4 0 3.6-1.5 3.6-3.7 0-.1-.1-.3-.3-.3m-13.1 17.1h9c2.4 0 3.6-1.5 3.6-3.7 0-.2-.1-.3-.3-.3h-12.3c-.2 0-.3.1-.3.3v3.4c0 .1.2.3.3.3m43.7 8.9c-.5-.1-1.2-.5-1.6-1-.4-.4-.7-1-.7-2.2v-25.3c0-.1-.1-.2-.2-.3-.1 0-.5-.1-1-.1-2.1 0-3.7 1.7-3.7 3.8v25.3c0 2.6 2 3.9 3.7 3.9 1.9 0 3.8-1.5 3.8-3.8zm18.5-10c0 .2-.1.3-.3.3-.1 0-.2-.1-.3-.2l-4.3-7.1v-8.1c0-2.1 1.7-3.8 3.7-3.8.5 0 .9.1 1 .1s.2.1.2.2zm-14.9-.9 7.2 11.9c1 1.6 2.4 3.1 5.1 3.1 1.2 0 2.3-.5 3.1-1 1.4-1 2-2.6 2-2.8s-.2-.3-.3-.3c-.4 0-1.2.2-2.6-.4-.5-.2-1.7-.8-2.6-2.2l-11.4-19c-.1-.1-.1-.2-.3-.2-.1 0-.3 0-.3.3v10.6z"></path>
    </svg>
  ) : (
    <svg
      fill={color}
      height="100%"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Genius icon</title>
      <path d="M12.897 1.235c-.36.001-.722.013-1.08.017-.218-.028-.371.225-.352.416-.035 1.012.023 2.025-.016 3.036-.037.841-.555 1.596-1.224 2.08-.5.345-1.118.435-1.671.663.121.78.434 1.556 1.057 2.07 1.189 1.053 3.224.86 4.17-.426.945-1.071.453-2.573.603-3.854.286-.48.937-.132 1.317-.49-.34-1.249-.81-2.529-1.725-3.472a11.125 11.125 0 00-1.08-.04zm-10.42.006C.53 2.992-.386 5.797.154 8.361c.384 2.052 1.682 3.893 3.45 4.997.134-.23.23-.476.09-.73-.95-2.814-.138-6.119 1.986-8.19.014-.986.043-1.976-.003-2.961l-.188-.214c-1.003-.051-2.008 0-3.01-.022zm17.88.055l-.205.356c.265.938.6 1.862.72 2.834.58 3.546-.402 7.313-2.614 10.14-1.816 2.353-4.441 4.074-7.334 4.773-2.66.66-5.514.45-8.064-.543-.068.079-.207.237-.275.318 2.664 2.629 6.543 3.969 10.259 3.498 3.075-.327 5.995-1.865 8.023-4.195 1.935-2.187 3.083-5.07 3.125-7.992.122-3.384-1.207-6.819-3.636-9.19z" />
    </svg>
  );
};

export default CardLogo;