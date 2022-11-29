import React, { FC, memo } from 'react';
import CrossCelticSvg from '../svg/cross-celtic.svg';

export interface ICrossCelticIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrossCelticIcon: FC<ICrossCelticIconProps> = memo(props => {
  return <CrossCelticSvg {...props} />;
});
