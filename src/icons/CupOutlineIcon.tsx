import React, { FC, memo } from 'react';
import CupOutlineSvg from '../svg/cup-outline.svg';

export interface ICupOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CupOutlineIcon: FC<ICupOutlineIconProps> = memo(props => {
  return <CupOutlineSvg {...props} />;
});
