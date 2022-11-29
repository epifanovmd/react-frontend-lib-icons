import React, { FC, memo } from 'react';
import VariableSvg from '../svg/variable.svg';

export interface IVariableIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VariableIcon: FC<IVariableIconProps> = memo(props => {
  return <VariableSvg {...props} />;
});
