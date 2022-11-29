import React, { FC, memo } from 'react';
import LinkVariantMinusSvg from '../svg/link-variant-minus.svg';

export interface ILinkVariantMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkVariantMinusIcon: FC<ILinkVariantMinusIconProps> = memo(props => {
  return <LinkVariantMinusSvg {...props} />;
});
