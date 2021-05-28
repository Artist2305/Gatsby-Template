declare module '*.module.css';
declare module '*.module.scss';
declare module 'tailwind.macro';
declare module 'simple-react-lightbox';
declare module 'react-rellax';
declare module "\*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}