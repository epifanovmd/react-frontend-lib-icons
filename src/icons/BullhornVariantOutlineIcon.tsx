import React, { FC, memo } from 'react';
import BullhornVariantOutlineSvg from '../svg/bullhorn-variant-outline.svg';

export interface IBullhornVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BullhornVariantOutlineIcon: FC<IBullhornVariantOutlineIconProps> = memo(props => {
  return <BullhornVariantOutlineSvg {...props} />;
});
