import React, { FC, memo } from 'react';
import Numeric0BoxMultipleSvg from '../svg/numeric-0-box-multiple.svg';

export interface INumeric0BoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric0BoxMultipleIcon: FC<INumeric0BoxMultipleIconProps> = memo(props => {
  return <Numeric0BoxMultipleSvg {...props} />;
});
