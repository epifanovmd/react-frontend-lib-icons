import React, { FC, memo } from 'react';
import NfcVariantSvg from '../svg/nfc-variant.svg';

export interface INfcVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NfcVariantIcon: FC<INfcVariantIconProps> = memo(props => {
  return <NfcVariantSvg {...props} />;
});
