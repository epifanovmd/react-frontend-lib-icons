import React, { FC, memo } from 'react';
import CertificateOutlineSvg from '../svg/certificate-outline.svg';

export interface ICertificateOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CertificateOutlineIcon: FC<ICertificateOutlineIconProps> = memo(props => {
  return <CertificateOutlineSvg {...props} />;
});
