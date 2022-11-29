import React, { FC, memo } from 'react';
import MowerSvg from '../svg/mower.svg';

export interface IMowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MowerIcon: FC<IMowerIconProps> = memo(props => {
  return <MowerSvg {...props} />;
});
