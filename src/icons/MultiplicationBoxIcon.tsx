import React, { FC, memo } from 'react';
import MultiplicationBoxSvg from '../svg/multiplication-box.svg';

export interface IMultiplicationBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MultiplicationBoxIcon: FC<IMultiplicationBoxIconProps> = memo(props => {
  return <MultiplicationBoxSvg {...props} />;
});
