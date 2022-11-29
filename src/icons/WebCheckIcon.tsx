import React, { FC, memo } from 'react';
import WebCheckSvg from '../svg/web-check.svg';

export interface IWebCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebCheckIcon: FC<IWebCheckIconProps> = memo(props => {
  return <WebCheckSvg {...props} />;
});
