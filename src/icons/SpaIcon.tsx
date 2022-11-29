import React, { FC, memo } from 'react';
import SpaSvg from '../svg/spa.svg';

export interface ISpaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpaIcon: FC<ISpaIconProps> = memo(props => {
  return <SpaSvg {...props} />;
});
