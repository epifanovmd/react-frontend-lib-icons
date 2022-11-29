import React, { FC, memo } from 'react';
import BellOffSvg from '../svg/bell-off.svg';

export interface IBellOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellOffIcon: FC<IBellOffIconProps> = memo(props => {
  return <BellOffSvg {...props} />;
});
