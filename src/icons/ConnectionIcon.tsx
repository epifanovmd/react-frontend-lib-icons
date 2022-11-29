import React, { FC, memo } from 'react';
import ConnectionSvg from '../svg/connection.svg';

export interface IConnectionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ConnectionIcon: FC<IConnectionIconProps> = memo(props => {
  return <ConnectionSvg {...props} />;
});
