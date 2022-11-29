import React, { FC, memo } from 'react';
import FishbowlOutlineSvg from '../svg/fishbowl-outline.svg';

export interface IFishbowlOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FishbowlOutlineIcon: FC<IFishbowlOutlineIconProps> = memo(props => {
  return <FishbowlOutlineSvg {...props} />;
});
