import React, { FC, memo } from 'react';
import MowerBagSvg from '../svg/mower-bag.svg';

export interface IMowerBagIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MowerBagIcon: FC<IMowerBagIconProps> = memo(props => {
  return <MowerBagSvg {...props} />;
});
