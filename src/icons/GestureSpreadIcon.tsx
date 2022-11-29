import React, { FC, memo } from 'react';
import GestureSpreadSvg from '../svg/gesture-spread.svg';

export interface IGestureSpreadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureSpreadIcon: FC<IGestureSpreadIconProps> = memo(props => {
  return <GestureSpreadSvg {...props} />;
});
