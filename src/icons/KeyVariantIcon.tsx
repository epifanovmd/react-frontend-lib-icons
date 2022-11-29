import React, { FC, memo } from 'react';
import KeyVariantSvg from '../svg/key-variant.svg';

export interface IKeyVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyVariantIcon: FC<IKeyVariantIconProps> = memo(props => {
  return <KeyVariantSvg {...props} />;
});
