import React, { FC, memo } from 'react';
import GiftOffSvg from '../svg/gift-off.svg';

export interface IGiftOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GiftOffIcon: FC<IGiftOffIconProps> = memo(props => {
  return <GiftOffSvg {...props} />;
});
