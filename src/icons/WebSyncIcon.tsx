import React, { FC, memo } from 'react';
import WebSyncSvg from '../svg/web-sync.svg';

export interface IWebSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebSyncIcon: FC<IWebSyncIconProps> = memo(props => {
  return <WebSyncSvg {...props} />;
});
