import React, { FC, memo } from 'react';
import LinkBoxVariantSvg from '../svg/link-box-variant.svg';

export interface ILinkBoxVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkBoxVariantIcon: FC<ILinkBoxVariantIconProps> = memo(props => {
  return <LinkBoxVariantSvg {...props} />;
});
