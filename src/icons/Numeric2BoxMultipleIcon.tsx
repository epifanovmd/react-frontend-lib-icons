import React, { FC, memo } from 'react';
import Numeric2BoxMultipleSvg from '../svg/numeric-2-box-multiple.svg';

export interface INumeric2BoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric2BoxMultipleIcon: FC<INumeric2BoxMultipleIconProps> = memo(props => {
  return <Numeric2BoxMultipleSvg {...props} />;
});
