import React, { FC, memo } from 'react';
import FactorySvg from '../svg/factory.svg';

export interface IFactoryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FactoryIcon: FC<IFactoryIconProps> = memo(props => {
  return <FactorySvg {...props} />;
});
