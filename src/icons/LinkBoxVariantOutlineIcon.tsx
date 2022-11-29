import React, { FC, memo } from 'react';
import LinkBoxVariantOutlineSvg from '../svg/link-box-variant-outline.svg';

export interface ILinkBoxVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkBoxVariantOutlineIcon: FC<ILinkBoxVariantOutlineIconProps> = memo(props => {
  return <LinkBoxVariantOutlineSvg {...props} />;
});
