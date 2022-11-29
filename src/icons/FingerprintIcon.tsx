import React, { FC, memo } from 'react';
import FingerprintSvg from '../svg/fingerprint.svg';

export interface IFingerprintIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FingerprintIcon: FC<IFingerprintIconProps> = memo(props => {
  return <FingerprintSvg {...props} />;
});
