import React from 'react';
import logoImg from '../assets/logo-icon.png';

/**
 * LogoIcon — Crown & Gate brand icon for Rajapagar
 * Uses actual PNG asset, cropped tight with no whitespace.
 * @param {number} size - rendered size in px (both width & height)
 * @param {string} color - unused (kept for API compatibility), image is full-color
 */
export default function LogoIcon({ size = 24 }) {
  return (
    <img
      src={logoImg}
      alt="Rajapagar Logo Icon"
      width={size}
      height={size}
      style={{
        display: 'block',
        objectFit: 'contain',
        objectPosition: 'center',
        width: `${size}px`,
        height: `${size}px`,
        flexShrink: 0
      }}
    />
  );
}
