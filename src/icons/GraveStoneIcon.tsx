import React, { FC, memo } from 'react';
import GraveStoneSvg from '../svg/grave-stone.svg';

export interface IGraveStoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GraveStoneIcon: FC<IGraveStoneIconProps> = memo(props => {
  return <GraveStoneSvg {...props} />;
});
