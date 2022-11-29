import React, { FC, memo } from 'react';
import HighDefinitionSvg from '../svg/high-definition.svg';

export interface IHighDefinitionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HighDefinitionIcon: FC<IHighDefinitionIconProps> = memo(props => {
  return <HighDefinitionSvg {...props} />;
});
