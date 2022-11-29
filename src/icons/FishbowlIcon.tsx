import React, { FC, memo } from 'react';
import FishbowlSvg from '../svg/fishbowl.svg';

export interface IFishbowlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FishbowlIcon: FC<IFishbowlIconProps> = memo(props => {
  return <FishbowlSvg {...props} />;
});
