import React, { FC, memo } from 'react';
import MowerBagOnSvg from '../svg/mower-bag-on.svg';

export interface IMowerBagOnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MowerBagOnIcon: FC<IMowerBagOnIconProps> = memo(props => {
  return <MowerBagOnSvg {...props} />;
});
