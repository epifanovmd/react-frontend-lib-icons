import React, { FC, memo } from 'react';
import GiftOpenOutlineSvg from '../svg/gift-open-outline.svg';

export interface IGiftOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GiftOpenOutlineIcon: FC<IGiftOpenOutlineIconProps> = memo(props => {
  return <GiftOpenOutlineSvg {...props} />;
});
