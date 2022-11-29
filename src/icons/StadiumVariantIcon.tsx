import React, { FC, memo } from 'react';
import StadiumVariantSvg from '../svg/stadium-variant.svg';

export interface IStadiumVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StadiumVariantIcon: FC<IStadiumVariantIconProps> = memo(props => {
  return <StadiumVariantSvg {...props} />;
});
