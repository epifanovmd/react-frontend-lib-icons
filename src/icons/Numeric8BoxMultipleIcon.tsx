import React, { FC, memo } from 'react';
import Numeric8BoxMultipleSvg from '../svg/numeric-8-box-multiple.svg';

export interface INumeric8BoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric8BoxMultipleIcon: FC<INumeric8BoxMultipleIconProps> = memo(props => {
  return <Numeric8BoxMultipleSvg {...props} />;
});
