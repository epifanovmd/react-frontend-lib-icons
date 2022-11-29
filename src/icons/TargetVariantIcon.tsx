import React, { FC, memo } from 'react';
import TargetVariantSvg from '../svg/target-variant.svg';

export interface ITargetVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TargetVariantIcon: FC<ITargetVariantIconProps> = memo(props => {
  return <TargetVariantSvg {...props} />;
});
