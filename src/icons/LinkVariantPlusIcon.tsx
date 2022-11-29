import React, { FC, memo } from 'react';
import LinkVariantPlusSvg from '../svg/link-variant-plus.svg';

export interface ILinkVariantPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkVariantPlusIcon: FC<ILinkVariantPlusIconProps> = memo(props => {
  return <LinkVariantPlusSvg {...props} />;
});
