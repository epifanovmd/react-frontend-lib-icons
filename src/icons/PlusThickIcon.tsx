import React, { FC, memo } from 'react';
import PlusThickSvg from '../svg/plus-thick.svg';

export interface IPlusThickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusThickIcon: FC<IPlusThickIconProps> = memo(props => {
  return <PlusThickSvg {...props} />;
});
