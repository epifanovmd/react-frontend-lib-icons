import React, { FC, memo } from 'react';
import RefreshSvg from '../svg/refresh.svg';

export interface IRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RefreshIcon: FC<IRefreshIconProps> = memo(props => {
  return <RefreshSvg {...props} />;
});
