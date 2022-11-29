import React, { FC, memo } from 'react';
import RecycleVariantSvg from '../svg/recycle-variant.svg';

export interface IRecycleVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RecycleVariantIcon: FC<IRecycleVariantIconProps> = memo(props => {
  return <RecycleVariantSvg {...props} />;
});
