import React, { FC, memo } from 'react';
import SubwayVariantSvg from '../svg/subway-variant.svg';

export interface ISubwayVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SubwayVariantIcon: FC<ISubwayVariantIconProps> = memo(props => {
  return <SubwayVariantSvg {...props} />;
});
