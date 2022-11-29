import React, { FC, memo } from 'react';
import CountertopOutlineSvg from '../svg/countertop-outline.svg';

export interface ICountertopOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CountertopOutlineIcon: FC<ICountertopOutlineIconProps> = memo(props => {
  return <CountertopOutlineSvg {...props} />;
});
