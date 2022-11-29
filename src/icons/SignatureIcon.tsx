import React, { FC, memo } from 'react';
import SignatureSvg from '../svg/signature.svg';

export interface ISignatureIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignatureIcon: FC<ISignatureIconProps> = memo(props => {
  return <SignatureSvg {...props} />;
});
