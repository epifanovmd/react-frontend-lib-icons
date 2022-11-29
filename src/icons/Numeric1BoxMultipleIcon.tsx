import React, { FC, memo } from 'react';
import Numeric1BoxMultipleSvg from '../svg/numeric-1-box-multiple.svg';

export interface INumeric1BoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric1BoxMultipleIcon: FC<INumeric1BoxMultipleIconProps> = memo(props => {
  return <Numeric1BoxMultipleSvg {...props} />;
});
