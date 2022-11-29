import React, { FC, memo } from 'react';
import GreasePencilSvg from '../svg/grease-pencil.svg';

export interface IGreasePencilIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GreasePencilIcon: FC<IGreasePencilIconProps> = memo(props => {
  return <GreasePencilSvg {...props} />;
});
