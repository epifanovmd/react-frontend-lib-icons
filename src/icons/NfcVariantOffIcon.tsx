import React, { FC, memo } from 'react';
import NfcVariantOffSvg from '../svg/nfc-variant-off.svg';

export interface INfcVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NfcVariantOffIcon: FC<INfcVariantOffIconProps> = memo(props => {
  return <NfcVariantOffSvg {...props} />;
});
