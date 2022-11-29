import React, { FC, memo } from 'react';
import CupboardSvg from '../svg/cupboard.svg';

export interface ICupboardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CupboardIcon: FC<ICupboardIconProps> = memo(props => {
  return <CupboardSvg {...props} />;
});
