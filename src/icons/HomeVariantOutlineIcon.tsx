import React, { FC, memo } from 'react';
import HomeVariantOutlineSvg from '../svg/home-variant-outline.svg';

export interface IHomeVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeVariantOutlineIcon: FC<IHomeVariantOutlineIconProps> = memo(props => {
  return <HomeVariantOutlineSvg {...props} />;
});
