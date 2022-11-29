import React, { FC, memo } from 'react';
import FlashRedEyeSvg from '../svg/flash-red-eye.svg';

export interface IFlashRedEyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlashRedEyeIcon: FC<IFlashRedEyeIconProps> = memo(props => {
  return <FlashRedEyeSvg {...props} />;
});
