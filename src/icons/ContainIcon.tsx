import React, { FC, memo } from 'react';
import ContainSvg from '../svg/contain.svg';

export interface IContainIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContainIcon: FC<IContainIconProps> = memo(props => {
  return <ContainSvg {...props} />;
});
