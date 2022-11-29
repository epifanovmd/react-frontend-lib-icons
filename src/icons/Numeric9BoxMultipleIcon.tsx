import React, { FC, memo } from 'react';
import Numeric9BoxMultipleSvg from '../svg/numeric-9-box-multiple.svg';

export interface INumeric9BoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9BoxMultipleIcon: FC<INumeric9BoxMultipleIconProps> = memo(props => {
  return <Numeric9BoxMultipleSvg {...props} />;
});
