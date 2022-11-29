import React, { FC, memo } from 'react';
import AbacusSvg from '../svg/abacus.svg';

export interface IAbacusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AbacusIcon: FC<IAbacusIconProps> = memo(props => {
  return <AbacusSvg {...props} />;
});
