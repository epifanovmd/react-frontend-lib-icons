import React, { FC, memo } from 'react';
import ShurikenSvg from '../svg/shuriken.svg';

export interface IShurikenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShurikenIcon: FC<IShurikenIconProps> = memo(props => {
  return <ShurikenSvg {...props} />;
});
