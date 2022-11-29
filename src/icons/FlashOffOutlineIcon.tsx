import React, { FC, memo } from 'react';
import FlashOffOutlineSvg from '../svg/flash-off-outline.svg';

export interface IFlashOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlashOffOutlineIcon: FC<IFlashOffOutlineIconProps> = memo(props => {
  return <FlashOffOutlineSvg {...props} />;
});
