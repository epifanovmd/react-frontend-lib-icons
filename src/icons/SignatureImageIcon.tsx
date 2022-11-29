import React, { FC, memo } from 'react';
import SignatureImageSvg from '../svg/signature-image.svg';

export interface ISignatureImageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignatureImageIcon: FC<ISignatureImageIconProps> = memo(props => {
  return <SignatureImageSvg {...props} />;
});
