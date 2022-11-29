import React, { FC, memo } from 'react';
import CannabisOffSvg from '../svg/cannabis-off.svg';

export interface ICannabisOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CannabisOffIcon: FC<ICannabisOffIconProps> = memo(props => {
  return <CannabisOffSvg {...props} />;
});
