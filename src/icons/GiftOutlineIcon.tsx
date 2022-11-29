import React, { FC, memo } from 'react';
import GiftOutlineSvg from '../svg/gift-outline.svg';

export interface IGiftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GiftOutlineIcon: FC<IGiftOutlineIconProps> = memo(props => {
  return <GiftOutlineSvg {...props} />;
});
