import React, { FC, memo } from 'react';
import FunctionSvg from '../svg/function.svg';

export interface IFunctionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FunctionIcon: FC<IFunctionIconProps> = memo(props => {
  return <FunctionSvg {...props} />;
});
