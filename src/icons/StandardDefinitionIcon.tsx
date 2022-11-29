import React, { FC, memo } from 'react';
import StandardDefinitionSvg from '../svg/standard-definition.svg';

export interface IStandardDefinitionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StandardDefinitionIcon: FC<IStandardDefinitionIconProps> = memo(props => {
  return <StandardDefinitionSvg {...props} />;
});
