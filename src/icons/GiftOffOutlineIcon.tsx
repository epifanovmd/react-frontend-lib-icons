import React, { FC, memo } from 'react';
import GiftOffOutlineSvg from '../svg/gift-off-outline.svg';

export interface IGiftOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GiftOffOutlineIcon: FC<IGiftOffOutlineIconProps> = memo(props => {
  return <GiftOffOutlineSvg {...props} />;
});
