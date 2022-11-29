import React, { FC, memo } from 'react';
import FishOffSvg from '../svg/fish-off.svg';

export interface IFishOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FishOffIcon: FC<IFishOffIconProps> = memo(props => {
  return <FishOffSvg {...props} />;
});
