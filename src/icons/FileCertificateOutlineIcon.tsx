import React, { FC, memo } from 'react';
import FileCertificateOutlineSvg from '../svg/file-certificate-outline.svg';

export interface IFileCertificateOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCertificateOutlineIcon: FC<IFileCertificateOutlineIconProps> = memo(props => {
  return <FileCertificateOutlineSvg {...props} />;
});
