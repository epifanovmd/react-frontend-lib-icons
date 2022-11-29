import React, { FC, memo } from 'react';
import NotEqualVariantSvg from '../svg/not-equal-variant.svg';

export interface INotEqualVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotEqualVariantIcon: FC<INotEqualVariantIconProps> = memo(props => {
  return <NotEqualVariantSvg {...props} />;
});
