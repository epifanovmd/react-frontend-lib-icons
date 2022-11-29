import React, { FC, memo } from 'react';
import ShareVariantOutlineSvg from '../svg/share-variant-outline.svg';

export interface IShareVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShareVariantOutlineIcon: FC<IShareVariantOutlineIconProps> = memo(props => {
  return <ShareVariantOutlineSvg {...props} />;
});
