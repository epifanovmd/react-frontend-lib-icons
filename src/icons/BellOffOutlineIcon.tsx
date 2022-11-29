import React, { FC, memo } from 'react';
import BellOffOutlineSvg from '../svg/bell-off-outline.svg';

export interface IBellOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellOffOutlineIcon: FC<IBellOffOutlineIconProps> = memo(props => {
  return <BellOffOutlineSvg {...props} />;
});
