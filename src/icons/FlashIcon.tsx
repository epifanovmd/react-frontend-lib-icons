import React, { FC, memo } from 'react';
import FlashSvg from '../svg/flash.svg';

export interface IFlashIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlashIcon: FC<IFlashIconProps> = memo(props => {
  return <FlashSvg {...props} />;
});
