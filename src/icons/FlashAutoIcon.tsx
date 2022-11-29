import React, { FC, memo } from 'react';
import FlashAutoSvg from '../svg/flash-auto.svg';

export interface IFlashAutoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlashAutoIcon: FC<IFlashAutoIconProps> = memo(props => {
  return <FlashAutoSvg {...props} />;
});
