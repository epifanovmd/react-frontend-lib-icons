import React, { FC, memo } from 'react';
import LinkVariantSvg from '../svg/link-variant.svg';

export interface ILinkVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkVariantIcon: FC<ILinkVariantIconProps> = memo(props => {
  return <LinkVariantSvg {...props} />;
});
