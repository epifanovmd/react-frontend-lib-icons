import React, { FC, memo } from 'react';
import FishSvg from '../svg/fish.svg';

export interface IFishIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FishIcon: FC<IFishIconProps> = memo(props => {
  return <FishSvg {...props} />;
});
