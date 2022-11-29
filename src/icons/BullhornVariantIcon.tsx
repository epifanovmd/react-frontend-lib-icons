import React, { FC, memo } from 'react';
import BullhornVariantSvg from '../svg/bullhorn-variant.svg';

export interface IBullhornVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BullhornVariantIcon: FC<IBullhornVariantIconProps> = memo(props => {
  return <BullhornVariantSvg {...props} />;
});
