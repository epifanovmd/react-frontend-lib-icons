import React, { FC, memo } from 'react';
import OctahedronSvg from '../svg/octahedron.svg';

export interface IOctahedronIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OctahedronIcon: FC<IOctahedronIconProps> = memo(props => {
  return <OctahedronSvg {...props} />;
});
