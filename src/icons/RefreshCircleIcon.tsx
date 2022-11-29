import React, { FC, memo } from 'react';
import RefreshCircleSvg from '../svg/refresh-circle.svg';

export interface IRefreshCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RefreshCircleIcon: FC<IRefreshCircleIconProps> = memo(props => {
  return <RefreshCircleSvg {...props} />;
});
