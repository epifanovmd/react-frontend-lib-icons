import React, { FC, memo } from 'react';
import AngleObtuseSvg from '../svg/angle-obtuse.svg';

export interface IAngleObtuseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AngleObtuseIcon: FC<IAngleObtuseIconProps> = memo(props => {
  return <AngleObtuseSvg {...props} />;
});
