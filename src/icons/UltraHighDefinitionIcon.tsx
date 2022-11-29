import React, { FC, memo } from 'react';
import UltraHighDefinitionSvg from '../svg/ultra-high-definition.svg';

export interface IUltraHighDefinitionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UltraHighDefinitionIcon: FC<IUltraHighDefinitionIconProps> = memo(props => {
  return <UltraHighDefinitionSvg {...props} />;
});
