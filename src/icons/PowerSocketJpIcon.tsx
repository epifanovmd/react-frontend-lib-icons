import React, { FC, memo } from 'react';
import PowerSocketJpSvg from '../svg/power-socket-jp.svg';

export interface IPowerSocketJpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerSocketJpIcon: FC<IPowerSocketJpIconProps> = memo(props => {
  return <PowerSocketJpSvg {...props} />;
});
