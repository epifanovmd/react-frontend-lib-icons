import React, { FC, memo } from 'react';
import Numeric7BoxMultipleSvg from '../svg/numeric-7-box-multiple.svg';

export interface INumeric7BoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric7BoxMultipleIcon: FC<INumeric7BoxMultipleIconProps> = memo(props => {
  return <Numeric7BoxMultipleSvg {...props} />;
});
