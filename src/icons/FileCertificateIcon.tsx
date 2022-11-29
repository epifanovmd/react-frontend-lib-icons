import React, { FC, memo } from 'react';
import FileCertificateSvg from '../svg/file-certificate.svg';

export interface IFileCertificateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCertificateIcon: FC<IFileCertificateIconProps> = memo(props => {
  return <FileCertificateSvg {...props} />;
});
