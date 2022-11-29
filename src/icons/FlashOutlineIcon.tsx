import React, { FC, memo } from 'react';
import FlashOutlineSvg from '../svg/flash-outline.svg';

export interface IFlashOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlashOutlineIcon: FC<IFlashOutlineIconProps> = memo(props => {
  return <FlashOutlineSvg {...props} />;
});
