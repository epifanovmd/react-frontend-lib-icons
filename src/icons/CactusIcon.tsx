import React, { FC, memo } from 'react';
import CactusSvg from '../svg/cactus.svg';

export interface ICactusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CactusIcon: FC<ICactusIconProps> = memo(props => {
  return <CactusSvg {...props} />;
});
