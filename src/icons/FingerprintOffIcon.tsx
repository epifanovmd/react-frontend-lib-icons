import React, { FC, memo } from 'react';
import FingerprintOffSvg from '../svg/fingerprint-off.svg';

export interface IFingerprintOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FingerprintOffIcon: FC<IFingerprintOffIconProps> = memo(props => {
  return <FingerprintOffSvg {...props} />;
});
