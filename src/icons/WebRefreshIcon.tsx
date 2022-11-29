import React, { FC, memo } from 'react';
import WebRefreshSvg from '../svg/web-refresh.svg';

export interface IWebRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebRefreshIcon: FC<IWebRefreshIconProps> = memo(props => {
  return <WebRefreshSvg {...props} />;
});
