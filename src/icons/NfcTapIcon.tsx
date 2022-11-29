import React, { FC, memo } from 'react';
import NfcTapSvg from '../svg/nfc-tap.svg';

export interface INfcTapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NfcTapIcon: FC<INfcTapIconProps> = memo(props => {
  return <NfcTapSvg {...props} />;
});
