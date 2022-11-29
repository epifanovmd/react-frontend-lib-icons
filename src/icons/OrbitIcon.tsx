import React, { FC, memo } from 'react';
import OrbitSvg from '../svg/orbit.svg';

export interface IOrbitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OrbitIcon: FC<IOrbitIconProps> = memo(props => {
  return <OrbitSvg {...props} />;
});
