import React, { FC, memo } from 'react';
import HeartFlashSvg from '../svg/heart-flash.svg';

export interface IHeartFlashIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartFlashIcon: FC<IHeartFlashIconProps> = memo(props => {
  return <HeartFlashSvg {...props} />;
});
