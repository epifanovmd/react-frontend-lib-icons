import React, { FC, memo } from 'react';
import Numeric6CircleOutlineSvg from '../svg/numeric-6-circle-outline.svg';

export interface INumeric6CircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric6CircleOutlineIcon: FC<INumeric6CircleOutlineIconProps> = memo(props => {
  return <Numeric6CircleOutlineSvg {...props} />;
});
