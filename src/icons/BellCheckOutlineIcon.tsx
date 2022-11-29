import React, { FC, memo } from 'react';
import BellCheckOutlineSvg from '../svg/bell-check-outline.svg';

export interface IBellCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellCheckOutlineIcon: FC<IBellCheckOutlineIconProps> = memo(props => {
  return <BellCheckOutlineSvg {...props} />;
});
