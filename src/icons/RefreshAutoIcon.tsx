import React, { FC, memo } from 'react';
import RefreshAutoSvg from '../svg/refresh-auto.svg';

export interface IRefreshAutoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RefreshAutoIcon: FC<IRefreshAutoIconProps> = memo(props => {
  return <RefreshAutoSvg {...props} />;
});
