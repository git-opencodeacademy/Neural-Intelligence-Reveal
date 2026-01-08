
import { Point } from './types';

export const COLORS = {
  primary: '#8b5cf6', // Violet 500
  secondary: '#3b82f6', // Blue 500
  accent: '#a78bfa', // Violet 400
  bg: '#050505',
};

// Generates points for a hexagonal logo shape
export const getLogoPoints = (centerX: number, centerY: number, size: number, density: number): Point[] => {
  const points: Point[] = [];
  const sides = 6;
  
  // Outer Hexagon
  for (let s = 0; s < sides; s++) {
    const angle1 = (s * 2 * Math.PI) / sides;
    const angle2 = ((s + 1) * 2 * Math.PI) / sides;
    
    const x1 = centerX + size * Math.cos(angle1);
    const y1 = centerY + size * Math.sin(angle1);
    const x2 = centerX + size * Math.cos(angle2);
    const y2 = centerY + size * Math.sin(angle2);
    
    for (let i = 0; i < density; i++) {
      const t = i / density;
      points.push({
        x: x1 + (x2 - x1) * t,
        y: y1 + (y2 - y1) * t
      });
    }
  }

  // Inner Hexagon
  const innerSize = size * 0.5;
  for (let s = 0; s < sides; s++) {
    const angle1 = (s * 2 * Math.PI) / sides;
    const angle2 = ((s + 1) * 2 * Math.PI) / sides;
    
    const x1 = centerX + innerSize * Math.cos(angle1);
    const y1 = centerY + innerSize * Math.sin(angle1);
    const x2 = centerX + innerSize * Math.cos(angle2);
    const y2 = centerY + innerSize * Math.sin(angle2);
    
    for (let i = 0; i < density / 2; i++) {
      const t = i / (density / 2);
      points.push({
        x: x1 + (x2 - x1) * t,
        y: y1 + (y2 - y1) * t
      });
    }
  }

  // Vertical connecters (AI brain like)
  for (let s = 0; s < sides; s++) {
    const angle = (s * 2 * Math.PI) / sides;
    const x1 = centerX + size * Math.cos(angle);
    const y1 = centerY + size * Math.sin(angle);
    const x2 = centerX + innerSize * Math.cos(angle);
    const y2 = centerY + innerSize * Math.sin(angle);
    
    for (let i = 0; i < 5; i++) {
      const t = i / 5;
      points.push({
        x: x1 + (x2 - x1) * t,
        y: y1 + (y2 - y1) * t
      });
    }
  }

  return points;
};
