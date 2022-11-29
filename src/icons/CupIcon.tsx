import React, { FC, memo } from 'react';
import CupSvg from '../svg/cup.svg';

export interface ICupIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CupIcon: FC<ICupIconProps> = memo(props => {
  return <CupSvg {...props} />;
});
