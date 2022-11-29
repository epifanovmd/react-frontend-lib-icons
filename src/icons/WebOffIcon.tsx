import React, { FC, memo } from 'react';
import WebOffSvg from '../svg/web-off.svg';

export interface IWebOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebOffIcon: FC<IWebOffIconProps> = memo(props => {
  return <WebOffSvg {...props} />;
});
