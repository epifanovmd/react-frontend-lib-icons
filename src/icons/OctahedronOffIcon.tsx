import React, { FC, memo } from 'react';
import OctahedronOffSvg from '../svg/octahedron-off.svg';

export interface IOctahedronOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OctahedronOffIcon: FC<IOctahedronOffIconProps> = memo(props => {
  return <OctahedronOffSvg {...props} />;
});
