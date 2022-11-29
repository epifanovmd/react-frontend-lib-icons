import React, { FC, memo } from 'react';
import SausageOffSvg from '../svg/sausage-off.svg';

export interface ISausageOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SausageOffIcon: FC<ISausageOffIconProps> = memo(props => {
  return <SausageOffSvg {...props} />;
});
