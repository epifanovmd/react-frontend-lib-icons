import React, { FC, memo } from 'react';
import TsunamiSvg from '../svg/tsunami.svg';

export interface ITsunamiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TsunamiIcon: FC<ITsunamiIconProps> = memo(props => {
  return <TsunamiSvg {...props} />;
});
