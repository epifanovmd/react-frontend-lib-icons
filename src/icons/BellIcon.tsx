import React, { FC, memo } from 'react';
import BellSvg from '../svg/bell.svg';

export interface IBellIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellIcon: FC<IBellIconProps> = memo(props => {
  return <BellSvg {...props} />;
});
