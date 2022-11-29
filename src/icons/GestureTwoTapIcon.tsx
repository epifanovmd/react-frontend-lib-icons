import React, { FC, memo } from 'react';
import GestureTwoTapSvg from '../svg/gesture-two-tap.svg';

export interface IGestureTwoTapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GestureTwoTapIcon: FC<IGestureTwoTapIconProps> = memo(props => {
  return <GestureTwoTapSvg {...props} />;
});
