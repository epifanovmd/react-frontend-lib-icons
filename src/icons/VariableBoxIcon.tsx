import React, { FC, memo } from 'react';
import VariableBoxSvg from '../svg/variable-box.svg';

export interface IVariableBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VariableBoxIcon: FC<IVariableBoxIconProps> = memo(props => {
  return <VariableBoxSvg {...props} />;
});
