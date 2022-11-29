import React, { FC, memo } from 'react';
import WebClockSvg from '../svg/web-clock.svg';

export interface IWebClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebClockIcon: FC<IWebClockIconProps> = memo(props => {
  return <WebClockSvg {...props} />;
});
