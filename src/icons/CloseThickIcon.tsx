import React, { FC, memo } from 'react';
import CloseThickSvg from '../svg/close-thick.svg';

export interface ICloseThickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseThickIcon: FC<ICloseThickIconProps> = memo(props => {
  return <CloseThickSvg {...props} />;
});
