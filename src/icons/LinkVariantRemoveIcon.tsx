import React, { FC, memo } from 'react';
import LinkVariantRemoveSvg from '../svg/link-variant-remove.svg';

export interface ILinkVariantRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkVariantRemoveIcon: FC<ILinkVariantRemoveIconProps> = memo(props => {
  return <LinkVariantRemoveSvg {...props} />;
});
