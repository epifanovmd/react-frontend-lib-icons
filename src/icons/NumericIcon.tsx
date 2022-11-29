import React, { FC, memo } from 'react';
import NumericSvg from '../svg/numeric.svg';

export interface INumericIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NumericIcon: FC<INumericIconProps> = memo(props => {
  return <NumericSvg {...props} />;
});
