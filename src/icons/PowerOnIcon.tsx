import React, { FC, memo } from 'react';
import PowerOnSvg from '../svg/power-on.svg';

export interface IPowerOnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerOnIcon: FC<IPowerOnIconProps> = memo(props => {
  return <PowerOnSvg {...props} />;
});
