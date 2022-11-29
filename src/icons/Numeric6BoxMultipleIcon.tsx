import React, { FC, memo } from 'react';
import Numeric6BoxMultipleSvg from '../svg/numeric-6-box-multiple.svg';

export interface INumeric6BoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric6BoxMultipleIcon: FC<INumeric6BoxMultipleIconProps> = memo(props => {
  return <Numeric6BoxMultipleSvg {...props} />;
});
