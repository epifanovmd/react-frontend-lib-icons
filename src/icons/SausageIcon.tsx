import React, { FC, memo } from 'react';
import SausageSvg from '../svg/sausage.svg';

export interface ISausageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SausageIcon: FC<ISausageIconProps> = memo(props => {
  return <SausageSvg {...props} />;
});
