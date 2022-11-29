import React, { FC, memo } from 'react';
import CertificateSvg from '../svg/certificate.svg';

export interface ICertificateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CertificateIcon: FC<ICertificateIconProps> = memo(props => {
  return <CertificateSvg {...props} />;
});
