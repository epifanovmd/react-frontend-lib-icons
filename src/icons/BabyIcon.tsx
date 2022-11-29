import React, { FC, memo } from 'react';
import BabySvg from '../svg/baby.svg';

export interface IBabyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BabyIcon: FC<IBabyIconProps> = memo(props => {
  return <BabySvg {...props} />;
});
