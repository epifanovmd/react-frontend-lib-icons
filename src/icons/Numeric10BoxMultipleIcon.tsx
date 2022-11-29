import React, { FC, memo } from 'react';
import Numeric10BoxMultipleSvg from '../svg/numeric-10-box-multiple.svg';

export interface INumeric10BoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric10BoxMultipleIcon: FC<INumeric10BoxMultipleIconProps> = memo(props => {
  return <Numeric10BoxMultipleSvg {...props} />;
});
