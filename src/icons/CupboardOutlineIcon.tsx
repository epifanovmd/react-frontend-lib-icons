import React, { FC, memo } from 'react';
import CupboardOutlineSvg from '../svg/cupboard-outline.svg';

export interface ICupboardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CupboardOutlineIcon: FC<ICupboardOutlineIconProps> = memo(props => {
  return <CupboardOutlineSvg {...props} />;
});
