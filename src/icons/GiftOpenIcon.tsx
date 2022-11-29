import React, { FC, memo } from 'react';
import GiftOpenSvg from '../svg/gift-open.svg';

export interface IGiftOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GiftOpenIcon: FC<IGiftOpenIconProps> = memo(props => {
  return <GiftOpenSvg {...props} />;
});
