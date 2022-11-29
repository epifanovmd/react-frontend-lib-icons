import React, { FC, memo } from 'react';
import SignatureFreehandSvg from '../svg/signature-freehand.svg';

export interface ISignatureFreehandIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignatureFreehandIcon: FC<ISignatureFreehandIconProps> = memo(props => {
  return <SignatureFreehandSvg {...props} />;
});
