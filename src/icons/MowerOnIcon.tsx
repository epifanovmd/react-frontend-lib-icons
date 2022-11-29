import React, { FC, memo } from 'react';
import MowerOnSvg from '../svg/mower-on.svg';

export interface IMowerOnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MowerOnIcon: FC<IMowerOnIconProps> = memo(props => {
  return <MowerOnSvg {...props} />;
});
