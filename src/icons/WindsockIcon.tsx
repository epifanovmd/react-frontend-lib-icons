import React, { FC, memo } from 'react';
import WindsockSvg from '../svg/windsock.svg';

export interface IWindsockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindsockIcon: FC<IWindsockIconProps> = memo(props => {
  return <WindsockSvg {...props} />;
});
