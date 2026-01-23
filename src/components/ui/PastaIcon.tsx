import React from 'react';

const PastaIcon = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  background = 'transparent',
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0
}) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push('scaleX(-1)');
  if (flipVertical) transforms.push('scaleY(-1)');

  // Ajustement de la viewBox pour les grandes coordonnées (0 à 1024)
  const viewBox = "-50 -50 1124 1124";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth * 15}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        opacity,
        transform: transforms.join(' ') || undefined,
        filter: shadow > 0 ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : undefined,
        backgroundColor: background !== 'transparent' ? background : undefined
      }}
    >
      <path fill="currentColor" d="m896.59 320l-257-52q-5 49-41 82.5t-86 33.5h-64V64h64q50 0 86 33.5t41 81.5l257-51q128 0 128 95q0 53-36 75t-92 22m-544 128q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v384q0 13-9.5 22.5t-22.5 9.5m-128 576q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v960q0 13-9.5 22.5t-22.5 9.5M.59 352q0-13 9.5-22.5t22.5-9.5h96v64h-96q-13 0-22.5-9.5T.59 352m0-128q0-13 9.5-22.5t22.5-9.5h96v64h-96q-13 0-22.5-9.5T.59 224m0-128q0-13 9.5-22.5t22.5-9.5h96v64h-96q-13 0-22.5-9.5T.59 96"/>
    </svg>
  );
};

export default PastaIcon;
