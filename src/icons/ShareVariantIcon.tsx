import React, { FC, memo } from 'react';
import ShareVariantSvg from '../svg/share-variant.svg';

export interface IShareVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShareVariantIcon: FC<IShareVariantIconProps> = memo(props => {
  return <ShareVariantSvg {...props} />;
});
