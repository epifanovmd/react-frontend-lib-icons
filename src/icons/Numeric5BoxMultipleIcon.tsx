import React, { FC, memo } from 'react';
import Numeric5BoxMultipleSvg from '../svg/numeric-5-box-multiple.svg';

export interface INumeric5BoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric5BoxMultipleIcon: FC<INumeric5BoxMultipleIconProps> = memo(props => {
  return <Numeric5BoxMultipleSvg {...props} />;
});
