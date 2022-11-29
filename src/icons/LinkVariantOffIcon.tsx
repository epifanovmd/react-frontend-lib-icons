import React, { FC, memo } from 'react';
import LinkVariantOffSvg from '../svg/link-variant-off.svg';

export interface ILinkVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkVariantOffIcon: FC<ILinkVariantOffIconProps> = memo(props => {
  return <LinkVariantOffSvg {...props} />;
});
