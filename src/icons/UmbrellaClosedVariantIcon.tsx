import React, { FC, memo } from 'react';
import UmbrellaClosedVariantSvg from '../svg/umbrella-closed-variant.svg';

export interface IUmbrellaClosedVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UmbrellaClosedVariantIcon: FC<IUmbrellaClosedVariantIconProps> = memo(props => {
  return <UmbrellaClosedVariantSvg {...props} />;
});
