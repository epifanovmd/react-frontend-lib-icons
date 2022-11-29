import React, { FC, memo } from 'react';
import TuneVariantSvg from '../svg/tune-variant.svg';

export interface ITuneVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TuneVariantIcon: FC<ITuneVariantIconProps> = memo(props => {
  return <TuneVariantSvg {...props} />;
});
