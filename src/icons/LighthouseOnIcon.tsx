import React, { FC, memo } from 'react';
import LighthouseOnSvg from '../svg/lighthouse-on.svg';

export interface ILighthouseOnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LighthouseOnIcon: FC<ILighthouseOnIconProps> = memo(props => {
  return <LighthouseOnSvg {...props} />;
});
