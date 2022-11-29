import React, { FC, memo } from 'react';
import NfcSvg from '../svg/nfc.svg';

export interface INfcIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NfcIcon: FC<INfcIconProps> = memo(props => {
  return <NfcSvg {...props} />;
});
