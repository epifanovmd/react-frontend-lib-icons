import React, { FC, memo } from 'react';
import RepeatVariantSvg from '../svg/repeat-variant.svg';

export interface IRepeatVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RepeatVariantIcon: FC<IRepeatVariantIconProps> = memo(props => {
  return <RepeatVariantSvg {...props} />;
});
