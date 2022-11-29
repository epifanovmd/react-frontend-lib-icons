import React, { FC, memo } from 'react';
import NatureSvg from '../svg/nature.svg';

export interface INatureIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NatureIcon: FC<INatureIconProps> = memo(props => {
  return <NatureSvg {...props} />;
});
