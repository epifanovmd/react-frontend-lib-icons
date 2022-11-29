import React, { FC, memo } from 'react';
import FlashOffSvg from '../svg/flash-off.svg';

export interface IFlashOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlashOffIcon: FC<IFlashOffIconProps> = memo(props => {
  return <FlashOffSvg {...props} />;
});
