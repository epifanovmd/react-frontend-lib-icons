import React, { FC, memo } from 'react';
import MultiplicationSvg from '../svg/multiplication.svg';

export interface IMultiplicationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MultiplicationIcon: FC<IMultiplicationIconProps> = memo(props => {
  return <MultiplicationSvg {...props} />;
});
