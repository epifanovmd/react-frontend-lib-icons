import React, { FC, memo } from 'react';
import PassportBiometricSvg from '../svg/passport-biometric.svg';

export interface IPassportBiometricIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PassportBiometricIcon: FC<IPassportBiometricIconProps> = memo(props => {
  return <PassportBiometricSvg {...props} />;
});
