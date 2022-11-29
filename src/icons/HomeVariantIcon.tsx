import React, { FC, memo } from 'react';
import HomeVariantSvg from '../svg/home-variant.svg';

export interface IHomeVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeVariantIcon: FC<IHomeVariantIconProps> = memo(props => {
  return <HomeVariantSvg {...props} />;
});
