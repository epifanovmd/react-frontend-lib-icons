import React, { FC, memo } from 'react';
import SignatureTextSvg from '../svg/signature-text.svg';

export interface ISignatureTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignatureTextIcon: FC<ISignatureTextIconProps> = memo(props => {
  return <SignatureTextSvg {...props} />;
});
