import React, { FC, memo } from 'react';
import FunctionVariantSvg from '../svg/function-variant.svg';

export interface IFunctionVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FunctionVariantIcon: FC<IFunctionVariantIconProps> = memo(props => {
  return <FunctionVariantSvg {...props} />;
});
