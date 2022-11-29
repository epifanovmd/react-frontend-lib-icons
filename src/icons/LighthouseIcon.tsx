import React, { FC, memo } from 'react';
import LighthouseSvg from '../svg/lighthouse.svg';

export interface ILighthouseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LighthouseIcon: FC<ILighthouseIconProps> = memo(props => {
  return <LighthouseSvg {...props} />;
});
