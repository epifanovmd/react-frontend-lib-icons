import React, { FC, memo } from 'react';
import HandPeaceVariantSvg from '../svg/hand-peace-variant.svg';

export interface IHandPeaceVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandPeaceVariantIcon: FC<IHandPeaceVariantIconProps> = memo(props => {
  return <HandPeaceVariantSvg {...props} />;
});
