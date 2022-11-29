import React, { FC, memo } from 'react';
import GiftSvg from '../svg/gift.svg';

export interface IGiftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GiftIcon: FC<IGiftIconProps> = memo(props => {
  return <GiftSvg {...props} />;
});
