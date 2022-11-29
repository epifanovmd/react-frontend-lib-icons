import React, { FC, memo } from 'react';
import MotherHeartSvg from '../svg/mother-heart.svg';

export interface IMotherHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MotherHeartIcon: FC<IMotherHeartIconProps> = memo(props => {
  return <MotherHeartSvg {...props} />;
});
