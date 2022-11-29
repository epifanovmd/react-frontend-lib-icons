import React, { FC, memo } from 'react';
import PowerPlugOffSvg from '../svg/power-plug-off.svg';

export interface IPowerPlugOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerPlugOffIcon: FC<IPowerPlugOffIconProps> = memo(props => {
  return <PowerPlugOffSvg {...props} />;
});
