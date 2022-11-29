import React, { FC, memo } from 'react';
import SwordCrossSvg from '../svg/sword-cross.svg';

export interface ISwordCrossIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwordCrossIcon: FC<ISwordCrossIconProps> = memo(props => {
  return <SwordCrossSvg {...props} />;
});
