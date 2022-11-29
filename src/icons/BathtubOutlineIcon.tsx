import React, { FC, memo } from 'react';
import BathtubOutlineSvg from '../svg/bathtub-outline.svg';

export interface IBathtubOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BathtubOutlineIcon: FC<IBathtubOutlineIconProps> = memo(props => {
  return <BathtubOutlineSvg {...props} />;
});
