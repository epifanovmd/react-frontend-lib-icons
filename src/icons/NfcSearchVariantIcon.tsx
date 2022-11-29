import React, { FC, memo } from 'react';
import NfcSearchVariantSvg from '../svg/nfc-search-variant.svg';

export interface INfcSearchVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NfcSearchVariantIcon: FC<INfcSearchVariantIconProps> = memo(props => {
  return <NfcSearchVariantSvg {...props} />;
});
