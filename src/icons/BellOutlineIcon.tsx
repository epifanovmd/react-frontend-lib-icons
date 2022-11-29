import React, { FC, memo } from 'react';
import BellOutlineSvg from '../svg/bell-outline.svg';

export interface IBellOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellOutlineIcon: FC<IBellOutlineIconProps> = memo(props => {
  return <BellOutlineSvg {...props} />;
});
