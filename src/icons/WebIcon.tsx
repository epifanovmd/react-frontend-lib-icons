import React, { FC, memo } from 'react';
import WebSvg from '../svg/web.svg';

export interface IWebIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebIcon: FC<IWebIconProps> = memo(props => {
  return <WebSvg {...props} />;
});
